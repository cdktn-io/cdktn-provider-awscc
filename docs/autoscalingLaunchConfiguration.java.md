# `autoscalingLaunchConfiguration` Submodule <a name="`autoscalingLaunchConfiguration` Submodule" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingLaunchConfiguration <a name="AutoscalingLaunchConfiguration" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration awscc_autoscaling_launch_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscaling_launch_configuration.AutoscalingLaunchConfiguration;

AutoscalingLaunchConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .imageId(java.lang.String)
    .instanceType(java.lang.String)
//  .associatePublicIpAddress(java.lang.Boolean|IResolvable)
//  .blockDeviceMappings(IResolvable|java.util.List<AutoscalingLaunchConfigurationBlockDeviceMappings>)
//  .classicLinkVpcId(java.lang.String)
//  .classicLinkVpcSecurityGroups(java.util.List<java.lang.String>)
//  .ebsOptimized(java.lang.Boolean|IResolvable)
//  .iamInstanceProfile(java.lang.String)
//  .instanceId(java.lang.String)
//  .instanceMonitoring(java.lang.Boolean|IResolvable)
//  .kernelId(java.lang.String)
//  .keyName(java.lang.String)
//  .launchConfigurationName(java.lang.String)
//  .metadataOptions(AutoscalingLaunchConfigurationMetadataOptions)
//  .placementTenancy(java.lang.String)
//  .ramDiskId(java.lang.String)
//  .securityGroups(java.util.List<java.lang.String>)
//  .spotPrice(java.lang.String)
//  .userData(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.imageId">imageId</a></code> | <code>java.lang.String</code> | Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Specifies the instance type of the EC2 instance. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | For Auto Scaling groups that are running in a virtual private cloud (VPC), specifies whether to assign a public IP address to the group's instances. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.blockDeviceMappings">blockDeviceMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>></code> | Specifies how block devices are exposed to the instance. You can specify virtual devices and EBS volumes. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.classicLinkVpcId">classicLinkVpcId</a></code> | <code>java.lang.String</code> | The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.classicLinkVpcSecurityGroups">classicLinkVpcSecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | The IDs of one or more security groups for the VPC that you specified in the ClassicLinkVPCId property. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.ebsOptimized">ebsOptimized</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false). |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.iamInstanceProfile">iamInstanceProfile</a></code> | <code>java.lang.String</code> | Provides the name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | The ID of the Amazon EC2 instance you want to use to create the launch configuration. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.instanceMonitoring">instanceMonitoring</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Controls whether instances in this group are launched with detailed (true) or basic (false) monitoring. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.kernelId">kernelId</a></code> | <code>java.lang.String</code> | Provides the ID of the kernel associated with the EC2 AMI. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.keyName">keyName</a></code> | <code>java.lang.String</code> | Provides the name of the EC2 key pair. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.launchConfigurationName">launchConfigurationName</a></code> | <code>java.lang.String</code> | The name of the launch configuration. This name must be unique per Region per account. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions">AutoscalingLaunchConfigurationMetadataOptions</a></code> | The metadata options for the instances. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.placementTenancy">placementTenancy</a></code> | <code>java.lang.String</code> | The tenancy of the instance, either default or dedicated. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.ramDiskId">ramDiskId</a></code> | <code>java.lang.String</code> | The ID of the RAM disk to select. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | A list that contains the security groups to assign to the instances in the Auto Scaling group. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.spotPrice">spotPrice</a></code> | <code>java.lang.String</code> | The maximum hourly price you are willing to pay for any Spot Instances launched to fulfill the request. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.userData">userData</a></code> | <code>java.lang.String</code> | The Base64-encoded user data to make available to the launched EC2 instances. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.imageId"></a>

- *Type:* java.lang.String

Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#image_id AutoscalingLaunchConfiguration#image_id}

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.instanceType"></a>

- *Type:* java.lang.String

Specifies the instance type of the EC2 instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#instance_type AutoscalingLaunchConfiguration#instance_type}

---

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="associatePublicIpAddress" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.associatePublicIpAddress"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

For Auto Scaling groups that are running in a virtual private cloud (VPC), specifies whether to assign a public IP address to the group's instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#associate_public_ip_address AutoscalingLaunchConfiguration#associate_public_ip_address}

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.blockDeviceMappings"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>>

Specifies how block devices are exposed to the instance. You can specify virtual devices and EBS volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#block_device_mappings AutoscalingLaunchConfiguration#block_device_mappings}

---

##### `classicLinkVpcId`<sup>Optional</sup> <a name="classicLinkVpcId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.classicLinkVpcId"></a>

- *Type:* java.lang.String

The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#classic_link_vpc_id AutoscalingLaunchConfiguration#classic_link_vpc_id}

---

##### `classicLinkVpcSecurityGroups`<sup>Optional</sup> <a name="classicLinkVpcSecurityGroups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.classicLinkVpcSecurityGroups"></a>

- *Type:* java.util.List<java.lang.String>

