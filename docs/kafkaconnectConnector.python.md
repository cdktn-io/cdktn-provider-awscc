# `kafkaconnectConnector` Submodule <a name="`kafkaconnectConnector` Submodule" id="@cdktn/provider-awscc.kafkaconnectConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KafkaconnectConnector <a name="KafkaconnectConnector" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector awscc_kafkaconnect_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnector(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  capacity: KafkaconnectConnectorCapacity,
  connector_configuration: typing.Mapping[str],
  connector_name: str,
  kafka_cluster: KafkaconnectConnectorKafkaCluster,
  kafka_cluster_client_authentication: KafkaconnectConnectorKafkaClusterClientAuthentication,
  kafka_cluster_encryption_in_transit: KafkaconnectConnectorKafkaClusterEncryptionInTransit,
  kafka_connect_version: str,
  plugins: IResolvable | typing.List[KafkaconnectConnectorPlugins],
  service_execution_role_arn: str,
  connector_description: str = None,
  log_delivery: KafkaconnectConnectorLogDelivery = None,
  network_type: str = None,
  tags: IResolvable | typing.List[KafkaconnectConnectorTags] = None,
  worker_configuration: KafkaconnectConnectorWorkerConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.capacity">capacity</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a></code> | Information about the capacity allocated to the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.connectorConfiguration">connector_configuration</a></code> | <code>typing.Mapping[str]</code> | The configuration for the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.connectorName">connector_name</a></code> | <code>str</code> | The name of the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.kafkaCluster">kafka_cluster</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a></code> | Details of how to connect to the Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.kafkaClusterClientAuthentication">kafka_cluster_client_authentication</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a></code> | Details of the client authentication used by the Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.kafkaClusterEncryptionInTransit">kafka_cluster_encryption_in_transit</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a></code> | Details of encryption in transit to the Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.kafkaConnectVersion">kafka_connect_version</a></code> | <code>str</code> | The version of Kafka Connect. It has to be compatible with both the Kafka cluster's version and the plugins. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.plugins">plugins</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>]</code> | List of plugins to use with the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.serviceExecutionRoleArn">service_execution_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon S3 objects and other external resources. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.connectorDescription">connector_description</a></code> | <code>str</code> | A summary description of the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.logDelivery">log_delivery</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a></code> | Details of what logs are delivered and where they are delivered. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.networkType">network_type</a></code> | <code>str</code> | The network type of the Connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>]</code> | A collection of tags associated with a resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.workerConfiguration">worker_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a></code> | Specifies the worker configuration to use with the connector. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.capacity"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a>

Information about the capacity allocated to the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#capacity KafkaconnectConnector#capacity}

---

##### `connector_configuration`<sup>Required</sup> <a name="connector_configuration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.connectorConfiguration"></a>

- *Type:* typing.Mapping[str]

The configuration for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#connector_configuration KafkaconnectConnector#connector_configuration}

---

##### `connector_name`<sup>Required</sup> <a name="connector_name" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.connectorName"></a>

- *Type:* str

The name of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#connector_name KafkaconnectConnector#connector_name}

---

##### `kafka_cluster`<sup>Required</sup> <a name="kafka_cluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.kafkaCluster"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a>

Details of how to connect to the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#kafka_cluster KafkaconnectConnector#kafka_cluster}

---

##### `kafka_cluster_client_authentication`<sup>Required</sup> <a name="kafka_cluster_client_authentication" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.kafkaClusterClientAuthentication"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a>

Details of the client authentication used by the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#kafka_cluster_client_authentication KafkaconnectConnector#kafka_cluster_client_authentication}

---

##### `kafka_cluster_encryption_in_transit`<sup>Required</sup> <a name="kafka_cluster_encryption_in_transit" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.kafkaClusterEncryptionInTransit"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a>

Details of encryption in transit to the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#kafka_cluster_encryption_in_transit KafkaconnectConnector#kafka_cluster_encryption_in_transit}

---

##### `kafka_connect_version`<sup>Required</sup> <a name="kafka_connect_version" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.kafkaConnectVersion"></a>

- *Type:* str

The version of Kafka Connect. It has to be compatible with both the Kafka cluster's version and the plugins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#kafka_connect_version KafkaconnectConnector#kafka_connect_version}

---

##### `plugins`<sup>Required</sup> <a name="plugins" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.plugins"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>]

List of plugins to use with the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#plugins KafkaconnectConnector#plugins}

---

##### `service_execution_role_arn`<sup>Required</sup> <a name="service_execution_role_arn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.serviceExecutionRoleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon S3 objects and other external resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#service_execution_role_arn KafkaconnectConnector#service_execution_role_arn}

---

##### `connector_description`<sup>Optional</sup> <a name="connector_description" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.connectorDescription"></a>

- *Type:* str

A summary description of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#connector_description KafkaconnectConnector#connector_description}

---

##### `log_delivery`<sup>Optional</sup> <a name="log_delivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.logDelivery"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a>

Details of what logs are delivered and where they are delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#log_delivery KafkaconnectConnector#log_delivery}

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.networkType"></a>

- *Type:* str

The network type of the Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#network_type KafkaconnectConnector#network_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>]

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#tags KafkaconnectConnector#tags}

---

##### `worker_configuration`<sup>Optional</sup> <a name="worker_configuration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.workerConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a>

Specifies the worker configuration to use with the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#worker_configuration KafkaconnectConnector#worker_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putCapacity">put_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaCluster">put_kafka_cluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterClientAuthentication">put_kafka_cluster_client_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterEncryptionInTransit">put_kafka_cluster_encryption_in_transit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putLogDelivery">put_log_delivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putPlugins">put_plugins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putWorkerConfiguration">put_worker_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetConnectorDescription">reset_connector_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetLogDelivery">reset_log_delivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetNetworkType">reset_network_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetWorkerConfiguration">reset_worker_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_capacity` <a name="put_capacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putCapacity"></a>

```python
def put_capacity(
  auto_scaling: KafkaconnectConnectorCapacityAutoScaling = None,
  provisioned_capacity: KafkaconnectConnectorCapacityProvisionedCapacity = None
) -> None
```

###### `auto_scaling`<sup>Optional</sup> <a name="auto_scaling" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putCapacity.parameter.autoScaling"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a>

Details about auto scaling of a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#auto_scaling KafkaconnectConnector#auto_scaling}

---

###### `provisioned_capacity`<sup>Optional</sup> <a name="provisioned_capacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putCapacity.parameter.provisionedCapacity"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a>

Details about a fixed capacity allocated to a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#provisioned_capacity KafkaconnectConnector#provisioned_capacity}

---

##### `put_kafka_cluster` <a name="put_kafka_cluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaCluster"></a>

```python
def put_kafka_cluster(
  apache_kafka_cluster: KafkaconnectConnectorKafkaClusterApacheKafkaCluster
) -> None
```

###### `apache_kafka_cluster`<sup>Required</sup> <a name="apache_kafka_cluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaCluster.parameter.apacheKafkaCluster"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a>

Details of how to connect to an Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#apache_kafka_cluster KafkaconnectConnector#apache_kafka_cluster}

---

##### `put_kafka_cluster_client_authentication` <a name="put_kafka_cluster_client_authentication" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterClientAuthentication"></a>

```python
def put_kafka_cluster_client_authentication(
  authentication_type: str
) -> None
```

###### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterClientAuthentication.parameter.authenticationType"></a>

- *Type:* str

The type of client authentication used to connect to the Kafka cluster.

Value NONE means that no client authentication is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#authentication_type KafkaconnectConnector#authentication_type}

---

##### `put_kafka_cluster_encryption_in_transit` <a name="put_kafka_cluster_encryption_in_transit" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterEncryptionInTransit"></a>

```python
def put_kafka_cluster_encryption_in_transit(
  encryption_type: str
) -> None
```

###### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterEncryptionInTransit.parameter.encryptionType"></a>

- *Type:* str

The type of encryption in transit to the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#encryption_type KafkaconnectConnector#encryption_type}

---

##### `put_log_delivery` <a name="put_log_delivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putLogDelivery"></a>

```python
def put_log_delivery(
  worker_log_delivery: KafkaconnectConnectorLogDeliveryWorkerLogDelivery = None
) -> None
```

###### `worker_log_delivery`<sup>Optional</sup> <a name="worker_log_delivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putLogDelivery.parameter.workerLogDelivery"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a>

Specifies where worker logs are delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#worker_log_delivery KafkaconnectConnector#worker_log_delivery}

---

##### `put_plugins` <a name="put_plugins" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putPlugins"></a>

```python
def put_plugins(
  value: IResolvable | typing.List[KafkaconnectConnectorPlugins]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putPlugins.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[KafkaconnectConnectorTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>]

---

##### `put_worker_configuration` <a name="put_worker_configuration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putWorkerConfiguration"></a>

```python
def put_worker_configuration(
  revision: typing.Union[int, float] = None,
  worker_configuration_arn: str = None
) -> None
```

###### `revision`<sup>Optional</sup> <a name="revision" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putWorkerConfiguration.parameter.revision"></a>

- *Type:* typing.Union[int, float]

The revision of the worker configuration to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#revision KafkaconnectConnector#revision}

---

###### `worker_configuration_arn`<sup>Optional</sup> <a name="worker_configuration_arn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putWorkerConfiguration.parameter.workerConfigurationArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the worker configuration to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#worker_configuration_arn KafkaconnectConnector#worker_configuration_arn}

---

##### `reset_connector_description` <a name="reset_connector_description" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetConnectorDescription"></a>

```python
def reset_connector_description() -> None
```

##### `reset_log_delivery` <a name="reset_log_delivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetLogDelivery"></a>

```python
def reset_log_delivery() -> None
```

##### `reset_network_type` <a name="reset_network_type" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetNetworkType"></a>

```python
def reset_network_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_worker_configuration` <a name="reset_worker_configuration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetWorkerConfiguration"></a>

```python
def reset_worker_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a KafkaconnectConnector resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isConstruct"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformElement"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformResource"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a KafkaconnectConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KafkaconnectConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KafkaconnectConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KafkaconnectConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.capacity">capacity</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference">KafkaconnectConnectorCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorArn">connector_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaCluster">kafka_cluster</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference">KafkaconnectConnectorKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterClientAuthentication">kafka_cluster_client_authentication</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference">KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterEncryptionInTransit">kafka_cluster_encryption_in_transit</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference">KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.logDelivery">log_delivery</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference">KafkaconnectConnectorLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.plugins">plugins</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList">KafkaconnectConnectorPluginsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList">KafkaconnectConnectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.workerConfiguration">worker_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference">KafkaconnectConnectorWorkerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.capacityInput">capacity_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorConfigurationInput">connector_configuration_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorDescriptionInput">connector_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorNameInput">connector_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterClientAuthenticationInput">kafka_cluster_client_authentication_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterEncryptionInTransitInput">kafka_cluster_encryption_in_transit_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterInput">kafka_cluster_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaConnectVersionInput">kafka_connect_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.logDeliveryInput">log_delivery_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.networkTypeInput">network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.pluginsInput">plugins_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.serviceExecutionRoleArnInput">service_execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.workerConfigurationInput">worker_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorConfiguration">connector_configuration</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorDescription">connector_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorName">connector_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaConnectVersion">kafka_connect_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.serviceExecutionRoleArn">service_execution_role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.capacity"></a>

```python
capacity: KafkaconnectConnectorCapacityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference">KafkaconnectConnectorCapacityOutputReference</a>

---

##### `connector_arn`<sup>Required</sup> <a name="connector_arn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorArn"></a>

```python
connector_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kafka_cluster`<sup>Required</sup> <a name="kafka_cluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaCluster"></a>

```python
kafka_cluster: KafkaconnectConnectorKafkaClusterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference">KafkaconnectConnectorKafkaClusterOutputReference</a>

---

##### `kafka_cluster_client_authentication`<sup>Required</sup> <a name="kafka_cluster_client_authentication" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterClientAuthentication"></a>

```python
kafka_cluster_client_authentication: KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference">KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference</a>

---

##### `kafka_cluster_encryption_in_transit`<sup>Required</sup> <a name="kafka_cluster_encryption_in_transit" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterEncryptionInTransit"></a>

```python
kafka_cluster_encryption_in_transit: KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference">KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference</a>

---

##### `log_delivery`<sup>Required</sup> <a name="log_delivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.logDelivery"></a>

```python
log_delivery: KafkaconnectConnectorLogDeliveryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference">KafkaconnectConnectorLogDeliveryOutputReference</a>

---

##### `plugins`<sup>Required</sup> <a name="plugins" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.plugins"></a>

```python
plugins: KafkaconnectConnectorPluginsList
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList">KafkaconnectConnectorPluginsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tags"></a>

```python
tags: KafkaconnectConnectorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList">KafkaconnectConnectorTagsList</a>

---

##### `worker_configuration`<sup>Required</sup> <a name="worker_configuration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.workerConfiguration"></a>

```python
worker_configuration: KafkaconnectConnectorWorkerConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference">KafkaconnectConnectorWorkerConfigurationOutputReference</a>

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.capacityInput"></a>

```python
capacity_input: IResolvable | KafkaconnectConnectorCapacity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a>

---

##### `connector_configuration_input`<sup>Optional</sup> <a name="connector_configuration_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorConfigurationInput"></a>

```python
connector_configuration_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `connector_description_input`<sup>Optional</sup> <a name="connector_description_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorDescriptionInput"></a>

```python
connector_description_input: str
```

- *Type:* str

---

##### `connector_name_input`<sup>Optional</sup> <a name="connector_name_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorNameInput"></a>

```python
connector_name_input: str
```

- *Type:* str

---

##### `kafka_cluster_client_authentication_input`<sup>Optional</sup> <a name="kafka_cluster_client_authentication_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterClientAuthenticationInput"></a>

```python
kafka_cluster_client_authentication_input: IResolvable | KafkaconnectConnectorKafkaClusterClientAuthentication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a>

---

##### `kafka_cluster_encryption_in_transit_input`<sup>Optional</sup> <a name="kafka_cluster_encryption_in_transit_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterEncryptionInTransitInput"></a>

```python
kafka_cluster_encryption_in_transit_input: IResolvable | KafkaconnectConnectorKafkaClusterEncryptionInTransit
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a>

---

##### `kafka_cluster_input`<sup>Optional</sup> <a name="kafka_cluster_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterInput"></a>

```python
kafka_cluster_input: IResolvable | KafkaconnectConnectorKafkaCluster
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a>

---

##### `kafka_connect_version_input`<sup>Optional</sup> <a name="kafka_connect_version_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaConnectVersionInput"></a>

```python
kafka_connect_version_input: str
```

- *Type:* str

---

##### `log_delivery_input`<sup>Optional</sup> <a name="log_delivery_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.logDeliveryInput"></a>

```python
log_delivery_input: IResolvable | KafkaconnectConnectorLogDelivery
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a>

---

##### `network_type_input`<sup>Optional</sup> <a name="network_type_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.networkTypeInput"></a>

```python
network_type_input: str
```

- *Type:* str

---

##### `plugins_input`<sup>Optional</sup> <a name="plugins_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.pluginsInput"></a>

```python
plugins_input: IResolvable | typing.List[KafkaconnectConnectorPlugins]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>]

---

##### `service_execution_role_arn_input`<sup>Optional</sup> <a name="service_execution_role_arn_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.serviceExecutionRoleArnInput"></a>

```python
service_execution_role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[KafkaconnectConnectorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>]

