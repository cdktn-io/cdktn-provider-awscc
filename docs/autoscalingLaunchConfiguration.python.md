# `autoscalingLaunchConfiguration` Submodule <a name="`autoscalingLaunchConfiguration` Submodule" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingLaunchConfiguration <a name="AutoscalingLaunchConfiguration" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration awscc_autoscaling_launch_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import autoscaling_launch_configuration

autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  image_id: str,
  instance_type: str,
  associate_public_ip_address: bool | IResolvable = None,
  block_device_mappings: IResolvable | typing.List[AutoscalingLaunchConfigurationBlockDeviceMappings] = None,
  classic_link_vpc_id: str = None,
  classic_link_vpc_security_groups: typing.List[str] = None,
  ebs_optimized: bool | IResolvable = None,
  iam_instance_profile: str = None,
  instance_id: str = None,
  instance_monitoring: bool | IResolvable = None,
  kernel_id: str = None,
  key_name: str = None,
  launch_configuration_name: str = None,
  metadata_options: AutoscalingLaunchConfigurationMetadataOptions = None,
  placement_tenancy: str = None,
  ram_disk_id: str = None,
  security_groups: typing.List[str] = None,
  spot_price: str = None,
  user_data: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.imageId">image_id</a></code> | <code>str</code> | Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.instanceType">instance_type</a></code> | <code>str</code> | Specifies the instance type of the EC2 instance. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>bool \| cdktn.IResolvable</code> | For Auto Scaling groups that are running in a virtual private cloud (VPC), specifies whether to assign a public IP address to the group's instances. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.blockDeviceMappings">block_device_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>]</code> | Specifies how block devices are exposed to the instance. You can specify virtual devices and EBS volumes. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.classicLinkVpcId">classic_link_vpc_id</a></code> | <code>str</code> | The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.classicLinkVpcSecurityGroups">classic_link_vpc_security_groups</a></code> | <code>typing.List[str]</code> | The IDs of one or more security groups for the VPC that you specified in the ClassicLinkVPCId property. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.ebsOptimized">ebs_optimized</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false). |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | Provides the name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | The ID of the Amazon EC2 instance you want to use to create the launch configuration. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.instanceMonitoring">instance_monitoring</a></code> | <code>bool \| cdktn.IResolvable</code> | Controls whether instances in this group are launched with detailed (true) or basic (false) monitoring. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.kernelId">kernel_id</a></code> | <code>str</code> | Provides the ID of the kernel associated with the EC2 AMI. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.keyName">key_name</a></code> | <code>str</code> | Provides the name of the EC2 key pair. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.launchConfigurationName">launch_configuration_name</a></code> | <code>str</code> | The name of the launch configuration. This name must be unique per Region per account. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.metadataOptions">metadata_options</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions">AutoscalingLaunchConfigurationMetadataOptions</a></code> | The metadata options for the instances. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.placementTenancy">placement_tenancy</a></code> | <code>str</code> | The tenancy of the instance, either default or dedicated. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.ramDiskId">ram_disk_id</a></code> | <code>str</code> | The ID of the RAM disk to select. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | A list that contains the security groups to assign to the instances in the Auto Scaling group. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.spotPrice">spot_price</a></code> | <code>str</code> | The maximum hourly price you are willing to pay for any Spot Instances launched to fulfill the request. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.userData">user_data</a></code> | <code>str</code> | The Base64-encoded user data to make available to the launched EC2 instances. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.imageId"></a>

- *Type:* str

Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#image_id AutoscalingLaunchConfiguration#image_id}

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.instanceType"></a>

- *Type:* str

Specifies the instance type of the EC2 instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#instance_type AutoscalingLaunchConfiguration#instance_type}

---

##### `associate_public_ip_address`<sup>Optional</sup> <a name="associate_public_ip_address" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.associatePublicIpAddress"></a>

- *Type:* bool | cdktn.IResolvable

For Auto Scaling groups that are running in a virtual private cloud (VPC), specifies whether to assign a public IP address to the group's instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#associate_public_ip_address AutoscalingLaunchConfiguration#associate_public_ip_address}

---

##### `block_device_mappings`<sup>Optional</sup> <a name="block_device_mappings" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.blockDeviceMappings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>]

Specifies how block devices are exposed to the instance. You can specify virtual devices and EBS volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#block_device_mappings AutoscalingLaunchConfiguration#block_device_mappings}

---

##### `classic_link_vpc_id`<sup>Optional</sup> <a name="classic_link_vpc_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.classicLinkVpcId"></a>

- *Type:* str

The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#classic_link_vpc_id AutoscalingLaunchConfiguration#classic_link_vpc_id}

---

##### `classic_link_vpc_security_groups`<sup>Optional</sup> <a name="classic_link_vpc_security_groups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.classicLinkVpcSecurityGroups"></a>

- *Type:* typing.List[str]

The IDs of one or more security groups for the VPC that you specified in the ClassicLinkVPCId property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#classic_link_vpc_security_groups AutoscalingLaunchConfiguration#classic_link_vpc_security_groups}

