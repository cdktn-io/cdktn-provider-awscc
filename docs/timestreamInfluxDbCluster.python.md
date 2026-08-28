# `timestreamInfluxDbCluster` Submodule <a name="`timestreamInfluxDbCluster` Submodule" id="@cdktn/provider-awscc.timestreamInfluxDbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TimestreamInfluxDbCluster <a name="TimestreamInfluxDbCluster" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster awscc_timestream_influx_db_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_cluster

timestreamInfluxDbCluster.TimestreamInfluxDbCluster(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  allocated_storage: typing.Union[int, float] = None,
  bucket: str = None,
  db_instance_type: str = None,
  db_parameter_group_identifier: str = None,
  db_storage_type: str = None,
  deployment_type: str = None,
  failover_mode: str = None,
  log_delivery_configuration: TimestreamInfluxDbClusterLogDeliveryConfiguration = None,
  maintenance_schedule: TimestreamInfluxDbClusterMaintenanceSchedule = None,
  name: str = None,
  network_type: str = None,
  organization: str = None,
  password: str = None,
  port: typing.Union[int, float] = None,
  publicly_accessible: bool | IResolvable = None,
  tags: IResolvable | typing.List[TimestreamInfluxDbClusterTags] = None,
  username: str = None,
  vpc_security_group_ids: typing.List[str] = None,
  vpc_subnet_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.allocatedStorage">allocated_storage</a></code> | <code>typing.Union[int, float]</code> | The allocated storage for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | The bucket for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.dbInstanceType">db_instance_type</a></code> | <code>str</code> | The compute instance of the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.dbParameterGroupIdentifier">db_parameter_group_identifier</a></code> | <code>str</code> | The name of an existing InfluxDB parameter group. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.dbStorageType">db_storage_type</a></code> | <code>str</code> | The storage type of the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.deploymentType">deployment_type</a></code> | <code>str</code> | Deployment type of the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.failoverMode">failover_mode</a></code> | <code>str</code> | Failover mode of the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.logDeliveryConfiguration">log_delivery_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration">TimestreamInfluxDbClusterLogDeliveryConfiguration</a></code> | Configuration for sending logs to customer account from the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.maintenanceSchedule">maintenance_schedule</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule">TimestreamInfluxDbClusterMaintenanceSchedule</a></code> | The maintenance schedule for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | The unique name that is associated with the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.networkType">network_type</a></code> | <code>str</code> | Network type of the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.organization">organization</a></code> | <code>str</code> | The organization for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.password">password</a></code> | <code>str</code> | The password for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | The port number on which InfluxDB accepts connections. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | Attach a public IP to the customer ENI. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.username">username</a></code> | <code>str</code> | The username for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | A list of Amazon EC2 VPC security groups to associate with this InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.vpcSubnetIds">vpc_subnet_ids</a></code> | <code>typing.List[str]</code> | A list of EC2 subnet IDs for this InfluxDB cluster. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allocated_storage`<sup>Optional</sup> <a name="allocated_storage" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.allocatedStorage"></a>

- *Type:* typing.Union[int, float]

The allocated storage for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#allocated_storage TimestreamInfluxDbCluster#allocated_storage}

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.bucket"></a>

- *Type:* str

The bucket for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#bucket TimestreamInfluxDbCluster#bucket}

---

##### `db_instance_type`<sup>Optional</sup> <a name="db_instance_type" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.dbInstanceType"></a>

- *Type:* str

The compute instance of the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#db_instance_type TimestreamInfluxDbCluster#db_instance_type}

---

##### `db_parameter_group_identifier`<sup>Optional</sup> <a name="db_parameter_group_identifier" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.dbParameterGroupIdentifier"></a>

- *Type:* str

The name of an existing InfluxDB parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#db_parameter_group_identifier TimestreamInfluxDbCluster#db_parameter_group_identifier}

---

##### `db_storage_type`<sup>Optional</sup> <a name="db_storage_type" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.dbStorageType"></a>

- *Type:* str

The storage type of the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#db_storage_type TimestreamInfluxDbCluster#db_storage_type}

---

##### `deployment_type`<sup>Optional</sup> <a name="deployment_type" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.deploymentType"></a>

- *Type:* str

Deployment type of the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#deployment_type TimestreamInfluxDbCluster#deployment_type}

---

##### `failover_mode`<sup>Optional</sup> <a name="failover_mode" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.failoverMode"></a>

- *Type:* str

Failover mode of the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#failover_mode TimestreamInfluxDbCluster#failover_mode}

---

##### `log_delivery_configuration`<sup>Optional</sup> <a name="log_delivery_configuration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.logDeliveryConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration">TimestreamInfluxDbClusterLogDeliveryConfiguration</a>

Configuration for sending logs to customer account from the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#log_delivery_configuration TimestreamInfluxDbCluster#log_delivery_configuration}

---

##### `maintenance_schedule`<sup>Optional</sup> <a name="maintenance_schedule" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.maintenanceSchedule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule">TimestreamInfluxDbClusterMaintenanceSchedule</a>

The maintenance schedule for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#maintenance_schedule TimestreamInfluxDbCluster#maintenance_schedule}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.name"></a>

- *Type:* str

The unique name that is associated with the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#name TimestreamInfluxDbCluster#name}

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.networkType"></a>

- *Type:* str

Network type of the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#network_type TimestreamInfluxDbCluster#network_type}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.organization"></a>

- *Type:* str

The organization for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#organization TimestreamInfluxDbCluster#organization}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.password"></a>

- *Type:* str

The password for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#password TimestreamInfluxDbCluster#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

The port number on which InfluxDB accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#port TimestreamInfluxDbCluster#port}

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.publiclyAccessible"></a>

- *Type:* bool | cdktn.IResolvable

Attach a public IP to the customer ENI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#publicly_accessible TimestreamInfluxDbCluster#publicly_accessible}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a>]

An arbitrary set of tags (key-value pairs) for this DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#tags TimestreamInfluxDbCluster#tags}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.username"></a>

- *Type:* str

The username for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#username TimestreamInfluxDbCluster#username}

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* typing.List[str]

A list of Amazon EC2 VPC security groups to associate with this InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#vpc_security_group_ids TimestreamInfluxDbCluster#vpc_security_group_ids}

---

##### `vpc_subnet_ids`<sup>Optional</sup> <a name="vpc_subnet_ids" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.vpcSubnetIds"></a>

- *Type:* typing.List[str]

A list of EC2 subnet IDs for this InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#vpc_subnet_ids TimestreamInfluxDbCluster#vpc_subnet_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putLogDeliveryConfiguration">put_log_delivery_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putMaintenanceSchedule">put_maintenance_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetAllocatedStorage">reset_allocated_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDbInstanceType">reset_db_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDbParameterGroupIdentifier">reset_db_parameter_group_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDbStorageType">reset_db_storage_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDeploymentType">reset_deployment_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetFailoverMode">reset_failover_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetLogDeliveryConfiguration">reset_log_delivery_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetMaintenanceSchedule">reset_maintenance_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetNetworkType">reset_network_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetPubliclyAccessible">reset_publicly_accessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetUsername">reset_username</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetVpcSecurityGroupIds">reset_vpc_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetVpcSubnetIds">reset_vpc_subnet_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_log_delivery_configuration` <a name="put_log_delivery_configuration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putLogDeliveryConfiguration"></a>

```python
def put_log_delivery_configuration(
  s3_configuration: TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration = None
) -> None
```

###### `s3_configuration`<sup>Optional</sup> <a name="s3_configuration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putLogDeliveryConfiguration.parameter.s3Configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration</a>

S3 configuration for sending logs to customer account from the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#s3_configuration TimestreamInfluxDbCluster#s3_configuration}

---

##### `put_maintenance_schedule` <a name="put_maintenance_schedule" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putMaintenanceSchedule"></a>

```python
def put_maintenance_schedule(
  preferred_maintenance_window: str = None,
  timezone: str = None
) -> None
```

###### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putMaintenanceSchedule.parameter.preferredMaintenanceWindow"></a>

- *Type:* str

The preferred maintenance window in format ddd:HH:MM-ddd:HH:MM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#preferred_maintenance_window TimestreamInfluxDbCluster#preferred_maintenance_window}

---

###### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putMaintenanceSchedule.parameter.timezone"></a>

- *Type:* str

The IANA timezone identifier for the maintenance schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#timezone TimestreamInfluxDbCluster#timezone}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[TimestreamInfluxDbClusterTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a>]

---

##### `reset_allocated_storage` <a name="reset_allocated_storage" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetAllocatedStorage"></a>

```python
def reset_allocated_storage() -> None
```

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_db_instance_type` <a name="reset_db_instance_type" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDbInstanceType"></a>

```python
def reset_db_instance_type() -> None
```

##### `reset_db_parameter_group_identifier` <a name="reset_db_parameter_group_identifier" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDbParameterGroupIdentifier"></a>

```python
def reset_db_parameter_group_identifier() -> None
```

##### `reset_db_storage_type` <a name="reset_db_storage_type" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDbStorageType"></a>

```python
def reset_db_storage_type() -> None
```

##### `reset_deployment_type` <a name="reset_deployment_type" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDeploymentType"></a>

```python
def reset_deployment_type() -> None
```

##### `reset_failover_mode` <a name="reset_failover_mode" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetFailoverMode"></a>

```python
def reset_failover_mode() -> None
```

##### `reset_log_delivery_configuration` <a name="reset_log_delivery_configuration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetLogDeliveryConfiguration"></a>

```python
def reset_log_delivery_configuration() -> None
```

##### `reset_maintenance_schedule` <a name="reset_maintenance_schedule" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetMaintenanceSchedule"></a>

```python
def reset_maintenance_schedule() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_network_type` <a name="reset_network_type" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetNetworkType"></a>

```python
def reset_network_type() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_publicly_accessible` <a name="reset_publicly_accessible" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetPubliclyAccessible"></a>

```python
def reset_publicly_accessible() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetUsername"></a>

```python
def reset_username() -> None
```

##### `reset_vpc_security_group_ids` <a name="reset_vpc_security_group_ids" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetVpcSecurityGroupIds"></a>

```python
def reset_vpc_security_group_ids() -> None
```

##### `reset_vpc_subnet_ids` <a name="reset_vpc_subnet_ids" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetVpcSubnetIds"></a>

```python
def reset_vpc_subnet_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a TimestreamInfluxDbCluster resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isConstruct"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_cluster

timestreamInfluxDbCluster.TimestreamInfluxDbCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isTerraformElement"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_cluster

timestreamInfluxDbCluster.TimestreamInfluxDbCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isTerraformResource"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_cluster

timestreamInfluxDbCluster.TimestreamInfluxDbCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_cluster

timestreamInfluxDbCluster.TimestreamInfluxDbCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a TimestreamInfluxDbCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TimestreamInfluxDbCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TimestreamInfluxDbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TimestreamInfluxDbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.engineType">engine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.influxAuthParametersSecretArn">influx_auth_parameters_secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.influxDbClusterId">influx_db_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.logDeliveryConfiguration">log_delivery_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference">TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.maintenanceSchedule">maintenance_schedule</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference">TimestreamInfluxDbClusterMaintenanceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.nextMaintenanceTime">next_maintenance_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.readerEndpoint">reader_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList">TimestreamInfluxDbClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.allocatedStorageInput">allocated_storage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbInstanceTypeInput">db_instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbParameterGroupIdentifierInput">db_parameter_group_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbStorageTypeInput">db_storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.deploymentTypeInput">deployment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.failoverModeInput">failover_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.logDeliveryConfigurationInput">log_delivery_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration">TimestreamInfluxDbClusterLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.maintenanceScheduleInput">maintenance_schedule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule">TimestreamInfluxDbClusterMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.networkTypeInput">network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.publiclyAccessibleInput">publicly_accessible_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSecurityGroupIdsInput">vpc_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSubnetIdsInput">vpc_subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.allocatedStorage">allocated_storage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbInstanceType">db_instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbParameterGroupIdentifier">db_parameter_group_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbStorageType">db_storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.deploymentType">deployment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.failoverMode">failover_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSubnetIds">vpc_subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `engine_type`<sup>Required</sup> <a name="engine_type" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.engineType"></a>

```python
engine_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `influx_auth_parameters_secret_arn`<sup>Required</sup> <a name="influx_auth_parameters_secret_arn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.influxAuthParametersSecretArn"></a>

```python
influx_auth_parameters_secret_arn: str
```

- *Type:* str

---

##### `influx_db_cluster_id`<sup>Required</sup> <a name="influx_db_cluster_id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.influxDbClusterId"></a>

```python
influx_db_cluster_id: str
```

- *Type:* str

---

##### `log_delivery_configuration`<sup>Required</sup> <a name="log_delivery_configuration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.logDeliveryConfiguration"></a>

```python
log_delivery_configuration: TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference">TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference</a>

---

##### `maintenance_schedule`<sup>Required</sup> <a name="maintenance_schedule" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.maintenanceSchedule"></a>

```python
maintenance_schedule: TimestreamInfluxDbClusterMaintenanceScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference">TimestreamInfluxDbClusterMaintenanceScheduleOutputReference</a>

---

##### `next_maintenance_time`<sup>Required</sup> <a name="next_maintenance_time" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.nextMaintenanceTime"></a>

```python
next_maintenance_time: str
```

- *Type:* str

---

##### `reader_endpoint`<sup>Required</sup> <a name="reader_endpoint" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.readerEndpoint"></a>

```python
reader_endpoint: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.tags"></a>

```python
tags: TimestreamInfluxDbClusterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList">TimestreamInfluxDbClusterTagsList</a>

---

##### `allocated_storage_input`<sup>Optional</sup> <a name="allocated_storage_input" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.allocatedStorageInput"></a>

```python
allocated_storage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `db_instance_type_input`<sup>Optional</sup> <a name="db_instance_type_input" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbInstanceTypeInput"></a>

```python
db_instance_type_input: str
```

- *Type:* str

---

##### `db_parameter_group_identifier_input`<sup>Optional</sup> <a name="db_parameter_group_identifier_input" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbParameterGroupIdentifierInput"></a>

```python
db_parameter_group_identifier_input: str
```

- *Type:* str

---

##### `db_storage_type_input`<sup>Optional</sup> <a name="db_storage_type_input" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbStorageTypeInput"></a>

```python
db_storage_type_input: str
```

- *Type:* str

---

##### `deployment_type_input`<sup>Optional</sup> <a name="deployment_type_input" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.deploymentTypeInput"></a>

```python
deployment_type_input: str
```

- *Type:* str

---

##### `failover_mode_input`<sup>Optional</sup> <a name="failover_mode_input" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.failoverModeInput"></a>

```python
failover_mode_input: str
```

- *Type:* str

---

##### `log_delivery_configuration_input`<sup>Optional</sup> <a name="log_delivery_configuration_input" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.logDeliveryConfigurationInput"></a>

```python
log_delivery_configuration_input: IResolvable | TimestreamInfluxDbClusterLogDeliveryConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration">TimestreamInfluxDbClusterLogDeliveryConfiguration</a>

---

##### `maintenance_schedule_input`<sup>Optional</sup> <a name="maintenance_schedule_input" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.maintenanceScheduleInput"></a>

```python
maintenance_schedule_input: IResolvable | TimestreamInfluxDbClusterMaintenanceSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule">TimestreamInfluxDbClusterMaintenanceSchedule</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_type_input`<sup>Optional</sup> <a name="network_type_input" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.networkTypeInput"></a>

```python
network_type_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `publicly_accessible_input`<sup>Optional</sup> <a name="publicly_accessible_input" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.publiclyAccessibleInput"></a>

```python
publicly_accessible_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[TimestreamInfluxDbClusterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a>]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `vpc_security_group_ids_input`<sup>Optional</sup> <a name="vpc_security_group_ids_input" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSecurityGroupIdsInput"></a>

```python
vpc_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_subnet_ids_input`<sup>Optional</sup> <a name="vpc_subnet_ids_input" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSubnetIdsInput"></a>

```python
vpc_subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allocated_storage`<sup>Required</sup> <a name="allocated_storage" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.allocatedStorage"></a>

```python
allocated_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `db_instance_type`<sup>Required</sup> <a name="db_instance_type" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbInstanceType"></a>

```python
db_instance_type: str
```

- *Type:* str

---

##### `db_parameter_group_identifier`<sup>Required</sup> <a name="db_parameter_group_identifier" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbParameterGroupIdentifier"></a>

```python
db_parameter_group_identifier: str
```

- *Type:* str

---

##### `db_storage_type`<sup>Required</sup> <a name="db_storage_type" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbStorageType"></a>

```python
db_storage_type: str
```

- *Type:* str

---

##### `deployment_type`<sup>Required</sup> <a name="deployment_type" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

---

##### `failover_mode`<sup>Required</sup> <a name="failover_mode" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.failoverMode"></a>

```python
failover_mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `publicly_accessible`<sup>Required</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.publiclyAccessible"></a>

```python
publicly_accessible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_subnet_ids`<sup>Required</sup> <a name="vpc_subnet_ids" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSubnetIds"></a>

```python
vpc_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TimestreamInfluxDbClusterConfig <a name="TimestreamInfluxDbClusterConfig" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_cluster

timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  allocated_storage: typing.Union[int, float] = None,
  bucket: str = None,
  db_instance_type: str = None,
  db_parameter_group_identifier: str = None,
  db_storage_type: str = None,
  deployment_type: str = None,
  failover_mode: str = None,
  log_delivery_configuration: TimestreamInfluxDbClusterLogDeliveryConfiguration = None,
  maintenance_schedule: TimestreamInfluxDbClusterMaintenanceSchedule = None,
  name: str = None,
  network_type: str = None,
  organization: str = None,
  password: str = None,
  port: typing.Union[int, float] = None,
  publicly_accessible: bool | IResolvable = None,
  tags: IResolvable | typing.List[TimestreamInfluxDbClusterTags] = None,
  username: str = None,
  vpc_security_group_ids: typing.List[str] = None,
  vpc_subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.allocatedStorage">allocated_storage</a></code> | <code>typing.Union[int, float]</code> | The allocated storage for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.bucket">bucket</a></code> | <code>str</code> | The bucket for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dbInstanceType">db_instance_type</a></code> | <code>str</code> | The compute instance of the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dbParameterGroupIdentifier">db_parameter_group_identifier</a></code> | <code>str</code> | The name of an existing InfluxDB parameter group. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dbStorageType">db_storage_type</a></code> | <code>str</code> | The storage type of the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.deploymentType">deployment_type</a></code> | <code>str</code> | Deployment type of the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.failoverMode">failover_mode</a></code> | <code>str</code> | Failover mode of the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.logDeliveryConfiguration">log_delivery_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration">TimestreamInfluxDbClusterLogDeliveryConfiguration</a></code> | Configuration for sending logs to customer account from the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.maintenanceSchedule">maintenance_schedule</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule">TimestreamInfluxDbClusterMaintenanceSchedule</a></code> | The maintenance schedule for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.name">name</a></code> | <code>str</code> | The unique name that is associated with the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.networkType">network_type</a></code> | <code>str</code> | Network type of the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.organization">organization</a></code> | <code>str</code> | The organization for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.password">password</a></code> | <code>str</code> | The password for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port number on which InfluxDB accepts connections. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | Attach a public IP to the customer ENI. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.username">username</a></code> | <code>str</code> | The username for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | A list of Amazon EC2 VPC security groups to associate with this InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.vpcSubnetIds">vpc_subnet_ids</a></code> | <code>typing.List[str]</code> | A list of EC2 subnet IDs for this InfluxDB cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allocated_storage`<sup>Optional</sup> <a name="allocated_storage" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.allocatedStorage"></a>

```python
allocated_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The allocated storage for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#allocated_storage TimestreamInfluxDbCluster#allocated_storage}

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The bucket for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#bucket TimestreamInfluxDbCluster#bucket}

---

##### `db_instance_type`<sup>Optional</sup> <a name="db_instance_type" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dbInstanceType"></a>

```python
db_instance_type: str
```

- *Type:* str

The compute instance of the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#db_instance_type TimestreamInfluxDbCluster#db_instance_type}

---

##### `db_parameter_group_identifier`<sup>Optional</sup> <a name="db_parameter_group_identifier" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dbParameterGroupIdentifier"></a>

```python
db_parameter_group_identifier: str
```

- *Type:* str

The name of an existing InfluxDB parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#db_parameter_group_identifier TimestreamInfluxDbCluster#db_parameter_group_identifier}

---

##### `db_storage_type`<sup>Optional</sup> <a name="db_storage_type" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dbStorageType"></a>

```python
db_storage_type: str
```

- *Type:* str

The storage type of the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#db_storage_type TimestreamInfluxDbCluster#db_storage_type}

---

##### `deployment_type`<sup>Optional</sup> <a name="deployment_type" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

Deployment type of the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#deployment_type TimestreamInfluxDbCluster#deployment_type}

---

##### `failover_mode`<sup>Optional</sup> <a name="failover_mode" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.failoverMode"></a>

```python
failover_mode: str
```

- *Type:* str

Failover mode of the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#failover_mode TimestreamInfluxDbCluster#failover_mode}

---

##### `log_delivery_configuration`<sup>Optional</sup> <a name="log_delivery_configuration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.logDeliveryConfiguration"></a>

```python
log_delivery_configuration: TimestreamInfluxDbClusterLogDeliveryConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration">TimestreamInfluxDbClusterLogDeliveryConfiguration</a>

Configuration for sending logs to customer account from the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#log_delivery_configuration TimestreamInfluxDbCluster#log_delivery_configuration}

---

##### `maintenance_schedule`<sup>Optional</sup> <a name="maintenance_schedule" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.maintenanceSchedule"></a>

```python
maintenance_schedule: TimestreamInfluxDbClusterMaintenanceSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule">TimestreamInfluxDbClusterMaintenanceSchedule</a>

The maintenance schedule for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#maintenance_schedule TimestreamInfluxDbCluster#maintenance_schedule}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The unique name that is associated with the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#name TimestreamInfluxDbCluster#name}

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

Network type of the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#network_type TimestreamInfluxDbCluster#network_type}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

The organization for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#organization TimestreamInfluxDbCluster#organization}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.password"></a>

```python
password: str
```

- *Type:* str

The password for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#password TimestreamInfluxDbCluster#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port number on which InfluxDB accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#port TimestreamInfluxDbCluster#port}

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.publiclyAccessible"></a>

```python
publicly_accessible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Attach a public IP to the customer ENI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#publicly_accessible TimestreamInfluxDbCluster#publicly_accessible}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[TimestreamInfluxDbClusterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a>]

An arbitrary set of tags (key-value pairs) for this DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#tags TimestreamInfluxDbCluster#tags}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.username"></a>

```python
username: str
```

- *Type:* str

The username for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#username TimestreamInfluxDbCluster#username}

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of Amazon EC2 VPC security groups to associate with this InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#vpc_security_group_ids TimestreamInfluxDbCluster#vpc_security_group_ids}

---

##### `vpc_subnet_ids`<sup>Optional</sup> <a name="vpc_subnet_ids" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.vpcSubnetIds"></a>

```python
vpc_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of EC2 subnet IDs for this InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#vpc_subnet_ids TimestreamInfluxDbCluster#vpc_subnet_ids}

---

### TimestreamInfluxDbClusterLogDeliveryConfiguration <a name="TimestreamInfluxDbClusterLogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_cluster

timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration(
  s3_configuration: TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration.property.s3Configuration">s3_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration</a></code> | S3 configuration for sending logs to customer account from the InfluxDB cluster. |

---

##### `s3_configuration`<sup>Optional</sup> <a name="s3_configuration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration.property.s3Configuration"></a>

```python
s3_configuration: TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration</a>

S3 configuration for sending logs to customer account from the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#s3_configuration TimestreamInfluxDbCluster#s3_configuration}

---

### TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration <a name="TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_cluster

timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration(
  bucket_name: str = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration.property.bucketName">bucket_name</a></code> | <code>str</code> | The bucket name for logs to be sent from the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether logging to customer specified bucket is enabled. |

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

The bucket name for logs to be sent from the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#bucket_name TimestreamInfluxDbCluster#bucket_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether logging to customer specified bucket is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#enabled TimestreamInfluxDbCluster#enabled}

---

### TimestreamInfluxDbClusterMaintenanceSchedule <a name="TimestreamInfluxDbClusterMaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_cluster

timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule(
  preferred_maintenance_window: str = None,
  timezone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | The preferred maintenance window in format ddd:HH:MM-ddd:HH:MM. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule.property.timezone">timezone</a></code> | <code>str</code> | The IANA timezone identifier for the maintenance schedule. |

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

The preferred maintenance window in format ddd:HH:MM-ddd:HH:MM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#preferred_maintenance_window TimestreamInfluxDbCluster#preferred_maintenance_window}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

The IANA timezone identifier for the maintenance schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#timezone TimestreamInfluxDbCluster#timezone}

---

### TimestreamInfluxDbClusterTags <a name="TimestreamInfluxDbClusterTags" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_cluster

timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#key TimestreamInfluxDbCluster#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#value TimestreamInfluxDbCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference <a name="TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_cluster

timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.putS3Configuration">put_s3_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.resetS3Configuration">reset_s3_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_configuration` <a name="put_s3_configuration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.putS3Configuration"></a>

```python
def put_s3_configuration(
  bucket_name: str = None,
  enabled: bool | IResolvable = None
) -> None
```

###### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.putS3Configuration.parameter.bucketName"></a>

- *Type:* str

The bucket name for logs to be sent from the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#bucket_name TimestreamInfluxDbCluster#bucket_name}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.putS3Configuration.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether logging to customer specified bucket is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#enabled TimestreamInfluxDbCluster#enabled}

---

##### `reset_s3_configuration` <a name="reset_s3_configuration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.resetS3Configuration"></a>

```python
def reset_s3_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.s3Configuration">s3_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference">TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.s3ConfigurationInput">s3_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration">TimestreamInfluxDbClusterLogDeliveryConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_configuration`<sup>Required</sup> <a name="s3_configuration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.s3Configuration"></a>

```python
s3_configuration: TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference">TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference</a>

---

##### `s3_configuration_input`<sup>Optional</sup> <a name="s3_configuration_input" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.s3ConfigurationInput"></a>

```python
s3_configuration_input: IResolvable | TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TimestreamInfluxDbClusterLogDeliveryConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration">TimestreamInfluxDbClusterLogDeliveryConfiguration</a>

---


### TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference <a name="TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_cluster

timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration</a>

---


### TimestreamInfluxDbClusterMaintenanceScheduleOutputReference <a name="TimestreamInfluxDbClusterMaintenanceScheduleOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_cluster

timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resetPreferredMaintenanceWindow">reset_preferred_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resetTimezone">reset_timezone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_preferred_maintenance_window` <a name="reset_preferred_maintenance_window" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resetPreferredMaintenanceWindow"></a>

```python
def reset_preferred_maintenance_window() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resetTimezone"></a>

```python
def reset_timezone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.preferredMaintenanceWindowInput">preferred_maintenance_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule">TimestreamInfluxDbClusterMaintenanceSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preferred_maintenance_window_input`<sup>Optional</sup> <a name="preferred_maintenance_window_input" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.preferredMaintenanceWindowInput"></a>

```python
preferred_maintenance_window_input: str
```

- *Type:* str

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `preferred_maintenance_window`<sup>Required</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TimestreamInfluxDbClusterMaintenanceSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule">TimestreamInfluxDbClusterMaintenanceSchedule</a>

---


### TimestreamInfluxDbClusterTagsList <a name="TimestreamInfluxDbClusterTagsList" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_cluster

timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TimestreamInfluxDbClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TimestreamInfluxDbClusterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a>]

---


### TimestreamInfluxDbClusterTagsOutputReference <a name="TimestreamInfluxDbClusterTagsOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_cluster

timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TimestreamInfluxDbClusterTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a>

---



