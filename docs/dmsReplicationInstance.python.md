# `dmsReplicationInstance` Submodule <a name="`dmsReplicationInstance` Submodule" id="@cdktn/provider-awscc.dmsReplicationInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsReplicationInstance <a name="DmsReplicationInstance" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance awscc_dms_replication_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer"></a>

```python
from cdktn_provider_awscc import dms_replication_instance

dmsReplicationInstance.DmsReplicationInstance(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  replication_instance_class: str,
  allocated_storage: typing.Union[int, float] = None,
  allow_major_version_upgrade: bool | IResolvable = None,
  auto_minor_version_upgrade: bool | IResolvable = None,
  availability_zone: str = None,
  dns_name_servers: str = None,
  engine_version: str = None,
  kms_key_id: str = None,
  multi_az: bool | IResolvable = None,
  network_type: str = None,
  preferred_maintenance_window: str = None,
  publicly_accessible: bool | IResolvable = None,
  replication_instance_identifier: str = None,
  replication_subnet_group_identifier: str = None,
  resource_identifier: str = None,
  tags: IResolvable | typing.List[DmsReplicationInstanceTags] = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.replicationInstanceClass">replication_instance_class</a></code> | <code>str</code> | The compute and memory capacity of the replication instance as defined for the specified replication instance class. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.allocatedStorage">allocated_storage</a></code> | <code>typing.Union[int, float]</code> | The amount of storage (in gigabytes) to be initially allocated for the replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.allowMajorVersionUpgrade">allow_major_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates that major version upgrades are allowed. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | A value that indicates whether minor engine upgrades are applied automatically to the replication instance during the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | The Availability Zone that the replication instance will be created in. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.dnsNameServers">dns_name_servers</a></code> | <code>str</code> | A list of custom DNS name servers supported for the replication instance to access your on-premise source or target database. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | The engine version number of the replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | An AWS KMS key identifier that is used to encrypt the data on the replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.multiAz">multi_az</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the replication instance is a Multi-AZ deployment. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.networkType">network_type</a></code> | <code>str</code> | The type of IP address protocol used by a replication instance, such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | The weekly time range during which system maintenance can occur, in UTC. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies the accessibility options for the replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.replicationInstanceIdentifier">replication_instance_identifier</a></code> | <code>str</code> | The replication instance identifier. This parameter is stored as a lowercase string. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.replicationSubnetGroupIdentifier">replication_subnet_group_identifier</a></code> | <code>str</code> | A subnet group to associate with the replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.resourceIdentifier">resource_identifier</a></code> | <code>str</code> | A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a>]</code> | One or more tags to be assigned to the replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | Specifies the virtual private cloud (VPC) security group to be used with the replication instance. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `replication_instance_class`<sup>Required</sup> <a name="replication_instance_class" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.replicationInstanceClass"></a>

- *Type:* str

The compute and memory capacity of the replication instance as defined for the specified replication instance class.

For example, to specify the instance class dms.c4.large, set this parameter to `"dms.c4.large"`. For more information on the settings and capacities for the available replication instance classes, see [Selecting the right AWS DMS replication instance for your migration](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth) in the AWS Database Migration Service User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#replication_instance_class DmsReplicationInstance#replication_instance_class}

---

##### `allocated_storage`<sup>Optional</sup> <a name="allocated_storage" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.allocatedStorage"></a>

- *Type:* typing.Union[int, float]

The amount of storage (in gigabytes) to be initially allocated for the replication instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#allocated_storage DmsReplicationInstance#allocated_storage}

---

##### `allow_major_version_upgrade`<sup>Optional</sup> <a name="allow_major_version_upgrade" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.allowMajorVersionUpgrade"></a>

- *Type:* bool | cdktn.IResolvable

Indicates that major version upgrades are allowed.

Changing this parameter does not result in an outage, and the change is asynchronously applied as soon as possible.

This parameter must be set to `true` when specifying a value for the `EngineVersion` parameter that is a different major version than the replication instance's current version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#allow_major_version_upgrade DmsReplicationInstance#allow_major_version_upgrade}

---

##### `auto_minor_version_upgrade`<sup>Optional</sup> <a name="auto_minor_version_upgrade" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.autoMinorVersionUpgrade"></a>

- *Type:* bool | cdktn.IResolvable

A value that indicates whether minor engine upgrades are applied automatically to the replication instance during the maintenance window.

This parameter defaults to `true`.

Default: `true`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#auto_minor_version_upgrade DmsReplicationInstance#auto_minor_version_upgrade}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.availabilityZone"></a>

- *Type:* str

The Availability Zone that the replication instance will be created in.

The default value is a random, system-chosen Availability Zone in the endpoint's AWS Region, for example `us-east-1d`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#availability_zone DmsReplicationInstance#availability_zone}

---

##### `dns_name_servers`<sup>Optional</sup> <a name="dns_name_servers" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.dnsNameServers"></a>

- *Type:* str

A list of custom DNS name servers supported for the replication instance to access your on-premise source or target database.

This list overrides the default name servers supported by the replication instance. You can specify a comma-separated list of internet addresses for up to four on-premise DNS name servers. For example: `"1.1.1.1,2.2.2.2,3.3.3.3,4.4.4.4"`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#dns_name_servers DmsReplicationInstance#dns_name_servers}

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.engineVersion"></a>

- *Type:* str

The engine version number of the replication instance.

If an engine version number is not specified when a replication instance is created, the default is the latest engine version available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#engine_version DmsReplicationInstance#engine_version}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

An AWS KMS key identifier that is used to encrypt the data on the replication instance.

If you don't specify a value for the `KmsKeyId` parameter, AWS DMS uses your default encryption key.

AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#kms_key_id DmsReplicationInstance#kms_key_id}

---

##### `multi_az`<sup>Optional</sup> <a name="multi_az" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.multiAz"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the replication instance is a Multi-AZ deployment.

You can't set the `AvailabilityZone` parameter if the Multi-AZ parameter is set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#multi_az DmsReplicationInstance#multi_az}

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.networkType"></a>

- *Type:* str

The type of IP address protocol used by a replication instance, such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing.

IPv6 only is not yet supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#network_type DmsReplicationInstance#network_type}

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* str

The weekly time range during which system maintenance can occur, in UTC.

Format: `ddd:hh24:mi-ddd:hh24:mi`

Default: A 30-minute window selected at random from an 8-hour block of time per AWS Region, occurring on a random day of the week.

Valid days (`ddd`): `Mon` | `Tue` | `Wed` | `Thu` | `Fri` | `Sat` | `Sun`

Constraints: Minimum 30-minute window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#preferred_maintenance_window DmsReplicationInstance#preferred_maintenance_window}

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.publiclyAccessible"></a>

- *Type:* bool | cdktn.IResolvable

Specifies the accessibility options for the replication instance.

A value of `true` represents an instance with a public IP address. A value of `false` represents an instance with a private IP address. The default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#publicly_accessible DmsReplicationInstance#publicly_accessible}

---

##### `replication_instance_identifier`<sup>Optional</sup> <a name="replication_instance_identifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.replicationInstanceIdentifier"></a>

- *Type:* str

The replication instance identifier. This parameter is stored as a lowercase string.

Constraints:

* Must contain 1-63 alphanumeric characters or hyphens.
* First character must be a letter.
* Can't end with a hyphen or contain two consecutive hyphens.

Example: `myrepinstance`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#replication_instance_identifier DmsReplicationInstance#replication_instance_identifier}

---

##### `replication_subnet_group_identifier`<sup>Optional</sup> <a name="replication_subnet_group_identifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.replicationSubnetGroupIdentifier"></a>

- *Type:* str

A subnet group to associate with the replication instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#replication_subnet_group_identifier DmsReplicationInstance#replication_subnet_group_identifier}

---

##### `resource_identifier`<sup>Optional</sup> <a name="resource_identifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.resourceIdentifier"></a>

- *Type:* str

A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object.

The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as `Example-App-ARN1`. For example, this value might result in the `EndpointArn` value `arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1`. If you don't specify a `ResourceIdentifier` value, AWS DMS generates a default identifier value for the end of `EndpointArn`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#resource_identifier DmsReplicationInstance#resource_identifier}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a>]

One or more tags to be assigned to the replication instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#tags DmsReplicationInstance#tags}

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* typing.List[str]

Specifies the virtual private cloud (VPC) security group to be used with the replication instance.

The VPC security group must work with the VPC containing the replication instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#vpc_security_group_ids DmsReplicationInstance#vpc_security_group_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetAllocatedStorage">reset_allocated_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetAllowMajorVersionUpgrade">reset_allow_major_version_upgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetAutoMinorVersionUpgrade">reset_auto_minor_version_upgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetDnsNameServers">reset_dns_name_servers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetEngineVersion">reset_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetMultiAz">reset_multi_az</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetNetworkType">reset_network_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetPreferredMaintenanceWindow">reset_preferred_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetPubliclyAccessible">reset_publicly_accessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetReplicationInstanceIdentifier">reset_replication_instance_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetReplicationSubnetGroupIdentifier">reset_replication_subnet_group_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetResourceIdentifier">reset_resource_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetVpcSecurityGroupIds">reset_vpc_security_group_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DmsReplicationInstanceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a>]

---

##### `reset_allocated_storage` <a name="reset_allocated_storage" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetAllocatedStorage"></a>

```python
def reset_allocated_storage() -> None
```

##### `reset_allow_major_version_upgrade` <a name="reset_allow_major_version_upgrade" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetAllowMajorVersionUpgrade"></a>

```python
def reset_allow_major_version_upgrade() -> None
```

##### `reset_auto_minor_version_upgrade` <a name="reset_auto_minor_version_upgrade" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetAutoMinorVersionUpgrade"></a>

```python
def reset_auto_minor_version_upgrade() -> None
```

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_dns_name_servers` <a name="reset_dns_name_servers" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetDnsNameServers"></a>