---

##### `ebs_optimized`<sup>Optional</sup> <a name="ebs_optimized" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.ebsOptimized"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#ebs_optimized AutoscalingLaunchConfiguration#ebs_optimized}

---

##### `iam_instance_profile`<sup>Optional</sup> <a name="iam_instance_profile" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.iamInstanceProfile"></a>

- *Type:* str

Provides the name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance.

The instance profile contains the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#iam_instance_profile AutoscalingLaunchConfiguration#iam_instance_profile}

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.instanceId"></a>

- *Type:* str

The ID of the Amazon EC2 instance you want to use to create the launch configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#instance_id AutoscalingLaunchConfiguration#instance_id}

---

##### `instance_monitoring`<sup>Optional</sup> <a name="instance_monitoring" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.instanceMonitoring"></a>

- *Type:* bool | cdktn.IResolvable

Controls whether instances in this group are launched with detailed (true) or basic (false) monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#instance_monitoring AutoscalingLaunchConfiguration#instance_monitoring}

---

##### `kernel_id`<sup>Optional</sup> <a name="kernel_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.kernelId"></a>

- *Type:* str

Provides the ID of the kernel associated with the EC2 AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#kernel_id AutoscalingLaunchConfiguration#kernel_id}

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.keyName"></a>

- *Type:* str

Provides the name of the EC2 key pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#key_name AutoscalingLaunchConfiguration#key_name}

---

##### `launch_configuration_name`<sup>Optional</sup> <a name="launch_configuration_name" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.launchConfigurationName"></a>

- *Type:* str

The name of the launch configuration. This name must be unique per Region per account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#launch_configuration_name AutoscalingLaunchConfiguration#launch_configuration_name}

---

##### `metadata_options`<sup>Optional</sup> <a name="metadata_options" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.metadataOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions">AutoscalingLaunchConfigurationMetadataOptions</a>

The metadata options for the instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#metadata_options AutoscalingLaunchConfiguration#metadata_options}

---

##### `placement_tenancy`<sup>Optional</sup> <a name="placement_tenancy" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.placementTenancy"></a>

- *Type:* str

The tenancy of the instance, either default or dedicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#placement_tenancy AutoscalingLaunchConfiguration#placement_tenancy}

---

##### `ram_disk_id`<sup>Optional</sup> <a name="ram_disk_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.ramDiskId"></a>

- *Type:* str

The ID of the RAM disk to select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#ram_disk_id AutoscalingLaunchConfiguration#ram_disk_id}

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.securityGroups"></a>

- *Type:* typing.List[str]

A list that contains the security groups to assign to the instances in the Auto Scaling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#security_groups AutoscalingLaunchConfiguration#security_groups}

---

##### `spot_price`<sup>Optional</sup> <a name="spot_price" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.spotPrice"></a>

- *Type:* str

The maximum hourly price you are willing to pay for any Spot Instances launched to fulfill the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#spot_price AutoscalingLaunchConfiguration#spot_price}

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.userData"></a>

- *Type:* str

The Base64-encoded user data to make available to the launched EC2 instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#user_data AutoscalingLaunchConfiguration#user_data}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.putBlockDeviceMappings">put_block_device_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.putMetadataOptions">put_metadata_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetAssociatePublicIpAddress">reset_associate_public_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetBlockDeviceMappings">reset_block_device_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetClassicLinkVpcId">reset_classic_link_vpc_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetClassicLinkVpcSecurityGroups">reset_classic_link_vpc_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetEbsOptimized">reset_ebs_optimized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetIamInstanceProfile">reset_iam_instance_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetInstanceId">reset_instance_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetInstanceMonitoring">reset_instance_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetKernelId">reset_kernel_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetKeyName">reset_key_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetLaunchConfigurationName">reset_launch_configuration_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetMetadataOptions">reset_metadata_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetPlacementTenancy">reset_placement_tenancy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetRamDiskId">reset_ram_disk_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetSpotPrice">reset_spot_price</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetUserData">reset_user_data</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_block_device_mappings` <a name="put_block_device_mappings" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.putBlockDeviceMappings"></a>