---

##### `worker_configuration_input`<sup>Optional</sup> <a name="worker_configuration_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.workerConfigurationInput"></a>

```python
worker_configuration_input: IResolvable | KafkaconnectConnectorWorkerConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a>

---

##### `connector_configuration`<sup>Required</sup> <a name="connector_configuration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorConfiguration"></a>

```python
connector_configuration: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `connector_description`<sup>Required</sup> <a name="connector_description" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorDescription"></a>

```python
connector_description: str
```

- *Type:* str

---

##### `connector_name`<sup>Required</sup> <a name="connector_name" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorName"></a>

```python
connector_name: str
```

- *Type:* str

---

##### `kafka_connect_version`<sup>Required</sup> <a name="kafka_connect_version" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaConnectVersion"></a>

```python
kafka_connect_version: str
```

- *Type:* str

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `service_execution_role_arn`<sup>Required</sup> <a name="service_execution_role_arn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.serviceExecutionRoleArn"></a>

```python
service_execution_role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KafkaconnectConnectorCapacity <a name="KafkaconnectConnectorCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorCapacity(
  auto_scaling: KafkaconnectConnectorCapacityAutoScaling = None,
  provisioned_capacity: KafkaconnectConnectorCapacityProvisionedCapacity = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity.property.autoScaling">auto_scaling</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a></code> | Details about auto scaling of a connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity.property.provisionedCapacity">provisioned_capacity</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a></code> | Details about a fixed capacity allocated to a connector. |

---

##### `auto_scaling`<sup>Optional</sup> <a name="auto_scaling" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity.property.autoScaling"></a>

```python
auto_scaling: KafkaconnectConnectorCapacityAutoScaling
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a>

Details about auto scaling of a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#auto_scaling KafkaconnectConnector#auto_scaling}

---

##### `provisioned_capacity`<sup>Optional</sup> <a name="provisioned_capacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity.property.provisionedCapacity"></a>

```python
provisioned_capacity: KafkaconnectConnectorCapacityProvisionedCapacity
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a>

Details about a fixed capacity allocated to a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#provisioned_capacity KafkaconnectConnector#provisioned_capacity}

---

### KafkaconnectConnectorCapacityAutoScaling <a name="KafkaconnectConnectorCapacityAutoScaling" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling(
  max_autoscaling_task_count: typing.Union[int, float] = None,
  max_worker_count: typing.Union[int, float] = None,
  mcu_count: typing.Union[int, float] = None,
  min_worker_count: typing.Union[int, float] = None,
  scale_in_policy: KafkaconnectConnectorCapacityAutoScalingScaleInPolicy = None,
  scale_out_policy: KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.maxAutoscalingTaskCount">max_autoscaling_task_count</a></code> | <code>typing.Union[int, float]</code> | The maximum number of tasks allocated to the connector during autoscaling operations. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.maxWorkerCount">max_worker_count</a></code> | <code>typing.Union[int, float]</code> | The maximum number of workers for a connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.mcuCount">mcu_count</a></code> | <code>typing.Union[int, float]</code> | Specifies how many MSK Connect Units (MCU) as the minimum scaling unit. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.minWorkerCount">min_worker_count</a></code> | <code>typing.Union[int, float]</code> | The minimum number of workers for a connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.scaleInPolicy">scale_in_policy</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a></code> | Information about the scale in policy of the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.scaleOutPolicy">scale_out_policy</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a></code> | Information about the scale out policy of the connector. |

---

##### `max_autoscaling_task_count`<sup>Optional</sup> <a name="max_autoscaling_task_count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.maxAutoscalingTaskCount"></a>

```python
max_autoscaling_task_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of tasks allocated to the connector during autoscaling operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#max_autoscaling_task_count KafkaconnectConnector#max_autoscaling_task_count}

---

##### `max_worker_count`<sup>Optional</sup> <a name="max_worker_count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.maxWorkerCount"></a>

```python
max_worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of workers for a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#max_worker_count KafkaconnectConnector#max_worker_count}

---

##### `mcu_count`<sup>Optional</sup> <a name="mcu_count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.mcuCount"></a>

```python
mcu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies how many MSK Connect Units (MCU) as the minimum scaling unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#mcu_count KafkaconnectConnector#mcu_count}

---

##### `min_worker_count`<sup>Optional</sup> <a name="min_worker_count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.minWorkerCount"></a>

```python
min_worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of workers for a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#min_worker_count KafkaconnectConnector#min_worker_count}

---

##### `scale_in_policy`<sup>Optional</sup> <a name="scale_in_policy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.scaleInPolicy"></a>

```python
scale_in_policy: KafkaconnectConnectorCapacityAutoScalingScaleInPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a>

Information about the scale in policy of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#scale_in_policy KafkaconnectConnector#scale_in_policy}

---

##### `scale_out_policy`<sup>Optional</sup> <a name="scale_out_policy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.scaleOutPolicy"></a>

```python
scale_out_policy: KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a>

Information about the scale out policy of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#scale_out_policy KafkaconnectConnector#scale_out_policy}

---

### KafkaconnectConnectorCapacityAutoScalingScaleInPolicy <a name="KafkaconnectConnectorCapacityAutoScalingScaleInPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy(
  cpu_utilization_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy.property.cpuUtilizationPercentage">cpu_utilization_percentage</a></code> | <code>typing.Union[int, float]</code> | Specifies the CPU utilization percentage threshold at which connector scale in should trigger. |

---

##### `cpu_utilization_percentage`<sup>Optional</sup> <a name="cpu_utilization_percentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy.property.cpuUtilizationPercentage"></a>

```python
cpu_utilization_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the CPU utilization percentage threshold at which connector scale in should trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#cpu_utilization_percentage KafkaconnectConnector#cpu_utilization_percentage}

---

### KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy <a name="KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy(
  cpu_utilization_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy.property.cpuUtilizationPercentage">cpu_utilization_percentage</a></code> | <code>typing.Union[int, float]</code> | Specifies the CPU utilization percentage threshold at which connector scale out should trigger. |

---

##### `cpu_utilization_percentage`<sup>Optional</sup> <a name="cpu_utilization_percentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy.property.cpuUtilizationPercentage"></a>

```python
cpu_utilization_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the CPU utilization percentage threshold at which connector scale out should trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#cpu_utilization_percentage KafkaconnectConnector#cpu_utilization_percentage}

---

### KafkaconnectConnectorCapacityProvisionedCapacity <a name="KafkaconnectConnectorCapacityProvisionedCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity(
  mcu_count: typing.Union[int, float] = None,
  worker_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity.property.mcuCount">mcu_count</a></code> | <code>typing.Union[int, float]</code> | Specifies how many MSK Connect Units (MCU) are allocated to the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity.property.workerCount">worker_count</a></code> | <code>typing.Union[int, float]</code> | Number of workers for a connector. |

---

##### `mcu_count`<sup>Optional</sup> <a name="mcu_count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity.property.mcuCount"></a>

```python
mcu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies how many MSK Connect Units (MCU) are allocated to the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#mcu_count KafkaconnectConnector#mcu_count}

---

##### `worker_count`<sup>Optional</sup> <a name="worker_count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity.property.workerCount"></a>

