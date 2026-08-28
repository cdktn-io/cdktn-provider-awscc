# `timestreamInfluxDbInstance` Submodule <a name="`timestreamInfluxDbInstance` Submodule" id="@cdktn/provider-awscc.timestreamInfluxDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TimestreamInfluxDbInstance <a name="TimestreamInfluxDbInstance" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance awscc_timestream_influx_db_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_instance.TimestreamInfluxDbInstance;

TimestreamInfluxDbInstance.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .allocatedStorage(java.lang.Number)
//  .bucket(java.lang.String)
//  .dbInstanceType(java.lang.String)
//  .dbParameterGroupIdentifier(java.lang.String)
//  .dbStorageType(java.lang.String)
//  .deploymentType(java.lang.String)
//  .logDeliveryConfiguration(TimestreamInfluxDbInstanceLogDeliveryConfiguration)
//  .maintenanceSchedule(TimestreamInfluxDbInstanceMaintenanceSchedule)
//  .name(java.lang.String)
//  .networkType(java.lang.String)
//  .organization(java.lang.String)
//  .password(java.lang.String)
//  .port(java.lang.Number)
//  .publiclyAccessible(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<TimestreamInfluxDbInstanceTags>)
//  .username(java.lang.String)
//  .vpcSecurityGroupIds(java.util.List<java.lang.String>)
//  .vpcSubnetIds(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.Number</code> | The allocated storage for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | The bucket for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.dbInstanceType">dbInstanceType</a></code> | <code>java.lang.String</code> | The compute instance of the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.dbParameterGroupIdentifier">dbParameterGroupIdentifier</a></code> | <code>java.lang.String</code> | The name of an existing InfluxDB parameter group. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.dbStorageType">dbStorageType</a></code> | <code>java.lang.String</code> | The storage type of the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | Deployment type of the InfluxDB Instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.logDeliveryConfiguration">logDeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a></code> | Configuration for sending logs to customer account from the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.maintenanceSchedule">maintenanceSchedule</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a></code> | The maintenance schedule for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The unique name that is associated with the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.networkType">networkType</a></code> | <code>java.lang.String</code> | Network type of the InfluxDB Instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | The organization for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | The password for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | The port number on which InfluxDB accepts connections. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Attach a public IP to the customer ENI. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>></code> | An arbitrary set of tags (key-value pairs) for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | The username for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of Amazon EC2 VPC security groups to associate with this InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.vpcSubnetIds">vpcSubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of EC2 subnet IDs for this InfluxDB instance. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allocatedStorage`<sup>Optional</sup> <a name="allocatedStorage" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.allocatedStorage"></a>

- *Type:* java.lang.Number

The allocated storage for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#allocated_storage TimestreamInfluxDbInstance#allocated_storage}

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

The bucket for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#bucket TimestreamInfluxDbInstance#bucket}

---

##### `dbInstanceType`<sup>Optional</sup> <a name="dbInstanceType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.dbInstanceType"></a>

- *Type:* java.lang.String

The compute instance of the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#db_instance_type TimestreamInfluxDbInstance#db_instance_type}

---

##### `dbParameterGroupIdentifier`<sup>Optional</sup> <a name="dbParameterGroupIdentifier" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.dbParameterGroupIdentifier"></a>

- *Type:* java.lang.String

The name of an existing InfluxDB parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#db_parameter_group_identifier TimestreamInfluxDbInstance#db_parameter_group_identifier}

---

##### `dbStorageType`<sup>Optional</sup> <a name="dbStorageType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.dbStorageType"></a>

- *Type:* java.lang.String

The storage type of the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#db_storage_type TimestreamInfluxDbInstance#db_storage_type}

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.deploymentType"></a>

- *Type:* java.lang.String

Deployment type of the InfluxDB Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#deployment_type TimestreamInfluxDbInstance#deployment_type}

---

##### `logDeliveryConfiguration`<sup>Optional</sup> <a name="logDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.logDeliveryConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a>

Configuration for sending logs to customer account from the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#log_delivery_configuration TimestreamInfluxDbInstance#log_delivery_configuration}