```python
def put_block_device_mappings(
  value: IResolvable | typing.List[AutoscalingLaunchConfigurationBlockDeviceMappings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.putBlockDeviceMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>]

---

##### `put_metadata_options` <a name="put_metadata_options" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.putMetadataOptions"></a>

```python
def put_metadata_options(
  http_endpoint: str = None,
  http_put_response_hop_limit: typing.Union[int, float] = None,
  http_tokens: str = None
) -> None
```

###### `http_endpoint`<sup>Optional</sup> <a name="http_endpoint" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.putMetadataOptions.parameter.httpEndpoint"></a>

- *Type:* str

This parameter enables or disables the HTTP metadata endpoint on your instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#http_endpoint AutoscalingLaunchConfiguration#http_endpoint}

---

###### `http_put_response_hop_limit`<sup>Optional</sup> <a name="http_put_response_hop_limit" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.putMetadataOptions.parameter.httpPutResponseHopLimit"></a>

- *Type:* typing.Union[int, float]

The desired HTTP PUT response hop limit for instance metadata requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#http_put_response_hop_limit AutoscalingLaunchConfiguration#http_put_response_hop_limit}

---

###### `http_tokens`<sup>Optional</sup> <a name="http_tokens" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.putMetadataOptions.parameter.httpTokens"></a>

- *Type:* str

The state of token usage for your instance metadata requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#http_tokens AutoscalingLaunchConfiguration#http_tokens}

---

##### `reset_associate_public_ip_address` <a name="reset_associate_public_ip_address" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetAssociatePublicIpAddress"></a>

```python
def reset_associate_public_ip_address() -> None
```

##### `reset_block_device_mappings` <a name="reset_block_device_mappings" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetBlockDeviceMappings"></a>

```python
def reset_block_device_mappings() -> None
```

##### `reset_classic_link_vpc_id` <a name="reset_classic_link_vpc_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetClassicLinkVpcId"></a>

```python
def reset_classic_link_vpc_id() -> None
```

##### `reset_classic_link_vpc_security_groups` <a name="reset_classic_link_vpc_security_groups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetClassicLinkVpcSecurityGroups"></a>

```python
def reset_classic_link_vpc_security_groups() -> None
```

##### `reset_ebs_optimized` <a name="reset_ebs_optimized" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetEbsOptimized"></a>

```python
def reset_ebs_optimized() -> None
```

##### `reset_iam_instance_profile` <a name="reset_iam_instance_profile" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetIamInstanceProfile"></a>

```python
def reset_iam_instance_profile() -> None
```

##### `reset_instance_id` <a name="reset_instance_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetInstanceId"></a>

```python
def reset_instance_id() -> None
```

##### `reset_instance_monitoring` <a name="reset_instance_monitoring" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetInstanceMonitoring"></a>

```python
def reset_instance_monitoring() -> None
```

##### `reset_kernel_id` <a name="reset_kernel_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetKernelId"></a>

```python
def reset_kernel_id() -> None
```

##### `reset_key_name` <a name="reset_key_name" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetKeyName"></a>

```python
def reset_key_name() -> None
```

##### `reset_launch_configuration_name` <a name="reset_launch_configuration_name" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetLaunchConfigurationName"></a>

```python
def reset_launch_configuration_name() -> None
```

##### `reset_metadata_options` <a name="reset_metadata_options" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetMetadataOptions"></a>

```python
def reset_metadata_options() -> None
```

##### `reset_placement_tenancy` <a name="reset_placement_tenancy" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetPlacementTenancy"></a>

```python
def reset_placement_tenancy() -> None
```

##### `reset_ram_disk_id` <a name="reset_ram_disk_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetRamDiskId"></a>

```python
def reset_ram_disk_id() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```

##### `reset_spot_price` <a name="reset_spot_price" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetSpotPrice"></a>

```python
def reset_spot_price() -> None
```

##### `reset_user_data` <a name="reset_user_data" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetUserData"></a>

```python
def reset_user_data() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AutoscalingLaunchConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import autoscaling_launch_configuration

autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import autoscaling_launch_configuration

autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import autoscaling_launch_configuration

autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import autoscaling_launch_configuration

autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AutoscalingLaunchConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AutoscalingLaunchConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AutoscalingLaunchConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AutoscalingLaunchConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.blockDeviceMappings">block_device_mappings</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList">AutoscalingLaunchConfigurationBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.metadataOptions">metadata_options</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference">AutoscalingLaunchConfigurationMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.associatePublicIpAddressInput">associate_public_ip_address_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.blockDeviceMappingsInput">block_device_mappings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcIdInput">classic_link_vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcSecurityGroupsInput">classic_link_vpc_security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ebsOptimizedInput">ebs_optimized_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.iamInstanceProfileInput">iam_instance_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.imageIdInput">image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceMonitoringInput">instance_monitoring_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.kernelIdInput">kernel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.launchConfigurationNameInput">launch_configuration_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.metadataOptionsInput">metadata_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions">AutoscalingLaunchConfigurationMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.placementTenancyInput">placement_tenancy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ramDiskIdInput">ram_disk_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.spotPriceInput">spot_price_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.userDataInput">user_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcId">classic_link_vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcSecurityGroups">classic_link_vpc_security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ebsOptimized">ebs_optimized</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceMonitoring">instance_monitoring</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.kernelId">kernel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.launchConfigurationName">launch_configuration_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.placementTenancy">placement_tenancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ramDiskId">ram_disk_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.spotPrice">spot_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.userData">user_data</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `block_device_mappings`<sup>Required</sup> <a name="block_device_mappings" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.blockDeviceMappings"></a>

```python
block_device_mappings: AutoscalingLaunchConfigurationBlockDeviceMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList">AutoscalingLaunchConfigurationBlockDeviceMappingsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata_options`<sup>Required</sup> <a name="metadata_options" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.metadataOptions"></a>