```python
def reset_dns_name_servers() -> None
```

##### `reset_engine_version` <a name="reset_engine_version" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetEngineVersion"></a>

```python
def reset_engine_version() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_multi_az` <a name="reset_multi_az" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetMultiAz"></a>

```python
def reset_multi_az() -> None
```

##### `reset_network_type` <a name="reset_network_type" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetNetworkType"></a>

```python
def reset_network_type() -> None
```

##### `reset_preferred_maintenance_window` <a name="reset_preferred_maintenance_window" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetPreferredMaintenanceWindow"></a>

```python
def reset_preferred_maintenance_window() -> None
```

##### `reset_publicly_accessible` <a name="reset_publicly_accessible" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetPubliclyAccessible"></a>

```python
def reset_publicly_accessible() -> None
```

##### `reset_replication_instance_identifier` <a name="reset_replication_instance_identifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetReplicationInstanceIdentifier"></a>

```python
def reset_replication_instance_identifier() -> None
```

##### `reset_replication_subnet_group_identifier` <a name="reset_replication_subnet_group_identifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetReplicationSubnetGroupIdentifier"></a>

```python
def reset_replication_subnet_group_identifier() -> None
```

##### `reset_resource_identifier` <a name="reset_resource_identifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetResourceIdentifier"></a>