```python
worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of workers for a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#worker_count KafkaconnectConnector#worker_count}

---

### KafkaconnectConnectorConfig <a name="KafkaconnectConnectorConfig" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  capacity: KafkaconnectConnectorCapacity,
  connector_configuration: typing.Mapping[str],
  connector_name: str,
  kafka_cluster: KafkaconnectConnectorKafkaCluster,
  kafka_cluster_client_authentication: KafkaconnectConnectorKafkaClusterClientAuthentication,
  kafka_cluster_encryption_in_transit: KafkaconnectConnectorKafkaClusterEncryptionInTransit,
  kafka_connect_version: str,
  plugins: IResolvable | typing.List[KafkaconnectConnectorPlugins],
  service_execution_role_arn: str,
  connector_description: str = None,
  log_delivery: KafkaconnectConnectorLogDelivery = None,
  network_type: str = None,
  tags: IResolvable | typing.List[KafkaconnectConnectorTags] = None,
  worker_configuration: KafkaconnectConnectorWorkerConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.capacity">capacity</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a></code> | Information about the capacity allocated to the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorConfiguration">connector_configuration</a></code> | <code>typing.Mapping[str]</code> | The configuration for the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorName">connector_name</a></code> | <code>str</code> | The name of the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaCluster">kafka_cluster</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a></code> | Details of how to connect to the Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaClusterClientAuthentication">kafka_cluster_client_authentication</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a></code> | Details of the client authentication used by the Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaClusterEncryptionInTransit">kafka_cluster_encryption_in_transit</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a></code> | Details of encryption in transit to the Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaConnectVersion">kafka_connect_version</a></code> | <code>str</code> | The version of Kafka Connect. It has to be compatible with both the Kafka cluster's version and the plugins. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.plugins">plugins</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>]</code> | List of plugins to use with the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.serviceExecutionRoleArn">service_execution_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon S3 objects and other external resources. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorDescription">connector_description</a></code> | <code>str</code> | A summary description of the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.logDelivery">log_delivery</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a></code> | Details of what logs are delivered and where they are delivered. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.networkType">network_type</a></code> | <code>str</code> | The network type of the Connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>]</code> | A collection of tags associated with a resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.workerConfiguration">worker_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a></code> | Specifies the worker configuration to use with the connector. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.capacity"></a>

```python
capacity: KafkaconnectConnectorCapacity
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a>

Information about the capacity allocated to the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#capacity KafkaconnectConnector#capacity}

---

##### `connector_configuration`<sup>Required</sup> <a name="connector_configuration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorConfiguration"></a>

```python
connector_configuration: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The configuration for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#connector_configuration KafkaconnectConnector#connector_configuration}

---

##### `connector_name`<sup>Required</sup> <a name="connector_name" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorName"></a>

```python
connector_name: str
```

- *Type:* str

The name of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#connector_name KafkaconnectConnector#connector_name}

---

##### `kafka_cluster`<sup>Required</sup> <a name="kafka_cluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaCluster"></a>

```python
kafka_cluster: KafkaconnectConnectorKafkaCluster
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a>

Details of how to connect to the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#kafka_cluster KafkaconnectConnector#kafka_cluster}

---

##### `kafka_cluster_client_authentication`<sup>Required</sup> <a name="kafka_cluster_client_authentication" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaClusterClientAuthentication"></a>

```python
kafka_cluster_client_authentication: KafkaconnectConnectorKafkaClusterClientAuthentication
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a>

Details of the client authentication used by the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#kafka_cluster_client_authentication KafkaconnectConnector#kafka_cluster_client_authentication}

---

##### `kafka_cluster_encryption_in_transit`<sup>Required</sup> <a name="kafka_cluster_encryption_in_transit" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaClusterEncryptionInTransit"></a>

```python
kafka_cluster_encryption_in_transit: KafkaconnectConnectorKafkaClusterEncryptionInTransit
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a>

Details of encryption in transit to the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#kafka_cluster_encryption_in_transit KafkaconnectConnector#kafka_cluster_encryption_in_transit}

---

##### `kafka_connect_version`<sup>Required</sup> <a name="kafka_connect_version" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaConnectVersion"></a>

```python
kafka_connect_version: str
```

- *Type:* str

The version of Kafka Connect. It has to be compatible with both the Kafka cluster's version and the plugins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#kafka_connect_version KafkaconnectConnector#kafka_connect_version}

---

##### `plugins`<sup>Required</sup> <a name="plugins" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.plugins"></a>

```python
plugins: IResolvable | typing.List[KafkaconnectConnectorPlugins]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>]

List of plugins to use with the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#plugins KafkaconnectConnector#plugins}

---

##### `service_execution_role_arn`<sup>Required</sup> <a name="service_execution_role_arn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.serviceExecutionRoleArn"></a>

```python
service_execution_role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon S3 objects and other external resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#service_execution_role_arn KafkaconnectConnector#service_execution_role_arn}

---

##### `connector_description`<sup>Optional</sup> <a name="connector_description" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorDescription"></a>

```python
connector_description: str
```

- *Type:* str

A summary description of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#connector_description KafkaconnectConnector#connector_description}

---

##### `log_delivery`<sup>Optional</sup> <a name="log_delivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.logDelivery"></a>

```python
log_delivery: KafkaconnectConnectorLogDelivery
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a>

Details of what logs are delivered and where they are delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#log_delivery KafkaconnectConnector#log_delivery}

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

The network type of the Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#network_type KafkaconnectConnector#network_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[KafkaconnectConnectorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>]

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#tags KafkaconnectConnector#tags}

---

##### `worker_configuration`<sup>Optional</sup> <a name="worker_configuration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.workerConfiguration"></a>

```python
worker_configuration: KafkaconnectConnectorWorkerConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a>

Specifies the worker configuration to use with the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#worker_configuration KafkaconnectConnector#worker_configuration}

---

### KafkaconnectConnectorKafkaCluster <a name="KafkaconnectConnectorKafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorKafkaCluster(
  apache_kafka_cluster: KafkaconnectConnectorKafkaClusterApacheKafkaCluster
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster.property.apacheKafkaCluster">apache_kafka_cluster</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | Details of how to connect to an Apache Kafka cluster. |

---

##### `apache_kafka_cluster`<sup>Required</sup> <a name="apache_kafka_cluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster.property.apacheKafkaCluster"></a>

```python
apache_kafka_cluster: KafkaconnectConnectorKafkaClusterApacheKafkaCluster
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a>

Details of how to connect to an Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#apache_kafka_cluster KafkaconnectConnector#apache_kafka_cluster}

---

### KafkaconnectConnectorKafkaClusterApacheKafkaCluster <a name="KafkaconnectConnectorKafkaClusterApacheKafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster(
  bootstrap_servers: str,
  vpc: KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster.property.bootstrapServers">bootstrap_servers</a></code> | <code>str</code> | The bootstrap servers string of the Apache Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | Information about a VPC used with the connector. |

---

##### `bootstrap_servers`<sup>Required</sup> <a name="bootstrap_servers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster.property.bootstrapServers"></a>

```python
bootstrap_servers: str
```

- *Type:* str

The bootstrap servers string of the Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#bootstrap_servers KafkaconnectConnector#bootstrap_servers}

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster.property.vpc"></a>

```python
vpc: KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

Information about a VPC used with the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#vpc KafkaconnectConnector#vpc}

---

### KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc <a name="KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc(
  security_groups: typing.List[str],
  subnets: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | The AWS security groups to associate with the elastic network interfaces in order to specify what the connector has access to. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | The list of subnets to connect to in the virtual private cloud (VPC). |

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

The AWS security groups to associate with the elastic network interfaces in order to specify what the connector has access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#security_groups KafkaconnectConnector#security_groups}

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

The list of subnets to connect to in the virtual private cloud (VPC).

AWS creates elastic network interfaces inside these subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#subnets KafkaconnectConnector#subnets}

---

### KafkaconnectConnectorKafkaClusterClientAuthentication <a name="KafkaconnectConnectorKafkaClusterClientAuthentication" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication(
  authentication_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication.property.authenticationType">authentication_type</a></code> | <code>str</code> | The type of client authentication used to connect to the Kafka cluster. |

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

The type of client authentication used to connect to the Kafka cluster.

Value NONE means that no client authentication is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#authentication_type KafkaconnectConnector#authentication_type}

---