The IDs of one or more security groups for the VPC that you specified in the ClassicLinkVPCId property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#classic_link_vpc_security_groups AutoscalingLaunchConfiguration#classic_link_vpc_security_groups}

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.ebsOptimized"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#ebs_optimized AutoscalingLaunchConfiguration#ebs_optimized}

---

##### `iamInstanceProfile`<sup>Optional</sup> <a name="iamInstanceProfile" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.iamInstanceProfile"></a>

- *Type:* java.lang.String

Provides the name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance.

The instance profile contains the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#iam_instance_profile AutoscalingLaunchConfiguration#iam_instance_profile}

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

The ID of the Amazon EC2 instance you want to use to create the launch configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#instance_id AutoscalingLaunchConfiguration#instance_id}

---

##### `instanceMonitoring`<sup>Optional</sup> <a name="instanceMonitoring" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.instanceMonitoring"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Controls whether instances in this group are launched with detailed (true) or basic (false) monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#instance_monitoring AutoscalingLaunchConfiguration#instance_monitoring}

---

##### `kernelId`<sup>Optional</sup> <a name="kernelId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.kernelId"></a>

- *Type:* java.lang.String

Provides the ID of the kernel associated with the EC2 AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#kernel_id AutoscalingLaunchConfiguration#kernel_id}

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.keyName"></a>

- *Type:* java.lang.String

Provides the name of the EC2 key pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#key_name AutoscalingLaunchConfiguration#key_name}

---

##### `launchConfigurationName`<sup>Optional</sup> <a name="launchConfigurationName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.launchConfigurationName"></a>

- *Type:* java.lang.String

The name of the launch configuration. This name must be unique per Region per account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#launch_configuration_name AutoscalingLaunchConfiguration#launch_configuration_name}

---

##### `metadataOptions`<sup>Optional</sup> <a name="metadataOptions" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.metadataOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions">AutoscalingLaunchConfigurationMetadataOptions</a>

The metadata options for the instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#metadata_options AutoscalingLaunchConfiguration#metadata_options}

---

##### `placementTenancy`<sup>Optional</sup> <a name="placementTenancy" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.placementTenancy"></a>

- *Type:* java.lang.String

The tenancy of the instance, either default or dedicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#placement_tenancy AutoscalingLaunchConfiguration#placement_tenancy}

---

##### `ramDiskId`<sup>Optional</sup> <a name="ramDiskId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.ramDiskId"></a>

- *Type:* java.lang.String

The ID of the RAM disk to select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#ram_disk_id AutoscalingLaunchConfiguration#ram_disk_id}

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.securityGroups"></a>

- *Type:* java.util.List<java.lang.String>

A list that contains the security groups to assign to the instances in the Auto Scaling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#security_groups AutoscalingLaunchConfiguration#security_groups}

---

##### `spotPrice`<sup>Optional</sup> <a name="spotPrice" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.spotPrice"></a>

- *Type:* java.lang.String

The maximum hourly price you are willing to pay for any Spot Instances launched to fulfill the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#spot_price AutoscalingLaunchConfiguration#spot_price}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.userData"></a>

- *Type:* java.lang.String

The Base64-encoded user data to make available to the launched EC2 instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#user_data AutoscalingLaunchConfiguration#user_data}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.putBlockDeviceMappings">putBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.putMetadataOptions">putMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetAssociatePublicIpAddress">resetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetBlockDeviceMappings">resetBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetClassicLinkVpcId">resetClassicLinkVpcId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetClassicLinkVpcSecurityGroups">resetClassicLinkVpcSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetEbsOptimized">resetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetIamInstanceProfile">resetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetInstanceMonitoring">resetInstanceMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetKernelId">resetKernelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetLaunchConfigurationName">resetLaunchConfigurationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetMetadataOptions">resetMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetPlacementTenancy">resetPlacementTenancy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetRamDiskId">resetRamDiskId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetSpotPrice">resetSpotPrice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetUserData">resetUserData</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBlockDeviceMappings` <a name="putBlockDeviceMappings" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.putBlockDeviceMappings"></a>