```python
def reset_resource_identifier() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vpc_security_group_ids` <a name="reset_vpc_security_group_ids" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetVpcSecurityGroupIds"></a>

```python
def reset_vpc_security_group_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DmsReplicationInstance resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.isConstruct"></a>

```python
from cdktn_provider_awscc import dms_replication_instance

dmsReplicationInstance.DmsReplicationInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.isTerraformElement"></a>

```python
from cdktn_provider_awscc import dms_replication_instance

dmsReplicationInstance.DmsReplicationInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.isTerraformResource"></a>

```python
from cdktn_provider_awscc import dms_replication_instance

dmsReplicationInstance.DmsReplicationInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import dms_replication_instance

dmsReplicationInstance.DmsReplicationInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DmsReplicationInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DmsReplicationInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DmsReplicationInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DmsReplicationInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceArn">replication_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstancePrivateIpAddresses">replication_instance_private_ip_addresses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstancePublicIpAddresses">replication_instance_public_ip_addresses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList">DmsReplicationInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.allocatedStorageInput">allocated_storage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.allowMajorVersionUpgradeInput">allow_major_version_upgrade_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.autoMinorVersionUpgradeInput">auto_minor_version_upgrade_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.dnsNameServersInput">dns_name_servers_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.multiAzInput">multi_az_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.networkTypeInput">network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.preferredMaintenanceWindowInput">preferred_maintenance_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.publiclyAccessibleInput">publicly_accessible_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceClassInput">replication_instance_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceIdentifierInput">replication_instance_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationSubnetGroupIdentifierInput">replication_subnet_group_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.resourceIdentifierInput">resource_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.vpcSecurityGroupIdsInput">vpc_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.allocatedStorage">allocated_storage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.allowMajorVersionUpgrade">allow_major_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.dnsNameServers">dns_name_servers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.multiAz">multi_az</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceClass">replication_instance_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceIdentifier">replication_instance_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationSubnetGroupIdentifier">replication_subnet_group_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.resourceIdentifier">resource_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `replication_instance_arn`<sup>Required</sup> <a name="replication_instance_arn" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceArn"></a>