### KafkaconnectConnectorKafkaClusterEncryptionInTransit <a name="KafkaconnectConnectorKafkaClusterEncryptionInTransit" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit(
  encryption_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit.property.encryptionType">encryption_type</a></code> | <code>str</code> | The type of encryption in transit to the Kafka cluster. |

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

The type of encryption in transit to the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#encryption_type KafkaconnectConnector#encryption_type}

---

### KafkaconnectConnectorLogDelivery <a name="KafkaconnectConnectorLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorLogDelivery(
  worker_log_delivery: KafkaconnectConnectorLogDeliveryWorkerLogDelivery = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery.property.workerLogDelivery">worker_log_delivery</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | Specifies where worker logs are delivered. |

---

##### `worker_log_delivery`<sup>Optional</sup> <a name="worker_log_delivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery.property.workerLogDelivery"></a>

```python
worker_log_delivery: KafkaconnectConnectorLogDeliveryWorkerLogDelivery
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a>

Specifies where worker logs are delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#worker_log_delivery KafkaconnectConnector#worker_log_delivery}

---

### KafkaconnectConnectorLogDeliveryWorkerLogDelivery <a name="KafkaconnectConnectorLogDeliveryWorkerLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery(
  cloudwatch_logs: KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs = None,
  firehose: KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose = None,
  s3: KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | Details about delivering logs to Amazon CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | Details about delivering logs to Amazon Kinesis Data Firehose. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | Details about delivering logs to Amazon S3. |

---

##### `cloudwatch_logs`<sup>Optional</sup> <a name="cloudwatch_logs" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

Details about delivering logs to Amazon CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#cloudwatch_logs KafkaconnectConnector#cloudwatch_logs}

---

##### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.firehose"></a>

```python
firehose: KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

Details about delivering logs to Amazon Kinesis Data Firehose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#firehose KafkaconnectConnector#firehose}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.s3"></a>

```python
s3: KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

Details about delivering logs to Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#s3 KafkaconnectConnector#s3}

---

### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs(
  enabled: bool | IResolvable = None,
  log_group: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the logs get sent to the specified CloudWatch Logs destination. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.logGroup">log_group</a></code> | <code>str</code> | The CloudWatch log group that is the destination for log delivery. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the logs get sent to the specified CloudWatch Logs destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#enabled KafkaconnectConnector#enabled}

---

##### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

The CloudWatch log group that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#log_group KafkaconnectConnector#log_group}

---

### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose(
  delivery_stream: str = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.deliveryStream">delivery_stream</a></code> | <code>str</code> | The Kinesis Data Firehose delivery stream that is the destination for log delivery. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the logs get sent to the specified Kinesis Data Firehose delivery stream. |

---

##### `delivery_stream`<sup>Optional</sup> <a name="delivery_stream" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.deliveryStream"></a>

```python
delivery_stream: str
```

- *Type:* str

The Kinesis Data Firehose delivery stream that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#delivery_stream KafkaconnectConnector#delivery_stream}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the logs get sent to the specified Kinesis Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#enabled KafkaconnectConnector#enabled}

---

### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3(
  bucket: str = None,
  enabled: bool | IResolvable = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.bucket">bucket</a></code> | <code>str</code> | The name of the S3 bucket that is the destination for log delivery. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the logs get sent to the specified Amazon S3 destination. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.prefix">prefix</a></code> | <code>str</code> | The S3 prefix that is the destination for log delivery. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The name of the S3 bucket that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#bucket KafkaconnectConnector#bucket}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the logs get sent to the specified Amazon S3 destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#enabled KafkaconnectConnector#enabled}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

The S3 prefix that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#prefix KafkaconnectConnector#prefix}

---

### KafkaconnectConnectorPlugins <a name="KafkaconnectConnectorPlugins" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorPlugins(
  custom_plugin: KafkaconnectConnectorPluginsCustomPlugin
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins.property.customPlugin">custom_plugin</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a></code> | Details about a custom plugin. |

---

##### `custom_plugin`<sup>Required</sup> <a name="custom_plugin" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins.property.customPlugin"></a>

```python
custom_plugin: KafkaconnectConnectorPluginsCustomPlugin
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a>

Details about a custom plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#custom_plugin KafkaconnectConnector#custom_plugin}

---

### KafkaconnectConnectorPluginsCustomPlugin <a name="KafkaconnectConnectorPluginsCustomPlugin" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin(
  custom_plugin_arn: str,
  revision: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin.property.customPluginArn">custom_plugin_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the custom plugin to use. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin.property.revision">revision</a></code> | <code>typing.Union[int, float]</code> | The revision of the custom plugin to use. |

---

##### `custom_plugin_arn`<sup>Required</sup> <a name="custom_plugin_arn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin.property.customPluginArn"></a>

```python
custom_plugin_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the custom plugin to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#custom_plugin_arn KafkaconnectConnector#custom_plugin_arn}

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin.property.revision"></a>

```python
revision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The revision of the custom plugin to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#revision KafkaconnectConnector#revision}

---

### KafkaconnectConnectorTags <a name="KafkaconnectConnectorTags" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#key KafkaconnectConnector#key}. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#value KafkaconnectConnector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#key KafkaconnectConnector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#value KafkaconnectConnector#value}.

---

### KafkaconnectConnectorWorkerConfiguration <a name="KafkaconnectConnectorWorkerConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration(
  revision: typing.Union[int, float] = None,
  worker_configuration_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration.property.revision">revision</a></code> | <code>typing.Union[int, float]</code> | The revision of the worker configuration to use. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration.property.workerConfigurationArn">worker_configuration_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the worker configuration to use. |

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration.property.revision"></a>

```python
revision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The revision of the worker configuration to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#revision KafkaconnectConnector#revision}

---

##### `worker_configuration_arn`<sup>Optional</sup> <a name="worker_configuration_arn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration.property.workerConfigurationArn"></a>

```python
worker_configuration_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the worker configuration to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#worker_configuration_arn KafkaconnectConnector#worker_configuration_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### KafkaconnectConnectorCapacityAutoScalingOutputReference <a name="KafkaconnectConnectorCapacityAutoScalingOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleInPolicy">put_scale_in_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleOutPolicy">put_scale_out_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMaxAutoscalingTaskCount">reset_max_autoscaling_task_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMaxWorkerCount">reset_max_worker_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMcuCount">reset_mcu_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMinWorkerCount">reset_min_worker_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetScaleInPolicy">reset_scale_in_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetScaleOutPolicy">reset_scale_out_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_scale_in_policy` <a name="put_scale_in_policy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleInPolicy"></a>

```python
def put_scale_in_policy(
  cpu_utilization_percentage: typing.Union[int, float] = None
) -> None
```

###### `cpu_utilization_percentage`<sup>Optional</sup> <a name="cpu_utilization_percentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleInPolicy.parameter.cpuUtilizationPercentage"></a>

- *Type:* typing.Union[int, float]

Specifies the CPU utilization percentage threshold at which connector scale in should trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#cpu_utilization_percentage KafkaconnectConnector#cpu_utilization_percentage}

---

##### `put_scale_out_policy` <a name="put_scale_out_policy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleOutPolicy"></a>

```python
def put_scale_out_policy(
  cpu_utilization_percentage: typing.Union[int, float] = None
) -> None
```

###### `cpu_utilization_percentage`<sup>Optional</sup> <a name="cpu_utilization_percentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleOutPolicy.parameter.cpuUtilizationPercentage"></a>

- *Type:* typing.Union[int, float]

Specifies the CPU utilization percentage threshold at which connector scale out should trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#cpu_utilization_percentage KafkaconnectConnector#cpu_utilization_percentage}

---

##### `reset_max_autoscaling_task_count` <a name="reset_max_autoscaling_task_count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMaxAutoscalingTaskCount"></a>

```python
def reset_max_autoscaling_task_count() -> None
```