```python
metadata_options: AutoscalingLaunchConfigurationMetadataOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference">AutoscalingLaunchConfigurationMetadataOptionsOutputReference</a>

---

##### `associate_public_ip_address_input`<sup>Optional</sup> <a name="associate_public_ip_address_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.associatePublicIpAddressInput"></a>

```python
associate_public_ip_address_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `block_device_mappings_input`<sup>Optional</sup> <a name="block_device_mappings_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.blockDeviceMappingsInput"></a>

```python
block_device_mappings_input: IResolvable | typing.List[AutoscalingLaunchConfigurationBlockDeviceMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>]

---

##### `classic_link_vpc_id_input`<sup>Optional</sup> <a name="classic_link_vpc_id_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcIdInput"></a>

```python
classic_link_vpc_id_input: str
```

- *Type:* str

---

##### `classic_link_vpc_security_groups_input`<sup>Optional</sup> <a name="classic_link_vpc_security_groups_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcSecurityGroupsInput"></a>

```python
classic_link_vpc_security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ebs_optimized_input`<sup>Optional</sup> <a name="ebs_optimized_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ebsOptimizedInput"></a>

```python
ebs_optimized_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `iam_instance_profile_input`<sup>Optional</sup> <a name="iam_instance_profile_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.iamInstanceProfileInput"></a>

```python
iam_instance_profile_input: str
```

- *Type:* str

---

##### `image_id_input`<sup>Optional</sup> <a name="image_id_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.imageIdInput"></a>

```python
image_id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `instance_monitoring_input`<sup>Optional</sup> <a name="instance_monitoring_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceMonitoringInput"></a>

```python
instance_monitoring_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `kernel_id_input`<sup>Optional</sup> <a name="kernel_id_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.kernelIdInput"></a>

```python
kernel_id_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `launch_configuration_name_input`<sup>Optional</sup> <a name="launch_configuration_name_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.launchConfigurationNameInput"></a>

```python
launch_configuration_name_input: str
```

- *Type:* str

---

##### `metadata_options_input`<sup>Optional</sup> <a name="metadata_options_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.metadataOptionsInput"></a>

```python
metadata_options_input: IResolvable | AutoscalingLaunchConfigurationMetadataOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions">AutoscalingLaunchConfigurationMetadataOptions</a>

---

##### `placement_tenancy_input`<sup>Optional</sup> <a name="placement_tenancy_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.placementTenancyInput"></a>

```python
placement_tenancy_input: str
```

- *Type:* str

---

##### `ram_disk_id_input`<sup>Optional</sup> <a name="ram_disk_id_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ramDiskIdInput"></a>

```python
ram_disk_id_input: str
```

- *Type:* str

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `spot_price_input`<sup>Optional</sup> <a name="spot_price_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.spotPriceInput"></a>

```python
spot_price_input: str
```

- *Type:* str

---

##### `user_data_input`<sup>Optional</sup> <a name="user_data_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.userDataInput"></a>

```python
user_data_input: str
```

- *Type:* str

---

##### `associate_public_ip_address`<sup>Required</sup> <a name="associate_public_ip_address" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.associatePublicIpAddress"></a>

```python
associate_public_ip_address: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `classic_link_vpc_id`<sup>Required</sup> <a name="classic_link_vpc_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcId"></a>

```python
classic_link_vpc_id: str
```

- *Type:* str

---

##### `classic_link_vpc_security_groups`<sup>Required</sup> <a name="classic_link_vpc_security_groups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcSecurityGroups"></a>

```python
classic_link_vpc_security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ebs_optimized`<sup>Required</sup> <a name="ebs_optimized" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ebsOptimized"></a>

```python
ebs_optimized: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `iam_instance_profile`<sup>Required</sup> <a name="iam_instance_profile" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.iamInstanceProfile"></a>

```python
iam_instance_profile: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `instance_monitoring`<sup>Required</sup> <a name="instance_monitoring" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceMonitoring"></a>

```python
instance_monitoring: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `kernel_id`<sup>Required</sup> <a name="kernel_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.kernelId"></a>

```python
kernel_id: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `launch_configuration_name`<sup>Required</sup> <a name="launch_configuration_name" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.launchConfigurationName"></a>

```python
launch_configuration_name: str
```

- *Type:* str

---

##### `placement_tenancy`<sup>Required</sup> <a name="placement_tenancy" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.placementTenancy"></a>

```python
placement_tenancy: str
```

- *Type:* str

---

##### `ram_disk_id`<sup>Required</sup> <a name="ram_disk_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ramDiskId"></a>

```python
ram_disk_id: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `spot_price`<sup>Required</sup> <a name="spot_price" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.spotPrice"></a>

```python
spot_price: str
```

- *Type:* str

---

##### `user_data`<sup>Required</sup> <a name="user_data" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.userData"></a>

```python
user_data: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingLaunchConfigurationBlockDeviceMappings <a name="AutoscalingLaunchConfigurationBlockDeviceMappings" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.Initializer"></a>

```python
from cdktn_provider_awscc import autoscaling_launch_configuration

autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings(
  device_name: str = None,
  ebs: AutoscalingLaunchConfigurationBlockDeviceMappingsEbs = None,
  no_device: bool | IResolvable = None,
  virtual_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.deviceName">device_name</a></code> | <code>str</code> | The device name exposed to the EC2 instance (for example, /dev/sdh or xvdh). |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs">AutoscalingLaunchConfigurationBlockDeviceMappingsEbs</a></code> | Parameters used to automatically set up EBS volumes when an instance is launched. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.noDevice">no_device</a></code> | <code>bool \| cdktn.IResolvable</code> | Setting this value to true suppresses the specified device included in the block device mapping of the AMI. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.virtualName">virtual_name</a></code> | <code>str</code> | The name of the virtual device. |

---

##### `device_name`<sup>Optional</sup> <a name="device_name" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

The device name exposed to the EC2 instance (for example, /dev/sdh or xvdh).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#device_name AutoscalingLaunchConfiguration#device_name}

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.ebs"></a>

```python
ebs: AutoscalingLaunchConfigurationBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs">AutoscalingLaunchConfigurationBlockDeviceMappingsEbs</a>

Parameters used to automatically set up EBS volumes when an instance is launched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#ebs AutoscalingLaunchConfiguration#ebs}

---

##### `no_device`<sup>Optional</sup> <a name="no_device" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.noDevice"></a>

```python
no_device: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Setting this value to true suppresses the specified device included in the block device mapping of the AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#no_device AutoscalingLaunchConfiguration#no_device}

---

##### `virtual_name`<sup>Optional</sup> <a name="virtual_name" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

The name of the virtual device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#virtual_name AutoscalingLaunchConfiguration#virtual_name}

---

### AutoscalingLaunchConfigurationBlockDeviceMappingsEbs <a name="AutoscalingLaunchConfigurationBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.Initializer"></a>

```python
from cdktn_provider_awscc import autoscaling_launch_configuration

autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs(
  delete_on_termination: bool | IResolvable = None,
  encrypted: bool | IResolvable = None,
  iops: typing.Union[int, float] = None,
  snapshot_id: str = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.deleteOnTermination">delete_on_termination</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the volume is deleted on instance termination. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.encrypted">encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the volume should be encrypted. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | The number of input/output (I/O) operations per second (IOPS) to provision for the volume. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.snapshotId">snapshot_id</a></code> | <code>str</code> | The snapshot ID of the volume to use. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | The throughput (MiBps) to provision for a gp3 volume. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | The volume size, in GiBs. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.volumeType">volume_type</a></code> | <code>str</code> | The volume type. |

---

##### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```python
delete_on_termination: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the volume is deleted on instance termination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#delete_on_termination AutoscalingLaunchConfiguration#delete_on_termination}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.encrypted"></a>

```python
encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the volume should be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#encrypted AutoscalingLaunchConfiguration#encrypted}

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of input/output (I/O) operations per second (IOPS) to provision for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#iops AutoscalingLaunchConfiguration#iops}

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

The snapshot ID of the volume to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#snapshot_id AutoscalingLaunchConfiguration#snapshot_id}

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The throughput (MiBps) to provision for a gp3 volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#throughput AutoscalingLaunchConfiguration#throughput}

---

##### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The volume size, in GiBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#volume_size AutoscalingLaunchConfiguration#volume_size}

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

The volume type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#volume_type AutoscalingLaunchConfiguration#volume_type}

---

### AutoscalingLaunchConfigurationConfig <a name="AutoscalingLaunchConfigurationConfig" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import autoscaling_launch_configuration

autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  image_id: str,
  instance_type: str,
  associate_public_ip_address: bool | IResolvable = None,
  block_device_mappings: IResolvable | typing.List[AutoscalingLaunchConfigurationBlockDeviceMappings] = None,
  classic_link_vpc_id: str = None,
  classic_link_vpc_security_groups: typing.List[str] = None,
  ebs_optimized: bool | IResolvable = None,
  iam_instance_profile: str = None,
  instance_id: str = None,
  instance_monitoring: bool | IResolvable = None,
  kernel_id: str = None,
  key_name: str = None,
  launch_configuration_name: str = None,
  metadata_options: AutoscalingLaunchConfigurationMetadataOptions = None,
  placement_tenancy: str = None,
  ram_disk_id: str = None,
  security_groups: typing.List[str] = None,
  spot_price: str = None,
  user_data: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.imageId">image_id</a></code> | <code>str</code> | Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.instanceType">instance_type</a></code> | <code>str</code> | Specifies the instance type of the EC2 instance. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>bool \| cdktn.IResolvable</code> | For Auto Scaling groups that are running in a virtual private cloud (VPC), specifies whether to assign a public IP address to the group's instances. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.blockDeviceMappings">block_device_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>]</code> | Specifies how block devices are exposed to the instance. You can specify virtual devices and EBS volumes. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.classicLinkVpcId">classic_link_vpc_id</a></code> | <code>str</code> | The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.classicLinkVpcSecurityGroups">classic_link_vpc_security_groups</a></code> | <code>typing.List[str]</code> | The IDs of one or more security groups for the VPC that you specified in the ClassicLinkVPCId property. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.ebsOptimized">ebs_optimized</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false). |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | Provides the name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.instanceId">instance_id</a></code> | <code>str</code> | The ID of the Amazon EC2 instance you want to use to create the launch configuration. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.instanceMonitoring">instance_monitoring</a></code> | <code>bool \| cdktn.IResolvable</code> | Controls whether instances in this group are launched with detailed (true) or basic (false) monitoring. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.kernelId">kernel_id</a></code> | <code>str</code> | Provides the ID of the kernel associated with the EC2 AMI. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.keyName">key_name</a></code> | <code>str</code> | Provides the name of the EC2 key pair. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.launchConfigurationName">launch_configuration_name</a></code> | <code>str</code> | The name of the launch configuration. This name must be unique per Region per account. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.metadataOptions">metadata_options</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions">AutoscalingLaunchConfigurationMetadataOptions</a></code> | The metadata options for the instances. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.placementTenancy">placement_tenancy</a></code> | <code>str</code> | The tenancy of the instance, either default or dedicated. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.ramDiskId">ram_disk_id</a></code> | <code>str</code> | The ID of the RAM disk to select. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | A list that contains the security groups to assign to the instances in the Auto Scaling group. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.spotPrice">spot_price</a></code> | <code>str</code> | The maximum hourly price you are willing to pay for any Spot Instances launched to fulfill the request. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.userData">user_data</a></code> | <code>str</code> | The Base64-encoded user data to make available to the launched EC2 instances. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#image_id AutoscalingLaunchConfiguration#image_id}

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Specifies the instance type of the EC2 instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#instance_type AutoscalingLaunchConfiguration#instance_type}

---

##### `associate_public_ip_address`<sup>Optional</sup> <a name="associate_public_ip_address" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.associatePublicIpAddress"></a>

```python
associate_public_ip_address: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

For Auto Scaling groups that are running in a virtual private cloud (VPC), specifies whether to assign a public IP address to the group's instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#associate_public_ip_address AutoscalingLaunchConfiguration#associate_public_ip_address}

---

##### `block_device_mappings`<sup>Optional</sup> <a name="block_device_mappings" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.blockDeviceMappings"></a>

```python
block_device_mappings: IResolvable | typing.List[AutoscalingLaunchConfigurationBlockDeviceMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>]

Specifies how block devices are exposed to the instance. You can specify virtual devices and EBS volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#block_device_mappings AutoscalingLaunchConfiguration#block_device_mappings}

---

##### `classic_link_vpc_id`<sup>Optional</sup> <a name="classic_link_vpc_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.classicLinkVpcId"></a>

```python
classic_link_vpc_id: str
```

- *Type:* str

The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#classic_link_vpc_id AutoscalingLaunchConfiguration#classic_link_vpc_id}

---

##### `classic_link_vpc_security_groups`<sup>Optional</sup> <a name="classic_link_vpc_security_groups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.classicLinkVpcSecurityGroups"></a>

```python
classic_link_vpc_security_groups: typing.List[str]
```

- *Type:* typing.List[str]

The IDs of one or more security groups for the VPC that you specified in the ClassicLinkVPCId property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#classic_link_vpc_security_groups AutoscalingLaunchConfiguration#classic_link_vpc_security_groups}

---

##### `ebs_optimized`<sup>Optional</sup> <a name="ebs_optimized" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.ebsOptimized"></a>

```python
ebs_optimized: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#ebs_optimized AutoscalingLaunchConfiguration#ebs_optimized}

---

##### `iam_instance_profile`<sup>Optional</sup> <a name="iam_instance_profile" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.iamInstanceProfile"></a>

```python
iam_instance_profile: str
```

- *Type:* str

Provides the name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance.

The instance profile contains the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#iam_instance_profile AutoscalingLaunchConfiguration#iam_instance_profile}

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

The ID of the Amazon EC2 instance you want to use to create the launch configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#instance_id AutoscalingLaunchConfiguration#instance_id}

---

##### `instance_monitoring`<sup>Optional</sup> <a name="instance_monitoring" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.instanceMonitoring"></a>

```python
instance_monitoring: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Controls whether instances in this group are launched with detailed (true) or basic (false) monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#instance_monitoring AutoscalingLaunchConfiguration#instance_monitoring}

---

##### `kernel_id`<sup>Optional</sup> <a name="kernel_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.kernelId"></a>

```python
kernel_id: str
```

- *Type:* str

Provides the ID of the kernel associated with the EC2 AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#kernel_id AutoscalingLaunchConfiguration#kernel_id}

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

Provides the name of the EC2 key pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#key_name AutoscalingLaunchConfiguration#key_name}

---

##### `launch_configuration_name`<sup>Optional</sup> <a name="launch_configuration_name" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.launchConfigurationName"></a>

```python
launch_configuration_name: str
```

- *Type:* str

The name of the launch configuration. This name must be unique per Region per account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#launch_configuration_name AutoscalingLaunchConfiguration#launch_configuration_name}

---

##### `metadata_options`<sup>Optional</sup> <a name="metadata_options" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.metadataOptions"></a>

```python
metadata_options: AutoscalingLaunchConfigurationMetadataOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions">AutoscalingLaunchConfigurationMetadataOptions</a>

The metadata options for the instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#metadata_options AutoscalingLaunchConfiguration#metadata_options}

---

##### `placement_tenancy`<sup>Optional</sup> <a name="placement_tenancy" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.placementTenancy"></a>

```python
placement_tenancy: str
```

- *Type:* str

The tenancy of the instance, either default or dedicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#placement_tenancy AutoscalingLaunchConfiguration#placement_tenancy}

---

##### `ram_disk_id`<sup>Optional</sup> <a name="ram_disk_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.ramDiskId"></a>

```python
ram_disk_id: str
```

- *Type:* str

The ID of the RAM disk to select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#ram_disk_id AutoscalingLaunchConfiguration#ram_disk_id}

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

A list that contains the security groups to assign to the instances in the Auto Scaling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#security_groups AutoscalingLaunchConfiguration#security_groups}

---

##### `spot_price`<sup>Optional</sup> <a name="spot_price" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.spotPrice"></a>

```python
spot_price: str
```

- *Type:* str

The maximum hourly price you are willing to pay for any Spot Instances launched to fulfill the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#spot_price AutoscalingLaunchConfiguration#spot_price}

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.userData"></a>

```python
user_data: str
```

- *Type:* str

The Base64-encoded user data to make available to the launched EC2 instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#user_data AutoscalingLaunchConfiguration#user_data}

---

### AutoscalingLaunchConfigurationMetadataOptions <a name="AutoscalingLaunchConfigurationMetadataOptions" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.Initializer"></a>

```python
from cdktn_provider_awscc import autoscaling_launch_configuration

autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions(
  http_endpoint: str = None,
  http_put_response_hop_limit: typing.Union[int, float] = None,
  http_tokens: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.property.httpEndpoint">http_endpoint</a></code> | <code>str</code> | This parameter enables or disables the HTTP metadata endpoint on your instances. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.property.httpPutResponseHopLimit">http_put_response_hop_limit</a></code> | <code>typing.Union[int, float]</code> | The desired HTTP PUT response hop limit for instance metadata requests. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.property.httpTokens">http_tokens</a></code> | <code>str</code> | The state of token usage for your instance metadata requests. |

---

##### `http_endpoint`<sup>Optional</sup> <a name="http_endpoint" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.property.httpEndpoint"></a>

```python
http_endpoint: str
```

- *Type:* str

This parameter enables or disables the HTTP metadata endpoint on your instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#http_endpoint AutoscalingLaunchConfiguration#http_endpoint}

---

##### `http_put_response_hop_limit`<sup>Optional</sup> <a name="http_put_response_hop_limit" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.property.httpPutResponseHopLimit"></a>

```python
http_put_response_hop_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The desired HTTP PUT response hop limit for instance metadata requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#http_put_response_hop_limit AutoscalingLaunchConfiguration#http_put_response_hop_limit}

---

##### `http_tokens`<sup>Optional</sup> <a name="http_tokens" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.property.httpTokens"></a>

```python
http_tokens: str
```

- *Type:* str

The state of token usage for your instance metadata requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#http_tokens AutoscalingLaunchConfiguration#http_tokens}

---

## Classes <a name="Classes" id="Classes"></a>

### AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference <a name="AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import autoscaling_launch_configuration

autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">reset_delete_on_termination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetSnapshotId">reset_snapshot_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetVolumeSize">reset_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_on_termination` <a name="reset_delete_on_termination" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```python
def reset_delete_on_termination() -> None
```

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_snapshot_id` <a name="reset_snapshot_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```python
def reset_snapshot_id() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volume_size` <a name="reset_volume_size" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```python
def reset_volume_size() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">delete_on_termination_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.encryptedInput">encrypted_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs">AutoscalingLaunchConfigurationBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_on_termination_input`<sup>Optional</sup> <a name="delete_on_termination_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```python
delete_on_termination_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```python
encrypted_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size_input`<sup>Optional</sup> <a name="volume_size_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```python
volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```python
encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AutoscalingLaunchConfigurationBlockDeviceMappingsEbs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs">AutoscalingLaunchConfigurationBlockDeviceMappingsEbs</a>

---


### AutoscalingLaunchConfigurationBlockDeviceMappingsList <a name="AutoscalingLaunchConfigurationBlockDeviceMappingsList" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer"></a>

```python
from cdktn_provider_awscc import autoscaling_launch_configuration

autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AutoscalingLaunchConfigurationBlockDeviceMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>]