```python
replication_instance_arn: str
```

- *Type:* str

---

##### `replication_instance_private_ip_addresses`<sup>Required</sup> <a name="replication_instance_private_ip_addresses" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstancePrivateIpAddresses"></a>

```python
replication_instance_private_ip_addresses: str
```

- *Type:* str

---

##### `replication_instance_public_ip_addresses`<sup>Required</sup> <a name="replication_instance_public_ip_addresses" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstancePublicIpAddresses"></a>

```python
replication_instance_public_ip_addresses: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.tags"></a>

```python
tags: DmsReplicationInstanceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList">DmsReplicationInstanceTagsList</a>

---

##### `allocated_storage_input`<sup>Optional</sup> <a name="allocated_storage_input" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.allocatedStorageInput"></a>

```python
allocated_storage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allow_major_version_upgrade_input`<sup>Optional</sup> <a name="allow_major_version_upgrade_input" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.allowMajorVersionUpgradeInput"></a>

```python
allow_major_version_upgrade_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `auto_minor_version_upgrade_input`<sup>Optional</sup> <a name="auto_minor_version_upgrade_input" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.autoMinorVersionUpgradeInput"></a>

```python
auto_minor_version_upgrade_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `dns_name_servers_input`<sup>Optional</sup> <a name="dns_name_servers_input" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.dnsNameServersInput"></a>

```python
dns_name_servers_input: str
```

- *Type:* str

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `multi_az_input`<sup>Optional</sup> <a name="multi_az_input" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.multiAzInput"></a>

```python
multi_az_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `network_type_input`<sup>Optional</sup> <a name="network_type_input" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.networkTypeInput"></a>

```python
network_type_input: str
```

- *Type:* str

---

##### `preferred_maintenance_window_input`<sup>Optional</sup> <a name="preferred_maintenance_window_input" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.preferredMaintenanceWindowInput"></a>

```python
preferred_maintenance_window_input: str
```

- *Type:* str

---

##### `publicly_accessible_input`<sup>Optional</sup> <a name="publicly_accessible_input" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.publiclyAccessibleInput"></a>

```python
publicly_accessible_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `replication_instance_class_input`<sup>Optional</sup> <a name="replication_instance_class_input" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceClassInput"></a>