##### `reset_max_worker_count` <a name="reset_max_worker_count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMaxWorkerCount"></a>

```python
def reset_max_worker_count() -> None
```

##### `reset_mcu_count` <a name="reset_mcu_count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMcuCount"></a>

```python
def reset_mcu_count() -> None
```

##### `reset_min_worker_count` <a name="reset_min_worker_count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMinWorkerCount"></a>

```python
def reset_min_worker_count() -> None
```

##### `reset_scale_in_policy` <a name="reset_scale_in_policy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetScaleInPolicy"></a>

```python
def reset_scale_in_policy() -> None
```

##### `reset_scale_out_policy` <a name="reset_scale_out_policy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetScaleOutPolicy"></a>

```python
def reset_scale_out_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleInPolicy">scale_in_policy</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference">KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleOutPolicy">scale_out_policy</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxAutoscalingTaskCountInput">max_autoscaling_task_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxWorkerCountInput">max_worker_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.mcuCountInput">mcu_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.minWorkerCountInput">min_worker_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleInPolicyInput">scale_in_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleOutPolicyInput">scale_out_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxAutoscalingTaskCount">max_autoscaling_task_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxWorkerCount">max_worker_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.mcuCount">mcu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.minWorkerCount">min_worker_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scale_in_policy`<sup>Required</sup> <a name="scale_in_policy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleInPolicy"></a>

```python
scale_in_policy: KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference">KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference</a>

---

##### `scale_out_policy`<sup>Required</sup> <a name="scale_out_policy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleOutPolicy"></a>

```python
scale_out_policy: KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference</a>

---

##### `max_autoscaling_task_count_input`<sup>Optional</sup> <a name="max_autoscaling_task_count_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxAutoscalingTaskCountInput"></a>

```python
max_autoscaling_task_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_worker_count_input`<sup>Optional</sup> <a name="max_worker_count_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxWorkerCountInput"></a>

```python
max_worker_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mcu_count_input`<sup>Optional</sup> <a name="mcu_count_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.mcuCountInput"></a>

```python
mcu_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_worker_count_input`<sup>Optional</sup> <a name="min_worker_count_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.minWorkerCountInput"></a>

```python
min_worker_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_in_policy_input`<sup>Optional</sup> <a name="scale_in_policy_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleInPolicyInput"></a>

```python
scale_in_policy_input: IResolvable | KafkaconnectConnectorCapacityAutoScalingScaleInPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a>

---

##### `scale_out_policy_input`<sup>Optional</sup> <a name="scale_out_policy_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleOutPolicyInput"></a>

```python
scale_out_policy_input: IResolvable | KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a>

---

##### `max_autoscaling_task_count`<sup>Required</sup> <a name="max_autoscaling_task_count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxAutoscalingTaskCount"></a>

```python
max_autoscaling_task_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_worker_count`<sup>Required</sup> <a name="max_worker_count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxWorkerCount"></a>

```python
max_worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mcu_count`<sup>Required</sup> <a name="mcu_count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.mcuCount"></a>

```python
mcu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_worker_count`<sup>Required</sup> <a name="min_worker_count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.minWorkerCount"></a>

```python
min_worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KafkaconnectConnectorCapacityAutoScaling
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a>

---


### KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference <a name="KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resetCpuUtilizationPercentage">reset_cpu_utilization_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu_utilization_percentage` <a name="reset_cpu_utilization_percentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resetCpuUtilizationPercentage"></a>

```python
def reset_cpu_utilization_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.cpuUtilizationPercentageInput">cpu_utilization_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.cpuUtilizationPercentage">cpu_utilization_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_utilization_percentage_input`<sup>Optional</sup> <a name="cpu_utilization_percentage_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.cpuUtilizationPercentageInput"></a>

```python
cpu_utilization_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_utilization_percentage`<sup>Required</sup> <a name="cpu_utilization_percentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.cpuUtilizationPercentage"></a>

```python
cpu_utilization_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KafkaconnectConnectorCapacityAutoScalingScaleInPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a>

---


### KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference <a name="KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resetCpuUtilizationPercentage">reset_cpu_utilization_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu_utilization_percentage` <a name="reset_cpu_utilization_percentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resetCpuUtilizationPercentage"></a>

```python
def reset_cpu_utilization_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentageInput">cpu_utilization_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentage">cpu_utilization_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_utilization_percentage_input`<sup>Optional</sup> <a name="cpu_utilization_percentage_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentageInput"></a>

```python
cpu_utilization_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_utilization_percentage`<sup>Required</sup> <a name="cpu_utilization_percentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentage"></a>

```python
cpu_utilization_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a>

---


### KafkaconnectConnectorCapacityOutputReference <a name="KafkaconnectConnectorCapacityOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putAutoScaling">put_auto_scaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putProvisionedCapacity">put_provisioned_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resetAutoScaling">reset_auto_scaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resetProvisionedCapacity">reset_provisioned_capacity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auto_scaling` <a name="put_auto_scaling" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putAutoScaling"></a>

```python
def put_auto_scaling(
  max_autoscaling_task_count: typing.Union[int, float] = None,
  max_worker_count: typing.Union[int, float] = None,
  mcu_count: typing.Union[int, float] = None,
  min_worker_count: typing.Union[int, float] = None,
  scale_in_policy: KafkaconnectConnectorCapacityAutoScalingScaleInPolicy = None,
  scale_out_policy: KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy = None
) -> None
```

###### `max_autoscaling_task_count`<sup>Optional</sup> <a name="max_autoscaling_task_count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putAutoScaling.parameter.maxAutoscalingTaskCount"></a>

- *Type:* typing.Union[int, float]

The maximum number of tasks allocated to the connector during autoscaling operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#max_autoscaling_task_count KafkaconnectConnector#max_autoscaling_task_count}

---

###### `max_worker_count`<sup>Optional</sup> <a name="max_worker_count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putAutoScaling.parameter.maxWorkerCount"></a>

- *Type:* typing.Union[int, float]

The maximum number of workers for a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#max_worker_count KafkaconnectConnector#max_worker_count}

---

###### `mcu_count`<sup>Optional</sup> <a name="mcu_count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putAutoScaling.parameter.mcuCount"></a>

- *Type:* typing.Union[int, float]

Specifies how many MSK Connect Units (MCU) as the minimum scaling unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#mcu_count KafkaconnectConnector#mcu_count}

---

###### `min_worker_count`<sup>Optional</sup> <a name="min_worker_count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putAutoScaling.parameter.minWorkerCount"></a>

- *Type:* typing.Union[int, float]

The minimum number of workers for a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#min_worker_count KafkaconnectConnector#min_worker_count}

---

###### `scale_in_policy`<sup>Optional</sup> <a name="scale_in_policy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putAutoScaling.parameter.scaleInPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a>

Information about the scale in policy of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#scale_in_policy KafkaconnectConnector#scale_in_policy}

---

###### `scale_out_policy`<sup>Optional</sup> <a name="scale_out_policy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putAutoScaling.parameter.scaleOutPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a>

Information about the scale out policy of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#scale_out_policy KafkaconnectConnector#scale_out_policy}

---

##### `put_provisioned_capacity` <a name="put_provisioned_capacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putProvisionedCapacity"></a>

```python
def put_provisioned_capacity(
  mcu_count: typing.Union[int, float] = None,
  worker_count: typing.Union[int, float] = None
) -> None
```

###### `mcu_count`<sup>Optional</sup> <a name="mcu_count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putProvisionedCapacity.parameter.mcuCount"></a>

- *Type:* typing.Union[int, float]

Specifies how many MSK Connect Units (MCU) are allocated to the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#mcu_count KafkaconnectConnector#mcu_count}

---

###### `worker_count`<sup>Optional</sup> <a name="worker_count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putProvisionedCapacity.parameter.workerCount"></a>

- *Type:* typing.Union[int, float]

