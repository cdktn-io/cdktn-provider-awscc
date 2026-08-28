# `ec2Instance` Submodule <a name="`ec2Instance` Submodule" id="@cdktn/provider-awscc.ec2Instance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2Instance <a name="Ec2Instance" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance awscc_ec2_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2Instance;

Ec2Instance.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .additionalInfo(java.lang.String)
//  .affinity(java.lang.String)
//  .availabilityZone(java.lang.String)
//  .blockDeviceMappings(IResolvable|java.util.List<Ec2InstanceBlockDeviceMappings>)
//  .cpuOptions(Ec2InstanceCpuOptions)
//  .creditSpecification(Ec2InstanceCreditSpecification)
//  .disableApiTermination(java.lang.Boolean|IResolvable)
//  .ebsOptimized(java.lang.Boolean|IResolvable)
//  .elasticGpuSpecifications(IResolvable|java.util.List<Ec2InstanceElasticGpuSpecifications>)
//  .elasticInferenceAccelerators(IResolvable|java.util.List<Ec2InstanceElasticInferenceAccelerators>)
//  .enclaveOptions(Ec2InstanceEnclaveOptions)
//  .hibernationOptions(Ec2InstanceHibernationOptions)
//  .hostId(java.lang.String)
//  .hostResourceGroupArn(java.lang.String)
//  .iamInstanceProfile(java.lang.String)
//  .imageId(java.lang.String)
//  .instanceInitiatedShutdownBehavior(java.lang.String)
//  .instanceType(java.lang.String)
//  .ipv6AddressCount(java.lang.Number)
//  .ipv6Addresses(IResolvable|java.util.List<Ec2InstanceIpv6Addresses>)
//  .kernelId(java.lang.String)
//  .keyName(java.lang.String)
//  .launchTemplate(Ec2InstanceLaunchTemplate)
//  .licenseSpecifications(IResolvable|java.util.List<Ec2InstanceLicenseSpecifications>)
//  .metadataOptions(Ec2InstanceMetadataOptions)
//  .monitoring(java.lang.Boolean|IResolvable)
//  .networkInterfaces(IResolvable|java.util.List<Ec2InstanceNetworkInterfaces>)
//  .placementGroupName(java.lang.String)
//  .privateDnsNameOptions(Ec2InstancePrivateDnsNameOptions)
//  .privateIpAddress(java.lang.String)
//  .propagateTagsToVolumeOnCreation(java.lang.Boolean|IResolvable)
//  .ramdiskId(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .securityGroups(java.util.List<java.lang.String>)
//  .sourceDestCheck(java.lang.Boolean|IResolvable)
//  .ssmAssociations(IResolvable|java.util.List<Ec2InstanceSsmAssociations>)
//  .subnetId(java.lang.String)
//  .tags(IResolvable|java.util.List<Ec2InstanceTags>)
//  .tenancy(java.lang.String)
//  .userData(java.lang.String)
//  .volumes(IResolvable|java.util.List<Ec2InstanceVolumes>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.additionalInfo">additionalInfo</a></code> | <code>java.lang.String</code> | This property is reserved for internal use. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.affinity">affinity</a></code> | <code>java.lang.String</code> | Indicates whether the instance is associated with a dedicated host. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | The Availability Zone of the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.blockDeviceMappings">blockDeviceMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>></code> | The block device mapping entries that defines the block devices to attach to the instance at launch. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.cpuOptions">cpuOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a></code> | The CPU options for the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.creditSpecification">creditSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a></code> | The credit option for CPU usage of the burstable performance instance. Valid values are standard and unlimited. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.disableApiTermination">disableApiTermination</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If you set this parameter to true, you can't terminate the instance using the Amazon EC2 console, CLI, or API; |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.ebsOptimized">ebsOptimized</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the instance is optimized for Amazon EBS I/O. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.elasticGpuSpecifications">elasticGpuSpecifications</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>></code> | An elastic GPU to associate with the instance. Amazon Elastic Graphics is no longer available. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.elasticInferenceAccelerators">elasticInferenceAccelerators</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>></code> | An elastic inference accelerator to associate with the instance. Amazon Elastic Inference is no longer available. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.enclaveOptions">enclaveOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a></code> | Indicates whether the instance is enabled for AWS Nitro Enclaves. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.hibernationOptions">hibernationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a></code> | Indicates whether an instance is enabled for hibernation. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.hostId">hostId</a></code> | <code>java.lang.String</code> | If you specify host for the Affinity property, the ID of a dedicated host that the instance is associated with. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.hostResourceGroupArn">hostResourceGroupArn</a></code> | <code>java.lang.String</code> | The ARN of the host resource group in which to launch the instances. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.iamInstanceProfile">iamInstanceProfile</a></code> | <code>java.lang.String</code> | The IAM instance profile. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.imageId">imageId</a></code> | <code>java.lang.String</code> | The ID of the AMI. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.instanceInitiatedShutdownBehavior">instanceInitiatedShutdownBehavior</a></code> | <code>java.lang.String</code> | Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.instanceType">instanceType</a></code> | <code>java.lang.String</code> | The instance type. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.ipv6AddressCount">ipv6AddressCount</a></code> | <code>java.lang.Number</code> | [EC2-VPC] The number of IPv6 addresses to associate with the primary network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.ipv6Addresses">ipv6Addresses</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>></code> | [EC2-VPC] The IPv6 addresses from the range of the subnet to associate with the primary network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.kernelId">kernelId</a></code> | <code>java.lang.String</code> | The ID of the kernel. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.keyName">keyName</a></code> | <code>java.lang.String</code> | The name of the key pair. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a></code> | The launch template to use to launch the instances. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.licenseSpecifications">licenseSpecifications</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>></code> | The license configurations. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a></code> | The metadata options for the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.monitoring">monitoring</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether detailed monitoring is enabled for the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.networkInterfaces">networkInterfaces</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>></code> | The network interfaces to associate with the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.placementGroupName">placementGroupName</a></code> | <code>java.lang.String</code> | The name of an existing placement group that you want to launch the instance into (cluster \| partition \| spread). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.privateDnsNameOptions">privateDnsNameOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a></code> | The options for the instance hostname. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | [EC2-VPC] The primary IPv4 address. You must specify a value from the IPv4 address range of the subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.propagateTagsToVolumeOnCreation">propagateTagsToVolumeOnCreation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to assign the tags from the instance to all of the volumes attached to the instance at launch. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.ramdiskId">ramdiskId</a></code> | <code>java.lang.String</code> | The ID of the RAM disk to select. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The IDs of the security groups. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | the names of the security groups. For a nondefault VPC, you must use security group IDs instead. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.sourceDestCheck">sourceDestCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to enable an instance launched in a VPC to perform NAT. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.ssmAssociations">ssmAssociations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>></code> | The SSM document and parameter values in AWS Systems Manager to associate with this instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | [EC2-VPC] The ID of the subnet to launch the instance into. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>></code> | The tags to add to the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.tenancy">tenancy</a></code> | <code>java.lang.String</code> | The tenancy of the instance (if the instance is running in a VPC). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.userData">userData</a></code> | <code>java.lang.String</code> | The user data to make available to the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.volumes">volumes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>></code> | The volumes to attach to the instance. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `additionalInfo`<sup>Optional</sup> <a name="additionalInfo" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.additionalInfo"></a>

- *Type:* java.lang.String

This property is reserved for internal use.

If you use it, the stack fails with this error: Bad property set: [Testing this property] (Service: AmazonEC2; Status Code: 400; Error Code: InvalidParameterCombination; Request ID: 0XXXXXX-49c7-4b40-8bcc-76885dcXXXXX).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#additional_info Ec2Instance#additional_info}

---

##### `affinity`<sup>Optional</sup> <a name="affinity" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.affinity"></a>

- *Type:* java.lang.String

Indicates whether the instance is associated with a dedicated host.

If you want the instance to always restart on the same host on which it was launched, specify host. If you want the instance to restart on any available host, but try to launch onto the last host it ran on (on a best-effort basis), specify default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#affinity Ec2Instance#affinity}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

The Availability Zone of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#availability_zone Ec2Instance#availability_zone}

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.blockDeviceMappings"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>>

The block device mapping entries that defines the block devices to attach to the instance at launch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#block_device_mappings Ec2Instance#block_device_mappings}

---

##### `cpuOptions`<sup>Optional</sup> <a name="cpuOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.cpuOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a>

The CPU options for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#cpu_options Ec2Instance#cpu_options}

---

##### `creditSpecification`<sup>Optional</sup> <a name="creditSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.creditSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a>

The credit option for CPU usage of the burstable performance instance. Valid values are standard and unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#credit_specification Ec2Instance#credit_specification}

---

##### `disableApiTermination`<sup>Optional</sup> <a name="disableApiTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.disableApiTermination"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If you set this parameter to true, you can't terminate the instance using the Amazon EC2 console, CLI, or API;

otherwise, you can.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#disable_api_termination Ec2Instance#disable_api_termination}

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.ebsOptimized"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the instance is optimized for Amazon EBS I/O.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ebs_optimized Ec2Instance#ebs_optimized}

---

##### `elasticGpuSpecifications`<sup>Optional</sup> <a name="elasticGpuSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.elasticGpuSpecifications"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>>

An elastic GPU to associate with the instance. Amazon Elastic Graphics is no longer available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#elastic_gpu_specifications Ec2Instance#elastic_gpu_specifications}

---

##### `elasticInferenceAccelerators`<sup>Optional</sup> <a name="elasticInferenceAccelerators" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.elasticInferenceAccelerators"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>>

An elastic inference accelerator to associate with the instance. Amazon Elastic Inference is no longer available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#elastic_inference_accelerators Ec2Instance#elastic_inference_accelerators}

---

##### `enclaveOptions`<sup>Optional</sup> <a name="enclaveOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.enclaveOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a>

Indicates whether the instance is enabled for AWS Nitro Enclaves.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#enclave_options Ec2Instance#enclave_options}

---

##### `hibernationOptions`<sup>Optional</sup> <a name="hibernationOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.hibernationOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a>

Indicates whether an instance is enabled for hibernation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#hibernation_options Ec2Instance#hibernation_options}

---

##### `hostId`<sup>Optional</sup> <a name="hostId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.hostId"></a>

- *Type:* java.lang.String

If you specify host for the Affinity property, the ID of a dedicated host that the instance is associated with.

If you don't specify an ID, Amazon EC2 launches the instance onto any available, compatible dedicated host in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#host_id Ec2Instance#host_id}

---

##### `hostResourceGroupArn`<sup>Optional</sup> <a name="hostResourceGroupArn" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.hostResourceGroupArn"></a>

- *Type:* java.lang.String

The ARN of the host resource group in which to launch the instances.

If you specify a host resource group ARN, omit the Tenancy parameter or set it to host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#host_resource_group_arn Ec2Instance#host_resource_group_arn}

---

##### `iamInstanceProfile`<sup>Optional</sup> <a name="iamInstanceProfile" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.iamInstanceProfile"></a>

- *Type:* java.lang.String

The IAM instance profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#iam_instance_profile Ec2Instance#iam_instance_profile}

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.imageId"></a>

- *Type:* java.lang.String

The ID of the AMI.

An AMI ID is required to launch an instance and must be specified here or in a launch template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#image_id Ec2Instance#image_id}

---

##### `instanceInitiatedShutdownBehavior`<sup>Optional</sup> <a name="instanceInitiatedShutdownBehavior" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.instanceInitiatedShutdownBehavior"></a>

- *Type:* java.lang.String

Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#instance_initiated_shutdown_behavior Ec2Instance#instance_initiated_shutdown_behavior}

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.instanceType"></a>

- *Type:* java.lang.String

The instance type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#instance_type Ec2Instance#instance_type}

---

##### `ipv6AddressCount`<sup>Optional</sup> <a name="ipv6AddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.ipv6AddressCount"></a>

- *Type:* java.lang.Number

[EC2-VPC] The number of IPv6 addresses to associate with the primary network interface.

Amazon EC2 chooses the IPv6 addresses from the range of your subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ipv_6_address_count Ec2Instance#ipv_6_address_count}

---

##### `ipv6Addresses`<sup>Optional</sup> <a name="ipv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.ipv6Addresses"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>>

[EC2-VPC] The IPv6 addresses from the range of the subnet to associate with the primary network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ipv_6_addresses Ec2Instance#ipv_6_addresses}

---

##### `kernelId`<sup>Optional</sup> <a name="kernelId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.kernelId"></a>

- *Type:* java.lang.String

The ID of the kernel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#kernel_id Ec2Instance#kernel_id}

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.keyName"></a>

- *Type:* java.lang.String

The name of the key pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#key_name Ec2Instance#key_name}

---

##### `launchTemplate`<sup>Optional</sup> <a name="launchTemplate" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.launchTemplate"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a>

The launch template to use to launch the instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#launch_template Ec2Instance#launch_template}

---

##### `licenseSpecifications`<sup>Optional</sup> <a name="licenseSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.licenseSpecifications"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>>

The license configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#license_specifications Ec2Instance#license_specifications}

---

##### `metadataOptions`<sup>Optional</sup> <a name="metadataOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.metadataOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a>

The metadata options for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#metadata_options Ec2Instance#metadata_options}

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.monitoring"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether detailed monitoring is enabled for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#monitoring Ec2Instance#monitoring}

---

##### `networkInterfaces`<sup>Optional</sup> <a name="networkInterfaces" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.networkInterfaces"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>>

The network interfaces to associate with the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#network_interfaces Ec2Instance#network_interfaces}

---

##### `placementGroupName`<sup>Optional</sup> <a name="placementGroupName" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.placementGroupName"></a>

- *Type:* java.lang.String

The name of an existing placement group that you want to launch the instance into (cluster | partition | spread).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#placement_group_name Ec2Instance#placement_group_name}

---

##### `privateDnsNameOptions`<sup>Optional</sup> <a name="privateDnsNameOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.privateDnsNameOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a>

The options for the instance hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#private_dns_name_options Ec2Instance#private_dns_name_options}

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.privateIpAddress"></a>

- *Type:* java.lang.String

[EC2-VPC] The primary IPv4 address. You must specify a value from the IPv4 address range of the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#private_ip_address Ec2Instance#private_ip_address}

---

##### `propagateTagsToVolumeOnCreation`<sup>Optional</sup> <a name="propagateTagsToVolumeOnCreation" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.propagateTagsToVolumeOnCreation"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to assign the tags from the instance to all of the volumes attached to the instance at launch.

If you specify true and you assign tags to the instance, those tags are automatically assigned to all of the volumes that you attach to the instance at launch. If you specify false, those tags are not assigned to the attached volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#propagate_tags_to_volume_on_creation Ec2Instance#propagate_tags_to_volume_on_creation}

---

##### `ramdiskId`<sup>Optional</sup> <a name="ramdiskId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.ramdiskId"></a>

- *Type:* java.lang.String

The ID of the RAM disk to select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ramdisk_id Ec2Instance#ramdisk_id}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.securityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

The IDs of the security groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#security_group_ids Ec2Instance#security_group_ids}

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.securityGroups"></a>

- *Type:* java.util.List<java.lang.String>

the names of the security groups. For a nondefault VPC, you must use security group IDs instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#security_groups Ec2Instance#security_groups}

---

##### `sourceDestCheck`<sup>Optional</sup> <a name="sourceDestCheck" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.sourceDestCheck"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to enable an instance launched in a VPC to perform NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#source_dest_check Ec2Instance#source_dest_check}

---

##### `ssmAssociations`<sup>Optional</sup> <a name="ssmAssociations" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.ssmAssociations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>>