```python
replication_instance_class_input: str
```

- *Type:* str

---

##### `replication_instance_identifier_input`<sup>Optional</sup> <a name="replication_instance_identifier_input" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceIdentifierInput"></a>

```python
replication_instance_identifier_input: str
```

- *Type:* str

---

##### `replication_subnet_group_identifier_input`<sup>Optional</sup> <a name="replication_subnet_group_identifier_input" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationSubnetGroupIdentifierInput"></a>

```python
replication_subnet_group_identifier_input: str
```

- *Type:* str

---

##### `resource_identifier_input`<sup>Optional</sup> <a name="resource_identifier_input" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.resourceIdentifierInput"></a>

```python
resource_identifier_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DmsReplicationInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a>]

---

##### `vpc_security_group_ids_input`<sup>Optional</sup> <a name="vpc_security_group_ids_input" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.vpcSecurityGroupIdsInput"></a>

```python
vpc_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allocated_storage`<sup>Required</sup> <a name="allocated_storage" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.allocatedStorage"></a>

```python
allocated_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allow_major_version_upgrade`<sup>Required</sup> <a name="allow_major_version_upgrade" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.allowMajorVersionUpgrade"></a>

```python
allow_major_version_upgrade: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `auto_minor_version_upgrade`<sup>Required</sup> <a name="auto_minor_version_upgrade" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.autoMinorVersionUpgrade"></a>

```python
auto_minor_version_upgrade: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `dns_name_servers`<sup>Required</sup> <a name="dns_name_servers" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.dnsNameServers"></a>

```python
dns_name_servers: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `multi_az`<sup>Required</sup> <a name="multi_az" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.multiAz"></a>

```python
multi_az: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `preferred_maintenance_window`<sup>Required</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

---

##### `publicly_accessible`<sup>Required</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.publiclyAccessible"></a>

```python
publicly_accessible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `replication_instance_class`<sup>Required</sup> <a name="replication_instance_class" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceClass"></a>

```python
replication_instance_class: str
```

- *Type:* str

---

##### `replication_instance_identifier`<sup>Required</sup> <a name="replication_instance_identifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceIdentifier"></a>

```python
replication_instance_identifier: str
```

- *Type:* str

---

##### `replication_subnet_group_identifier`<sup>Required</sup> <a name="replication_subnet_group_identifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationSubnetGroupIdentifier"></a>

```python
replication_subnet_group_identifier: str
```

- *Type:* str

---

##### `resource_identifier`<sup>Required</sup> <a name="resource_identifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.resourceIdentifier"></a>

```python
resource_identifier: str
```

- *Type:* str

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DmsReplicationInstanceConfig <a name="DmsReplicationInstanceConfig" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import dms_replication_instance