---

##### `maintenanceSchedule`<sup>Optional</sup> <a name="maintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.maintenanceSchedule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a>

The maintenance schedule for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#maintenance_schedule TimestreamInfluxDbInstance#maintenance_schedule}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The unique name that is associated with the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#name TimestreamInfluxDbInstance#name}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.networkType"></a>

- *Type:* java.lang.String

Network type of the InfluxDB Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#network_type TimestreamInfluxDbInstance#network_type}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

The organization for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#organization TimestreamInfluxDbInstance#organization}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.password"></a>

- *Type:* java.lang.String

The password for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#password TimestreamInfluxDbInstance#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

The port number on which InfluxDB accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#port TimestreamInfluxDbInstance#port}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.publiclyAccessible"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Attach a public IP to the customer ENI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#publicly_accessible TimestreamInfluxDbInstance#publicly_accessible}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>>

An arbitrary set of tags (key-value pairs) for this DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#tags TimestreamInfluxDbInstance#tags}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.username"></a>

- *Type:* java.lang.String

The username for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#username TimestreamInfluxDbInstance#username}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

A list of Amazon EC2 VPC security groups to associate with this InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#vpc_security_group_ids TimestreamInfluxDbInstance#vpc_security_group_ids}

---

##### `vpcSubnetIds`<sup>Optional</sup> <a name="vpcSubnetIds" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.vpcSubnetIds"></a>

- *Type:* java.util.List<java.lang.String>

A list of EC2 subnet IDs for this InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#vpc_subnet_ids TimestreamInfluxDbInstance#vpc_subnet_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putLogDeliveryConfiguration">putLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putMaintenanceSchedule">putMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetAllocatedStorage">resetAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDbInstanceType">resetDbInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDbParameterGroupIdentifier">resetDbParameterGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDbStorageType">resetDbStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDeploymentType">resetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetLogDeliveryConfiguration">resetLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetMaintenanceSchedule">resetMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetPubliclyAccessible">resetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetVpcSubnetIds">resetVpcSubnetIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogDeliveryConfiguration` <a name="putLogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putLogDeliveryConfiguration"></a>