The SSM document and parameter values in AWS Systems Manager to associate with this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ssm_associations Ec2Instance#ssm_associations}

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

[EC2-VPC] The ID of the subnet to launch the instance into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#subnet_id Ec2Instance#subnet_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>>

The tags to add to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#tags Ec2Instance#tags}

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.tenancy"></a>

- *Type:* java.lang.String

The tenancy of the instance (if the instance is running in a VPC).

An instance with a tenancy of dedicated runs on single-tenant hardware.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#tenancy Ec2Instance#tenancy}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.userData"></a>

- *Type:* java.lang.String

The user data to make available to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#user_data Ec2Instance#user_data}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.volumes"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>>

The volumes to attach to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#volumes Ec2Instance#volumes}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putBlockDeviceMappings">putBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putCpuOptions">putCpuOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putCreditSpecification">putCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putElasticGpuSpecifications">putElasticGpuSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putElasticInferenceAccelerators">putElasticInferenceAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putEnclaveOptions">putEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putHibernationOptions">putHibernationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putIpv6Addresses">putIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putLaunchTemplate">putLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putLicenseSpecifications">putLicenseSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putMetadataOptions">putMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putNetworkInterfaces">putNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putPrivateDnsNameOptions">putPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putSsmAssociations">putSsmAssociations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putVolumes">putVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetAdditionalInfo">resetAdditionalInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetAffinity">resetAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetBlockDeviceMappings">resetBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetCpuOptions">resetCpuOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetCreditSpecification">resetCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetDisableApiTermination">resetDisableApiTermination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetEbsOptimized">resetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetElasticGpuSpecifications">resetElasticGpuSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetElasticInferenceAccelerators">resetElasticInferenceAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetEnclaveOptions">resetEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetHibernationOptions">resetHibernationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetHostId">resetHostId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetHostResourceGroupArn">resetHostResourceGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetIamInstanceProfile">resetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetImageId">resetImageId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetInstanceInitiatedShutdownBehavior">resetInstanceInitiatedShutdownBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetIpv6AddressCount">resetIpv6AddressCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetIpv6Addresses">resetIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetKernelId">resetKernelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetLaunchTemplate">resetLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetLicenseSpecifications">resetLicenseSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetMetadataOptions">resetMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetMonitoring">resetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetNetworkInterfaces">resetNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPlacementGroupName">resetPlacementGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPrivateDnsNameOptions">resetPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPrivateIpAddress">resetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPropagateTagsToVolumeOnCreation">resetPropagateTagsToVolumeOnCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetRamdiskId">resetRamdiskId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSourceDestCheck">resetSourceDestCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSsmAssociations">resetSsmAssociations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetTenancy">resetTenancy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetUserData">resetUserData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetVolumes">resetVolumes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBlockDeviceMappings` <a name="putBlockDeviceMappings" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putBlockDeviceMappings"></a>