dmsReplicationInstance.DmsReplicationInstanceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  replication_instance_class: str,
  allocated_storage: typing.Union[int, float] = None,
  allow_major_version_upgrade: bool | IResolvable = None,
  auto_minor_version_upgrade: bool | IResolvable = None,
  availability_zone: str = None,
  dns_name_servers: str = None,
  engine_version: str = None,
  kms_key_id: str = None,
  multi_az: bool | IResolvable = None,
  network_type: str = None,
  preferred_maintenance_window: str = None,
  publicly_accessible: bool | IResolvable = None,
  replication_instance_identifier: str = None,
  replication_subnet_group_identifier: str = None,
  resource_identifier: str = None,
  tags: IResolvable | typing.List[DmsReplicationInstanceTags] = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationInstanceClass">replication_instance_class</a></code> | <code>str</code> | The compute and memory capacity of the replication instance as defined for the specified replication instance class. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.allocatedStorage">allocated_storage</a></code> | <code>typing.Union[int, float]</code> | The amount of storage (in gigabytes) to be initially allocated for the replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.allowMajorVersionUpgrade">allow_major_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates that major version upgrades are allowed. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | A value that indicates whether minor engine upgrades are applied automatically to the replication instance during the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | The Availability Zone that the replication instance will be created in. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.dnsNameServers">dns_name_servers</a></code> | <code>str</code> | A list of custom DNS name servers supported for the replication instance to access your on-premise source or target database. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.engineVersion">engine_version</a></code> | <code>str</code> | The engine version number of the replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | An AWS KMS key identifier that is used to encrypt the data on the replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.multiAz">multi_az</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the replication instance is a Multi-AZ deployment. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.networkType">network_type</a></code> | <code>str</code> | The type of IP address protocol used by a replication instance, such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | The weekly time range during which system maintenance can occur, in UTC. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies the accessibility options for the replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationInstanceIdentifier">replication_instance_identifier</a></code> | <code>str</code> | The replication instance identifier. This parameter is stored as a lowercase string. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationSubnetGroupIdentifier">replication_subnet_group_identifier</a></code> | <code>str</code> | A subnet group to associate with the replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.resourceIdentifier">resource_identifier</a></code> | <code>str</code> | A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a>]</code> | One or more tags to be assigned to the replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | Specifies the virtual private cloud (VPC) security group to be used with the replication instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `replication_instance_class`<sup>Required</sup> <a name="replication_instance_class" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationInstanceClass"></a>

```python
replication_instance_class: str
```

- *Type:* str

The compute and memory capacity of the replication instance as defined for the specified replication instance class.

For example, to specify the instance class dms.c4.large, set this parameter to `"dms.c4.large"`. For more information on the settings and capacities for the available replication instance classes, see [Selecting the right AWS DMS replication instance for your migration](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth) in the AWS Database Migration Service User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#replication_instance_class DmsReplicationInstance#replication_instance_class}

---

##### `allocated_storage`<sup>Optional</sup> <a name="allocated_storage" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.allocatedStorage"></a>

```python
allocated_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of storage (in gigabytes) to be initially allocated for the replication instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#allocated_storage DmsReplicationInstance#allocated_storage}

---

##### `allow_major_version_upgrade`<sup>Optional</sup> <a name="allow_major_version_upgrade" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.allowMajorVersionUpgrade"></a>

```python
allow_major_version_upgrade: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates that major version upgrades are allowed.

Changing this parameter does not result in an outage, and the change is asynchronously applied as soon as possible.

This parameter must be set to `true` when specifying a value for the `EngineVersion` parameter that is a different major version than the replication instance's current version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#allow_major_version_upgrade DmsReplicationInstance#allow_major_version_upgrade}

---

##### `auto_minor_version_upgrade`<sup>Optional</sup> <a name="auto_minor_version_upgrade" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.autoMinorVersionUpgrade"></a>

```python
auto_minor_version_upgrade: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A value that indicates whether minor engine upgrades are applied automatically to the replication instance during the maintenance window.

This parameter defaults to `true`.

Default: `true`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#auto_minor_version_upgrade DmsReplicationInstance#auto_minor_version_upgrade}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

The Availability Zone that the replication instance will be created in.

The default value is a random, system-chosen Availability Zone in the endpoint's AWS Region, for example `us-east-1d`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#availability_zone DmsReplicationInstance#availability_zone}

---

##### `dns_name_servers`<sup>Optional</sup> <a name="dns_name_servers" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.dnsNameServers"></a>

```python
dns_name_servers: str
```

- *Type:* str

A list of custom DNS name servers supported for the replication instance to access your on-premise source or target database.

This list overrides the default name servers supported by the replication instance. You can specify a comma-separated list of internet addresses for up to four on-premise DNS name servers. For example: `"1.1.1.1,2.2.2.2,3.3.3.3,4.4.4.4"`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#dns_name_servers DmsReplicationInstance#dns_name_servers}

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

The engine version number of the replication instance.

If an engine version number is not specified when a replication instance is created, the default is the latest engine version available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#engine_version DmsReplicationInstance#engine_version}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

An AWS KMS key identifier that is used to encrypt the data on the replication instance.

If you don't specify a value for the `KmsKeyId` parameter, AWS DMS uses your default encryption key.

AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#kms_key_id DmsReplicationInstance#kms_key_id}

---

##### `multi_az`<sup>Optional</sup> <a name="multi_az" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.multiAz"></a>

```python
multi_az: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the replication instance is a Multi-AZ deployment.

