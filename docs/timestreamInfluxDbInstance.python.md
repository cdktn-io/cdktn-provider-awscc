# `timestreamInfluxDbInstance` Submodule <a name="`timestreamInfluxDbInstance` Submodule" id="@cdktn/provider-awscc.timestreamInfluxDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TimestreamInfluxDbInstance <a name="TimestreamInfluxDbInstance" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance awscc_timestream_influx_db_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_instance

timestreamInfluxDbInstance.TimestreamInfluxDbInstance(
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
  log_delivery_configuration: TimestreamInfluxDbInstanceLogDeliveryConfiguration = None,
  maintenance_schedule: TimestreamInfluxDbInstanceMaintenanceSchedule = None,
  name: str = None,
  network_type: str = None,
  organization: str = None,
  password: str = None,
  port: typing.Union[int, float] = None,
  publicly_accessible: bool | IResolvable = None,
  tags: IResolvable | typing.List[TimestreamInfluxDbInstanceTags] = None,
  username: str = None,
  vpc_security_group_ids: typing.List[str] = None,
  vpc_subnet_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.allocatedStorage">allocated_storage</a></code> | <code>typing.Union[int, float]</code> | The allocated storage for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | The bucket for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.dbInstanceType">db_instance_type</a></code> | <code>str</code> | The compute instance of the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.dbParameterGroupIdentifier">db_parameter_group_identifier</a></code> | <code>str</code> | The name of an existing InfluxDB parameter group. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.dbStorageType">db_storage_type</a></code> | <code>str</code> | The storage type of the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.deploymentType">deployment_type</a></code> | <code>str</code> | Deployment type of the InfluxDB Instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.logDeliveryConfiguration">log_delivery_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a></code> | Configuration for sending logs to customer account from the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.maintenanceSchedule">maintenance_schedule</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a></code> | The maintenance schedule for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | The unique name that is associated with the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.networkType">network_type</a></code> | <code>str</code> | Network type of the InfluxDB Instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.organization">organization</a></code> | <code>str</code> | The organization for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.password">password</a></code> | <code>str</code> | The password for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | The port number on which InfluxDB accepts connections. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | Attach a public IP to the customer ENI. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.username">username</a></code> | <code>str</code> | The username for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | A list of Amazon EC2 VPC security groups to associate with this InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.vpcSubnetIds">vpc_subnet_ids</a></code> | <code>typing.List[str]</code> | A list of EC2 subnet IDs for this InfluxDB instance. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allocated_storage`<sup>Optional</sup> <a name="allocated_storage" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.allocatedStorage"></a>

- *Type:* typing.Union[int, float]

The allocated storage for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#allocated_storage TimestreamInfluxDbInstance#allocated_storage}

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.bucket"></a>

- *Type:* str

The bucket for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#bucket TimestreamInfluxDbInstance#bucket}

---

##### `db_instance_type`<sup>Optional</sup> <a name="db_instance_type" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.dbInstanceType"></a>

- *Type:* str

The compute instance of the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#db_instance_type TimestreamInfluxDbInstance#db_instance_type}

---

##### `db_parameter_group_identifier`<sup>Optional</sup> <a name="db_parameter_group_identifier" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.dbParameterGroupIdentifier"></a>

- *Type:* str

The name of an existing InfluxDB parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#db_parameter_group_identifier TimestreamInfluxDbInstance#db_parameter_group_identifier}

---

##### `db_storage_type`<sup>Optional</sup> <a name="db_storage_type" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.dbStorageType"></a>

- *Type:* str

The storage type of the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#db_storage_type TimestreamInfluxDbInstance#db_storage_type}

---

##### `deployment_type`<sup>Optional</sup> <a name="deployment_type" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.deploymentType"></a>

- *Type:* str

Deployment type of the InfluxDB Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#deployment_type TimestreamInfluxDbInstance#deployment_type}

---

##### `log_delivery_configuration`<sup>Optional</sup> <a name="log_delivery_configuration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.logDeliveryConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a>

Configuration for sending logs to customer account from the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#log_delivery_configuration TimestreamInfluxDbInstance#log_delivery_configuration}

---

##### `maintenance_schedule`<sup>Optional</sup> <a name="maintenance_schedule" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.maintenanceSchedule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a>

The maintenance schedule for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#maintenance_schedule TimestreamInfluxDbInstance#maintenance_schedule}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.name"></a>

- *Type:* str

The unique name that is associated with the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#name TimestreamInfluxDbInstance#name}

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.networkType"></a>

- *Type:* str

Network type of the InfluxDB Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#network_type TimestreamInfluxDbInstance#network_type}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.organization"></a>

- *Type:* str

The organization for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#organization TimestreamInfluxDbInstance#organization}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.password"></a>

- *Type:* str

The password for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#password TimestreamInfluxDbInstance#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

The port number on which InfluxDB accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#port TimestreamInfluxDbInstance#port}

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.publiclyAccessible"></a>

- *Type:* bool | cdktn.IResolvable

Attach a public IP to the customer ENI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#publicly_accessible TimestreamInfluxDbInstance#publicly_accessible}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>]

An arbitrary set of tags (key-value pairs) for this DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#tags TimestreamInfluxDbInstance#tags}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.username"></a>

- *Type:* str

The username for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#username TimestreamInfluxDbInstance#username}

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* typing.List[str]

A list of Amazon EC2 VPC security groups to associate with this InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#vpc_security_group_ids TimestreamInfluxDbInstance#vpc_security_group_ids}

---

##### `vpc_subnet_ids`<sup>Optional</sup> <a name="vpc_subnet_ids" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.vpcSubnetIds"></a>

- *Type:* typing.List[str]

A list of EC2 subnet IDs for this InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#vpc_subnet_ids TimestreamInfluxDbInstance#vpc_subnet_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putLogDeliveryConfiguration">put_log_delivery_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putMaintenanceSchedule">put_maintenance_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetAllocatedStorage">reset_allocated_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDbInstanceType">reset_db_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDbParameterGroupIdentifier">reset_db_parameter_group_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDbStorageType">reset_db_storage_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDeploymentType">reset_deployment_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetLogDeliveryConfiguration">reset_log_delivery_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetMaintenanceSchedule">reset_maintenance_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetNetworkType">reset_network_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetPubliclyAccessible">reset_publicly_accessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetUsername">reset_username</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetVpcSecurityGroupIds">reset_vpc_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetVpcSubnetIds">reset_vpc_subnet_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_log_delivery_configuration` <a name="put_log_delivery_configuration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putLogDeliveryConfiguration"></a>

```python
def put_log_delivery_configuration(
  s3_configuration: TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration = None
) -> None
```

###### `s3_configuration`<sup>Optional</sup> <a name="s3_configuration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putLogDeliveryConfiguration.parameter.s3Configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a>

S3 configuration for sending logs to customer account from the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#s3_configuration TimestreamInfluxDbInstance#s3_configuration}

---

##### `put_maintenance_schedule` <a name="put_maintenance_schedule" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putMaintenanceSchedule"></a>

```python
def put_maintenance_schedule(
  preferred_maintenance_window: str = None,
  timezone: str = None
) -> None
```

###### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putMaintenanceSchedule.parameter.preferredMaintenanceWindow"></a>

- *Type:* str

The preferred maintenance window in format ddd:HH:MM-ddd:HH:MM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#preferred_maintenance_window TimestreamInfluxDbInstance#preferred_maintenance_window}

---

###### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putMaintenanceSchedule.parameter.timezone"></a>

- *Type:* str

The IANA timezone identifier for the maintenance schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#timezone TimestreamInfluxDbInstance#timezone}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[TimestreamInfluxDbInstanceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>]

---

##### `reset_allocated_storage` <a name="reset_allocated_storage" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetAllocatedStorage"></a>

```python
def reset_allocated_storage() -> None
```

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_db_instance_type` <a name="reset_db_instance_type" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDbInstanceType"></a>

```python
def reset_db_instance_type() -> None
```

##### `reset_db_parameter_group_identifier` <a name="reset_db_parameter_group_identifier" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDbParameterGroupIdentifier"></a>

```python
def reset_db_parameter_group_identifier() -> None
```

##### `reset_db_storage_type` <a name="reset_db_storage_type" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDbStorageType"></a>

```python
def reset_db_storage_type() -> None
```

##### `reset_deployment_type` <a name="reset_deployment_type" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDeploymentType"></a>

```python
def reset_deployment_type() -> None
```

##### `reset_log_delivery_configuration` <a name="reset_log_delivery_configuration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetLogDeliveryConfiguration"></a>

```python
def reset_log_delivery_configuration() -> None
```

##### `reset_maintenance_schedule` <a name="reset_maintenance_schedule" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetMaintenanceSchedule"></a>

```python
def reset_maintenance_schedule() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_network_type` <a name="reset_network_type" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetNetworkType"></a>

```python
def reset_network_type() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_publicly_accessible` <a name="reset_publicly_accessible" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetPubliclyAccessible"></a>

```python
def reset_publicly_accessible() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetUsername"></a>

```python
def reset_username() -> None
```

##### `reset_vpc_security_group_ids` <a name="reset_vpc_security_group_ids" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetVpcSecurityGroupIds"></a>

```python
def reset_vpc_security_group_ids() -> None
```

##### `reset_vpc_subnet_ids` <a name="reset_vpc_subnet_ids" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetVpcSubnetIds"></a>

```python
def reset_vpc_subnet_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a TimestreamInfluxDbInstance resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isConstruct"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_instance

timestreamInfluxDbInstance.TimestreamInfluxDbInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isTerraformElement"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_instance

timestreamInfluxDbInstance.TimestreamInfluxDbInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isTerraformResource"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_instance

timestreamInfluxDbInstance.TimestreamInfluxDbInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_instance

timestreamInfluxDbInstance.TimestreamInfluxDbInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a TimestreamInfluxDbInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TimestreamInfluxDbInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TimestreamInfluxDbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TimestreamInfluxDbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.influxAuthParametersSecretArn">influx_auth_parameters_secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.influxDbInstanceId">influx_db_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.logDeliveryConfiguration">log_delivery_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference">TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.maintenanceSchedule">maintenance_schedule</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference">TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.nextMaintenanceTime">next_maintenance_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.secondaryAvailabilityZone">secondary_availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList">TimestreamInfluxDbInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.allocatedStorageInput">allocated_storage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbInstanceTypeInput">db_instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbParameterGroupIdentifierInput">db_parameter_group_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbStorageTypeInput">db_storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.deploymentTypeInput">deployment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.logDeliveryConfigurationInput">log_delivery_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.maintenanceScheduleInput">maintenance_schedule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.networkTypeInput">network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.publiclyAccessibleInput">publicly_accessible_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSecurityGroupIdsInput">vpc_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSubnetIdsInput">vpc_subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.allocatedStorage">allocated_storage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbInstanceType">db_instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbParameterGroupIdentifier">db_parameter_group_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbStorageType">db_storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.deploymentType">deployment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSubnetIds">vpc_subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `influx_auth_parameters_secret_arn`<sup>Required</sup> <a name="influx_auth_parameters_secret_arn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.influxAuthParametersSecretArn"></a>

```python
influx_auth_parameters_secret_arn: str
```

- *Type:* str

---

##### `influx_db_instance_id`<sup>Required</sup> <a name="influx_db_instance_id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.influxDbInstanceId"></a>

```python
influx_db_instance_id: str
```

- *Type:* str

---

##### `log_delivery_configuration`<sup>Required</sup> <a name="log_delivery_configuration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.logDeliveryConfiguration"></a>

```python
log_delivery_configuration: TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference">TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference</a>

---

##### `maintenance_schedule`<sup>Required</sup> <a name="maintenance_schedule" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.maintenanceSchedule"></a>

```python
maintenance_schedule: TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference">TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference</a>

---

##### `next_maintenance_time`<sup>Required</sup> <a name="next_maintenance_time" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.nextMaintenanceTime"></a>

```python
next_maintenance_time: str
```

- *Type:* str

---

##### `secondary_availability_zone`<sup>Required</sup> <a name="secondary_availability_zone" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.secondaryAvailabilityZone"></a>

```python
secondary_availability_zone: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.tags"></a>

```python
tags: TimestreamInfluxDbInstanceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList">TimestreamInfluxDbInstanceTagsList</a>

---

##### `allocated_storage_input`<sup>Optional</sup> <a name="allocated_storage_input" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.allocatedStorageInput"></a>

```python
allocated_storage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `db_instance_type_input`<sup>Optional</sup> <a name="db_instance_type_input" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbInstanceTypeInput"></a>

```python
db_instance_type_input: str
```

- *Type:* str

---

##### `db_parameter_group_identifier_input`<sup>Optional</sup> <a name="db_parameter_group_identifier_input" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbParameterGroupIdentifierInput"></a>

```python
db_parameter_group_identifier_input: str
```

- *Type:* str

---

##### `db_storage_type_input`<sup>Optional</sup> <a name="db_storage_type_input" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbStorageTypeInput"></a>

```python
db_storage_type_input: str
```

- *Type:* str

---

##### `deployment_type_input`<sup>Optional</sup> <a name="deployment_type_input" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.deploymentTypeInput"></a>

```python
deployment_type_input: str
```

- *Type:* str

---

##### `log_delivery_configuration_input`<sup>Optional</sup> <a name="log_delivery_configuration_input" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.logDeliveryConfigurationInput"></a>

```python
log_delivery_configuration_input: IResolvable | TimestreamInfluxDbInstanceLogDeliveryConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a>

---

##### `maintenance_schedule_input`<sup>Optional</sup> <a name="maintenance_schedule_input" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.maintenanceScheduleInput"></a>

```python
maintenance_schedule_input: IResolvable | TimestreamInfluxDbInstanceMaintenanceSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_type_input`<sup>Optional</sup> <a name="network_type_input" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.networkTypeInput"></a>

```python
network_type_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `publicly_accessible_input`<sup>Optional</sup> <a name="publicly_accessible_input" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.publiclyAccessibleInput"></a>

```python
publicly_accessible_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[TimestreamInfluxDbInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `vpc_security_group_ids_input`<sup>Optional</sup> <a name="vpc_security_group_ids_input" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSecurityGroupIdsInput"></a>

```python
vpc_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_subnet_ids_input`<sup>Optional</sup> <a name="vpc_subnet_ids_input" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSubnetIdsInput"></a>

```python
vpc_subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allocated_storage`<sup>Required</sup> <a name="allocated_storage" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.allocatedStorage"></a>

```python
allocated_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `db_instance_type`<sup>Required</sup> <a name="db_instance_type" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbInstanceType"></a>

```python
db_instance_type: str
```

- *Type:* str

---

##### `db_parameter_group_identifier`<sup>Required</sup> <a name="db_parameter_group_identifier" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbParameterGroupIdentifier"></a>

```python
db_parameter_group_identifier: str
```

- *Type:* str

---

##### `db_storage_type`<sup>Required</sup> <a name="db_storage_type" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbStorageType"></a>

```python
db_storage_type: str
```

- *Type:* str

---

##### `deployment_type`<sup>Required</sup> <a name="deployment_type" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `publicly_accessible`<sup>Required</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.publiclyAccessible"></a>

```python
publicly_accessible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_subnet_ids`<sup>Required</sup> <a name="vpc_subnet_ids" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSubnetIds"></a>

```python
vpc_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TimestreamInfluxDbInstanceConfig <a name="TimestreamInfluxDbInstanceConfig" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_instance

timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig(
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
  log_delivery_configuration: TimestreamInfluxDbInstanceLogDeliveryConfiguration = None,
  maintenance_schedule: TimestreamInfluxDbInstanceMaintenanceSchedule = None,
  name: str = None,
  network_type: str = None,
  organization: str = None,
  password: str = None,
  port: typing.Union[int, float] = None,
  publicly_accessible: bool | IResolvable = None,
  tags: IResolvable | typing.List[TimestreamInfluxDbInstanceTags] = None,
  username: str = None,
  vpc_security_group_ids: typing.List[str] = None,
  vpc_subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.allocatedStorage">allocated_storage</a></code> | <code>typing.Union[int, float]</code> | The allocated storage for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.bucket">bucket</a></code> | <code>str</code> | The bucket for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dbInstanceType">db_instance_type</a></code> | <code>str</code> | The compute instance of the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dbParameterGroupIdentifier">db_parameter_group_identifier</a></code> | <code>str</code> | The name of an existing InfluxDB parameter group. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dbStorageType">db_storage_type</a></code> | <code>str</code> | The storage type of the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.deploymentType">deployment_type</a></code> | <code>str</code> | Deployment type of the InfluxDB Instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.logDeliveryConfiguration">log_delivery_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a></code> | Configuration for sending logs to customer account from the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.maintenanceSchedule">maintenance_schedule</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a></code> | The maintenance schedule for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.name">name</a></code> | <code>str</code> | The unique name that is associated with the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.networkType">network_type</a></code> | <code>str</code> | Network type of the InfluxDB Instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.organization">organization</a></code> | <code>str</code> | The organization for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.password">password</a></code> | <code>str</code> | The password for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port number on which InfluxDB accepts connections. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | Attach a public IP to the customer ENI. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.username">username</a></code> | <code>str</code> | The username for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | A list of Amazon EC2 VPC security groups to associate with this InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.vpcSubnetIds">vpc_subnet_ids</a></code> | <code>typing.List[str]</code> | A list of EC2 subnet IDs for this InfluxDB instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allocated_storage`<sup>Optional</sup> <a name="allocated_storage" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.allocatedStorage"></a>

```python
allocated_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The allocated storage for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#allocated_storage TimestreamInfluxDbInstance#allocated_storage}

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The bucket for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#bucket TimestreamInfluxDbInstance#bucket}

---

##### `db_instance_type`<sup>Optional</sup> <a name="db_instance_type" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dbInstanceType"></a>

```python
db_instance_type: str
```

- *Type:* str

The compute instance of the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#db_instance_type TimestreamInfluxDbInstance#db_instance_type}

---

##### `db_parameter_group_identifier`<sup>Optional</sup> <a name="db_parameter_group_identifier" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dbParameterGroupIdentifier"></a>

```python
db_parameter_group_identifier: str
```

- *Type:* str

The name of an existing InfluxDB parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#db_parameter_group_identifier TimestreamInfluxDbInstance#db_parameter_group_identifier}

---

##### `db_storage_type`<sup>Optional</sup> <a name="db_storage_type" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dbStorageType"></a>

```python
db_storage_type: str
```

- *Type:* str

The storage type of the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#db_storage_type TimestreamInfluxDbInstance#db_storage_type}

---

##### `deployment_type`<sup>Optional</sup> <a name="deployment_type" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

Deployment type of the InfluxDB Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#deployment_type TimestreamInfluxDbInstance#deployment_type}

---

##### `log_delivery_configuration`<sup>Optional</sup> <a name="log_delivery_configuration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.logDeliveryConfiguration"></a>

```python
log_delivery_configuration: TimestreamInfluxDbInstanceLogDeliveryConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a>

Configuration for sending logs to customer account from the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#log_delivery_configuration TimestreamInfluxDbInstance#log_delivery_configuration}

---

##### `maintenance_schedule`<sup>Optional</sup> <a name="maintenance_schedule" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.maintenanceSchedule"></a>

```python
maintenance_schedule: TimestreamInfluxDbInstanceMaintenanceSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a>

The maintenance schedule for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#maintenance_schedule TimestreamInfluxDbInstance#maintenance_schedule}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The unique name that is associated with the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#name TimestreamInfluxDbInstance#name}

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

Network type of the InfluxDB Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#network_type TimestreamInfluxDbInstance#network_type}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

The organization for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#organization TimestreamInfluxDbInstance#organization}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.password"></a>

```python
password: str
```

- *Type:* str

The password for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#password TimestreamInfluxDbInstance#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port number on which InfluxDB accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#port TimestreamInfluxDbInstance#port}

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.publiclyAccessible"></a>

```python
publicly_accessible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Attach a public IP to the customer ENI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#publicly_accessible TimestreamInfluxDbInstance#publicly_accessible}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[TimestreamInfluxDbInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>]

An arbitrary set of tags (key-value pairs) for this DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#tags TimestreamInfluxDbInstance#tags}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.username"></a>

```python
username: str
```

- *Type:* str

The username for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#username TimestreamInfluxDbInstance#username}

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of Amazon EC2 VPC security groups to associate with this InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#vpc_security_group_ids TimestreamInfluxDbInstance#vpc_security_group_ids}

---

##### `vpc_subnet_ids`<sup>Optional</sup> <a name="vpc_subnet_ids" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.vpcSubnetIds"></a>

```python
vpc_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of EC2 subnet IDs for this InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#vpc_subnet_ids TimestreamInfluxDbInstance#vpc_subnet_ids}

---

### TimestreamInfluxDbInstanceLogDeliveryConfiguration <a name="TimestreamInfluxDbInstanceLogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_instance

timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration(
  s3_configuration: TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration.property.s3Configuration">s3_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a></code> | S3 configuration for sending logs to customer account from the InfluxDB instance. |

---

##### `s3_configuration`<sup>Optional</sup> <a name="s3_configuration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration.property.s3Configuration"></a>

```python
s3_configuration: TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a>

S3 configuration for sending logs to customer account from the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#s3_configuration TimestreamInfluxDbInstance#s3_configuration}

---

### TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration <a name="TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_instance

timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration(
  bucket_name: str = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration.property.bucketName">bucket_name</a></code> | <code>str</code> | The bucket name for logs to be sent from the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether logging to customer specified bucket is enabled. |

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

The bucket name for logs to be sent from the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#bucket_name TimestreamInfluxDbInstance#bucket_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether logging to customer specified bucket is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#enabled TimestreamInfluxDbInstance#enabled}

---

### TimestreamInfluxDbInstanceMaintenanceSchedule <a name="TimestreamInfluxDbInstanceMaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_instance

timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule(
  preferred_maintenance_window: str = None,
  timezone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | The preferred maintenance window in format ddd:HH:MM-ddd:HH:MM. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule.property.timezone">timezone</a></code> | <code>str</code> | The IANA timezone identifier for the maintenance schedule. |

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

The preferred maintenance window in format ddd:HH:MM-ddd:HH:MM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#preferred_maintenance_window TimestreamInfluxDbInstance#preferred_maintenance_window}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

The IANA timezone identifier for the maintenance schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#timezone TimestreamInfluxDbInstance#timezone}

---

### TimestreamInfluxDbInstanceTags <a name="TimestreamInfluxDbInstanceTags" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_instance

timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#key TimestreamInfluxDbInstance#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#value TimestreamInfluxDbInstance#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference <a name="TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_instance

timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.putS3Configuration">put_s3_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.resetS3Configuration">reset_s3_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_configuration` <a name="put_s3_configuration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.putS3Configuration"></a>

```python
def put_s3_configuration(
  bucket_name: str = None,
  enabled: bool | IResolvable = None
) -> None
```

###### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.putS3Configuration.parameter.bucketName"></a>

- *Type:* str

The bucket name for logs to be sent from the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#bucket_name TimestreamInfluxDbInstance#bucket_name}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.putS3Configuration.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether logging to customer specified bucket is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_influx_db_instance#enabled TimestreamInfluxDbInstance#enabled}

---

##### `reset_s3_configuration` <a name="reset_s3_configuration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.resetS3Configuration"></a>

```python
def reset_s3_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.s3Configuration">s3_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.s3ConfigurationInput">s3_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_configuration`<sup>Required</sup> <a name="s3_configuration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.s3Configuration"></a>

```python
s3_configuration: TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference</a>

---

##### `s3_configuration_input`<sup>Optional</sup> <a name="s3_configuration_input" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.s3ConfigurationInput"></a>

```python
s3_configuration_input: IResolvable | TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TimestreamInfluxDbInstanceLogDeliveryConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a>

---


### TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference <a name="TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_instance

timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a>

---


### TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference <a name="TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_instance

timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resetPreferredMaintenanceWindow">reset_preferred_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resetTimezone">reset_timezone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_preferred_maintenance_window` <a name="reset_preferred_maintenance_window" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resetPreferredMaintenanceWindow"></a>

```python
def reset_preferred_maintenance_window() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resetTimezone"></a>

```python
def reset_timezone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.preferredMaintenanceWindowInput">preferred_maintenance_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preferred_maintenance_window_input`<sup>Optional</sup> <a name="preferred_maintenance_window_input" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.preferredMaintenanceWindowInput"></a>

```python
preferred_maintenance_window_input: str
```

- *Type:* str

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `preferred_maintenance_window`<sup>Required</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TimestreamInfluxDbInstanceMaintenanceSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a>

---


### TimestreamInfluxDbInstanceTagsList <a name="TimestreamInfluxDbInstanceTagsList" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_instance

timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TimestreamInfluxDbInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TimestreamInfluxDbInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>]

---


### TimestreamInfluxDbInstanceTagsOutputReference <a name="TimestreamInfluxDbInstanceTagsOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_influx_db_instance

timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TimestreamInfluxDbInstanceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>

---