```java
public void putBlockDeviceMappings(IResolvable|java.util.List<Ec2InstanceBlockDeviceMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putBlockDeviceMappings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>>

---

##### `putCpuOptions` <a name="putCpuOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putCpuOptions"></a>

```java
public void putCpuOptions(Ec2InstanceCpuOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putCpuOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a>

---

##### `putCreditSpecification` <a name="putCreditSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putCreditSpecification"></a>

```java
public void putCreditSpecification(Ec2InstanceCreditSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putCreditSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a>

---

##### `putElasticGpuSpecifications` <a name="putElasticGpuSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putElasticGpuSpecifications"></a>

```java
public void putElasticGpuSpecifications(IResolvable|java.util.List<Ec2InstanceElasticGpuSpecifications> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putElasticGpuSpecifications.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>>

---

##### `putElasticInferenceAccelerators` <a name="putElasticInferenceAccelerators" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putElasticInferenceAccelerators"></a>

```java
public void putElasticInferenceAccelerators(IResolvable|java.util.List<Ec2InstanceElasticInferenceAccelerators> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putElasticInferenceAccelerators.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>>

---

##### `putEnclaveOptions` <a name="putEnclaveOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putEnclaveOptions"></a>

```java
public void putEnclaveOptions(Ec2InstanceEnclaveOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putEnclaveOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a>

---

##### `putHibernationOptions` <a name="putHibernationOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putHibernationOptions"></a>

```java
public void putHibernationOptions(Ec2InstanceHibernationOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putHibernationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a>

---

##### `putIpv6Addresses` <a name="putIpv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putIpv6Addresses"></a>

```java
public void putIpv6Addresses(IResolvable|java.util.List<Ec2InstanceIpv6Addresses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putIpv6Addresses.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>>

---

##### `putLaunchTemplate` <a name="putLaunchTemplate" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putLaunchTemplate"></a>

```java
public void putLaunchTemplate(Ec2InstanceLaunchTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a>

---

##### `putLicenseSpecifications` <a name="putLicenseSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putLicenseSpecifications"></a>

```java
public void putLicenseSpecifications(IResolvable|java.util.List<Ec2InstanceLicenseSpecifications> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putLicenseSpecifications.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>>

---

##### `putMetadataOptions` <a name="putMetadataOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putMetadataOptions"></a>

```java
public void putMetadataOptions(Ec2InstanceMetadataOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a>

---

##### `putNetworkInterfaces` <a name="putNetworkInterfaces" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putNetworkInterfaces"></a>

```java
public void putNetworkInterfaces(IResolvable|java.util.List<Ec2InstanceNetworkInterfaces> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putNetworkInterfaces.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>>

---

##### `putPrivateDnsNameOptions` <a name="putPrivateDnsNameOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putPrivateDnsNameOptions"></a>

```java
public void putPrivateDnsNameOptions(Ec2InstancePrivateDnsNameOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putPrivateDnsNameOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a>

---

##### `putSsmAssociations` <a name="putSsmAssociations" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putSsmAssociations"></a>

```java
public void putSsmAssociations(IResolvable|java.util.List<Ec2InstanceSsmAssociations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putSsmAssociations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Ec2InstanceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>>

---

##### `putVolumes` <a name="putVolumes" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putVolumes"></a>

```java
public void putVolumes(IResolvable|java.util.List<Ec2InstanceVolumes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putVolumes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>>

---

##### `resetAdditionalInfo` <a name="resetAdditionalInfo" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetAdditionalInfo"></a>

```java
public void resetAdditionalInfo()
```

##### `resetAffinity` <a name="resetAffinity" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetAffinity"></a>

```java
public void resetAffinity()
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetBlockDeviceMappings` <a name="resetBlockDeviceMappings" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetBlockDeviceMappings"></a>

```java
public void resetBlockDeviceMappings()
```

##### `resetCpuOptions` <a name="resetCpuOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetCpuOptions"></a>

```java
public void resetCpuOptions()
```

##### `resetCreditSpecification` <a name="resetCreditSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetCreditSpecification"></a>

```java
public void resetCreditSpecification()
```

##### `resetDisableApiTermination` <a name="resetDisableApiTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetDisableApiTermination"></a>

```java
public void resetDisableApiTermination()
```

##### `resetEbsOptimized` <a name="resetEbsOptimized" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetEbsOptimized"></a>

```java
public void resetEbsOptimized()
```

##### `resetElasticGpuSpecifications` <a name="resetElasticGpuSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetElasticGpuSpecifications"></a>

```java
public void resetElasticGpuSpecifications()
```

##### `resetElasticInferenceAccelerators` <a name="resetElasticInferenceAccelerators" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetElasticInferenceAccelerators"></a>

```java
public void resetElasticInferenceAccelerators()
```

##### `resetEnclaveOptions` <a name="resetEnclaveOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetEnclaveOptions"></a>

```java
public void resetEnclaveOptions()
```

##### `resetHibernationOptions` <a name="resetHibernationOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetHibernationOptions"></a>

```java
public void resetHibernationOptions()
```

##### `resetHostId` <a name="resetHostId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetHostId"></a>

```java
public void resetHostId()
```

##### `resetHostResourceGroupArn` <a name="resetHostResourceGroupArn" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetHostResourceGroupArn"></a>

```java
public void resetHostResourceGroupArn()
```

##### `resetIamInstanceProfile` <a name="resetIamInstanceProfile" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetIamInstanceProfile"></a>

```java
public void resetIamInstanceProfile()
```

##### `resetImageId` <a name="resetImageId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetImageId"></a>

```java
public void resetImageId()
```

##### `resetInstanceInitiatedShutdownBehavior` <a name="resetInstanceInitiatedShutdownBehavior" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetInstanceInitiatedShutdownBehavior"></a>

```java
public void resetInstanceInitiatedShutdownBehavior()
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetIpv6AddressCount` <a name="resetIpv6AddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetIpv6AddressCount"></a>

```java
public void resetIpv6AddressCount()
```

##### `resetIpv6Addresses` <a name="resetIpv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetIpv6Addresses"></a>

```java
public void resetIpv6Addresses()
```

##### `resetKernelId` <a name="resetKernelId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetKernelId"></a>

```java
public void resetKernelId()
```

##### `resetKeyName` <a name="resetKeyName" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetKeyName"></a>

```java
public void resetKeyName()
```

##### `resetLaunchTemplate` <a name="resetLaunchTemplate" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetLaunchTemplate"></a>

```java
public void resetLaunchTemplate()
```

##### `resetLicenseSpecifications` <a name="resetLicenseSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetLicenseSpecifications"></a>

```java
public void resetLicenseSpecifications()
```

##### `resetMetadataOptions` <a name="resetMetadataOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetMetadataOptions"></a>

```java
public void resetMetadataOptions()
```

##### `resetMonitoring` <a name="resetMonitoring" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetMonitoring"></a>

```java
public void resetMonitoring()
```

##### `resetNetworkInterfaces` <a name="resetNetworkInterfaces" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetNetworkInterfaces"></a>

```java
public void resetNetworkInterfaces()
```

##### `resetPlacementGroupName` <a name="resetPlacementGroupName" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPlacementGroupName"></a>

```java
public void resetPlacementGroupName()
```

##### `resetPrivateDnsNameOptions` <a name="resetPrivateDnsNameOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPrivateDnsNameOptions"></a>

```java
public void resetPrivateDnsNameOptions()
```

##### `resetPrivateIpAddress` <a name="resetPrivateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPrivateIpAddress"></a>

```java
public void resetPrivateIpAddress()
```

##### `resetPropagateTagsToVolumeOnCreation` <a name="resetPropagateTagsToVolumeOnCreation" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPropagateTagsToVolumeOnCreation"></a>

```java
public void resetPropagateTagsToVolumeOnCreation()
```

##### `resetRamdiskId` <a name="resetRamdiskId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetRamdiskId"></a>

```java
public void resetRamdiskId()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetSourceDestCheck` <a name="resetSourceDestCheck" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSourceDestCheck"></a>

```java
public void resetSourceDestCheck()
```

##### `resetSsmAssociations` <a name="resetSsmAssociations" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSsmAssociations"></a>

```java
public void resetSsmAssociations()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetTags"></a>

```java
public void resetTags()
```

##### `resetTenancy` <a name="resetTenancy" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetTenancy"></a>

```java
public void resetTenancy()
```

##### `resetUserData` <a name="resetUserData" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetUserData"></a>

```java
public void resetUserData()
```

##### `resetVolumes` <a name="resetVolumes" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetVolumes"></a>

```java
public void resetVolumes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2Instance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2Instance;

Ec2Instance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2Instance;

Ec2Instance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2Instance;

Ec2Instance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2Instance;

Ec2Instance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2Instance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2Instance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2Instance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2Instance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2Instance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList">Ec2InstanceBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.cpuOptions">cpuOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference">Ec2InstanceCpuOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.creditSpecification">creditSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference">Ec2InstanceCreditSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticGpuSpecifications">elasticGpuSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList">Ec2InstanceElasticGpuSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticInferenceAccelerators">elasticInferenceAccelerators</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList">Ec2InstanceElasticInferenceAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.enclaveOptions">enclaveOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference">Ec2InstanceEnclaveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hibernationOptions">hibernationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference">Ec2InstanceHibernationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6Addresses">ipv6Addresses</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList">Ec2InstanceIpv6AddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference">Ec2InstanceLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.licenseSpecifications">licenseSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList">Ec2InstanceLicenseSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference">Ec2InstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList">Ec2InstanceNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateDnsName">privateDnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateDnsNameOptions">privateDnsNameOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference">Ec2InstancePrivateDnsNameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.publicDnsName">publicDnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.publicIp">publicIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ssmAssociations">ssmAssociations</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList">Ec2InstanceSsmAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.state">state</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference">Ec2InstanceStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList">Ec2InstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.volumes">volumes</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList">Ec2InstanceVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.additionalInfoInput">additionalInfoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.affinityInput">affinityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.blockDeviceMappingsInput">blockDeviceMappingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.cpuOptionsInput">cpuOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.creditSpecificationInput">creditSpecificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.disableApiTerminationInput">disableApiTerminationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ebsOptimizedInput">ebsOptimizedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticGpuSpecificationsInput">elasticGpuSpecificationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticInferenceAcceleratorsInput">elasticInferenceAcceleratorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.enclaveOptionsInput">enclaveOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hibernationOptionsInput">hibernationOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostIdInput">hostIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostResourceGroupArnInput">hostResourceGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.iamInstanceProfileInput">iamInstanceProfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.imageIdInput">imageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceInitiatedShutdownBehaviorInput">instanceInitiatedShutdownBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6AddressCountInput">ipv6AddressCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6AddressesInput">ipv6AddressesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.kernelIdInput">kernelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.launchTemplateInput">launchTemplateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.licenseSpecificationsInput">licenseSpecificationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.metadataOptionsInput">metadataOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.monitoringInput">monitoringInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.networkInterfacesInput">networkInterfacesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.placementGroupNameInput">placementGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateDnsNameOptionsInput">privateDnsNameOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateIpAddressInput">privateIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.propagateTagsToVolumeOnCreationInput">propagateTagsToVolumeOnCreationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ramdiskIdInput">ramdiskIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.sourceDestCheckInput">sourceDestCheckInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ssmAssociationsInput">ssmAssociationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tenancyInput">tenancyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.userDataInput">userDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.volumesInput">volumesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.additionalInfo">additionalInfo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.affinity">affinity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.disableApiTermination">disableApiTermination</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ebsOptimized">ebsOptimized</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostId">hostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostResourceGroupArn">hostResourceGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceInitiatedShutdownBehavior">instanceInitiatedShutdownBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.kernelId">kernelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.monitoring">monitoring</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.placementGroupName">placementGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.propagateTagsToVolumeOnCreation">propagateTagsToVolumeOnCreation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ramdiskId">ramdiskId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.sourceDestCheck">sourceDestCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tenancy">tenancy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.userData">userData</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `blockDeviceMappings`<sup>Required</sup> <a name="blockDeviceMappings" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.blockDeviceMappings"></a>

```java
public Ec2InstanceBlockDeviceMappingsList getBlockDeviceMappings();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList">Ec2InstanceBlockDeviceMappingsList</a>

---

##### `cpuOptions`<sup>Required</sup> <a name="cpuOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.cpuOptions"></a>

```java
public Ec2InstanceCpuOptionsOutputReference getCpuOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference">Ec2InstanceCpuOptionsOutputReference</a>

---

##### `creditSpecification`<sup>Required</sup> <a name="creditSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.creditSpecification"></a>

```java
public Ec2InstanceCreditSpecificationOutputReference getCreditSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference">Ec2InstanceCreditSpecificationOutputReference</a>

---

##### `elasticGpuSpecifications`<sup>Required</sup> <a name="elasticGpuSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticGpuSpecifications"></a>

```java
public Ec2InstanceElasticGpuSpecificationsList getElasticGpuSpecifications();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList">Ec2InstanceElasticGpuSpecificationsList</a>

---

##### `elasticInferenceAccelerators`<sup>Required</sup> <a name="elasticInferenceAccelerators" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticInferenceAccelerators"></a>

```java
public Ec2InstanceElasticInferenceAcceleratorsList getElasticInferenceAccelerators();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList">Ec2InstanceElasticInferenceAcceleratorsList</a>

---

##### `enclaveOptions`<sup>Required</sup> <a name="enclaveOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.enclaveOptions"></a>

```java
public Ec2InstanceEnclaveOptionsOutputReference getEnclaveOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference">Ec2InstanceEnclaveOptionsOutputReference</a>

---

##### `hibernationOptions`<sup>Required</sup> <a name="hibernationOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hibernationOptions"></a>

```java
public Ec2InstanceHibernationOptionsOutputReference getHibernationOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference">Ec2InstanceHibernationOptionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `ipv6Addresses`<sup>Required</sup> <a name="ipv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6Addresses"></a>

```java
public Ec2InstanceIpv6AddressesList getIpv6Addresses();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList">Ec2InstanceIpv6AddressesList</a>

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.launchTemplate"></a>

```java
public Ec2InstanceLaunchTemplateOutputReference getLaunchTemplate();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference">Ec2InstanceLaunchTemplateOutputReference</a>

---

##### `licenseSpecifications`<sup>Required</sup> <a name="licenseSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.licenseSpecifications"></a>

```java
public Ec2InstanceLicenseSpecificationsList getLicenseSpecifications();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList">Ec2InstanceLicenseSpecificationsList</a>

---

##### `metadataOptions`<sup>Required</sup> <a name="metadataOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.metadataOptions"></a>

```java
public Ec2InstanceMetadataOptionsOutputReference getMetadataOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference">Ec2InstanceMetadataOptionsOutputReference</a>

---

##### `networkInterfaces`<sup>Required</sup> <a name="networkInterfaces" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.networkInterfaces"></a>

```java
public Ec2InstanceNetworkInterfacesList getNetworkInterfaces();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList">Ec2InstanceNetworkInterfacesList</a>

---

##### `privateDnsName`<sup>Required</sup> <a name="privateDnsName" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateDnsName"></a>

```java
public java.lang.String getPrivateDnsName();
```

- *Type:* java.lang.String

---

##### `privateDnsNameOptions`<sup>Required</sup> <a name="privateDnsNameOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateDnsNameOptions"></a>

```java
public Ec2InstancePrivateDnsNameOptionsOutputReference getPrivateDnsNameOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference">Ec2InstancePrivateDnsNameOptionsOutputReference</a>

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `publicDnsName`<sup>Required</sup> <a name="publicDnsName" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.publicDnsName"></a>

```java
public java.lang.String getPublicDnsName();
```

- *Type:* java.lang.String

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.publicIp"></a>

```java
public java.lang.String getPublicIp();
```

- *Type:* java.lang.String

---

##### `ssmAssociations`<sup>Required</sup> <a name="ssmAssociations" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ssmAssociations"></a>

```java
public Ec2InstanceSsmAssociationsList getSsmAssociations();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList">Ec2InstanceSsmAssociationsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.state"></a>

```java
public Ec2InstanceStateOutputReference getState();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference">Ec2InstanceStateOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tags"></a>

```java
public Ec2InstanceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList">Ec2InstanceTagsList</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.volumes"></a>

```java
public Ec2InstanceVolumesList getVolumes();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList">Ec2InstanceVolumesList</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `additionalInfoInput`<sup>Optional</sup> <a name="additionalInfoInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.additionalInfoInput"></a>

```java
public java.lang.String getAdditionalInfoInput();
```

- *Type:* java.lang.String

---

##### `affinityInput`<sup>Optional</sup> <a name="affinityInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.affinityInput"></a>

```java
public java.lang.String getAffinityInput();
```

- *Type:* java.lang.String

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `blockDeviceMappingsInput`<sup>Optional</sup> <a name="blockDeviceMappingsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.blockDeviceMappingsInput"></a>

```java
public IResolvable|java.util.List<Ec2InstanceBlockDeviceMappings> getBlockDeviceMappingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>>

---

##### `cpuOptionsInput`<sup>Optional</sup> <a name="cpuOptionsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.cpuOptionsInput"></a>

```java
public IResolvable|Ec2InstanceCpuOptions getCpuOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a>

---

##### `creditSpecificationInput`<sup>Optional</sup> <a name="creditSpecificationInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.creditSpecificationInput"></a>

```java
public IResolvable|Ec2InstanceCreditSpecification getCreditSpecificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a>

---

##### `disableApiTerminationInput`<sup>Optional</sup> <a name="disableApiTerminationInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.disableApiTerminationInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableApiTerminationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ebsOptimizedInput`<sup>Optional</sup> <a name="ebsOptimizedInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ebsOptimizedInput"></a>

```java
public java.lang.Boolean|IResolvable getEbsOptimizedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `elasticGpuSpecificationsInput`<sup>Optional</sup> <a name="elasticGpuSpecificationsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticGpuSpecificationsInput"></a>

```java
public IResolvable|java.util.List<Ec2InstanceElasticGpuSpecifications> getElasticGpuSpecificationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>>

---

##### `elasticInferenceAcceleratorsInput`<sup>Optional</sup> <a name="elasticInferenceAcceleratorsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticInferenceAcceleratorsInput"></a>

```java
public IResolvable|java.util.List<Ec2InstanceElasticInferenceAccelerators> getElasticInferenceAcceleratorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>>

---

##### `enclaveOptionsInput`<sup>Optional</sup> <a name="enclaveOptionsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.enclaveOptionsInput"></a>

```java
public IResolvable|Ec2InstanceEnclaveOptions getEnclaveOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a>

---

##### `hibernationOptionsInput`<sup>Optional</sup> <a name="hibernationOptionsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hibernationOptionsInput"></a>

```java
public IResolvable|Ec2InstanceHibernationOptions getHibernationOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a>

---

##### `hostIdInput`<sup>Optional</sup> <a name="hostIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostIdInput"></a>

```java
public java.lang.String getHostIdInput();
```

- *Type:* java.lang.String

---

##### `hostResourceGroupArnInput`<sup>Optional</sup> <a name="hostResourceGroupArnInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostResourceGroupArnInput"></a>

```java
public java.lang.String getHostResourceGroupArnInput();
```

- *Type:* java.lang.String

---

##### `iamInstanceProfileInput`<sup>Optional</sup> <a name="iamInstanceProfileInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.iamInstanceProfileInput"></a>

```java
public java.lang.String getIamInstanceProfileInput();
```

- *Type:* java.lang.String

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.imageIdInput"></a>

```java
public java.lang.String getImageIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInitiatedShutdownBehaviorInput`<sup>Optional</sup> <a name="instanceInitiatedShutdownBehaviorInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceInitiatedShutdownBehaviorInput"></a>

```java
public java.lang.String getInstanceInitiatedShutdownBehaviorInput();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `ipv6AddressCountInput`<sup>Optional</sup> <a name="ipv6AddressCountInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6AddressCountInput"></a>

```java
public java.lang.Number getIpv6AddressCountInput();
```

- *Type:* java.lang.Number

---

##### `ipv6AddressesInput`<sup>Optional</sup> <a name="ipv6AddressesInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6AddressesInput"></a>

```java
public IResolvable|java.util.List<Ec2InstanceIpv6Addresses> getIpv6AddressesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>>

---

##### `kernelIdInput`<sup>Optional</sup> <a name="kernelIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.kernelIdInput"></a>

```java
public java.lang.String getKernelIdInput();
```

- *Type:* java.lang.String

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `launchTemplateInput`<sup>Optional</sup> <a name="launchTemplateInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.launchTemplateInput"></a>

```java
public IResolvable|Ec2InstanceLaunchTemplate getLaunchTemplateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a>

---

##### `licenseSpecificationsInput`<sup>Optional</sup> <a name="licenseSpecificationsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.licenseSpecificationsInput"></a>

```java
public IResolvable|java.util.List<Ec2InstanceLicenseSpecifications> getLicenseSpecificationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>>

---

##### `metadataOptionsInput`<sup>Optional</sup> <a name="metadataOptionsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.metadataOptionsInput"></a>

```java
public IResolvable|Ec2InstanceMetadataOptions getMetadataOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a>

---

##### `monitoringInput`<sup>Optional</sup> <a name="monitoringInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.monitoringInput"></a>

```java
public java.lang.Boolean|IResolvable getMonitoringInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `networkInterfacesInput`<sup>Optional</sup> <a name="networkInterfacesInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.networkInterfacesInput"></a>

```java
public IResolvable|java.util.List<Ec2InstanceNetworkInterfaces> getNetworkInterfacesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>>

---

##### `placementGroupNameInput`<sup>Optional</sup> <a name="placementGroupNameInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.placementGroupNameInput"></a>

```java
public java.lang.String getPlacementGroupNameInput();
```

- *Type:* java.lang.String

---

##### `privateDnsNameOptionsInput`<sup>Optional</sup> <a name="privateDnsNameOptionsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateDnsNameOptionsInput"></a>

```java
public IResolvable|Ec2InstancePrivateDnsNameOptions getPrivateDnsNameOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a>

---

##### `privateIpAddressInput`<sup>Optional</sup> <a name="privateIpAddressInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateIpAddressInput"></a>

```java
public java.lang.String getPrivateIpAddressInput();
```

- *Type:* java.lang.String

---

##### `propagateTagsToVolumeOnCreationInput`<sup>Optional</sup> <a name="propagateTagsToVolumeOnCreationInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.propagateTagsToVolumeOnCreationInput"></a>

```java
public java.lang.Boolean|IResolvable getPropagateTagsToVolumeOnCreationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ramdiskIdInput`<sup>Optional</sup> <a name="ramdiskIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ramdiskIdInput"></a>

```java
public java.lang.String getRamdiskIdInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceDestCheckInput`<sup>Optional</sup> <a name="sourceDestCheckInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.sourceDestCheckInput"></a>

```java
public java.lang.Boolean|IResolvable getSourceDestCheckInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ssmAssociationsInput`<sup>Optional</sup> <a name="ssmAssociationsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ssmAssociationsInput"></a>

```java
public IResolvable|java.util.List<Ec2InstanceSsmAssociations> getSsmAssociationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Ec2InstanceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>>

---

##### `tenancyInput`<sup>Optional</sup> <a name="tenancyInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tenancyInput"></a>

```java
public java.lang.String getTenancyInput();
```

- *Type:* java.lang.String

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.userDataInput"></a>

```java
public java.lang.String getUserDataInput();
```

- *Type:* java.lang.String

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.volumesInput"></a>

```java
public IResolvable|java.util.List<Ec2InstanceVolumes> getVolumesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>>

---

##### `additionalInfo`<sup>Required</sup> <a name="additionalInfo" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.additionalInfo"></a>

```java
public java.lang.String getAdditionalInfo();
```

- *Type:* java.lang.String

---

##### `affinity`<sup>Required</sup> <a name="affinity" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.affinity"></a>

```java
public java.lang.String getAffinity();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `disableApiTermination`<sup>Required</sup> <a name="disableApiTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.disableApiTermination"></a>

```java
public java.lang.Boolean|IResolvable getDisableApiTermination();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ebsOptimized`<sup>Required</sup> <a name="ebsOptimized" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ebsOptimized"></a>

```java
public java.lang.Boolean|IResolvable getEbsOptimized();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostId"></a>

```java
public java.lang.String getHostId();
```

- *Type:* java.lang.String

---

##### `hostResourceGroupArn`<sup>Required</sup> <a name="hostResourceGroupArn" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostResourceGroupArn"></a>

```java
public java.lang.String getHostResourceGroupArn();
```

- *Type:* java.lang.String

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.iamInstanceProfile"></a>

```java
public java.lang.String getIamInstanceProfile();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `instanceInitiatedShutdownBehavior`<sup>Required</sup> <a name="instanceInitiatedShutdownBehavior" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceInitiatedShutdownBehavior"></a>

```java
public java.lang.String getInstanceInitiatedShutdownBehavior();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `ipv6AddressCount`<sup>Required</sup> <a name="ipv6AddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6AddressCount"></a>

```java
public java.lang.Number getIpv6AddressCount();
```

- *Type:* java.lang.Number

---

##### `kernelId`<sup>Required</sup> <a name="kernelId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.kernelId"></a>

```java
public java.lang.String getKernelId();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.monitoring"></a>

```java
public java.lang.Boolean|IResolvable getMonitoring();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `placementGroupName`<sup>Required</sup> <a name="placementGroupName" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.placementGroupName"></a>

```java
public java.lang.String getPlacementGroupName();
```

- *Type:* java.lang.String

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `propagateTagsToVolumeOnCreation`<sup>Required</sup> <a name="propagateTagsToVolumeOnCreation" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.propagateTagsToVolumeOnCreation"></a>

```java
public java.lang.Boolean|IResolvable getPropagateTagsToVolumeOnCreation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ramdiskId`<sup>Required</sup> <a name="ramdiskId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ramdiskId"></a>

```java
public java.lang.String getRamdiskId();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceDestCheck`<sup>Required</sup> <a name="sourceDestCheck" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.sourceDestCheck"></a>

```java
public java.lang.Boolean|IResolvable getSourceDestCheck();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tenancy"></a>

```java
public java.lang.String getTenancy();
```

- *Type:* java.lang.String

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2InstanceBlockDeviceMappings <a name="Ec2InstanceBlockDeviceMappings" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceBlockDeviceMappings;

Ec2InstanceBlockDeviceMappings.builder()
//  .deviceName(java.lang.String)
//  .ebs(Ec2InstanceBlockDeviceMappingsEbs)
//  .noDevice(java.lang.String)
//  .virtualName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | The device name (for example, /dev/sdh or xvdh). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs">Ec2InstanceBlockDeviceMappingsEbs</a></code> | Parameters used to automatically set up EBS volumes when the instance is launched. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.noDevice">noDevice</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#no_device Ec2Instance#no_device}. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.virtualName">virtualName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#virtual_name Ec2Instance#virtual_name}. |

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

The device name (for example, /dev/sdh or xvdh).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#device_name Ec2Instance#device_name}

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.ebs"></a>

```java
public Ec2InstanceBlockDeviceMappingsEbs getEbs();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs">Ec2InstanceBlockDeviceMappingsEbs</a>

Parameters used to automatically set up EBS volumes when the instance is launched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ebs Ec2Instance#ebs}

---

##### `noDevice`<sup>Optional</sup> <a name="noDevice" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.noDevice"></a>

```java
public java.lang.String getNoDevice();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#no_device Ec2Instance#no_device}.

---

##### `virtualName`<sup>Optional</sup> <a name="virtualName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.virtualName"></a>

```java
public java.lang.String getVirtualName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#virtual_name Ec2Instance#virtual_name}.

---

### Ec2InstanceBlockDeviceMappingsEbs <a name="Ec2InstanceBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceBlockDeviceMappingsEbs;

Ec2InstanceBlockDeviceMappingsEbs.builder()
//  .deleteOnTermination(java.lang.Boolean|IResolvable)
//  .encrypted(java.lang.Boolean|IResolvable)
//  .iops(java.lang.Number)
//  .kmsKeyId(java.lang.String)
//  .snapshotId(java.lang.String)
//  .volumeSize(java.lang.Number)
//  .volumeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the EBS volume is deleted on instance termination. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the volume should be encrypted. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.iops">iops</a></code> | <code>java.lang.Number</code> | The number of I/O operations per second (IOPS). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The identifier of the AWS Key Management Service (AWS KMS) customer managed CMK to use for Amazon EBS encryption. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | The ID of the snapshot. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | The size of the volume, in GiBs. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | The volume type. |

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```java
public java.lang.Boolean|IResolvable getDeleteOnTermination();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the EBS volume is deleted on instance termination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#delete_on_termination Ec2Instance#delete_on_termination}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.encrypted"></a>

```java
public java.lang.Boolean|IResolvable getEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the volume should be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#encrypted Ec2Instance#encrypted}

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

The number of I/O operations per second (IOPS).

For gp3, io1, and io2 volumes, this represents the number of IOPS that are provisioned for the volume. For gp2 volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#iops Ec2Instance#iops}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The identifier of the AWS Key Management Service (AWS KMS) customer managed CMK to use for Amazon EBS encryption.

If KmsKeyId is specified, the encrypted state must be true. If the encrypted state is true but you do not specify KmsKeyId, your AWS managed CMK for EBS is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#kms_key_id Ec2Instance#kms_key_id}

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

The ID of the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#snapshot_id Ec2Instance#snapshot_id}

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

The size of the volume, in GiBs.

You must specify either a snapshot ID or a volume size. If you specify a snapshot, the default is the snapshot size. You can specify a volume size that is equal to or larger than the snapshot size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#volume_size Ec2Instance#volume_size}

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

The volume type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#volume_type Ec2Instance#volume_type}

---

### Ec2InstanceConfig <a name="Ec2InstanceConfig" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceConfig;

Ec2InstanceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .additionalInfo(java.lang.String)
//  .affinity(java.lang.String)
//  .availabilityZone(java.lang.String)
//  .blockDeviceMappings(IResolvable|java.util.List<Ec2InstanceBlockDeviceMappings>)
//  .cpuOptions(Ec2InstanceCpuOptions)
//  .creditSpecification(Ec2InstanceCreditSpecification)
//  .disableApiTermination(java.lang.Boolean|IResolvable)
//  .ebsOptimized(java.lang.Boolean|IResolvable)
//  .elasticGpuSpecifications(IResolvable|java.util.List<Ec2InstanceElasticGpuSpecifications>)
//  .elasticInferenceAccelerators(IResolvable|java.util.List<Ec2InstanceElasticInferenceAccelerators>)
//  .enclaveOptions(Ec2InstanceEnclaveOptions)
//  .hibernationOptions(Ec2InstanceHibernationOptions)
//  .hostId(java.lang.String)
//  .hostResourceGroupArn(java.lang.String)
//  .iamInstanceProfile(java.lang.String)
//  .imageId(java.lang.String)
//  .instanceInitiatedShutdownBehavior(java.lang.String)
//  .instanceType(java.lang.String)
//  .ipv6AddressCount(java.lang.Number)
//  .ipv6Addresses(IResolvable|java.util.List<Ec2InstanceIpv6Addresses>)
//  .kernelId(java.lang.String)
//  .keyName(java.lang.String)
//  .launchTemplate(Ec2InstanceLaunchTemplate)
//  .licenseSpecifications(IResolvable|java.util.List<Ec2InstanceLicenseSpecifications>)
//  .metadataOptions(Ec2InstanceMetadataOptions)
//  .monitoring(java.lang.Boolean|IResolvable)
//  .networkInterfaces(IResolvable|java.util.List<Ec2InstanceNetworkInterfaces>)
//  .placementGroupName(java.lang.String)
//  .privateDnsNameOptions(Ec2InstancePrivateDnsNameOptions)
//  .privateIpAddress(java.lang.String)
//  .propagateTagsToVolumeOnCreation(java.lang.Boolean|IResolvable)
//  .ramdiskId(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .securityGroups(java.util.List<java.lang.String>)
//  .sourceDestCheck(java.lang.Boolean|IResolvable)
//  .ssmAssociations(IResolvable|java.util.List<Ec2InstanceSsmAssociations>)
//  .subnetId(java.lang.String)
//  .tags(IResolvable|java.util.List<Ec2InstanceTags>)
//  .tenancy(java.lang.String)
//  .userData(java.lang.String)
//  .volumes(IResolvable|java.util.List<Ec2InstanceVolumes>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.additionalInfo">additionalInfo</a></code> | <code>java.lang.String</code> | This property is reserved for internal use. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.affinity">affinity</a></code> | <code>java.lang.String</code> | Indicates whether the instance is associated with a dedicated host. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | The Availability Zone of the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>></code> | The block device mapping entries that defines the block devices to attach to the instance at launch. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.cpuOptions">cpuOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a></code> | The CPU options for the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.creditSpecification">creditSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a></code> | The credit option for CPU usage of the burstable performance instance. Valid values are standard and unlimited. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.disableApiTermination">disableApiTermination</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If you set this parameter to true, you can't terminate the instance using the Amazon EC2 console, CLI, or API; |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ebsOptimized">ebsOptimized</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the instance is optimized for Amazon EBS I/O. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.elasticGpuSpecifications">elasticGpuSpecifications</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>></code> | An elastic GPU to associate with the instance. Amazon Elastic Graphics is no longer available. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.elasticInferenceAccelerators">elasticInferenceAccelerators</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>></code> | An elastic inference accelerator to associate with the instance. Amazon Elastic Inference is no longer available. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.enclaveOptions">enclaveOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a></code> | Indicates whether the instance is enabled for AWS Nitro Enclaves. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.hibernationOptions">hibernationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a></code> | Indicates whether an instance is enabled for hibernation. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.hostId">hostId</a></code> | <code>java.lang.String</code> | If you specify host for the Affinity property, the ID of a dedicated host that the instance is associated with. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.hostResourceGroupArn">hostResourceGroupArn</a></code> | <code>java.lang.String</code> | The ARN of the host resource group in which to launch the instances. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>java.lang.String</code> | The IAM instance profile. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.imageId">imageId</a></code> | <code>java.lang.String</code> | The ID of the AMI. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.instanceInitiatedShutdownBehavior">instanceInitiatedShutdownBehavior</a></code> | <code>java.lang.String</code> | Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | The instance type. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>java.lang.Number</code> | [EC2-VPC] The number of IPv6 addresses to associate with the primary network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ipv6Addresses">ipv6Addresses</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>></code> | [EC2-VPC] The IPv6 addresses from the range of the subnet to associate with the primary network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.kernelId">kernelId</a></code> | <code>java.lang.String</code> | The ID of the kernel. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.keyName">keyName</a></code> | <code>java.lang.String</code> | The name of the key pair. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a></code> | The launch template to use to launch the instances. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.licenseSpecifications">licenseSpecifications</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>></code> | The license configurations. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a></code> | The metadata options for the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.monitoring">monitoring</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether detailed monitoring is enabled for the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.networkInterfaces">networkInterfaces</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>></code> | The network interfaces to associate with the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.placementGroupName">placementGroupName</a></code> | <code>java.lang.String</code> | The name of an existing placement group that you want to launch the instance into (cluster \| partition \| spread). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.privateDnsNameOptions">privateDnsNameOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a></code> | The options for the instance hostname. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | [EC2-VPC] The primary IPv4 address. You must specify a value from the IPv4 address range of the subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.propagateTagsToVolumeOnCreation">propagateTagsToVolumeOnCreation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to assign the tags from the instance to all of the volumes attached to the instance at launch. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ramdiskId">ramdiskId</a></code> | <code>java.lang.String</code> | The ID of the RAM disk to select. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The IDs of the security groups. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | the names of the security groups. For a nondefault VPC, you must use security group IDs instead. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.sourceDestCheck">sourceDestCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to enable an instance launched in a VPC to perform NAT. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ssmAssociations">ssmAssociations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>></code> | The SSM document and parameter values in AWS Systems Manager to associate with this instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | [EC2-VPC] The ID of the subnet to launch the instance into. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>></code> | The tags to add to the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.tenancy">tenancy</a></code> | <code>java.lang.String</code> | The tenancy of the instance (if the instance is running in a VPC). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.userData">userData</a></code> | <code>java.lang.String</code> | The user data to make available to the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.volumes">volumes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>></code> | The volumes to attach to the instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `additionalInfo`<sup>Optional</sup> <a name="additionalInfo" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.additionalInfo"></a>

```java
public java.lang.String getAdditionalInfo();
```

- *Type:* java.lang.String

This property is reserved for internal use.

If you use it, the stack fails with this error: Bad property set: [Testing this property] (Service: AmazonEC2; Status Code: 400; Error Code: InvalidParameterCombination; Request ID: 0XXXXXX-49c7-4b40-8bcc-76885dcXXXXX).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#additional_info Ec2Instance#additional_info}

---

##### `affinity`<sup>Optional</sup> <a name="affinity" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.affinity"></a>

```java
public java.lang.String getAffinity();
```

- *Type:* java.lang.String

Indicates whether the instance is associated with a dedicated host.

If you want the instance to always restart on the same host on which it was launched, specify host. If you want the instance to restart on any available host, but try to launch onto the last host it ran on (on a best-effort basis), specify default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#affinity Ec2Instance#affinity}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

The Availability Zone of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#availability_zone Ec2Instance#availability_zone}

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.blockDeviceMappings"></a>

```java
public IResolvable|java.util.List<Ec2InstanceBlockDeviceMappings> getBlockDeviceMappings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>>

The block device mapping entries that defines the block devices to attach to the instance at launch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#block_device_mappings Ec2Instance#block_device_mappings}

---

##### `cpuOptions`<sup>Optional</sup> <a name="cpuOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.cpuOptions"></a>

```java
public Ec2InstanceCpuOptions getCpuOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a>

The CPU options for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#cpu_options Ec2Instance#cpu_options}

---

##### `creditSpecification`<sup>Optional</sup> <a name="creditSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.creditSpecification"></a>

```java
public Ec2InstanceCreditSpecification getCreditSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a>

The credit option for CPU usage of the burstable performance instance. Valid values are standard and unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#credit_specification Ec2Instance#credit_specification}

---

##### `disableApiTermination`<sup>Optional</sup> <a name="disableApiTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.disableApiTermination"></a>

```java
public java.lang.Boolean|IResolvable getDisableApiTermination();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If you set this parameter to true, you can't terminate the instance using the Amazon EC2 console, CLI, or API;

otherwise, you can.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#disable_api_termination Ec2Instance#disable_api_termination}

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ebsOptimized"></a>

```java
public java.lang.Boolean|IResolvable getEbsOptimized();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the instance is optimized for Amazon EBS I/O.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ebs_optimized Ec2Instance#ebs_optimized}

---

##### `elasticGpuSpecifications`<sup>Optional</sup> <a name="elasticGpuSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.elasticGpuSpecifications"></a>

```java
public IResolvable|java.util.List<Ec2InstanceElasticGpuSpecifications> getElasticGpuSpecifications();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>>

An elastic GPU to associate with the instance. Amazon Elastic Graphics is no longer available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#elastic_gpu_specifications Ec2Instance#elastic_gpu_specifications}

---

##### `elasticInferenceAccelerators`<sup>Optional</sup> <a name="elasticInferenceAccelerators" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.elasticInferenceAccelerators"></a>

```java
public IResolvable|java.util.List<Ec2InstanceElasticInferenceAccelerators> getElasticInferenceAccelerators();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>>

An elastic inference accelerator to associate with the instance. Amazon Elastic Inference is no longer available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#elastic_inference_accelerators Ec2Instance#elastic_inference_accelerators}

---

##### `enclaveOptions`<sup>Optional</sup> <a name="enclaveOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.enclaveOptions"></a>

```java
public Ec2InstanceEnclaveOptions getEnclaveOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a>

Indicates whether the instance is enabled for AWS Nitro Enclaves.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#enclave_options Ec2Instance#enclave_options}

---

##### `hibernationOptions`<sup>Optional</sup> <a name="hibernationOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.hibernationOptions"></a>

```java
public Ec2InstanceHibernationOptions getHibernationOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a>

Indicates whether an instance is enabled for hibernation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#hibernation_options Ec2Instance#hibernation_options}

---

##### `hostId`<sup>Optional</sup> <a name="hostId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.hostId"></a>

```java
public java.lang.String getHostId();
```

- *Type:* java.lang.String

If you specify host for the Affinity property, the ID of a dedicated host that the instance is associated with.

If you don't specify an ID, Amazon EC2 launches the instance onto any available, compatible dedicated host in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#host_id Ec2Instance#host_id}

---

##### `hostResourceGroupArn`<sup>Optional</sup> <a name="hostResourceGroupArn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.hostResourceGroupArn"></a>

```java
public java.lang.String getHostResourceGroupArn();
```

- *Type:* java.lang.String

The ARN of the host resource group in which to launch the instances.

If you specify a host resource group ARN, omit the Tenancy parameter or set it to host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#host_resource_group_arn Ec2Instance#host_resource_group_arn}

---

##### `iamInstanceProfile`<sup>Optional</sup> <a name="iamInstanceProfile" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.iamInstanceProfile"></a>

```java
public java.lang.String getIamInstanceProfile();
```

- *Type:* java.lang.String

The IAM instance profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#iam_instance_profile Ec2Instance#iam_instance_profile}

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

The ID of the AMI.

An AMI ID is required to launch an instance and must be specified here or in a launch template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#image_id Ec2Instance#image_id}

---

##### `instanceInitiatedShutdownBehavior`<sup>Optional</sup> <a name="instanceInitiatedShutdownBehavior" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.instanceInitiatedShutdownBehavior"></a>

```java
public java.lang.String getInstanceInitiatedShutdownBehavior();
```

- *Type:* java.lang.String

Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#instance_initiated_shutdown_behavior Ec2Instance#instance_initiated_shutdown_behavior}

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

The instance type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#instance_type Ec2Instance#instance_type}

---

##### `ipv6AddressCount`<sup>Optional</sup> <a name="ipv6AddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ipv6AddressCount"></a>

```java
public java.lang.Number getIpv6AddressCount();
```

- *Type:* java.lang.Number

[EC2-VPC] The number of IPv6 addresses to associate with the primary network interface.

Amazon EC2 chooses the IPv6 addresses from the range of your subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ipv_6_address_count Ec2Instance#ipv_6_address_count}

---

##### `ipv6Addresses`<sup>Optional</sup> <a name="ipv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ipv6Addresses"></a>

```java
public IResolvable|java.util.List<Ec2InstanceIpv6Addresses> getIpv6Addresses();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>>

[EC2-VPC] The IPv6 addresses from the range of the subnet to associate with the primary network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ipv_6_addresses Ec2Instance#ipv_6_addresses}

---

##### `kernelId`<sup>Optional</sup> <a name="kernelId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.kernelId"></a>

```java
public java.lang.String getKernelId();
```

- *Type:* java.lang.String

The ID of the kernel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#kernel_id Ec2Instance#kernel_id}

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

The name of the key pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#key_name Ec2Instance#key_name}

---

##### `launchTemplate`<sup>Optional</sup> <a name="launchTemplate" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.launchTemplate"></a>

```java
public Ec2InstanceLaunchTemplate getLaunchTemplate();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a>

The launch template to use to launch the instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#launch_template Ec2Instance#launch_template}

---

##### `licenseSpecifications`<sup>Optional</sup> <a name="licenseSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.licenseSpecifications"></a>

```java
public IResolvable|java.util.List<Ec2InstanceLicenseSpecifications> getLicenseSpecifications();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>>

The license configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#license_specifications Ec2Instance#license_specifications}

---

##### `metadataOptions`<sup>Optional</sup> <a name="metadataOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.metadataOptions"></a>

```java
public Ec2InstanceMetadataOptions getMetadataOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a>

The metadata options for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#metadata_options Ec2Instance#metadata_options}

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.monitoring"></a>

```java
public java.lang.Boolean|IResolvable getMonitoring();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether detailed monitoring is enabled for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#monitoring Ec2Instance#monitoring}

---

##### `networkInterfaces`<sup>Optional</sup> <a name="networkInterfaces" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.networkInterfaces"></a>

```java
public IResolvable|java.util.List<Ec2InstanceNetworkInterfaces> getNetworkInterfaces();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>>

The network interfaces to associate with the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#network_interfaces Ec2Instance#network_interfaces}

---

##### `placementGroupName`<sup>Optional</sup> <a name="placementGroupName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.placementGroupName"></a>

```java
public java.lang.String getPlacementGroupName();
```

- *Type:* java.lang.String

The name of an existing placement group that you want to launch the instance into (cluster | partition | spread).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#placement_group_name Ec2Instance#placement_group_name}

---

##### `privateDnsNameOptions`<sup>Optional</sup> <a name="privateDnsNameOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.privateDnsNameOptions"></a>

```java
public Ec2InstancePrivateDnsNameOptions getPrivateDnsNameOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a>

The options for the instance hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#private_dns_name_options Ec2Instance#private_dns_name_options}

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

[EC2-VPC] The primary IPv4 address. You must specify a value from the IPv4 address range of the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#private_ip_address Ec2Instance#private_ip_address}

---

##### `propagateTagsToVolumeOnCreation`<sup>Optional</sup> <a name="propagateTagsToVolumeOnCreation" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.propagateTagsToVolumeOnCreation"></a>

```java
public java.lang.Boolean|IResolvable getPropagateTagsToVolumeOnCreation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to assign the tags from the instance to all of the volumes attached to the instance at launch.

If you specify true and you assign tags to the instance, those tags are automatically assigned to all of the volumes that you attach to the instance at launch. If you specify false, those tags are not assigned to the attached volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#propagate_tags_to_volume_on_creation Ec2Instance#propagate_tags_to_volume_on_creation}

---

##### `ramdiskId`<sup>Optional</sup> <a name="ramdiskId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ramdiskId"></a>

```java
public java.lang.String getRamdiskId();
```

- *Type:* java.lang.String

The ID of the RAM disk to select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ramdisk_id Ec2Instance#ramdisk_id}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

The IDs of the security groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#security_group_ids Ec2Instance#security_group_ids}

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

the names of the security groups. For a nondefault VPC, you must use security group IDs instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#security_groups Ec2Instance#security_groups}

---

##### `sourceDestCheck`<sup>Optional</sup> <a name="sourceDestCheck" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.sourceDestCheck"></a>

```java
public java.lang.Boolean|IResolvable getSourceDestCheck();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to enable an instance launched in a VPC to perform NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#source_dest_check Ec2Instance#source_dest_check}

---

##### `ssmAssociations`<sup>Optional</sup> <a name="ssmAssociations" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ssmAssociations"></a>

```java
public IResolvable|java.util.List<Ec2InstanceSsmAssociations> getSsmAssociations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>>

The SSM document and parameter values in AWS Systems Manager to associate with this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ssm_associations Ec2Instance#ssm_associations}

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

[EC2-VPC] The ID of the subnet to launch the instance into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#subnet_id Ec2Instance#subnet_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Ec2InstanceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>>

The tags to add to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#tags Ec2Instance#tags}

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.tenancy"></a>

```java
public java.lang.String getTenancy();
```

- *Type:* java.lang.String

The tenancy of the instance (if the instance is running in a VPC).

An instance with a tenancy of dedicated runs on single-tenant hardware.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#tenancy Ec2Instance#tenancy}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

The user data to make available to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#user_data Ec2Instance#user_data}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.volumes"></a>

```java
public IResolvable|java.util.List<Ec2InstanceVolumes> getVolumes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>>

The volumes to attach to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#volumes Ec2Instance#volumes}

---

### Ec2InstanceCpuOptions <a name="Ec2InstanceCpuOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceCpuOptions;

Ec2InstanceCpuOptions.builder()
//  .coreCount(java.lang.Number)
//  .threadsPerCore(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions.property.coreCount">coreCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#core_count Ec2Instance#core_count}. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions.property.threadsPerCore">threadsPerCore</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#threads_per_core Ec2Instance#threads_per_core}. |

---

##### `coreCount`<sup>Optional</sup> <a name="coreCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions.property.coreCount"></a>

```java
public java.lang.Number getCoreCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#core_count Ec2Instance#core_count}.

---

##### `threadsPerCore`<sup>Optional</sup> <a name="threadsPerCore" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions.property.threadsPerCore"></a>

```java
public java.lang.Number getThreadsPerCore();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#threads_per_core Ec2Instance#threads_per_core}.

---

### Ec2InstanceCreditSpecification <a name="Ec2InstanceCreditSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceCreditSpecification;

Ec2InstanceCreditSpecification.builder()
//  .cpuCredits(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification.property.cpuCredits">cpuCredits</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#cpu_credits Ec2Instance#cpu_credits}. |

---

##### `cpuCredits`<sup>Optional</sup> <a name="cpuCredits" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification.property.cpuCredits"></a>

```java
public java.lang.String getCpuCredits();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#cpu_credits Ec2Instance#cpu_credits}.

---

### Ec2InstanceElasticGpuSpecifications <a name="Ec2InstanceElasticGpuSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceElasticGpuSpecifications;

Ec2InstanceElasticGpuSpecifications.builder()
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications.property.type">type</a></code> | <code>java.lang.String</code> | The type of Elastic Graphics accelerator. Amazon Elastic Graphics is no longer available. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of Elastic Graphics accelerator. Amazon Elastic Graphics is no longer available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#type Ec2Instance#type}

---

### Ec2InstanceElasticInferenceAccelerators <a name="Ec2InstanceElasticInferenceAccelerators" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceElasticInferenceAccelerators;

Ec2InstanceElasticInferenceAccelerators.builder()
//  .count(java.lang.Number)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators.property.count">count</a></code> | <code>java.lang.Number</code> | The number of elastic inference accelerators to attach to the instance. Amazon Elastic Inference is no longer available. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators.property.type">type</a></code> | <code>java.lang.String</code> | The type of elastic inference accelerator. Amazon Elastic Inference is no longer available. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

The number of elastic inference accelerators to attach to the instance. Amazon Elastic Inference is no longer available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#count Ec2Instance#count}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of elastic inference accelerator. Amazon Elastic Inference is no longer available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#type Ec2Instance#type}

---

### Ec2InstanceEnclaveOptions <a name="Ec2InstanceEnclaveOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceEnclaveOptions;

Ec2InstanceEnclaveOptions.builder()
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If this parameter is set to true, the instance is enabled for AWS Nitro Enclaves; |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If this parameter is set to true, the instance is enabled for AWS Nitro Enclaves;

otherwise, it is not enabled for AWS Nitro Enclaves.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#enabled Ec2Instance#enabled}

---

### Ec2InstanceHibernationOptions <a name="Ec2InstanceHibernationOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceHibernationOptions;

Ec2InstanceHibernationOptions.builder()
//  .configured(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions.property.configured">configured</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If you set this parameter to true, your instance is enabled for hibernation. |

---

##### `configured`<sup>Optional</sup> <a name="configured" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions.property.configured"></a>

```java
public java.lang.Boolean|IResolvable getConfigured();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If you set this parameter to true, your instance is enabled for hibernation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#configured Ec2Instance#configured}

---

### Ec2InstanceIpv6Addresses <a name="Ec2InstanceIpv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceIpv6Addresses;

Ec2InstanceIpv6Addresses.builder()
//  .ipv6Address(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | The IPv6 address. |

---

##### `ipv6Address`<sup>Optional</sup> <a name="ipv6Address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

The IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ipv_6_address Ec2Instance#ipv_6_address}

---

### Ec2InstanceLaunchTemplate <a name="Ec2InstanceLaunchTemplate" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceLaunchTemplate;

Ec2InstanceLaunchTemplate.builder()
//  .launchTemplateId(java.lang.String)
//  .launchTemplateName(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.property.launchTemplateId">launchTemplateId</a></code> | <code>java.lang.String</code> | The ID of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.property.launchTemplateName">launchTemplateName</a></code> | <code>java.lang.String</code> | The name of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.property.version">version</a></code> | <code>java.lang.String</code> | The version number of the launch template. |

---

##### `launchTemplateId`<sup>Optional</sup> <a name="launchTemplateId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.property.launchTemplateId"></a>

```java
public java.lang.String getLaunchTemplateId();
```

- *Type:* java.lang.String

The ID of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#launch_template_id Ec2Instance#launch_template_id}

---

##### `launchTemplateName`<sup>Optional</sup> <a name="launchTemplateName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.property.launchTemplateName"></a>

```java
public java.lang.String getLaunchTemplateName();
```

- *Type:* java.lang.String

The name of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#launch_template_name Ec2Instance#launch_template_name}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The version number of the launch template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#version Ec2Instance#version}

---

### Ec2InstanceLicenseSpecifications <a name="Ec2InstanceLicenseSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceLicenseSpecifications;

Ec2InstanceLicenseSpecifications.builder()
//  .licenseConfigurationArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications.property.licenseConfigurationArn">licenseConfigurationArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the license configuration. |

---

##### `licenseConfigurationArn`<sup>Optional</sup> <a name="licenseConfigurationArn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications.property.licenseConfigurationArn"></a>

```java
public java.lang.String getLicenseConfigurationArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the license configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#license_configuration_arn Ec2Instance#license_configuration_arn}

---

### Ec2InstanceMetadataOptions <a name="Ec2InstanceMetadataOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceMetadataOptions;

Ec2InstanceMetadataOptions.builder()
//  .httpEndpoint(java.lang.String)
//  .httpProtocolIpv6(java.lang.String)
//  .httpPutResponseHopLimit(java.lang.Number)
//  .httpTokens(java.lang.String)
//  .instanceMetadataTags(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpEndpoint">httpEndpoint</a></code> | <code>java.lang.String</code> | Enables or disables the HTTP metadata endpoint on your instances. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpProtocolIpv6">httpProtocolIpv6</a></code> | <code>java.lang.String</code> | Enables or disables the IPv6 endpoint for the instance metadata service. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>java.lang.Number</code> | The number of network hops that the metadata token can travel. Maximum is 64. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpTokens">httpTokens</a></code> | <code>java.lang.String</code> | Indicates whether IMDSv2 is required. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.instanceMetadataTags">instanceMetadataTags</a></code> | <code>java.lang.String</code> | Indicates whether tags from the instance are propagated to the EBS volumes. |

---

##### `httpEndpoint`<sup>Optional</sup> <a name="httpEndpoint" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpEndpoint"></a>

```java
public java.lang.String getHttpEndpoint();
```

- *Type:* java.lang.String

Enables or disables the HTTP metadata endpoint on your instances.

If you specify a value of disabled, you cannot access your instance metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#http_endpoint Ec2Instance#http_endpoint}

---

##### `httpProtocolIpv6`<sup>Optional</sup> <a name="httpProtocolIpv6" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpProtocolIpv6"></a>

```java
public java.lang.String getHttpProtocolIpv6();
```

- *Type:* java.lang.String

Enables or disables the IPv6 endpoint for the instance metadata service.

To use this option, the instance must be a Nitro-based instance launched in a subnet that supports IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#http_protocol_ipv_6 Ec2Instance#http_protocol_ipv_6}

---

##### `httpPutResponseHopLimit`<sup>Optional</sup> <a name="httpPutResponseHopLimit" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

```java
public java.lang.Number getHttpPutResponseHopLimit();
```

- *Type:* java.lang.Number

The number of network hops that the metadata token can travel. Maximum is 64.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#http_put_response_hop_limit Ec2Instance#http_put_response_hop_limit}

---

##### `httpTokens`<sup>Optional</sup> <a name="httpTokens" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpTokens"></a>

```java
public java.lang.String getHttpTokens();
```

- *Type:* java.lang.String

Indicates whether IMDSv2 is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#http_tokens Ec2Instance#http_tokens}

---

##### `instanceMetadataTags`<sup>Optional</sup> <a name="instanceMetadataTags" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.instanceMetadataTags"></a>

```java
public java.lang.String getInstanceMetadataTags();
```

- *Type:* java.lang.String

Indicates whether tags from the instance are propagated to the EBS volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#instance_metadata_tags Ec2Instance#instance_metadata_tags}

---

### Ec2InstanceNetworkInterfaces <a name="Ec2InstanceNetworkInterfaces" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceNetworkInterfaces;

Ec2InstanceNetworkInterfaces.builder()
//  .associateCarrierIpAddress(java.lang.Boolean|IResolvable)
//  .associatePublicIpAddress(java.lang.Boolean|IResolvable)
//  .deleteOnTermination(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .deviceIndex(java.lang.String)
//  .enaSrdSpecification(Ec2InstanceNetworkInterfacesEnaSrdSpecification)
//  .groupSet(java.util.List<java.lang.String>)
//  .ipv6AddressCount(java.lang.Number)
//  .ipv6Addresses(IResolvable|java.util.List<Ec2InstanceNetworkInterfacesIpv6Addresses>)
//  .networkInterfaceId(java.lang.String)
//  .privateIpAddress(java.lang.String)
//  .privateIpAddresses(IResolvable|java.util.List<Ec2InstanceNetworkInterfacesPrivateIpAddresses>)
//  .secondaryPrivateIpAddressCount(java.lang.Number)
//  .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.associateCarrierIpAddress">associateCarrierIpAddress</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Not currently supported by AWS CloudFormation. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to assign a public IPv4 address to an instance you launch in a VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to true, the interface is deleted when the instance is terminated. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.description">description</a></code> | <code>java.lang.String</code> | The description of the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.deviceIndex">deviceIndex</a></code> | <code>java.lang.String</code> | The position of the network interface in the attachment order. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.enaSrdSpecification">enaSrdSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecification</a></code> | Specifies the ENA Express settings for the network interface that's attached to the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.groupSet">groupSet</a></code> | <code>java.util.List<java.lang.String></code> | The IDs of the security groups for the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>java.lang.Number</code> | A number of IPv6 addresses to assign to the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.ipv6Addresses">ipv6Addresses</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>></code> | The IPv6 addresses associated with the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | The ID of the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | The private IPv4 address of the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.privateIpAddresses">privateIpAddresses</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>></code> | One or more private IPv4 addresses to assign to the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.secondaryPrivateIpAddressCount">secondaryPrivateIpAddressCount</a></code> | <code>java.lang.Number</code> | The number of secondary private IPv4 addresses. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | The ID of the subnet. |

---

##### `associateCarrierIpAddress`<sup>Optional</sup> <a name="associateCarrierIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.associateCarrierIpAddress"></a>

```java
public java.lang.Boolean|IResolvable getAssociateCarrierIpAddress();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Not currently supported by AWS CloudFormation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#associate_carrier_ip_address Ec2Instance#associate_carrier_ip_address}

---

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="associatePublicIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.associatePublicIpAddress"></a>

```java
public java.lang.Boolean|IResolvable getAssociatePublicIpAddress();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to assign a public IPv4 address to an instance you launch in a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#associate_public_ip_address Ec2Instance#associate_public_ip_address}

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.deleteOnTermination"></a>

```java
public java.lang.Boolean|IResolvable getDeleteOnTermination();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to true, the interface is deleted when the instance is terminated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#delete_on_termination Ec2Instance#delete_on_termination}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#description Ec2Instance#description}

---

##### `deviceIndex`<sup>Optional</sup> <a name="deviceIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.deviceIndex"></a>

```java
public java.lang.String getDeviceIndex();
```

- *Type:* java.lang.String

The position of the network interface in the attachment order.

A primary network interface has a device index of 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#device_index Ec2Instance#device_index}

---

##### `enaSrdSpecification`<sup>Optional</sup> <a name="enaSrdSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.enaSrdSpecification"></a>

```java
public Ec2InstanceNetworkInterfacesEnaSrdSpecification getEnaSrdSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecification</a>

Specifies the ENA Express settings for the network interface that's attached to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ena_srd_specification Ec2Instance#ena_srd_specification}

---

##### `groupSet`<sup>Optional</sup> <a name="groupSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.groupSet"></a>

```java
public java.util.List<java.lang.String> getGroupSet();
```

- *Type:* java.util.List<java.lang.String>

The IDs of the security groups for the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#group_set Ec2Instance#group_set}

---

##### `ipv6AddressCount`<sup>Optional</sup> <a name="ipv6AddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.ipv6AddressCount"></a>

```java
public java.lang.Number getIpv6AddressCount();
```

- *Type:* java.lang.Number

A number of IPv6 addresses to assign to the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ipv_6_address_count Ec2Instance#ipv_6_address_count}

---

##### `ipv6Addresses`<sup>Optional</sup> <a name="ipv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.ipv6Addresses"></a>

```java
public IResolvable|java.util.List<Ec2InstanceNetworkInterfacesIpv6Addresses> getIpv6Addresses();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>>

The IPv6 addresses associated with the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ipv_6_addresses Ec2Instance#ipv_6_addresses}

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

The ID of the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#network_interface_id Ec2Instance#network_interface_id}

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

The private IPv4 address of the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#private_ip_address Ec2Instance#private_ip_address}

---

##### `privateIpAddresses`<sup>Optional</sup> <a name="privateIpAddresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.privateIpAddresses"></a>

```java
public IResolvable|java.util.List<Ec2InstanceNetworkInterfacesPrivateIpAddresses> getPrivateIpAddresses();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>>

One or more private IPv4 addresses to assign to the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#private_ip_addresses Ec2Instance#private_ip_addresses}

---

##### `secondaryPrivateIpAddressCount`<sup>Optional</sup> <a name="secondaryPrivateIpAddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.secondaryPrivateIpAddressCount"></a>

```java
public java.lang.Number getSecondaryPrivateIpAddressCount();
```

- *Type:* java.lang.Number

The number of secondary private IPv4 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#secondary_private_ip_address_count Ec2Instance#secondary_private_ip_address_count}

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

The ID of the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#subnet_id Ec2Instance#subnet_id}

---

### Ec2InstanceNetworkInterfacesEnaSrdSpecification <a name="Ec2InstanceNetworkInterfacesEnaSrdSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification;

Ec2InstanceNetworkInterfacesEnaSrdSpecification.builder()
//  .enaSrdEnabled(java.lang.Boolean|IResolvable)
//  .enaSrdUdpSpecification(Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification.property.enaSrdEnabled">enaSrdEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether ENA Express is enabled for the network interface when you launch an instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification.property.enaSrdUdpSpecification">enaSrdUdpSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | Contains ENA Express settings for UDP network traffic for the network interface that's attached to the instance. |

---

##### `enaSrdEnabled`<sup>Optional</sup> <a name="enaSrdEnabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification.property.enaSrdEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEnaSrdEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether ENA Express is enabled for the network interface when you launch an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ena_srd_enabled Ec2Instance#ena_srd_enabled}

---

##### `enaSrdUdpSpecification`<sup>Optional</sup> <a name="enaSrdUdpSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification.property.enaSrdUdpSpecification"></a>

```java
public Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification getEnaSrdUdpSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a>

Contains ENA Express settings for UDP network traffic for the network interface that's attached to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ena_srd_udp_specification Ec2Instance#ena_srd_udp_specification}

---

### Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification <a name="Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification;

Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification.builder()
//  .enaSrdUdpEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification.property.enaSrdUdpEnabled">enaSrdUdpEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether UDP traffic uses ENA Express for your instance. |

---

##### `enaSrdUdpEnabled`<sup>Optional</sup> <a name="enaSrdUdpEnabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification.property.enaSrdUdpEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEnaSrdUdpEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether UDP traffic uses ENA Express for your instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ena_srd_udp_enabled Ec2Instance#ena_srd_udp_enabled}

---

### Ec2InstanceNetworkInterfacesIpv6Addresses <a name="Ec2InstanceNetworkInterfacesIpv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceNetworkInterfacesIpv6Addresses;

Ec2InstanceNetworkInterfacesIpv6Addresses.builder()
//  .ipv6Address(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | The IPv6 address. |

---

##### `ipv6Address`<sup>Optional</sup> <a name="ipv6Address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

The IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ipv_6_address Ec2Instance#ipv_6_address}

---

### Ec2InstanceNetworkInterfacesPrivateIpAddresses <a name="Ec2InstanceNetworkInterfacesPrivateIpAddresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses;

Ec2InstanceNetworkInterfacesPrivateIpAddresses.builder()
//  .primary(java.lang.Boolean|IResolvable)
//  .privateIpAddress(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses.property.primary">primary</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the private IPv4 address is the primary private IPv4 address. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | The private IPv4 addresses. |

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses.property.primary"></a>

```java
public java.lang.Boolean|IResolvable getPrimary();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the private IPv4 address is the primary private IPv4 address.

Only one IPv4 address can be designated as primary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#primary Ec2Instance#primary}

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

The private IPv4 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#private_ip_address Ec2Instance#private_ip_address}

---

### Ec2InstancePrivateDnsNameOptions <a name="Ec2InstancePrivateDnsNameOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstancePrivateDnsNameOptions;

Ec2InstancePrivateDnsNameOptions.builder()
//  .enableResourceNameDnsAaaaRecord(java.lang.Boolean|IResolvable)
//  .enableResourceNameDnsARecord(java.lang.Boolean|IResolvable)
//  .hostnameType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord">enableResourceNameDnsAaaaRecord</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.property.enableResourceNameDnsARecord">enableResourceNameDnsARecord</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to respond to DNS queries for instance hostnames with DNS A records. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.property.hostnameType">hostnameType</a></code> | <code>java.lang.String</code> | The type of hostnames to assign to instances in the subnet at launch. |

---

##### `enableResourceNameDnsAaaaRecord`<sup>Optional</sup> <a name="enableResourceNameDnsAaaaRecord" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord"></a>

```java
public java.lang.Boolean|IResolvable getEnableResourceNameDnsAaaaRecord();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.

For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#enable_resource_name_dns_aaaa_record Ec2Instance#enable_resource_name_dns_aaaa_record}

---

##### `enableResourceNameDnsARecord`<sup>Optional</sup> <a name="enableResourceNameDnsARecord" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.property.enableResourceNameDnsARecord"></a>

```java
public java.lang.Boolean|IResolvable getEnableResourceNameDnsARecord();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to respond to DNS queries for instance hostnames with DNS A records.

For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#enable_resource_name_dns_a_record Ec2Instance#enable_resource_name_dns_a_record}

---

##### `hostnameType`<sup>Optional</sup> <a name="hostnameType" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.property.hostnameType"></a>

```java
public java.lang.String getHostnameType();
```

- *Type:* java.lang.String

The type of hostnames to assign to instances in the subnet at launch.

For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#hostname_type Ec2Instance#hostname_type}

---

### Ec2InstanceSsmAssociations <a name="Ec2InstanceSsmAssociations" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceSsmAssociations;

Ec2InstanceSsmAssociations.builder()
//  .associationParameters(IResolvable|java.util.List<Ec2InstanceSsmAssociationsAssociationParameters>)
//  .documentName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations.property.associationParameters">associationParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>></code> | The input parameter values to use with the associated SSM document. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations.property.documentName">documentName</a></code> | <code>java.lang.String</code> | The name of an SSM document to associate with the instance. |

---

##### `associationParameters`<sup>Optional</sup> <a name="associationParameters" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations.property.associationParameters"></a>

```java
public IResolvable|java.util.List<Ec2InstanceSsmAssociationsAssociationParameters> getAssociationParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>>

The input parameter values to use with the associated SSM document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#association_parameters Ec2Instance#association_parameters}

---

##### `documentName`<sup>Optional</sup> <a name="documentName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations.property.documentName"></a>

```java
public java.lang.String getDocumentName();
```

- *Type:* java.lang.String

The name of an SSM document to associate with the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#document_name Ec2Instance#document_name}

---

### Ec2InstanceSsmAssociationsAssociationParameters <a name="Ec2InstanceSsmAssociationsAssociationParameters" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceSsmAssociationsAssociationParameters;

Ec2InstanceSsmAssociationsAssociationParameters.builder()
//  .key(java.lang.String)
//  .value(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters.property.key">key</a></code> | <code>java.lang.String</code> | The name of an input parameter that is in the associated SSM document. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters.property.value">value</a></code> | <code>java.util.List<java.lang.String></code> | The value of an input parameter. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The name of an input parameter that is in the associated SSM document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#key Ec2Instance#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters.property.value"></a>

```java
public java.util.List<java.lang.String> getValue();
```

- *Type:* java.util.List<java.lang.String>

The value of an input parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#value Ec2Instance#value}

---

### Ec2InstanceState <a name="Ec2InstanceState" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceState.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceState;

Ec2InstanceState.builder()
    .build();
```


### Ec2InstanceTags <a name="Ec2InstanceTags" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceTags;

Ec2InstanceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#key Ec2Instance#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#value Ec2Instance#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#key Ec2Instance#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#value Ec2Instance#value}.

---

### Ec2InstanceVolumes <a name="Ec2InstanceVolumes" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceVolumes;

Ec2InstanceVolumes.builder()
//  .device(java.lang.String)
//  .volumeId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes.property.device">device</a></code> | <code>java.lang.String</code> | The device name (for example, /dev/sdh or xvdh). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | The ID of the EBS volume. The volume and instance must be within the same Availability Zone. |

---

##### `device`<sup>Optional</sup> <a name="device" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes.property.device"></a>

```java
public java.lang.String getDevice();
```

- *Type:* java.lang.String

The device name (for example, /dev/sdh or xvdh).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#device Ec2Instance#device}

---

##### `volumeId`<sup>Optional</sup> <a name="volumeId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

The ID of the EBS volume. The volume and instance must be within the same Availability Zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#volume_id Ec2Instance#volume_id}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2InstanceBlockDeviceMappingsEbsOutputReference <a name="Ec2InstanceBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference;

new Ec2InstanceBlockDeviceMappingsEbsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```java
public void resetDeleteOnTermination()
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```java
public void resetEncrypted()
```

##### `resetIops` <a name="resetIops" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```java
public void resetSnapshotId()
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```java
public void resetVolumeSize()
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```java
public void resetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">snapshotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs">Ec2InstanceBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```java
public java.lang.Boolean|IResolvable getDeleteOnTerminationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```java
public java.lang.Boolean|IResolvable getEncryptedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```java
public java.lang.String getSnapshotIdInput();
```

- *Type:* java.lang.String

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```java
public java.lang.Number getVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```java
public java.lang.String getVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```java
public java.lang.Boolean|IResolvable getDeleteOnTermination();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```java
public java.lang.Boolean|IResolvable getEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2InstanceBlockDeviceMappingsEbs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs">Ec2InstanceBlockDeviceMappingsEbs</a>

---


### Ec2InstanceBlockDeviceMappingsList <a name="Ec2InstanceBlockDeviceMappingsList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceBlockDeviceMappingsList;

new Ec2InstanceBlockDeviceMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.get"></a>

```java
public Ec2InstanceBlockDeviceMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2InstanceBlockDeviceMappings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>>

---


### Ec2InstanceBlockDeviceMappingsOutputReference <a name="Ec2InstanceBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceBlockDeviceMappingsOutputReference;

new Ec2InstanceBlockDeviceMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.putEbs">putEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetEbs">resetEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetNoDevice">resetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetVirtualName">resetVirtualName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbs` <a name="putEbs" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.putEbs"></a>

```java
public void putEbs(Ec2InstanceBlockDeviceMappingsEbs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs">Ec2InstanceBlockDeviceMappingsEbs</a>

---

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```java
public void resetDeviceName()
```

##### `resetEbs` <a name="resetEbs" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetEbs"></a>

```java
public void resetEbs()
```

##### `resetNoDevice` <a name="resetNoDevice" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```java
public void resetNoDevice()
```

##### `resetVirtualName` <a name="resetVirtualName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```java
public void resetVirtualName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference">Ec2InstanceBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.ebsInput">ebsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs">Ec2InstanceBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.noDeviceInput">noDeviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.virtualNameInput">virtualNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.noDevice">noDevice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.virtualName">virtualName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.ebs"></a>

```java
public Ec2InstanceBlockDeviceMappingsEbsOutputReference getEbs();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference">Ec2InstanceBlockDeviceMappingsEbsOutputReference</a>

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```java
public java.lang.String getDeviceNameInput();
```

- *Type:* java.lang.String

---

##### `ebsInput`<sup>Optional</sup> <a name="ebsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```java
public IResolvable|Ec2InstanceBlockDeviceMappingsEbs getEbsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs">Ec2InstanceBlockDeviceMappingsEbs</a>

---

##### `noDeviceInput`<sup>Optional</sup> <a name="noDeviceInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```java
public java.lang.String getNoDeviceInput();
```

- *Type:* java.lang.String

---

##### `virtualNameInput`<sup>Optional</sup> <a name="virtualNameInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```java
public java.lang.String getVirtualNameInput();
```

- *Type:* java.lang.String

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `noDevice`<sup>Required</sup> <a name="noDevice" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.noDevice"></a>

```java
public java.lang.String getNoDevice();
```

- *Type:* java.lang.String

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.virtualName"></a>

```java
public java.lang.String getVirtualName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2InstanceBlockDeviceMappings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>

---


### Ec2InstanceCpuOptionsOutputReference <a name="Ec2InstanceCpuOptionsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceCpuOptionsOutputReference;

new Ec2InstanceCpuOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resetCoreCount">resetCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resetThreadsPerCore">resetThreadsPerCore</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCoreCount` <a name="resetCoreCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resetCoreCount"></a>

```java
public void resetCoreCount()
```

##### `resetThreadsPerCore` <a name="resetThreadsPerCore" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resetThreadsPerCore"></a>

```java
public void resetThreadsPerCore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.coreCountInput">coreCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.threadsPerCoreInput">threadsPerCoreInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.coreCount">coreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.threadsPerCore">threadsPerCore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coreCountInput`<sup>Optional</sup> <a name="coreCountInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.coreCountInput"></a>

```java
public java.lang.Number getCoreCountInput();
```

- *Type:* java.lang.Number

---

##### `threadsPerCoreInput`<sup>Optional</sup> <a name="threadsPerCoreInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.threadsPerCoreInput"></a>

```java
public java.lang.Number getThreadsPerCoreInput();
```

- *Type:* java.lang.Number

---

##### `coreCount`<sup>Required</sup> <a name="coreCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.coreCount"></a>

```java
public java.lang.Number getCoreCount();
```

- *Type:* java.lang.Number

---

##### `threadsPerCore`<sup>Required</sup> <a name="threadsPerCore" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.threadsPerCore"></a>

```java
public java.lang.Number getThreadsPerCore();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2InstanceCpuOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a>

---


### Ec2InstanceCreditSpecificationOutputReference <a name="Ec2InstanceCreditSpecificationOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceCreditSpecificationOutputReference;

new Ec2InstanceCreditSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.resetCpuCredits">resetCpuCredits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuCredits` <a name="resetCpuCredits" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.resetCpuCredits"></a>

```java
public void resetCpuCredits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.cpuCreditsInput">cpuCreditsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.cpuCredits">cpuCredits</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuCreditsInput`<sup>Optional</sup> <a name="cpuCreditsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.cpuCreditsInput"></a>

```java
public java.lang.String getCpuCreditsInput();
```

- *Type:* java.lang.String

---

##### `cpuCredits`<sup>Required</sup> <a name="cpuCredits" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.cpuCredits"></a>

```java
public java.lang.String getCpuCredits();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2InstanceCreditSpecification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a>

---


### Ec2InstanceElasticGpuSpecificationsList <a name="Ec2InstanceElasticGpuSpecificationsList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceElasticGpuSpecificationsList;

new Ec2InstanceElasticGpuSpecificationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.get"></a>

```java
public Ec2InstanceElasticGpuSpecificationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2InstanceElasticGpuSpecifications> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>>

---


### Ec2InstanceElasticGpuSpecificationsOutputReference <a name="Ec2InstanceElasticGpuSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceElasticGpuSpecificationsOutputReference;

new Ec2InstanceElasticGpuSpecificationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2InstanceElasticGpuSpecifications getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>

---


### Ec2InstanceElasticInferenceAcceleratorsList <a name="Ec2InstanceElasticInferenceAcceleratorsList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceElasticInferenceAcceleratorsList;

new Ec2InstanceElasticInferenceAcceleratorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.get"></a>

```java
public Ec2InstanceElasticInferenceAcceleratorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2InstanceElasticInferenceAccelerators> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>>

---


### Ec2InstanceElasticInferenceAcceleratorsOutputReference <a name="Ec2InstanceElasticInferenceAcceleratorsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference;

new Ec2InstanceElasticInferenceAcceleratorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resetCount"></a>

```java
public void resetCount()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2InstanceElasticInferenceAccelerators getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>

---


### Ec2InstanceEnclaveOptionsOutputReference <a name="Ec2InstanceEnclaveOptionsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceEnclaveOptionsOutputReference;

new Ec2InstanceEnclaveOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2InstanceEnclaveOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a>

---


### Ec2InstanceHibernationOptionsOutputReference <a name="Ec2InstanceHibernationOptionsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceHibernationOptionsOutputReference;

new Ec2InstanceHibernationOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.resetConfigured">resetConfigured</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfigured` <a name="resetConfigured" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.resetConfigured"></a>

```java
public void resetConfigured()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.configuredInput">configuredInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.configured">configured</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configuredInput`<sup>Optional</sup> <a name="configuredInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.configuredInput"></a>

```java
public java.lang.Boolean|IResolvable getConfiguredInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `configured`<sup>Required</sup> <a name="configured" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.configured"></a>

```java
public java.lang.Boolean|IResolvable getConfigured();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2InstanceHibernationOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a>

---


### Ec2InstanceIpv6AddressesList <a name="Ec2InstanceIpv6AddressesList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceIpv6AddressesList;

new Ec2InstanceIpv6AddressesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.get"></a>

```java
public Ec2InstanceIpv6AddressesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2InstanceIpv6Addresses> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>>

---


### Ec2InstanceIpv6AddressesOutputReference <a name="Ec2InstanceIpv6AddressesOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceIpv6AddressesOutputReference;

new Ec2InstanceIpv6AddressesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.resetIpv6Address">resetIpv6Address</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpv6Address` <a name="resetIpv6Address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.resetIpv6Address"></a>

```java
public void resetIpv6Address()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.ipv6AddressInput">ipv6AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv6AddressInput`<sup>Optional</sup> <a name="ipv6AddressInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.ipv6AddressInput"></a>

```java
public java.lang.String getIpv6AddressInput();
```

- *Type:* java.lang.String

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2InstanceIpv6Addresses getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>

---


### Ec2InstanceLaunchTemplateOutputReference <a name="Ec2InstanceLaunchTemplateOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceLaunchTemplateOutputReference;

new Ec2InstanceLaunchTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resetLaunchTemplateId">resetLaunchTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resetLaunchTemplateName">resetLaunchTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLaunchTemplateId` <a name="resetLaunchTemplateId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resetLaunchTemplateId"></a>

```java
public void resetLaunchTemplateId()
```

##### `resetLaunchTemplateName` <a name="resetLaunchTemplateName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resetLaunchTemplateName"></a>

```java
public void resetLaunchTemplateName()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateIdInput">launchTemplateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateNameInput">launchTemplateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateId">launchTemplateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateName">launchTemplateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `launchTemplateIdInput`<sup>Optional</sup> <a name="launchTemplateIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateIdInput"></a>

```java
public java.lang.String getLaunchTemplateIdInput();
```

- *Type:* java.lang.String

---

##### `launchTemplateNameInput`<sup>Optional</sup> <a name="launchTemplateNameInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateNameInput"></a>

```java
public java.lang.String getLaunchTemplateNameInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `launchTemplateId`<sup>Required</sup> <a name="launchTemplateId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateId"></a>

```java
public java.lang.String getLaunchTemplateId();
```

- *Type:* java.lang.String

---

##### `launchTemplateName`<sup>Required</sup> <a name="launchTemplateName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateName"></a>

```java
public java.lang.String getLaunchTemplateName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2InstanceLaunchTemplate getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a>

---


### Ec2InstanceLicenseSpecificationsList <a name="Ec2InstanceLicenseSpecificationsList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceLicenseSpecificationsList;

new Ec2InstanceLicenseSpecificationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.get"></a>

```java
public Ec2InstanceLicenseSpecificationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2InstanceLicenseSpecifications> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>>

---


### Ec2InstanceLicenseSpecificationsOutputReference <a name="Ec2InstanceLicenseSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceLicenseSpecificationsOutputReference;

new Ec2InstanceLicenseSpecificationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.resetLicenseConfigurationArn">resetLicenseConfigurationArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLicenseConfigurationArn` <a name="resetLicenseConfigurationArn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.resetLicenseConfigurationArn"></a>

```java
public void resetLicenseConfigurationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArnInput">licenseConfigurationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArn">licenseConfigurationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `licenseConfigurationArnInput`<sup>Optional</sup> <a name="licenseConfigurationArnInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArnInput"></a>

```java
public java.lang.String getLicenseConfigurationArnInput();
```

- *Type:* java.lang.String

---

##### `licenseConfigurationArn`<sup>Required</sup> <a name="licenseConfigurationArn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArn"></a>

```java
public java.lang.String getLicenseConfigurationArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2InstanceLicenseSpecifications getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>

---


### Ec2InstanceMetadataOptionsOutputReference <a name="Ec2InstanceMetadataOptionsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceMetadataOptionsOutputReference;

new Ec2InstanceMetadataOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpEndpoint">resetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpProtocolIpv6">resetHttpProtocolIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">resetHttpPutResponseHopLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpTokens">resetHttpTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetInstanceMetadataTags">resetInstanceMetadataTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpEndpoint` <a name="resetHttpEndpoint" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpEndpoint"></a>

```java
public void resetHttpEndpoint()
```

##### `resetHttpProtocolIpv6` <a name="resetHttpProtocolIpv6" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpProtocolIpv6"></a>

```java
public void resetHttpProtocolIpv6()
```

##### `resetHttpPutResponseHopLimit` <a name="resetHttpPutResponseHopLimit" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```java
public void resetHttpPutResponseHopLimit()
```

##### `resetHttpTokens` <a name="resetHttpTokens" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpTokens"></a>

```java
public void resetHttpTokens()
```

##### `resetInstanceMetadataTags` <a name="resetInstanceMetadataTags" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetInstanceMetadataTags"></a>

```java
public void resetInstanceMetadataTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpEndpointInput">httpEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpProtocolIpv6Input">httpProtocolIpv6Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">httpPutResponseHopLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpTokensInput">httpTokensInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.instanceMetadataTagsInput">instanceMetadataTagsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpEndpoint">httpEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpProtocolIpv6">httpProtocolIpv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpTokens">httpTokens</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.instanceMetadataTags">instanceMetadataTags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpEndpointInput`<sup>Optional</sup> <a name="httpEndpointInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpEndpointInput"></a>

```java
public java.lang.String getHttpEndpointInput();
```

- *Type:* java.lang.String

---

##### `httpProtocolIpv6Input`<sup>Optional</sup> <a name="httpProtocolIpv6Input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpProtocolIpv6Input"></a>

```java
public java.lang.String getHttpProtocolIpv6Input();
```

- *Type:* java.lang.String

---

##### `httpPutResponseHopLimitInput`<sup>Optional</sup> <a name="httpPutResponseHopLimitInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```java
public java.lang.Number getHttpPutResponseHopLimitInput();
```

- *Type:* java.lang.Number

---

##### `httpTokensInput`<sup>Optional</sup> <a name="httpTokensInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpTokensInput"></a>

```java
public java.lang.String getHttpTokensInput();
```

- *Type:* java.lang.String

---

##### `instanceMetadataTagsInput`<sup>Optional</sup> <a name="instanceMetadataTagsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.instanceMetadataTagsInput"></a>

```java
public java.lang.String getInstanceMetadataTagsInput();
```

- *Type:* java.lang.String

---

##### `httpEndpoint`<sup>Required</sup> <a name="httpEndpoint" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpEndpoint"></a>

```java
public java.lang.String getHttpEndpoint();
```

- *Type:* java.lang.String

---

##### `httpProtocolIpv6`<sup>Required</sup> <a name="httpProtocolIpv6" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpProtocolIpv6"></a>

```java
public java.lang.String getHttpProtocolIpv6();
```

- *Type:* java.lang.String

---

##### `httpPutResponseHopLimit`<sup>Required</sup> <a name="httpPutResponseHopLimit" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```java
public java.lang.Number getHttpPutResponseHopLimit();
```

- *Type:* java.lang.Number

---

##### `httpTokens`<sup>Required</sup> <a name="httpTokens" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```java
public java.lang.String getHttpTokens();
```

- *Type:* java.lang.String

---

##### `instanceMetadataTags`<sup>Required</sup> <a name="instanceMetadataTags" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```java
public java.lang.String getInstanceMetadataTags();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2InstanceMetadataOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a>

---


### Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference <a name="Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference;

new Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resetEnaSrdUdpEnabled">resetEnaSrdUdpEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnaSrdUdpEnabled` <a name="resetEnaSrdUdpEnabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resetEnaSrdUdpEnabled"></a>

```java
public void resetEnaSrdUdpEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabledInput">enaSrdUdpEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled">enaSrdUdpEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enaSrdUdpEnabledInput`<sup>Optional</sup> <a name="enaSrdUdpEnabledInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnaSrdUdpEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enaSrdUdpEnabled`<sup>Required</sup> <a name="enaSrdUdpEnabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEnaSrdUdpEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a>

---


### Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference <a name="Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference;

new Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification">putEnaSrdUdpSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resetEnaSrdEnabled">resetEnaSrdEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resetEnaSrdUdpSpecification">resetEnaSrdUdpSpecification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnaSrdUdpSpecification` <a name="putEnaSrdUdpSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification"></a>

```java
public void putEnaSrdUdpSpecification(Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a>

---

##### `resetEnaSrdEnabled` <a name="resetEnaSrdEnabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resetEnaSrdEnabled"></a>

```java
public void resetEnaSrdEnabled()
```

##### `resetEnaSrdUdpSpecification` <a name="resetEnaSrdUdpSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resetEnaSrdUdpSpecification"></a>

```java
public void resetEnaSrdUdpSpecification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification">enaSrdUdpSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdEnabledInput">enaSrdEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecificationInput">enaSrdUdpSpecificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdEnabled">enaSrdEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enaSrdUdpSpecification`<sup>Required</sup> <a name="enaSrdUdpSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification"></a>

```java
public Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference getEnaSrdUdpSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a>

---

##### `enaSrdEnabledInput`<sup>Optional</sup> <a name="enaSrdEnabledInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnaSrdEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enaSrdUdpSpecificationInput`<sup>Optional</sup> <a name="enaSrdUdpSpecificationInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecificationInput"></a>

```java
public IResolvable|Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification getEnaSrdUdpSpecificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a>

---

##### `enaSrdEnabled`<sup>Required</sup> <a name="enaSrdEnabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEnaSrdEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2InstanceNetworkInterfacesEnaSrdSpecification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecification</a>

---


### Ec2InstanceNetworkInterfacesIpv6AddressesList <a name="Ec2InstanceNetworkInterfacesIpv6AddressesList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceNetworkInterfacesIpv6AddressesList;

new Ec2InstanceNetworkInterfacesIpv6AddressesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.get"></a>

```java
public Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2InstanceNetworkInterfacesIpv6Addresses> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>>

---


### Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference <a name="Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference;

new Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.resetIpv6Address">resetIpv6Address</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpv6Address` <a name="resetIpv6Address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.resetIpv6Address"></a>

```java
public void resetIpv6Address()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.ipv6AddressInput">ipv6AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv6AddressInput`<sup>Optional</sup> <a name="ipv6AddressInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.ipv6AddressInput"></a>

```java
public java.lang.String getIpv6AddressInput();
```

- *Type:* java.lang.String

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2InstanceNetworkInterfacesIpv6Addresses getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>

---


### Ec2InstanceNetworkInterfacesList <a name="Ec2InstanceNetworkInterfacesList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceNetworkInterfacesList;

new Ec2InstanceNetworkInterfacesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.get"></a>

```java
public Ec2InstanceNetworkInterfacesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2InstanceNetworkInterfaces> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>>

---


### Ec2InstanceNetworkInterfacesOutputReference <a name="Ec2InstanceNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceNetworkInterfacesOutputReference;

new Ec2InstanceNetworkInterfacesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putEnaSrdSpecification">putEnaSrdSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putIpv6Addresses">putIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putPrivateIpAddresses">putPrivateIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetAssociateCarrierIpAddress">resetAssociateCarrierIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetAssociatePublicIpAddress">resetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetDeviceIndex">resetDeviceIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetEnaSrdSpecification">resetEnaSrdSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetGroupSet">resetGroupSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetIpv6AddressCount">resetIpv6AddressCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetIpv6Addresses">resetIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetNetworkInterfaceId">resetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetPrivateIpAddress">resetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetPrivateIpAddresses">resetPrivateIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetSecondaryPrivateIpAddressCount">resetSecondaryPrivateIpAddressCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnaSrdSpecification` <a name="putEnaSrdSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putEnaSrdSpecification"></a>

```java
public void putEnaSrdSpecification(Ec2InstanceNetworkInterfacesEnaSrdSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putEnaSrdSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecification</a>

---

##### `putIpv6Addresses` <a name="putIpv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putIpv6Addresses"></a>

```java
public void putIpv6Addresses(IResolvable|java.util.List<Ec2InstanceNetworkInterfacesIpv6Addresses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putIpv6Addresses.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>>

---

##### `putPrivateIpAddresses` <a name="putPrivateIpAddresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putPrivateIpAddresses"></a>

```java
public void putPrivateIpAddresses(IResolvable|java.util.List<Ec2InstanceNetworkInterfacesPrivateIpAddresses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putPrivateIpAddresses.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>>

---

##### `resetAssociateCarrierIpAddress` <a name="resetAssociateCarrierIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetAssociateCarrierIpAddress"></a>

```java
public void resetAssociateCarrierIpAddress()
```

##### `resetAssociatePublicIpAddress` <a name="resetAssociatePublicIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetAssociatePublicIpAddress"></a>

```java
public void resetAssociatePublicIpAddress()
```

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetDeleteOnTermination"></a>

```java
public void resetDeleteOnTermination()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDeviceIndex` <a name="resetDeviceIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetDeviceIndex"></a>

```java
public void resetDeviceIndex()
```

##### `resetEnaSrdSpecification` <a name="resetEnaSrdSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetEnaSrdSpecification"></a>

```java
public void resetEnaSrdSpecification()
```

##### `resetGroupSet` <a name="resetGroupSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetGroupSet"></a>

```java
public void resetGroupSet()
```

##### `resetIpv6AddressCount` <a name="resetIpv6AddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetIpv6AddressCount"></a>

```java
public void resetIpv6AddressCount()
```

##### `resetIpv6Addresses` <a name="resetIpv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetIpv6Addresses"></a>

```java
public void resetIpv6Addresses()
```

##### `resetNetworkInterfaceId` <a name="resetNetworkInterfaceId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetNetworkInterfaceId"></a>

```java
public void resetNetworkInterfaceId()
```

##### `resetPrivateIpAddress` <a name="resetPrivateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetPrivateIpAddress"></a>

```java
public void resetPrivateIpAddress()
```

##### `resetPrivateIpAddresses` <a name="resetPrivateIpAddresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetPrivateIpAddresses"></a>

```java
public void resetPrivateIpAddresses()
```

##### `resetSecondaryPrivateIpAddressCount` <a name="resetSecondaryPrivateIpAddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetSecondaryPrivateIpAddressCount"></a>

```java
public void resetSecondaryPrivateIpAddressCount()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.enaSrdSpecification">enaSrdSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference">Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6Addresses">ipv6Addresses</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList">Ec2InstanceNetworkInterfacesIpv6AddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddresses">privateIpAddresses</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList">Ec2InstanceNetworkInterfacesPrivateIpAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associateCarrierIpAddressInput">associateCarrierIpAddressInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associatePublicIpAddressInput">associatePublicIpAddressInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deviceIndexInput">deviceIndexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.enaSrdSpecificationInput">enaSrdSpecificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.groupSetInput">groupSetInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6AddressCountInput">ipv6AddressCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6AddressesInput">ipv6AddressesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddressesInput">privateIpAddressesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddressInput">privateIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCountInput">secondaryPrivateIpAddressCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associateCarrierIpAddress">associateCarrierIpAddress</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deviceIndex">deviceIndex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.groupSet">groupSet</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCount">secondaryPrivateIpAddressCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enaSrdSpecification`<sup>Required</sup> <a name="enaSrdSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.enaSrdSpecification"></a>

```java
public Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference getEnaSrdSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference">Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference</a>

---

##### `ipv6Addresses`<sup>Required</sup> <a name="ipv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6Addresses"></a>

```java
public Ec2InstanceNetworkInterfacesIpv6AddressesList getIpv6Addresses();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList">Ec2InstanceNetworkInterfacesIpv6AddressesList</a>

---

##### `privateIpAddresses`<sup>Required</sup> <a name="privateIpAddresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddresses"></a>

```java
public Ec2InstanceNetworkInterfacesPrivateIpAddressesList getPrivateIpAddresses();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList">Ec2InstanceNetworkInterfacesPrivateIpAddressesList</a>

---

##### `associateCarrierIpAddressInput`<sup>Optional</sup> <a name="associateCarrierIpAddressInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associateCarrierIpAddressInput"></a>

```java
public java.lang.Boolean|IResolvable getAssociateCarrierIpAddressInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `associatePublicIpAddressInput`<sup>Optional</sup> <a name="associatePublicIpAddressInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associatePublicIpAddressInput"></a>

```java
public java.lang.Boolean|IResolvable getAssociatePublicIpAddressInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deleteOnTerminationInput"></a>

```java
public java.lang.Boolean|IResolvable getDeleteOnTerminationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `deviceIndexInput`<sup>Optional</sup> <a name="deviceIndexInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deviceIndexInput"></a>

```java
public java.lang.String getDeviceIndexInput();
```

- *Type:* java.lang.String

---

##### `enaSrdSpecificationInput`<sup>Optional</sup> <a name="enaSrdSpecificationInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.enaSrdSpecificationInput"></a>

```java
public IResolvable|Ec2InstanceNetworkInterfacesEnaSrdSpecification getEnaSrdSpecificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecification</a>

---

##### `groupSetInput`<sup>Optional</sup> <a name="groupSetInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.groupSetInput"></a>

```java
public java.util.List<java.lang.String> getGroupSetInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv6AddressCountInput`<sup>Optional</sup> <a name="ipv6AddressCountInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6AddressCountInput"></a>

```java
public java.lang.Number getIpv6AddressCountInput();
```

- *Type:* java.lang.Number

---

##### `ipv6AddressesInput`<sup>Optional</sup> <a name="ipv6AddressesInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6AddressesInput"></a>

```java
public IResolvable|java.util.List<Ec2InstanceNetworkInterfacesIpv6Addresses> getIpv6AddressesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>>

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.networkInterfaceIdInput"></a>

```java
public java.lang.String getNetworkInterfaceIdInput();
```

- *Type:* java.lang.String

---

##### `privateIpAddressesInput`<sup>Optional</sup> <a name="privateIpAddressesInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddressesInput"></a>

```java
public IResolvable|java.util.List<Ec2InstanceNetworkInterfacesPrivateIpAddresses> getPrivateIpAddressesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>>

---

##### `privateIpAddressInput`<sup>Optional</sup> <a name="privateIpAddressInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddressInput"></a>

```java
public java.lang.String getPrivateIpAddressInput();
```

- *Type:* java.lang.String

---

##### `secondaryPrivateIpAddressCountInput`<sup>Optional</sup> <a name="secondaryPrivateIpAddressCountInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCountInput"></a>

```java
public java.lang.Number getSecondaryPrivateIpAddressCountInput();
```

- *Type:* java.lang.Number

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `associateCarrierIpAddress`<sup>Required</sup> <a name="associateCarrierIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associateCarrierIpAddress"></a>

```java
public java.lang.Boolean|IResolvable getAssociateCarrierIpAddress();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `associatePublicIpAddress`<sup>Required</sup> <a name="associatePublicIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associatePublicIpAddress"></a>

```java
public java.lang.Boolean|IResolvable getAssociatePublicIpAddress();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deleteOnTermination"></a>

```java
public java.lang.Boolean|IResolvable getDeleteOnTermination();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deviceIndex"></a>

```java
public java.lang.String getDeviceIndex();
```

- *Type:* java.lang.String

---

##### `groupSet`<sup>Required</sup> <a name="groupSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.groupSet"></a>

```java
public java.util.List<java.lang.String> getGroupSet();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv6AddressCount`<sup>Required</sup> <a name="ipv6AddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6AddressCount"></a>

```java
public java.lang.Number getIpv6AddressCount();
```

- *Type:* java.lang.Number

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `secondaryPrivateIpAddressCount`<sup>Required</sup> <a name="secondaryPrivateIpAddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCount"></a>

```java
public java.lang.Number getSecondaryPrivateIpAddressCount();
```

- *Type:* java.lang.Number

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2InstanceNetworkInterfaces getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>

---


### Ec2InstanceNetworkInterfacesPrivateIpAddressesList <a name="Ec2InstanceNetworkInterfacesPrivateIpAddressesList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList;

new Ec2InstanceNetworkInterfacesPrivateIpAddressesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.get"></a>

```java
public Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2InstanceNetworkInterfacesPrivateIpAddresses> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>>

---


### Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference <a name="Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference;

new Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resetPrivateIpAddress">resetPrivateIpAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrimary` <a name="resetPrimary" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resetPrimary"></a>

```java
public void resetPrimary()
```

##### `resetPrivateIpAddress` <a name="resetPrivateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resetPrivateIpAddress"></a>

```java
public void resetPrivateIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.primaryInput">primaryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddressInput">privateIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.primary">primary</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.primaryInput"></a>

```java
public java.lang.Boolean|IResolvable getPrimaryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `privateIpAddressInput`<sup>Optional</sup> <a name="privateIpAddressInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddressInput"></a>

```java
public java.lang.String getPrivateIpAddressInput();
```

- *Type:* java.lang.String

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.primary"></a>

```java
public java.lang.Boolean|IResolvable getPrimary();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2InstanceNetworkInterfacesPrivateIpAddresses getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>

---


### Ec2InstancePrivateDnsNameOptionsOutputReference <a name="Ec2InstancePrivateDnsNameOptionsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstancePrivateDnsNameOptionsOutputReference;

new Ec2InstancePrivateDnsNameOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord">resetEnableResourceNameDnsAaaaRecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord">resetEnableResourceNameDnsARecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resetHostnameType">resetHostnameType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableResourceNameDnsAaaaRecord` <a name="resetEnableResourceNameDnsAaaaRecord" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord"></a>

```java
public void resetEnableResourceNameDnsAaaaRecord()
```

##### `resetEnableResourceNameDnsARecord` <a name="resetEnableResourceNameDnsARecord" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord"></a>

```java
public void resetEnableResourceNameDnsARecord()
```

##### `resetHostnameType` <a name="resetHostnameType" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resetHostnameType"></a>

```java
public void resetHostnameType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput">enableResourceNameDnsAaaaRecordInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput">enableResourceNameDnsARecordInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput">hostnameTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord">enableResourceNameDnsAaaaRecord</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord">enableResourceNameDnsARecord</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.hostnameType">hostnameType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableResourceNameDnsAaaaRecordInput`<sup>Optional</sup> <a name="enableResourceNameDnsAaaaRecordInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableResourceNameDnsAaaaRecordInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableResourceNameDnsARecordInput`<sup>Optional</sup> <a name="enableResourceNameDnsARecordInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableResourceNameDnsARecordInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `hostnameTypeInput`<sup>Optional</sup> <a name="hostnameTypeInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput"></a>

```java
public java.lang.String getHostnameTypeInput();
```

- *Type:* java.lang.String

---

##### `enableResourceNameDnsAaaaRecord`<sup>Required</sup> <a name="enableResourceNameDnsAaaaRecord" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```java
public java.lang.Boolean|IResolvable getEnableResourceNameDnsAaaaRecord();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableResourceNameDnsARecord`<sup>Required</sup> <a name="enableResourceNameDnsARecord" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord"></a>

```java
public java.lang.Boolean|IResolvable getEnableResourceNameDnsARecord();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `hostnameType`<sup>Required</sup> <a name="hostnameType" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.hostnameType"></a>

```java
public java.lang.String getHostnameType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2InstancePrivateDnsNameOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a>

---


### Ec2InstanceSsmAssociationsAssociationParametersList <a name="Ec2InstanceSsmAssociationsAssociationParametersList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceSsmAssociationsAssociationParametersList;

new Ec2InstanceSsmAssociationsAssociationParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.get"></a>

```java
public Ec2InstanceSsmAssociationsAssociationParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2InstanceSsmAssociationsAssociationParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>>

---


### Ec2InstanceSsmAssociationsAssociationParametersOutputReference <a name="Ec2InstanceSsmAssociationsAssociationParametersOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference;

new Ec2InstanceSsmAssociationsAssociationParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.valueInput">valueInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.value">value</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.valueInput"></a>

```java
public java.util.List<java.lang.String> getValueInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.value"></a>

```java
public java.util.List<java.lang.String> getValue();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2InstanceSsmAssociationsAssociationParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>

---


### Ec2InstanceSsmAssociationsList <a name="Ec2InstanceSsmAssociationsList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceSsmAssociationsList;

new Ec2InstanceSsmAssociationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.get"></a>

```java
public Ec2InstanceSsmAssociationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2InstanceSsmAssociations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>>

---


### Ec2InstanceSsmAssociationsOutputReference <a name="Ec2InstanceSsmAssociationsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceSsmAssociationsOutputReference;

new Ec2InstanceSsmAssociationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.putAssociationParameters">putAssociationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resetAssociationParameters">resetAssociationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resetDocumentName">resetDocumentName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAssociationParameters` <a name="putAssociationParameters" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.putAssociationParameters"></a>

```java
public void putAssociationParameters(IResolvable|java.util.List<Ec2InstanceSsmAssociationsAssociationParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.putAssociationParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>>

---

##### `resetAssociationParameters` <a name="resetAssociationParameters" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resetAssociationParameters"></a>

```java
public void resetAssociationParameters()
```

##### `resetDocumentName` <a name="resetDocumentName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resetDocumentName"></a>

```java
public void resetDocumentName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.associationParameters">associationParameters</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList">Ec2InstanceSsmAssociationsAssociationParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.associationParametersInput">associationParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.documentNameInput">documentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.documentName">documentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `associationParameters`<sup>Required</sup> <a name="associationParameters" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.associationParameters"></a>

```java
public Ec2InstanceSsmAssociationsAssociationParametersList getAssociationParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList">Ec2InstanceSsmAssociationsAssociationParametersList</a>

---

##### `associationParametersInput`<sup>Optional</sup> <a name="associationParametersInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.associationParametersInput"></a>

```java
public IResolvable|java.util.List<Ec2InstanceSsmAssociationsAssociationParameters> getAssociationParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>>

---

##### `documentNameInput`<sup>Optional</sup> <a name="documentNameInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.documentNameInput"></a>

```java
public java.lang.String getDocumentNameInput();
```

- *Type:* java.lang.String

---

##### `documentName`<sup>Required</sup> <a name="documentName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.documentName"></a>

```java
public java.lang.String getDocumentName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2InstanceSsmAssociations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>

---


### Ec2InstanceStateOutputReference <a name="Ec2InstanceStateOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceStateOutputReference;

new Ec2InstanceStateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceState">Ec2InstanceState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.internalValue"></a>

```java
public Ec2InstanceState getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceState">Ec2InstanceState</a>

---


### Ec2InstanceTagsList <a name="Ec2InstanceTagsList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceTagsList;

new Ec2InstanceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.get"></a>

```java
public Ec2InstanceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2InstanceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>>

---


### Ec2InstanceTagsOutputReference <a name="Ec2InstanceTagsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceTagsOutputReference;

new Ec2InstanceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2InstanceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>

---


### Ec2InstanceVolumesList <a name="Ec2InstanceVolumesList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceVolumesList;

new Ec2InstanceVolumesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.get"></a>

```java
public Ec2InstanceVolumesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2InstanceVolumes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>>

---


### Ec2InstanceVolumesOutputReference <a name="Ec2InstanceVolumesOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance.Ec2InstanceVolumesOutputReference;

new Ec2InstanceVolumesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resetDevice">resetDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resetVolumeId">resetVolumeId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDevice` <a name="resetDevice" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resetDevice"></a>

```java
public void resetDevice()
```

##### `resetVolumeId` <a name="resetVolumeId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resetVolumeId"></a>

```java
public void resetVolumeId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.deviceInput">deviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.volumeIdInput">volumeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.device">device</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deviceInput`<sup>Optional</sup> <a name="deviceInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.deviceInput"></a>

```java
public java.lang.String getDeviceInput();
```

- *Type:* java.lang.String

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.volumeIdInput"></a>

```java
public java.lang.String getVolumeIdInput();
```

- *Type:* java.lang.String

---

##### `device`<sup>Required</sup> <a name="device" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.device"></a>

```java
public java.lang.String getDevice();
```

- *Type:* java.lang.String

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2InstanceVolumes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>

---