You can't set the `AvailabilityZone` parameter if the Multi-AZ parameter is set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#multi_az DmsReplicationInstance#multi_az}

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

The type of IP address protocol used by a replication instance, such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing.

IPv6 only is not yet supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#network_type DmsReplicationInstance#network_type}

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

The weekly time range during which system maintenance can occur, in UTC.

Format: `ddd:hh24:mi-ddd:hh24:mi`

Default: A 30-minute window selected at random from an 8-hour block of time per AWS Region, occurring on a random day of the week.

Valid days (`ddd`): `Mon` | `Tue` | `Wed` | `Thu` | `Fri` | `Sat` | `Sun`

Constraints: Minimum 30-minute window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#preferred_maintenance_window DmsReplicationInstance#preferred_maintenance_window}

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.publiclyAccessible"></a>

```python
publicly_accessible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies the accessibility options for the replication instance.

A value of `true` represents an instance with a public IP address. A value of `false` represents an instance with a private IP address. The default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#publicly_accessible DmsReplicationInstance#publicly_accessible}

---

##### `replication_instance_identifier`<sup>Optional</sup> <a name="replication_instance_identifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationInstanceIdentifier"></a>

```python
replication_instance_identifier: str
```

- *Type:* str

The replication instance identifier. This parameter is stored as a lowercase string.

Constraints:

* Must contain 1-63 alphanumeric characters or hyphens.
* First character must be a letter.
* Can't end with a hyphen or contain two consecutive hyphens.

Example: `myrepinstance`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#replication_instance_identifier DmsReplicationInstance#replication_instance_identifier}

---

##### `replication_subnet_group_identifier`<sup>Optional</sup> <a name="replication_subnet_group_identifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationSubnetGroupIdentifier"></a>

```python
replication_subnet_group_identifier: str
```

- *Type:* str

A subnet group to associate with the replication instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#replication_subnet_group_identifier DmsReplicationInstance#replication_subnet_group_identifier}

---

##### `resource_identifier`<sup>Optional</sup> <a name="resource_identifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.resourceIdentifier"></a>

```python
resource_identifier: str
```

- *Type:* str

A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object.

The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as `Example-App-ARN1`. For example, this value might result in the `EndpointArn` value `arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1`. If you don't specify a `ResourceIdentifier` value, AWS DMS generates a default identifier value for the end of `EndpointArn`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#resource_identifier DmsReplicationInstance#resource_identifier}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[DmsReplicationInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a>]

One or more tags to be assigned to the replication instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#tags DmsReplicationInstance#tags}

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the virtual private cloud (VPC) security group to be used with the replication instance.

The VPC security group must work with the VPC containing the replication instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#vpc_security_group_ids DmsReplicationInstance#vpc_security_group_ids}

---

### DmsReplicationInstanceTags <a name="DmsReplicationInstanceTags" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags.Initializer"></a>

```python
from cdktn_provider_awscc import dms_replication_instance

dmsReplicationInstance.DmsReplicationInstanceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#key DmsReplicationInstance#key}. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#value DmsReplicationInstance#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#key DmsReplicationInstance#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#value DmsReplicationInstance#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsReplicationInstanceTagsList <a name="DmsReplicationInstanceTagsList" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import dms_replication_instance

dmsReplicationInstance.DmsReplicationInstanceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsReplicationInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DmsReplicationInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a>]

---


### DmsReplicationInstanceTagsOutputReference <a name="DmsReplicationInstanceTagsOutputReference" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dms_replication_instance

dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsReplicationInstanceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a>

---