---


### AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference <a name="AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import autoscaling_launch_configuration

autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.putEbs">put_ebs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetDeviceName">reset_device_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetEbs">reset_ebs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetNoDevice">reset_no_device</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetVirtualName">reset_virtual_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ebs` <a name="put_ebs" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.putEbs"></a>

```python
def put_ebs(
  delete_on_termination: bool | IResolvable = None,
  encrypted: bool | IResolvable = None,
  iops: typing.Union[int, float] = None,
  snapshot_id: str = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
) -> None
```

###### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.putEbs.parameter.deleteOnTermination"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the volume is deleted on instance termination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#delete_on_termination AutoscalingLaunchConfiguration#delete_on_termination}

---

###### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.putEbs.parameter.encrypted"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the volume should be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#encrypted AutoscalingLaunchConfiguration#encrypted}

---

###### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.putEbs.parameter.iops"></a>

- *Type:* typing.Union[int, float]

The number of input/output (I/O) operations per second (IOPS) to provision for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#iops AutoscalingLaunchConfiguration#iops}

---

###### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.putEbs.parameter.snapshotId"></a>

- *Type:* str

The snapshot ID of the volume to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#snapshot_id AutoscalingLaunchConfiguration#snapshot_id}

---

###### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.putEbs.parameter.throughput"></a>