Number of workers for a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#worker_count KafkaconnectConnector#worker_count}

---

##### `reset_auto_scaling` <a name="reset_auto_scaling" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resetAutoScaling"></a>

```python
def reset_auto_scaling() -> None
```

##### `reset_provisioned_capacity` <a name="reset_provisioned_capacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resetProvisionedCapacity"></a>

```python
def reset_provisioned_capacity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.autoScaling">auto_scaling</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference">KafkaconnectConnectorCapacityAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.provisionedCapacity">provisioned_capacity</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference">KafkaconnectConnectorCapacityProvisionedCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.autoScalingInput">auto_scaling_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.provisionedCapacityInput">provisioned_capacity_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_scaling`<sup>Required</sup> <a name="auto_scaling" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.autoScaling"></a>

```python
auto_scaling: KafkaconnectConnectorCapacityAutoScalingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference">KafkaconnectConnectorCapacityAutoScalingOutputReference</a>

---

##### `provisioned_capacity`<sup>Required</sup> <a name="provisioned_capacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.provisionedCapacity"></a>

```python
provisioned_capacity: KafkaconnectConnectorCapacityProvisionedCapacityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference">KafkaconnectConnectorCapacityProvisionedCapacityOutputReference</a>

---

##### `auto_scaling_input`<sup>Optional</sup> <a name="auto_scaling_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.autoScalingInput"></a>

```python
auto_scaling_input: IResolvable | KafkaconnectConnectorCapacityAutoScaling
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a>

---

##### `provisioned_capacity_input`<sup>Optional</sup> <a name="provisioned_capacity_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.provisionedCapacityInput"></a>

```python
provisioned_capacity_input: IResolvable | KafkaconnectConnectorCapacityProvisionedCapacity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KafkaconnectConnectorCapacity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a>

---


### KafkaconnectConnectorCapacityProvisionedCapacityOutputReference <a name="KafkaconnectConnectorCapacityProvisionedCapacityOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resetMcuCount">reset_mcu_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resetWorkerCount">reset_worker_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mcu_count` <a name="reset_mcu_count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resetMcuCount"></a>

```python
def reset_mcu_count() -> None
```

##### `reset_worker_count` <a name="reset_worker_count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resetWorkerCount"></a>

```python
def reset_worker_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCountInput">mcu_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCountInput">worker_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCount">mcu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCount">worker_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mcu_count_input`<sup>Optional</sup> <a name="mcu_count_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCountInput"></a>

```python
mcu_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `worker_count_input`<sup>Optional</sup> <a name="worker_count_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCountInput"></a>

```python
worker_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mcu_count`<sup>Required</sup> <a name="mcu_count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCount"></a>

```python
mcu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `worker_count`<sup>Required</sup> <a name="worker_count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCount"></a>

```python
worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KafkaconnectConnectorCapacityProvisionedCapacity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a>

---


### KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference <a name="KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc">put_vpc</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vpc` <a name="put_vpc" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc"></a>

```python
def put_vpc(
  security_groups: typing.List[str],
  subnets: typing.List[str]
) -> None
```

###### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc.parameter.securityGroups"></a>

- *Type:* typing.List[str]

The AWS security groups to associate with the elastic network interfaces in order to specify what the connector has access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#security_groups KafkaconnectConnector#security_groups}

---

###### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc.parameter.subnets"></a>

- *Type:* typing.List[str]

The list of subnets to connect to in the virtual private cloud (VPC).

AWS creates elastic network interfaces inside these subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#subnets KafkaconnectConnector#subnets}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServersInput">bootstrap_servers_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpcInput">vpc_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServers">bootstrap_servers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpc"></a>

```python
vpc: KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference</a>

---

##### `bootstrap_servers_input`<sup>Optional</sup> <a name="bootstrap_servers_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServersInput"></a>

```python
bootstrap_servers_input: str
```

- *Type:* str

---

##### `vpc_input`<sup>Optional</sup> <a name="vpc_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpcInput"></a>

```python
vpc_input: IResolvable | KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

---

##### `bootstrap_servers`<sup>Required</sup> <a name="bootstrap_servers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServers"></a>

```python
bootstrap_servers: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KafkaconnectConnectorKafkaClusterApacheKafkaCluster
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a>

---


### KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference <a name="KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

---


### KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference <a name="KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationTypeInput">authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_type_input`<sup>Optional</sup> <a name="authentication_type_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationTypeInput"></a>

```python
authentication_type_input: str
```

- *Type:* str

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KafkaconnectConnectorKafkaClusterClientAuthentication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a>

---


### KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference <a name="KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionTypeInput">encryption_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_type_input`<sup>Optional</sup> <a name="encryption_type_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionTypeInput"></a>

```python
encryption_type_input: str
```

- *Type:* str

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KafkaconnectConnectorKafkaClusterEncryptionInTransit
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a>

---


### KafkaconnectConnectorKafkaClusterOutputReference <a name="KafkaconnectConnectorKafkaClusterOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster">put_apache_kafka_cluster</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_apache_kafka_cluster` <a name="put_apache_kafka_cluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster"></a>

```python
def put_apache_kafka_cluster(
  bootstrap_servers: str,
  vpc: KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc
) -> None
```

###### `bootstrap_servers`<sup>Required</sup> <a name="bootstrap_servers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster.parameter.bootstrapServers"></a>

- *Type:* str

The bootstrap servers string of the Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#bootstrap_servers KafkaconnectConnector#bootstrap_servers}

---

###### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster.parameter.vpc"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

Information about a VPC used with the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#vpc KafkaconnectConnector#vpc}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.apacheKafkaCluster">apache_kafka_cluster</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference">KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.apacheKafkaClusterInput">apache_kafka_cluster_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apache_kafka_cluster`<sup>Required</sup> <a name="apache_kafka_cluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.apacheKafkaCluster"></a>

```python
apache_kafka_cluster: KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference">KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference</a>

---

##### `apache_kafka_cluster_input`<sup>Optional</sup> <a name="apache_kafka_cluster_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.apacheKafkaClusterInput"></a>

```python
apache_kafka_cluster_input: IResolvable | KafkaconnectConnectorKafkaClusterApacheKafkaCluster
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KafkaconnectConnectorKafkaCluster
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a>

---


### KafkaconnectConnectorLogDeliveryOutputReference <a name="KafkaconnectConnectorLogDeliveryOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery">put_worker_log_delivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.resetWorkerLogDelivery">reset_worker_log_delivery</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_worker_log_delivery` <a name="put_worker_log_delivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery"></a>

```python
def put_worker_log_delivery(
  cloudwatch_logs: KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs = None,
  firehose: KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose = None,
  s3: KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 = None
) -> None
```

###### `cloudwatch_logs`<sup>Optional</sup> <a name="cloudwatch_logs" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery.parameter.cloudwatchLogs"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

Details about delivering logs to Amazon CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#cloudwatch_logs KafkaconnectConnector#cloudwatch_logs}

---

###### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery.parameter.firehose"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

Details about delivering logs to Amazon Kinesis Data Firehose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#firehose KafkaconnectConnector#firehose}

---

###### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery.parameter.s3"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

Details about delivering logs to Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#s3 KafkaconnectConnector#s3}

---

##### `reset_worker_log_delivery` <a name="reset_worker_log_delivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.resetWorkerLogDelivery"></a>

```python
def reset_worker_log_delivery() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.workerLogDelivery">worker_log_delivery</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.workerLogDeliveryInput">worker_log_delivery_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `worker_log_delivery`<sup>Required</sup> <a name="worker_log_delivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.workerLogDelivery"></a>

```python
worker_log_delivery: KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference</a>

---

##### `worker_log_delivery_input`<sup>Optional</sup> <a name="worker_log_delivery_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.workerLogDeliveryInput"></a>