```java
public void putLogDeliveryConfiguration(TimestreamInfluxDbInstanceLogDeliveryConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putLogDeliveryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a>

---

##### `putMaintenanceSchedule` <a name="putMaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putMaintenanceSchedule"></a>

```java
public void putMaintenanceSchedule(TimestreamInfluxDbInstanceMaintenanceSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putMaintenanceSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<TimestreamInfluxDbInstanceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>>

---

##### `resetAllocatedStorage` <a name="resetAllocatedStorage" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetAllocatedStorage"></a>

```java
public void resetAllocatedStorage()
```

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetDbInstanceType` <a name="resetDbInstanceType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDbInstanceType"></a>

```java
public void resetDbInstanceType()
```

##### `resetDbParameterGroupIdentifier` <a name="resetDbParameterGroupIdentifier" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDbParameterGroupIdentifier"></a>

```java
public void resetDbParameterGroupIdentifier()
```

##### `resetDbStorageType` <a name="resetDbStorageType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDbStorageType"></a>

```java
public void resetDbStorageType()
```

##### `resetDeploymentType` <a name="resetDeploymentType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDeploymentType"></a>

```java
public void resetDeploymentType()
```

##### `resetLogDeliveryConfiguration` <a name="resetLogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetLogDeliveryConfiguration"></a>

```java
public void resetLogDeliveryConfiguration()
```

##### `resetMaintenanceSchedule` <a name="resetMaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetMaintenanceSchedule"></a>

```java
public void resetMaintenanceSchedule()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetName"></a>

```java
public void resetName()
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetNetworkType"></a>

```java
public void resetNetworkType()
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetOrganization"></a>

```java
public void resetOrganization()
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetPort"></a>

```java
public void resetPort()
```

##### `resetPubliclyAccessible` <a name="resetPubliclyAccessible" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetPubliclyAccessible"></a>

```java
public void resetPubliclyAccessible()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetTags"></a>

```java
public void resetTags()
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetUsername"></a>

```java
public void resetUsername()
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetVpcSecurityGroupIds"></a>

```java
public void resetVpcSecurityGroupIds()
```

##### `resetVpcSubnetIds` <a name="resetVpcSubnetIds" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetVpcSubnetIds"></a>

```java
public void resetVpcSubnetIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TimestreamInfluxDbInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isConstruct"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_instance.TimestreamInfluxDbInstance;

TimestreamInfluxDbInstance.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_instance.TimestreamInfluxDbInstance;

TimestreamInfluxDbInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_instance.TimestreamInfluxDbInstance;

TimestreamInfluxDbInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_instance.TimestreamInfluxDbInstance;

TimestreamInfluxDbInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TimestreamInfluxDbInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a TimestreamInfluxDbInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TimestreamInfluxDbInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TimestreamInfluxDbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the TimestreamInfluxDbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.influxAuthParametersSecretArn">influxAuthParametersSecretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.influxDbInstanceId">influxDbInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.logDeliveryConfiguration">logDeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference">TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference">TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.nextMaintenanceTime">nextMaintenanceTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.secondaryAvailabilityZone">secondaryAvailabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList">TimestreamInfluxDbInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.allocatedStorageInput">allocatedStorageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbInstanceTypeInput">dbInstanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbParameterGroupIdentifierInput">dbParameterGroupIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbStorageTypeInput">dbStorageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.logDeliveryConfigurationInput">logDeliveryConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.maintenanceScheduleInput">maintenanceScheduleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.networkTypeInput">networkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.publiclyAccessibleInput">publiclyAccessibleInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSubnetIdsInput">vpcSubnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbInstanceType">dbInstanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbParameterGroupIdentifier">dbParameterGroupIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbStorageType">dbStorageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.networkType">networkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSubnetIds">vpcSubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `influxAuthParametersSecretArn`<sup>Required</sup> <a name="influxAuthParametersSecretArn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.influxAuthParametersSecretArn"></a>

```java
public java.lang.String getInfluxAuthParametersSecretArn();
```

- *Type:* java.lang.String

---

##### `influxDbInstanceId`<sup>Required</sup> <a name="influxDbInstanceId" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.influxDbInstanceId"></a>

```java
public java.lang.String getInfluxDbInstanceId();
```

- *Type:* java.lang.String

---

##### `logDeliveryConfiguration`<sup>Required</sup> <a name="logDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.logDeliveryConfiguration"></a>

```java
public TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference getLogDeliveryConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference">TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference</a>

---

##### `maintenanceSchedule`<sup>Required</sup> <a name="maintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.maintenanceSchedule"></a>

```java
public TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference getMaintenanceSchedule();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference">TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference</a>

---

##### `nextMaintenanceTime`<sup>Required</sup> <a name="nextMaintenanceTime" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.nextMaintenanceTime"></a>

```java
public java.lang.String getNextMaintenanceTime();
```

- *Type:* java.lang.String

---

##### `secondaryAvailabilityZone`<sup>Required</sup> <a name="secondaryAvailabilityZone" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.secondaryAvailabilityZone"></a>

```java
public java.lang.String getSecondaryAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.tags"></a>

```java
public TimestreamInfluxDbInstanceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList">TimestreamInfluxDbInstanceTagsList</a>

---

##### `allocatedStorageInput`<sup>Optional</sup> <a name="allocatedStorageInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.allocatedStorageInput"></a>

```java
public java.lang.Number getAllocatedStorageInput();
```

- *Type:* java.lang.Number

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `dbInstanceTypeInput`<sup>Optional</sup> <a name="dbInstanceTypeInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbInstanceTypeInput"></a>

```java
public java.lang.String getDbInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `dbParameterGroupIdentifierInput`<sup>Optional</sup> <a name="dbParameterGroupIdentifierInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbParameterGroupIdentifierInput"></a>

```java
public java.lang.String getDbParameterGroupIdentifierInput();
```

- *Type:* java.lang.String

---

##### `dbStorageTypeInput`<sup>Optional</sup> <a name="dbStorageTypeInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbStorageTypeInput"></a>

```java
public java.lang.String getDbStorageTypeInput();
```

- *Type:* java.lang.String

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.deploymentTypeInput"></a>

```java
public java.lang.String getDeploymentTypeInput();
```

- *Type:* java.lang.String

---

##### `logDeliveryConfigurationInput`<sup>Optional</sup> <a name="logDeliveryConfigurationInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.logDeliveryConfigurationInput"></a>

```java
public IResolvable|TimestreamInfluxDbInstanceLogDeliveryConfiguration getLogDeliveryConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a>

---

##### `maintenanceScheduleInput`<sup>Optional</sup> <a name="maintenanceScheduleInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.maintenanceScheduleInput"></a>

```java
public IResolvable|TimestreamInfluxDbInstanceMaintenanceSchedule getMaintenanceScheduleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.networkTypeInput"></a>

```java
public java.lang.String getNetworkTypeInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `publiclyAccessibleInput`<sup>Optional</sup> <a name="publiclyAccessibleInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.publiclyAccessibleInput"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessibleInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.tagsInput"></a>

```java
public IResolvable|java.util.List<TimestreamInfluxDbInstanceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcSubnetIdsInput`<sup>Optional</sup> <a name="vpcSubnetIdsInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSubnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getVpcSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.allocatedStorage"></a>

```java
public java.lang.Number getAllocatedStorage();
```

- *Type:* java.lang.Number

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `dbInstanceType`<sup>Required</sup> <a name="dbInstanceType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbInstanceType"></a>

```java
public java.lang.String getDbInstanceType();
```

- *Type:* java.lang.String

---

##### `dbParameterGroupIdentifier`<sup>Required</sup> <a name="dbParameterGroupIdentifier" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbParameterGroupIdentifier"></a>

```java
public java.lang.String getDbParameterGroupIdentifier();
```

- *Type:* java.lang.String

---

##### `dbStorageType`<sup>Required</sup> <a name="dbStorageType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbStorageType"></a>

```java
public java.lang.String getDbStorageType();
```

- *Type:* java.lang.String

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.publiclyAccessible"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessible();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcSubnetIds`<sup>Required</sup> <a name="vpcSubnetIds" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSubnetIds"></a>

```java
public java.util.List<java.lang.String> getVpcSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TimestreamInfluxDbInstanceConfig <a name="TimestreamInfluxDbInstanceConfig" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_instance.TimestreamInfluxDbInstanceConfig;

TimestreamInfluxDbInstanceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .allocatedStorage(java.lang.Number)
//  .bucket(java.lang.String)
//  .dbInstanceType(java.lang.String)
//  .dbParameterGroupIdentifier(java.lang.String)
//  .dbStorageType(java.lang.String)
//  .deploymentType(java.lang.String)
//  .logDeliveryConfiguration(TimestreamInfluxDbInstanceLogDeliveryConfiguration)
//  .maintenanceSchedule(TimestreamInfluxDbInstanceMaintenanceSchedule)
//  .name(java.lang.String)
//  .networkType(java.lang.String)
//  .organization(java.lang.String)
//  .password(java.lang.String)
//  .port(java.lang.Number)
//  .publiclyAccessible(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<TimestreamInfluxDbInstanceTags>)
//  .username(java.lang.String)
//  .vpcSecurityGroupIds(java.util.List<java.lang.String>)
//  .vpcSubnetIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.Number</code> | The allocated storage for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | The bucket for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dbInstanceType">dbInstanceType</a></code> | <code>java.lang.String</code> | The compute instance of the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dbParameterGroupIdentifier">dbParameterGroupIdentifier</a></code> | <code>java.lang.String</code> | The name of an existing InfluxDB parameter group. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dbStorageType">dbStorageType</a></code> | <code>java.lang.String</code> | The storage type of the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | Deployment type of the InfluxDB Instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.logDeliveryConfiguration">logDeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a></code> | Configuration for sending logs to customer account from the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a></code> | The maintenance schedule for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | The unique name that is associated with the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.networkType">networkType</a></code> | <code>java.lang.String</code> | Network type of the InfluxDB Instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | The organization for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.password">password</a></code> | <code>java.lang.String</code> | The password for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.port">port</a></code> | <code>java.lang.Number</code> | The port number on which InfluxDB accepts connections. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Attach a public IP to the customer ENI. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>></code> | An arbitrary set of tags (key-value pairs) for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.username">username</a></code> | <code>java.lang.String</code> | The username for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of Amazon EC2 VPC security groups to associate with this InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.vpcSubnetIds">vpcSubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of EC2 subnet IDs for this InfluxDB instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allocatedStorage`<sup>Optional</sup> <a name="allocatedStorage" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.allocatedStorage"></a>

```java
public java.lang.Number getAllocatedStorage();
```

- *Type:* java.lang.Number

The allocated storage for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#allocated_storage TimestreamInfluxDbInstance#allocated_storage}

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

The bucket for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#bucket TimestreamInfluxDbInstance#bucket}

---

##### `dbInstanceType`<sup>Optional</sup> <a name="dbInstanceType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dbInstanceType"></a>

```java
public java.lang.String getDbInstanceType();
```

- *Type:* java.lang.String

The compute instance of the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#db_instance_type TimestreamInfluxDbInstance#db_instance_type}

---

##### `dbParameterGroupIdentifier`<sup>Optional</sup> <a name="dbParameterGroupIdentifier" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dbParameterGroupIdentifier"></a>

```java
public java.lang.String getDbParameterGroupIdentifier();
```

- *Type:* java.lang.String

The name of an existing InfluxDB parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#db_parameter_group_identifier TimestreamInfluxDbInstance#db_parameter_group_identifier}

---

##### `dbStorageType`<sup>Optional</sup> <a name="dbStorageType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dbStorageType"></a>

```java
public java.lang.String getDbStorageType();
```

- *Type:* java.lang.String

The storage type of the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#db_storage_type TimestreamInfluxDbInstance#db_storage_type}

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

Deployment type of the InfluxDB Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#deployment_type TimestreamInfluxDbInstance#deployment_type}

---

##### `logDeliveryConfiguration`<sup>Optional</sup> <a name="logDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.logDeliveryConfiguration"></a>

```java
public TimestreamInfluxDbInstanceLogDeliveryConfiguration getLogDeliveryConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a>

Configuration for sending logs to customer account from the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#log_delivery_configuration TimestreamInfluxDbInstance#log_delivery_configuration}

---

##### `maintenanceSchedule`<sup>Optional</sup> <a name="maintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.maintenanceSchedule"></a>

```java
public TimestreamInfluxDbInstanceMaintenanceSchedule getMaintenanceSchedule();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a>

The maintenance schedule for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#maintenance_schedule TimestreamInfluxDbInstance#maintenance_schedule}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The unique name that is associated with the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#name TimestreamInfluxDbInstance#name}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

Network type of the InfluxDB Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#network_type TimestreamInfluxDbInstance#network_type}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

The organization for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#organization TimestreamInfluxDbInstance#organization}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#password TimestreamInfluxDbInstance#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port number on which InfluxDB accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#port TimestreamInfluxDbInstance#port}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.publiclyAccessible"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessible();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Attach a public IP to the customer ENI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#publicly_accessible TimestreamInfluxDbInstance#publicly_accessible}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<TimestreamInfluxDbInstanceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>>

An arbitrary set of tags (key-value pairs) for this DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#tags TimestreamInfluxDbInstance#tags}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#username TimestreamInfluxDbInstance#username}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

A list of Amazon EC2 VPC security groups to associate with this InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#vpc_security_group_ids TimestreamInfluxDbInstance#vpc_security_group_ids}

---

##### `vpcSubnetIds`<sup>Optional</sup> <a name="vpcSubnetIds" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.vpcSubnetIds"></a>

```java
public java.util.List<java.lang.String> getVpcSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

A list of EC2 subnet IDs for this InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#vpc_subnet_ids TimestreamInfluxDbInstance#vpc_subnet_ids}

---

### TimestreamInfluxDbInstanceLogDeliveryConfiguration <a name="TimestreamInfluxDbInstanceLogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_instance.TimestreamInfluxDbInstanceLogDeliveryConfiguration;

TimestreamInfluxDbInstanceLogDeliveryConfiguration.builder()
//  .s3Configuration(TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a></code> | S3 configuration for sending logs to customer account from the InfluxDB instance. |

---

##### `s3Configuration`<sup>Optional</sup> <a name="s3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration.property.s3Configuration"></a>

```java
public TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration getS3Configuration();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a>

S3 configuration for sending logs to customer account from the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#s3_configuration TimestreamInfluxDbInstance#s3_configuration}

---

### TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration <a name="TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_instance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration;

TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration.builder()
//  .bucketName(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The bucket name for logs to be sent from the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether logging to customer specified bucket is enabled. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

The bucket name for logs to be sent from the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#bucket_name TimestreamInfluxDbInstance#bucket_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether logging to customer specified bucket is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#enabled TimestreamInfluxDbInstance#enabled}

---

### TimestreamInfluxDbInstanceMaintenanceSchedule <a name="TimestreamInfluxDbInstanceMaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_instance.TimestreamInfluxDbInstanceMaintenanceSchedule;

TimestreamInfluxDbInstanceMaintenanceSchedule.builder()
//  .preferredMaintenanceWindow(java.lang.String)
//  .timezone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | The preferred maintenance window in format ddd:HH:MM-ddd:HH:MM. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule.property.timezone">timezone</a></code> | <code>java.lang.String</code> | The IANA timezone identifier for the maintenance schedule. |

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

The preferred maintenance window in format ddd:HH:MM-ddd:HH:MM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#preferred_maintenance_window TimestreamInfluxDbInstance#preferred_maintenance_window}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

The IANA timezone identifier for the maintenance schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#timezone TimestreamInfluxDbInstance#timezone}

---

### TimestreamInfluxDbInstanceTags <a name="TimestreamInfluxDbInstanceTags" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_instance.TimestreamInfluxDbInstanceTags;

TimestreamInfluxDbInstanceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#key TimestreamInfluxDbInstance#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#value TimestreamInfluxDbInstance#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference <a name="TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_instance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference;

new TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.putS3Configuration">putS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.resetS3Configuration">resetS3Configuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Configuration` <a name="putS3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.putS3Configuration"></a>

```java
public void putS3Configuration(TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a>

---

##### `resetS3Configuration` <a name="resetS3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.resetS3Configuration"></a>

```java
public void resetS3Configuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.s3ConfigurationInput">s3ConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3Configuration`<sup>Required</sup> <a name="s3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.s3Configuration"></a>

```java
public TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference getS3Configuration();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference</a>

---

##### `s3ConfigurationInput`<sup>Optional</sup> <a name="s3ConfigurationInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.s3ConfigurationInput"></a>

```java
public IResolvable|TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration getS3ConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreamInfluxDbInstanceLogDeliveryConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a>

---


### TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference <a name="TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_instance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference;

new TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a>

---


### TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference <a name="TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_instance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference;

new TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resetPreferredMaintenanceWindow"></a>

```java
public void resetPreferredMaintenanceWindow()
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resetTimezone"></a>

```java
public void resetTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.preferredMaintenanceWindowInput"></a>

```java
public java.lang.String getPreferredMaintenanceWindowInput();
```

- *Type:* java.lang.String

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreamInfluxDbInstanceMaintenanceSchedule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a>

---


### TimestreamInfluxDbInstanceTagsList <a name="TimestreamInfluxDbInstanceTagsList" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_instance.TimestreamInfluxDbInstanceTagsList;

new TimestreamInfluxDbInstanceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.get"></a>

```java
public TimestreamInfluxDbInstanceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TimestreamInfluxDbInstanceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>>

---


### TimestreamInfluxDbInstanceTagsOutputReference <a name="TimestreamInfluxDbInstanceTagsOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_instance.TimestreamInfluxDbInstanceTagsOutputReference;

new TimestreamInfluxDbInstanceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreamInfluxDbInstanceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>

---