- *Type:* typing.Union[int, float]

The throughput (MiBps) to provision for a gp3 volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#throughput AutoscalingLaunchConfiguration#throughput}

---

###### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.putEbs.parameter.volumeSize"></a>

- *Type:* typing.Union[int, float]

The volume size, in GiBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#volume_size AutoscalingLaunchConfiguration#volume_size}

---

###### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.putEbs.parameter.volumeType"></a>

- *Type:* str

The volume type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#volume_type AutoscalingLaunchConfiguration#volume_type}

---

##### `reset_device_name` <a name="reset_device_name" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```python
def reset_device_name() -> None
```

##### `reset_ebs` <a name="reset_ebs" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetEbs"></a>

```python
def reset_ebs() -> None
```

##### `reset_no_device` <a name="reset_no_device" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```python
def reset_no_device() -> None
```

##### `reset_virtual_name` <a name="reset_virtual_name" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```python
def reset_virtual_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference">AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.ebsInput">ebs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs">AutoscalingLaunchConfigurationBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.noDeviceInput">no_device_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.virtualNameInput">virtual_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.noDevice">no_device</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.virtualName">virtual_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.ebs"></a>

```python
ebs: AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference">AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference</a>

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `ebs_input`<sup>Optional</sup> <a name="ebs_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```python
ebs_input: IResolvable | AutoscalingLaunchConfigurationBlockDeviceMappingsEbs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs">AutoscalingLaunchConfigurationBlockDeviceMappingsEbs</a>