```python
worker_log_delivery_input: IResolvable | KafkaconnectConnectorLogDeliveryWorkerLogDelivery
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KafkaconnectConnectorLogDelivery
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a>

---


### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetLogGroup">reset_log_group</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_log_group` <a name="reset_log_group" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetLogGroup"></a>

```python
def reset_log_group() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput">log_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroup">log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `log_group_input`<sup>Optional</sup> <a name="log_group_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput"></a>

```python
log_group_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

---


### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetDeliveryStream">reset_delivery_stream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delivery_stream` <a name="reset_delivery_stream" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetDeliveryStream"></a>

```python
def reset_delivery_stream() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStreamInput">delivery_stream_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStream">delivery_stream</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delivery_stream_input`<sup>Optional</sup> <a name="delivery_stream_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStreamInput"></a>

```python
delivery_stream_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delivery_stream`<sup>Required</sup> <a name="delivery_stream" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStream"></a>

```python
delivery_stream: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

---


### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs">put_cloudwatch_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose">put_firehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetCloudwatchLogs">reset_cloudwatch_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetFirehose">reset_firehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetS3">reset_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_logs` <a name="put_cloudwatch_logs" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs"></a>

```python
def put_cloudwatch_logs(
  enabled: bool | IResolvable = None,
  log_group: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the logs get sent to the specified CloudWatch Logs destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#enabled KafkaconnectConnector#enabled}

---

###### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs.parameter.logGroup"></a>

- *Type:* str

The CloudWatch log group that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#log_group KafkaconnectConnector#log_group}

---

##### `put_firehose` <a name="put_firehose" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose"></a>

```python
def put_firehose(
  delivery_stream: str = None,
  enabled: bool | IResolvable = None
) -> None
```

###### `delivery_stream`<sup>Optional</sup> <a name="delivery_stream" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose.parameter.deliveryStream"></a>

- *Type:* str

The Kinesis Data Firehose delivery stream that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#delivery_stream KafkaconnectConnector#delivery_stream}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the logs get sent to the specified Kinesis Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#enabled KafkaconnectConnector#enabled}

---

##### `put_s3` <a name="put_s3" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3"></a>

```python
def put_s3(
  bucket: str = None,
  enabled: bool | IResolvable = None,
  prefix: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3.parameter.bucket"></a>

- *Type:* str

The name of the S3 bucket that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#bucket KafkaconnectConnector#bucket}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the logs get sent to the specified Amazon S3 destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#enabled KafkaconnectConnector#enabled}

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3.parameter.prefix"></a>

- *Type:* str

The S3 prefix that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#prefix KafkaconnectConnector#prefix}

---

##### `reset_cloudwatch_logs` <a name="reset_cloudwatch_logs" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetCloudwatchLogs"></a>

```python
def reset_cloudwatch_logs() -> None
```

##### `reset_firehose` <a name="reset_firehose" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetFirehose"></a>

```python
def reset_firehose() -> None
```

##### `reset_s3` <a name="reset_s3" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogsInput">cloudwatch_logs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehoseInput">firehose_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3Input">s3_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs`<sup>Required</sup> <a name="cloudwatch_logs" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference</a>

---

##### `firehose`<sup>Required</sup> <a name="firehose" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehose"></a>

```python
firehose: KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3"></a>

```python
s3: KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference</a>

---

##### `cloudwatch_logs_input`<sup>Optional</sup> <a name="cloudwatch_logs_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogsInput"></a>

```python
cloudwatch_logs_input: IResolvable | KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

---

##### `firehose_input`<sup>Optional</sup> <a name="firehose_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehoseInput"></a>

```python
firehose_input: IResolvable | KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3Input"></a>

```python
s3_input: IResolvable | KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KafkaconnectConnectorLogDeliveryWorkerLogDelivery
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a>

---


### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

---


### KafkaconnectConnectorPluginsCustomPluginOutputReference <a name="KafkaconnectConnectorPluginsCustomPluginOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.customPluginArnInput">custom_plugin_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.revisionInput">revision_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.customPluginArn">custom_plugin_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.revision">revision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_plugin_arn_input`<sup>Optional</sup> <a name="custom_plugin_arn_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.customPluginArnInput"></a>

```python
custom_plugin_arn_input: str
```

- *Type:* str

---

##### `revision_input`<sup>Optional</sup> <a name="revision_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.revisionInput"></a>

```python
revision_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_plugin_arn`<sup>Required</sup> <a name="custom_plugin_arn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.customPluginArn"></a>

```python
custom_plugin_arn: str
```

- *Type:* str

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.revision"></a>

```python
revision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KafkaconnectConnectorPluginsCustomPlugin
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a>

---


### KafkaconnectConnectorPluginsList <a name="KafkaconnectConnectorPluginsList" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorPluginsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KafkaconnectConnectorPluginsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[KafkaconnectConnectorPlugins]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>]

---


### KafkaconnectConnectorPluginsOutputReference <a name="KafkaconnectConnectorPluginsOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.putCustomPlugin">put_custom_plugin</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_plugin` <a name="put_custom_plugin" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.putCustomPlugin"></a>

```python
def put_custom_plugin(
  custom_plugin_arn: str,
  revision: typing.Union[int, float]
) -> None
```

###### `custom_plugin_arn`<sup>Required</sup> <a name="custom_plugin_arn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.putCustomPlugin.parameter.customPluginArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the custom plugin to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#custom_plugin_arn KafkaconnectConnector#custom_plugin_arn}

---

###### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.putCustomPlugin.parameter.revision"></a>

- *Type:* typing.Union[int, float]

The revision of the custom plugin to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kafkaconnect_connector#revision KafkaconnectConnector#revision}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.customPlugin">custom_plugin</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference">KafkaconnectConnectorPluginsCustomPluginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.customPluginInput">custom_plugin_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_plugin`<sup>Required</sup> <a name="custom_plugin" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.customPlugin"></a>

```python
custom_plugin: KafkaconnectConnectorPluginsCustomPluginOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference">KafkaconnectConnectorPluginsCustomPluginOutputReference</a>

---

##### `custom_plugin_input`<sup>Optional</sup> <a name="custom_plugin_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.customPluginInput"></a>

```python
custom_plugin_input: IResolvable | KafkaconnectConnectorPluginsCustomPlugin
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KafkaconnectConnectorPlugins
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>

---


### KafkaconnectConnectorTagsList <a name="KafkaconnectConnectorTagsList" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KafkaconnectConnectorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[KafkaconnectConnectorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>]

---


### KafkaconnectConnectorTagsOutputReference <a name="KafkaconnectConnectorTagsOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KafkaconnectConnectorTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>

---


### KafkaconnectConnectorWorkerConfigurationOutputReference <a name="KafkaconnectConnectorWorkerConfigurationOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_connector

kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resetRevision">reset_revision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resetWorkerConfigurationArn">reset_worker_configuration_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_revision` <a name="reset_revision" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resetRevision"></a>

```python
def reset_revision() -> None
```

##### `reset_worker_configuration_arn` <a name="reset_worker_configuration_arn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resetWorkerConfigurationArn"></a>

```python
def reset_worker_configuration_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.revisionInput">revision_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.workerConfigurationArnInput">worker_configuration_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.revision">revision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.workerConfigurationArn">worker_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `revision_input`<sup>Optional</sup> <a name="revision_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.revisionInput"></a>

```python
revision_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `worker_configuration_arn_input`<sup>Optional</sup> <a name="worker_configuration_arn_input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.workerConfigurationArnInput"></a>

```python
worker_configuration_arn_input: str
```

- *Type:* str

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.revision"></a>

```python
revision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `worker_configuration_arn`<sup>Required</sup> <a name="worker_configuration_arn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.workerConfigurationArn"></a>

```python
worker_configuration_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KafkaconnectConnectorWorkerConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a>

---