```java
public void putBlockDeviceMappings(IResolvable|java.util.List<AutoscalingLaunchConfigurationBlockDeviceMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.putBlockDeviceMappings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>>

---

##### `putMetadataOptions` <a name="putMetadataOptions" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.putMetadataOptions"></a>

```java
public void putMetadataOptions(AutoscalingLaunchConfigurationMetadataOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.putMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions">AutoscalingLaunchConfigurationMetadataOptions</a>

---

##### `resetAssociatePublicIpAddress` <a name="resetAssociatePublicIpAddress" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetAssociatePublicIpAddress"></a>

```java
public void resetAssociatePublicIpAddress()
```

##### `resetBlockDeviceMappings` <a name="resetBlockDeviceMappings" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetBlockDeviceMappings"></a>

```java
public void resetBlockDeviceMappings()
```

##### `resetClassicLinkVpcId` <a name="resetClassicLinkVpcId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetClassicLinkVpcId"></a>

```java
public void resetClassicLinkVpcId()
```

##### `resetClassicLinkVpcSecurityGroups` <a name="resetClassicLinkVpcSecurityGroups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetClassicLinkVpcSecurityGroups"></a>

```java
public void resetClassicLinkVpcSecurityGroups()
```

##### `resetEbsOptimized` <a name="resetEbsOptimized" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetEbsOptimized"></a>

```java
public void resetEbsOptimized()
```

##### `resetIamInstanceProfile` <a name="resetIamInstanceProfile" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetIamInstanceProfile"></a>

```java
public void resetIamInstanceProfile()
```

##### `resetInstanceId` <a name="resetInstanceId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetInstanceId"></a>

```java
public void resetInstanceId()
```

##### `resetInstanceMonitoring` <a name="resetInstanceMonitoring" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetInstanceMonitoring"></a>

```java
public void resetInstanceMonitoring()
```

##### `resetKernelId` <a name="resetKernelId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetKernelId"></a>

```java
public void resetKernelId()
```

##### `resetKeyName` <a name="resetKeyName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetKeyName"></a>

```java
public void resetKeyName()
```

##### `resetLaunchConfigurationName` <a name="resetLaunchConfigurationName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetLaunchConfigurationName"></a>

```java
public void resetLaunchConfigurationName()
```

##### `resetMetadataOptions` <a name="resetMetadataOptions" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetMetadataOptions"></a>

```java
public void resetMetadataOptions()
```

##### `resetPlacementTenancy` <a name="resetPlacementTenancy" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetPlacementTenancy"></a>

```java
public void resetPlacementTenancy()
```

##### `resetRamDiskId` <a name="resetRamDiskId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetRamDiskId"></a>

```java
public void resetRamDiskId()
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetSpotPrice` <a name="resetSpotPrice" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetSpotPrice"></a>

```java
public void resetSpotPrice()
```

##### `resetUserData` <a name="resetUserData" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetUserData"></a>

```java
public void resetUserData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AutoscalingLaunchConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.autoscaling_launch_configuration.AutoscalingLaunchConfiguration;

AutoscalingLaunchConfiguration.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.autoscaling_launch_configuration.AutoscalingLaunchConfiguration;

AutoscalingLaunchConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.autoscaling_launch_configuration.AutoscalingLaunchConfiguration;

AutoscalingLaunchConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.autoscaling_launch_configuration.AutoscalingLaunchConfiguration;

AutoscalingLaunchConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AutoscalingLaunchConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AutoscalingLaunchConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AutoscalingLaunchConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AutoscalingLaunchConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AutoscalingLaunchConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList">AutoscalingLaunchConfigurationBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference">AutoscalingLaunchConfigurationMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.associatePublicIpAddressInput">associatePublicIpAddressInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.blockDeviceMappingsInput">blockDeviceMappingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcIdInput">classicLinkVpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcSecurityGroupsInput">classicLinkVpcSecurityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ebsOptimizedInput">ebsOptimizedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.iamInstanceProfileInput">iamInstanceProfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.imageIdInput">imageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceMonitoringInput">instanceMonitoringInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.kernelIdInput">kernelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.launchConfigurationNameInput">launchConfigurationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.metadataOptionsInput">metadataOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions">AutoscalingLaunchConfigurationMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.placementTenancyInput">placementTenancyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ramDiskIdInput">ramDiskIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.spotPriceInput">spotPriceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.userDataInput">userDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcId">classicLinkVpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcSecurityGroups">classicLinkVpcSecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ebsOptimized">ebsOptimized</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceMonitoring">instanceMonitoring</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.kernelId">kernelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.launchConfigurationName">launchConfigurationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.placementTenancy">placementTenancy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ramDiskId">ramDiskId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.spotPrice">spotPrice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.userData">userData</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `blockDeviceMappings`<sup>Required</sup> <a name="blockDeviceMappings" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.blockDeviceMappings"></a>

```java
public AutoscalingLaunchConfigurationBlockDeviceMappingsList getBlockDeviceMappings();
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList">AutoscalingLaunchConfigurationBlockDeviceMappingsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metadataOptions`<sup>Required</sup> <a name="metadataOptions" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.metadataOptions"></a>

```java
public AutoscalingLaunchConfigurationMetadataOptionsOutputReference getMetadataOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference">AutoscalingLaunchConfigurationMetadataOptionsOutputReference</a>

---

##### `associatePublicIpAddressInput`<sup>Optional</sup> <a name="associatePublicIpAddressInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.associatePublicIpAddressInput"></a>

```java
public java.lang.Boolean|IResolvable getAssociatePublicIpAddressInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `blockDeviceMappingsInput`<sup>Optional</sup> <a name="blockDeviceMappingsInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.blockDeviceMappingsInput"></a>

```java
public IResolvable|java.util.List<AutoscalingLaunchConfigurationBlockDeviceMappings> getBlockDeviceMappingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>>

---

##### `classicLinkVpcIdInput`<sup>Optional</sup> <a name="classicLinkVpcIdInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcIdInput"></a>

```java
public java.lang.String getClassicLinkVpcIdInput();
```

- *Type:* java.lang.String

---

##### `classicLinkVpcSecurityGroupsInput`<sup>Optional</sup> <a name="classicLinkVpcSecurityGroupsInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcSecurityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getClassicLinkVpcSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ebsOptimizedInput`<sup>Optional</sup> <a name="ebsOptimizedInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ebsOptimizedInput"></a>

```java
public java.lang.Boolean|IResolvable getEbsOptimizedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `iamInstanceProfileInput`<sup>Optional</sup> <a name="iamInstanceProfileInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.iamInstanceProfileInput"></a>

```java
public java.lang.String getIamInstanceProfileInput();
```

- *Type:* java.lang.String

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.imageIdInput"></a>

```java
public java.lang.String getImageIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `instanceMonitoringInput`<sup>Optional</sup> <a name="instanceMonitoringInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceMonitoringInput"></a>

```java
public java.lang.Boolean|IResolvable getInstanceMonitoringInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `kernelIdInput`<sup>Optional</sup> <a name="kernelIdInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.kernelIdInput"></a>

```java
public java.lang.String getKernelIdInput();
```

- *Type:* java.lang.String

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `launchConfigurationNameInput`<sup>Optional</sup> <a name="launchConfigurationNameInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.launchConfigurationNameInput"></a>

```java
public java.lang.String getLaunchConfigurationNameInput();
```

- *Type:* java.lang.String

---

##### `metadataOptionsInput`<sup>Optional</sup> <a name="metadataOptionsInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.metadataOptionsInput"></a>

```java
public IResolvable|AutoscalingLaunchConfigurationMetadataOptions getMetadataOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions">AutoscalingLaunchConfigurationMetadataOptions</a>

---

##### `placementTenancyInput`<sup>Optional</sup> <a name="placementTenancyInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.placementTenancyInput"></a>

```java
public java.lang.String getPlacementTenancyInput();
```

- *Type:* java.lang.String

---

##### `ramDiskIdInput`<sup>Optional</sup> <a name="ramDiskIdInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ramDiskIdInput"></a>

```java
public java.lang.String getRamDiskIdInput();
```

- *Type:* java.lang.String

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `spotPriceInput`<sup>Optional</sup> <a name="spotPriceInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.spotPriceInput"></a>

```java
public java.lang.String getSpotPriceInput();
```

- *Type:* java.lang.String

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.userDataInput"></a>

```java
public java.lang.String getUserDataInput();
```

- *Type:* java.lang.String

---

##### `associatePublicIpAddress`<sup>Required</sup> <a name="associatePublicIpAddress" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.associatePublicIpAddress"></a>

```java
public java.lang.Boolean|IResolvable getAssociatePublicIpAddress();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `classicLinkVpcId`<sup>Required</sup> <a name="classicLinkVpcId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcId"></a>

```java
public java.lang.String getClassicLinkVpcId();
```

- *Type:* java.lang.String

---

##### `classicLinkVpcSecurityGroups`<sup>Required</sup> <a name="classicLinkVpcSecurityGroups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcSecurityGroups"></a>

```java
public java.util.List<java.lang.String> getClassicLinkVpcSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ebsOptimized`<sup>Required</sup> <a name="ebsOptimized" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ebsOptimized"></a>

```java
public java.lang.Boolean|IResolvable getEbsOptimized();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.iamInstanceProfile"></a>

```java
public java.lang.String getIamInstanceProfile();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `instanceMonitoring`<sup>Required</sup> <a name="instanceMonitoring" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceMonitoring"></a>

```java
public java.lang.Boolean|IResolvable getInstanceMonitoring();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `kernelId`<sup>Required</sup> <a name="kernelId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.kernelId"></a>

```java
public java.lang.String getKernelId();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `launchConfigurationName`<sup>Required</sup> <a name="launchConfigurationName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.launchConfigurationName"></a>

```java
public java.lang.String getLaunchConfigurationName();
```

- *Type:* java.lang.String

---

##### `placementTenancy`<sup>Required</sup> <a name="placementTenancy" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.placementTenancy"></a>

```java
public java.lang.String getPlacementTenancy();
```

- *Type:* java.lang.String

---

##### `ramDiskId`<sup>Required</sup> <a name="ramDiskId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ramDiskId"></a>

```java
public java.lang.String getRamDiskId();
```

- *Type:* java.lang.String

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `spotPrice`<sup>Required</sup> <a name="spotPrice" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.spotPrice"></a>

```java
public java.lang.String getSpotPrice();
```

- *Type:* java.lang.String

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingLaunchConfigurationBlockDeviceMappings <a name="AutoscalingLaunchConfigurationBlockDeviceMappings" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscaling_launch_configuration.AutoscalingLaunchConfigurationBlockDeviceMappings;

AutoscalingLaunchConfigurationBlockDeviceMappings.builder()
//  .deviceName(java.lang.String)
//  .ebs(AutoscalingLaunchConfigurationBlockDeviceMappingsEbs)
//  .noDevice(java.lang.Boolean|IResolvable)
//  .virtualName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | The device name exposed to the EC2 instance (for example, /dev/sdh or xvdh). |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs">AutoscalingLaunchConfigurationBlockDeviceMappingsEbs</a></code> | Parameters used to automatically set up EBS volumes when an instance is launched. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.noDevice">noDevice</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Setting this value to true suppresses the specified device included in the block device mapping of the AMI. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.virtualName">virtualName</a></code> | <code>java.lang.String</code> | The name of the virtual device. |

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

The device name exposed to the EC2 instance (for example, /dev/sdh or xvdh).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#device_name AutoscalingLaunchConfiguration#device_name}

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.ebs"></a>

```java
public AutoscalingLaunchConfigurationBlockDeviceMappingsEbs getEbs();
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs">AutoscalingLaunchConfigurationBlockDeviceMappingsEbs</a>

Parameters used to automatically set up EBS volumes when an instance is launched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#ebs AutoscalingLaunchConfiguration#ebs}

---

##### `noDevice`<sup>Optional</sup> <a name="noDevice" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.noDevice"></a>

```java
public java.lang.Boolean|IResolvable getNoDevice();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Setting this value to true suppresses the specified device included in the block device mapping of the AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#no_device AutoscalingLaunchConfiguration#no_device}

---

##### `virtualName`<sup>Optional</sup> <a name="virtualName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.virtualName"></a>

```java
public java.lang.String getVirtualName();
```

- *Type:* java.lang.String

The name of the virtual device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#virtual_name AutoscalingLaunchConfiguration#virtual_name}

---

### AutoscalingLaunchConfigurationBlockDeviceMappingsEbs <a name="AutoscalingLaunchConfigurationBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscaling_launch_configuration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs;

AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.builder()
//  .deleteOnTermination(java.lang.Boolean|IResolvable)
//  .encrypted(java.lang.Boolean|IResolvable)
//  .iops(java.lang.Number)
//  .snapshotId(java.lang.String)
//  .throughput(java.lang.Number)
//  .volumeSize(java.lang.Number)
//  .volumeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the volume is deleted on instance termination. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the volume should be encrypted. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.iops">iops</a></code> | <code>java.lang.Number</code> | The number of input/output (I/O) operations per second (IOPS) to provision for the volume. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | The snapshot ID of the volume to use. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | The throughput (MiBps) to provision for a gp3 volume. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | The volume size, in GiBs. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | The volume type. |

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```java
public java.lang.Boolean|IResolvable getDeleteOnTermination();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the volume is deleted on instance termination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#delete_on_termination AutoscalingLaunchConfiguration#delete_on_termination}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.encrypted"></a>

```java
public java.lang.Boolean|IResolvable getEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the volume should be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#encrypted AutoscalingLaunchConfiguration#encrypted}

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

The number of input/output (I/O) operations per second (IOPS) to provision for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#iops AutoscalingLaunchConfiguration#iops}

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

The snapshot ID of the volume to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#snapshot_id AutoscalingLaunchConfiguration#snapshot_id}

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

The throughput (MiBps) to provision for a gp3 volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#throughput AutoscalingLaunchConfiguration#throughput}

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

The volume size, in GiBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#volume_size AutoscalingLaunchConfiguration#volume_size}

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

The volume type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#volume_type AutoscalingLaunchConfiguration#volume_type}

---

### AutoscalingLaunchConfigurationConfig <a name="AutoscalingLaunchConfigurationConfig" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscaling_launch_configuration.AutoscalingLaunchConfigurationConfig;

AutoscalingLaunchConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .imageId(java.lang.String)
    .instanceType(java.lang.String)
//  .associatePublicIpAddress(java.lang.Boolean|IResolvable)
//  .blockDeviceMappings(IResolvable|java.util.List<AutoscalingLaunchConfigurationBlockDeviceMappings>)
//  .classicLinkVpcId(java.lang.String)
//  .classicLinkVpcSecurityGroups(java.util.List<java.lang.String>)
//  .ebsOptimized(java.lang.Boolean|IResolvable)
//  .iamInstanceProfile(java.lang.String)
//  .instanceId(java.lang.String)
//  .instanceMonitoring(java.lang.Boolean|IResolvable)
//  .kernelId(java.lang.String)
//  .keyName(java.lang.String)
//  .launchConfigurationName(java.lang.String)
//  .metadataOptions(AutoscalingLaunchConfigurationMetadataOptions)
//  .placementTenancy(java.lang.String)
//  .ramDiskId(java.lang.String)
//  .securityGroups(java.util.List<java.lang.String>)
//  .spotPrice(java.lang.String)
//  .userData(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.imageId">imageId</a></code> | <code>java.lang.String</code> | Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Specifies the instance type of the EC2 instance. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | For Auto Scaling groups that are running in a virtual private cloud (VPC), specifies whether to assign a public IP address to the group's instances. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>></code> | Specifies how block devices are exposed to the instance. You can specify virtual devices and EBS volumes. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.classicLinkVpcId">classicLinkVpcId</a></code> | <code>java.lang.String</code> | The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.classicLinkVpcSecurityGroups">classicLinkVpcSecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | The IDs of one or more security groups for the VPC that you specified in the ClassicLinkVPCId property. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.ebsOptimized">ebsOptimized</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false). |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>java.lang.String</code> | Provides the name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | The ID of the Amazon EC2 instance you want to use to create the launch configuration. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.instanceMonitoring">instanceMonitoring</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Controls whether instances in this group are launched with detailed (true) or basic (false) monitoring. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.kernelId">kernelId</a></code> | <code>java.lang.String</code> | Provides the ID of the kernel associated with the EC2 AMI. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.keyName">keyName</a></code> | <code>java.lang.String</code> | Provides the name of the EC2 key pair. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.launchConfigurationName">launchConfigurationName</a></code> | <code>java.lang.String</code> | The name of the launch configuration. This name must be unique per Region per account. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions">AutoscalingLaunchConfigurationMetadataOptions</a></code> | The metadata options for the instances. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.placementTenancy">placementTenancy</a></code> | <code>java.lang.String</code> | The tenancy of the instance, either default or dedicated. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.ramDiskId">ramDiskId</a></code> | <code>java.lang.String</code> | The ID of the RAM disk to select. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | A list that contains the security groups to assign to the instances in the Auto Scaling group. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.spotPrice">spotPrice</a></code> | <code>java.lang.String</code> | The maximum hourly price you are willing to pay for any Spot Instances launched to fulfill the request. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.userData">userData</a></code> | <code>java.lang.String</code> | The Base64-encoded user data to make available to the launched EC2 instances. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#image_id AutoscalingLaunchConfiguration#image_id}

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Specifies the instance type of the EC2 instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#instance_type AutoscalingLaunchConfiguration#instance_type}

---

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="associatePublicIpAddress" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.associatePublicIpAddress"></a>

```java
public java.lang.Boolean|IResolvable getAssociatePublicIpAddress();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

For Auto Scaling groups that are running in a virtual private cloud (VPC), specifies whether to assign a public IP address to the group's instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#associate_public_ip_address AutoscalingLaunchConfiguration#associate_public_ip_address}

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.blockDeviceMappings"></a>

```java
public IResolvable|java.util.List<AutoscalingLaunchConfigurationBlockDeviceMappings> getBlockDeviceMappings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>>

Specifies how block devices are exposed to the instance. You can specify virtual devices and EBS volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#block_device_mappings AutoscalingLaunchConfiguration#block_device_mappings}

---

##### `classicLinkVpcId`<sup>Optional</sup> <a name="classicLinkVpcId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.classicLinkVpcId"></a>

```java
public java.lang.String getClassicLinkVpcId();
```

- *Type:* java.lang.String

The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#classic_link_vpc_id AutoscalingLaunchConfiguration#classic_link_vpc_id}

---

##### `classicLinkVpcSecurityGroups`<sup>Optional</sup> <a name="classicLinkVpcSecurityGroups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.classicLinkVpcSecurityGroups"></a>

```java
public java.util.List<java.lang.String> getClassicLinkVpcSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

The IDs of one or more security groups for the VPC that you specified in the ClassicLinkVPCId property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#classic_link_vpc_security_groups AutoscalingLaunchConfiguration#classic_link_vpc_security_groups}

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.ebsOptimized"></a>

```java
public java.lang.Boolean|IResolvable getEbsOptimized();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#ebs_optimized AutoscalingLaunchConfiguration#ebs_optimized}

---

##### `iamInstanceProfile`<sup>Optional</sup> <a name="iamInstanceProfile" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.iamInstanceProfile"></a>

```java
public java.lang.String getIamInstanceProfile();
```

- *Type:* java.lang.String

Provides the name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance.

The instance profile contains the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#iam_instance_profile AutoscalingLaunchConfiguration#iam_instance_profile}

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

The ID of the Amazon EC2 instance you want to use to create the launch configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#instance_id AutoscalingLaunchConfiguration#instance_id}

---

##### `instanceMonitoring`<sup>Optional</sup> <a name="instanceMonitoring" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.instanceMonitoring"></a>

```java
public java.lang.Boolean|IResolvable getInstanceMonitoring();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Controls whether instances in this group are launched with detailed (true) or basic (false) monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#instance_monitoring AutoscalingLaunchConfiguration#instance_monitoring}

---

##### `kernelId`<sup>Optional</sup> <a name="kernelId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.kernelId"></a>

```java
public java.lang.String getKernelId();
```

- *Type:* java.lang.String

Provides the ID of the kernel associated with the EC2 AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#kernel_id AutoscalingLaunchConfiguration#kernel_id}

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

Provides the name of the EC2 key pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#key_name AutoscalingLaunchConfiguration#key_name}

---

##### `launchConfigurationName`<sup>Optional</sup> <a name="launchConfigurationName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.launchConfigurationName"></a>

```java
public java.lang.String getLaunchConfigurationName();
```

- *Type:* java.lang.String

The name of the launch configuration. This name must be unique per Region per account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#launch_configuration_name AutoscalingLaunchConfiguration#launch_configuration_name}

---

##### `metadataOptions`<sup>Optional</sup> <a name="metadataOptions" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.metadataOptions"></a>

```java
public AutoscalingLaunchConfigurationMetadataOptions getMetadataOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions">AutoscalingLaunchConfigurationMetadataOptions</a>

The metadata options for the instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#metadata_options AutoscalingLaunchConfiguration#metadata_options}

---

##### `placementTenancy`<sup>Optional</sup> <a name="placementTenancy" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.placementTenancy"></a>

```java
public java.lang.String getPlacementTenancy();
```

- *Type:* java.lang.String

The tenancy of the instance, either default or dedicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#placement_tenancy AutoscalingLaunchConfiguration#placement_tenancy}

---

##### `ramDiskId`<sup>Optional</sup> <a name="ramDiskId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.ramDiskId"></a>

```java
public java.lang.String getRamDiskId();
```

- *Type:* java.lang.String

The ID of the RAM disk to select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#ram_disk_id AutoscalingLaunchConfiguration#ram_disk_id}

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

A list that contains the security groups to assign to the instances in the Auto Scaling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#security_groups AutoscalingLaunchConfiguration#security_groups}

---

##### `spotPrice`<sup>Optional</sup> <a name="spotPrice" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.spotPrice"></a>

```java
public java.lang.String getSpotPrice();
```

- *Type:* java.lang.String

The maximum hourly price you are willing to pay for any Spot Instances launched to fulfill the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#spot_price AutoscalingLaunchConfiguration#spot_price}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

The Base64-encoded user data to make available to the launched EC2 instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#user_data AutoscalingLaunchConfiguration#user_data}

---

### AutoscalingLaunchConfigurationMetadataOptions <a name="AutoscalingLaunchConfigurationMetadataOptions" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscaling_launch_configuration.AutoscalingLaunchConfigurationMetadataOptions;

AutoscalingLaunchConfigurationMetadataOptions.builder()
//  .httpEndpoint(java.lang.String)
//  .httpPutResponseHopLimit(java.lang.Number)
//  .httpTokens(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.property.httpEndpoint">httpEndpoint</a></code> | <code>java.lang.String</code> | This parameter enables or disables the HTTP metadata endpoint on your instances. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>java.lang.Number</code> | The desired HTTP PUT response hop limit for instance metadata requests. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.property.httpTokens">httpTokens</a></code> | <code>java.lang.String</code> | The state of token usage for your instance metadata requests. |

---

##### `httpEndpoint`<sup>Optional</sup> <a name="httpEndpoint" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.property.httpEndpoint"></a>

```java
public java.lang.String getHttpEndpoint();
```

- *Type:* java.lang.String

This parameter enables or disables the HTTP metadata endpoint on your instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#http_endpoint AutoscalingLaunchConfiguration#http_endpoint}

---

##### `httpPutResponseHopLimit`<sup>Optional</sup> <a name="httpPutResponseHopLimit" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.property.httpPutResponseHopLimit"></a>

```java
public java.lang.Number getHttpPutResponseHopLimit();
```

- *Type:* java.lang.Number

The desired HTTP PUT response hop limit for instance metadata requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#http_put_response_hop_limit AutoscalingLaunchConfiguration#http_put_response_hop_limit}

---

##### `httpTokens`<sup>Optional</sup> <a name="httpTokens" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.property.httpTokens"></a>

```java
public java.lang.String getHttpTokens();
```

- *Type:* java.lang.String

The state of token usage for your instance metadata requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_launch_configuration#http_tokens AutoscalingLaunchConfiguration#http_tokens}

---

## Classes <a name="Classes" id="Classes"></a>

### AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference <a name="AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscaling_launch_configuration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference;

new AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```java
public void resetDeleteOnTermination()
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```java
public void resetEncrypted()
```

##### `resetIops` <a name="resetIops" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```java
public void resetSnapshotId()
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```java
public void resetThroughput()
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```java
public void resetVolumeSize()
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```java
public void resetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">snapshotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.throughputInput">throughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs">AutoscalingLaunchConfigurationBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```java
public java.lang.Boolean|IResolvable getDeleteOnTerminationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```java
public java.lang.Boolean|IResolvable getEncryptedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```java
public java.lang.String getSnapshotIdInput();
```

- *Type:* java.lang.String

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```java
public java.lang.Number getThroughputInput();
```

- *Type:* java.lang.Number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```java
public java.lang.Number getVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```java
public java.lang.String getVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```java
public java.lang.Boolean|IResolvable getDeleteOnTermination();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```java
public java.lang.Boolean|IResolvable getEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```java
public IResolvable|AutoscalingLaunchConfigurationBlockDeviceMappingsEbs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs">AutoscalingLaunchConfigurationBlockDeviceMappingsEbs</a>

---


### AutoscalingLaunchConfigurationBlockDeviceMappingsList <a name="AutoscalingLaunchConfigurationBlockDeviceMappingsList" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscaling_launch_configuration.AutoscalingLaunchConfigurationBlockDeviceMappingsList;

new AutoscalingLaunchConfigurationBlockDeviceMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.get"></a>

```java
public AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AutoscalingLaunchConfigurationBlockDeviceMappings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>>

---


### AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference <a name="AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscaling_launch_configuration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference;

new AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.putEbs">putEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetEbs">resetEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetNoDevice">resetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetVirtualName">resetVirtualName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbs` <a name="putEbs" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.putEbs"></a>

```java
public void putEbs(AutoscalingLaunchConfigurationBlockDeviceMappingsEbs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs">AutoscalingLaunchConfigurationBlockDeviceMappingsEbs</a>

---

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```java
public void resetDeviceName()
```

##### `resetEbs` <a name="resetEbs" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetEbs"></a>

```java
public void resetEbs()
```

##### `resetNoDevice` <a name="resetNoDevice" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```java
public void resetNoDevice()
```

##### `resetVirtualName` <a name="resetVirtualName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```java
public void resetVirtualName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference">AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.ebsInput">ebsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs">AutoscalingLaunchConfigurationBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.noDeviceInput">noDeviceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.virtualNameInput">virtualNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.noDevice">noDevice</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.virtualName">virtualName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.ebs"></a>

```java
public AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference getEbs();
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference">AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference</a>

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```java
public java.lang.String getDeviceNameInput();
```

- *Type:* java.lang.String

---

##### `ebsInput`<sup>Optional</sup> <a name="ebsInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```java
public IResolvable|AutoscalingLaunchConfigurationBlockDeviceMappingsEbs getEbsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs">AutoscalingLaunchConfigurationBlockDeviceMappingsEbs</a>

---

##### `noDeviceInput`<sup>Optional</sup> <a name="noDeviceInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```java
public java.lang.Boolean|IResolvable getNoDeviceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `virtualNameInput`<sup>Optional</sup> <a name="virtualNameInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```java
public java.lang.String getVirtualNameInput();
```

- *Type:* java.lang.String

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `noDevice`<sup>Required</sup> <a name="noDevice" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.noDevice"></a>

```java
public java.lang.Boolean|IResolvable getNoDevice();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.virtualName"></a>

```java
public java.lang.String getVirtualName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.internalValue"></a>

```java
public IResolvable|AutoscalingLaunchConfigurationBlockDeviceMappings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>

---


### AutoscalingLaunchConfigurationMetadataOptionsOutputReference <a name="AutoscalingLaunchConfigurationMetadataOptionsOutputReference" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscaling_launch_configuration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference;

new AutoscalingLaunchConfigurationMetadataOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resetHttpEndpoint">resetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">resetHttpPutResponseHopLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resetHttpTokens">resetHttpTokens</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpEndpoint` <a name="resetHttpEndpoint" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resetHttpEndpoint"></a>

```java
public void resetHttpEndpoint()
```

##### `resetHttpPutResponseHopLimit` <a name="resetHttpPutResponseHopLimit" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```java
public void resetHttpPutResponseHopLimit()
```

##### `resetHttpTokens` <a name="resetHttpTokens" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resetHttpTokens"></a>

```java
public void resetHttpTokens()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpEndpointInput">httpEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">httpPutResponseHopLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpTokensInput">httpTokensInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpEndpoint">httpEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpTokens">httpTokens</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions">AutoscalingLaunchConfigurationMetadataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpEndpointInput`<sup>Optional</sup> <a name="httpEndpointInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpEndpointInput"></a>

```java
public java.lang.String getHttpEndpointInput();
```

- *Type:* java.lang.String

---

##### `httpPutResponseHopLimitInput`<sup>Optional</sup> <a name="httpPutResponseHopLimitInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```java
public java.lang.Number getHttpPutResponseHopLimitInput();
```

- *Type:* java.lang.Number

---

##### `httpTokensInput`<sup>Optional</sup> <a name="httpTokensInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpTokensInput"></a>

```java
public java.lang.String getHttpTokensInput();
```

- *Type:* java.lang.String

---

##### `httpEndpoint`<sup>Required</sup> <a name="httpEndpoint" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpEndpoint"></a>

```java
public java.lang.String getHttpEndpoint();
```

- *Type:* java.lang.String

---

##### `httpPutResponseHopLimit`<sup>Required</sup> <a name="httpPutResponseHopLimit" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```java
public java.lang.Number getHttpPutResponseHopLimit();
```

- *Type:* java.lang.Number

---

##### `httpTokens`<sup>Required</sup> <a name="httpTokens" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpTokens"></a>

```java
public java.lang.String getHttpTokens();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|AutoscalingLaunchConfigurationMetadataOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions">AutoscalingLaunchConfigurationMetadataOptions</a>

---