---

##### `no_device_input`<sup>Optional</sup> <a name="no_device_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```python
no_device_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `virtual_name_input`<sup>Optional</sup> <a name="virtual_name_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```python
virtual_name_input: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `no_device`<sup>Required</sup> <a name="no_device" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.noDevice"></a>

```python
no_device: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `virtual_name`<sup>Required</sup> <a name="virtual_name" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AutoscalingLaunchConfigurationBlockDeviceMappings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>

---


### AutoscalingLaunchConfigurationMetadataOptionsOutputReference <a name="AutoscalingLaunchConfigurationMetadataOptionsOutputReference" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import autoscaling_launch_configuration

autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resetHttpEndpoint">reset_http_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">reset_http_put_response_hop_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resetHttpTokens">reset_http_tokens</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_http_endpoint` <a name="reset_http_endpoint" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resetHttpEndpoint"></a>

```python
def reset_http_endpoint() -> None
```

##### `reset_http_put_response_hop_limit` <a name="reset_http_put_response_hop_limit" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```python
def reset_http_put_response_hop_limit() -> None
```

##### `reset_http_tokens` <a name="reset_http_tokens" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resetHttpTokens"></a>

```python
def reset_http_tokens() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpEndpointInput">http_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">http_put_response_hop_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpTokensInput">http_tokens_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpEndpoint">http_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimit">http_put_response_hop_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpTokens">http_tokens</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions">AutoscalingLaunchConfigurationMetadataOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_endpoint_input`<sup>Optional</sup> <a name="http_endpoint_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpEndpointInput"></a>

```python
http_endpoint_input: str
```

- *Type:* str

---

##### `http_put_response_hop_limit_input`<sup>Optional</sup> <a name="http_put_response_hop_limit_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```python
http_put_response_hop_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_tokens_input`<sup>Optional</sup> <a name="http_tokens_input" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpTokensInput"></a>

```python
http_tokens_input: str
```

- *Type:* str

---

##### `http_endpoint`<sup>Required</sup> <a name="http_endpoint" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpEndpoint"></a>

```python
http_endpoint: str
```

- *Type:* str

---

##### `http_put_response_hop_limit`<sup>Required</sup> <a name="http_put_response_hop_limit" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```python
http_put_response_hop_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_tokens`<sup>Required</sup> <a name="http_tokens" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpTokens"></a>

```python
http_tokens: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AutoscalingLaunchConfigurationMetadataOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions">AutoscalingLaunchConfigurationMetadataOptions</a>

---



