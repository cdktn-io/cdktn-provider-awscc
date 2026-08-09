# `ec2Instance` Submodule <a name="`ec2Instance` Submodule" id="@cdktn/provider-awscc.ec2Instance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2Instance <a name="Ec2Instance" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance awscc_ec2_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2Instance(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  additional_info: str = None,
  affinity: str = None,
  availability_zone: str = None,
  block_device_mappings: IResolvable | typing.List[Ec2InstanceBlockDeviceMappings] = None,
  cpu_options: Ec2InstanceCpuOptions = None,
  credit_specification: Ec2InstanceCreditSpecification = None,
  disable_api_termination: bool | IResolvable = None,
  ebs_optimized: bool | IResolvable = None,
  elastic_gpu_specifications: IResolvable | typing.List[Ec2InstanceElasticGpuSpecifications] = None,
  elastic_inference_accelerators: IResolvable | typing.List[Ec2InstanceElasticInferenceAccelerators] = None,
  enclave_options: Ec2InstanceEnclaveOptions = None,
  hibernation_options: Ec2InstanceHibernationOptions = None,
  host_id: str = None,
  host_resource_group_arn: str = None,
  iam_instance_profile: str = None,
  image_id: str = None,
  instance_initiated_shutdown_behavior: str = None,
  instance_type: str = None,
  ipv6_address_count: typing.Union[int, float] = None,
  ipv6_addresses: IResolvable | typing.List[Ec2InstanceIpv6Addresses] = None,
  kernel_id: str = None,
  key_name: str = None,
  launch_template: Ec2InstanceLaunchTemplate = None,
  license_specifications: IResolvable | typing.List[Ec2InstanceLicenseSpecifications] = None,
  metadata_options: Ec2InstanceMetadataOptions = None,
  monitoring: bool | IResolvable = None,
  network_interfaces: IResolvable | typing.List[Ec2InstanceNetworkInterfaces] = None,
  placement_group_name: str = None,
  private_dns_name_options: Ec2InstancePrivateDnsNameOptions = None,
  private_ip_address: str = None,
  propagate_tags_to_volume_on_creation: bool | IResolvable = None,
  ramdisk_id: str = None,
  security_group_ids: typing.List[str] = None,
  security_groups: typing.List[str] = None,
  source_dest_check: bool | IResolvable = None,
  ssm_associations: IResolvable | typing.List[Ec2InstanceSsmAssociations] = None,
  subnet_id: str = None,
  tags: IResolvable | typing.List[Ec2InstanceTags] = None,
  tenancy: str = None,
  user_data: str = None,
  volumes: IResolvable | typing.List[Ec2InstanceVolumes] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.additionalInfo">additional_info</a></code> | <code>str</code> | This property is reserved for internal use. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.affinity">affinity</a></code> | <code>str</code> | Indicates whether the instance is associated with a dedicated host. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | The Availability Zone of the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.blockDeviceMappings">block_device_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>]</code> | The block device mapping entries that defines the block devices to attach to the instance at launch. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.cpuOptions">cpu_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a></code> | The CPU options for the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.creditSpecification">credit_specification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a></code> | The credit option for CPU usage of the burstable performance instance. Valid values are standard and unlimited. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.disableApiTermination">disable_api_termination</a></code> | <code>bool \| cdktn.IResolvable</code> | If you set this parameter to true, you can't terminate the instance using the Amazon EC2 console, CLI, or API; |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.ebsOptimized">ebs_optimized</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the instance is optimized for Amazon EBS I/O. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.elasticGpuSpecifications">elastic_gpu_specifications</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>]</code> | An elastic GPU to associate with the instance. Amazon Elastic Graphics is no longer available. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.elasticInferenceAccelerators">elastic_inference_accelerators</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>]</code> | An elastic inference accelerator to associate with the instance. Amazon Elastic Inference is no longer available. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.enclaveOptions">enclave_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a></code> | Indicates whether the instance is enabled for AWS Nitro Enclaves. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.hibernationOptions">hibernation_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a></code> | Indicates whether an instance is enabled for hibernation. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.hostId">host_id</a></code> | <code>str</code> | If you specify host for the Affinity property, the ID of a dedicated host that the instance is associated with. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.hostResourceGroupArn">host_resource_group_arn</a></code> | <code>str</code> | The ARN of the host resource group in which to launch the instances. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | The IAM instance profile. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.imageId">image_id</a></code> | <code>str</code> | The ID of the AMI. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.instanceInitiatedShutdownBehavior">instance_initiated_shutdown_behavior</a></code> | <code>str</code> | Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.instanceType">instance_type</a></code> | <code>str</code> | The instance type. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.ipv6AddressCount">ipv6_address_count</a></code> | <code>typing.Union[int, float]</code> | [EC2-VPC] The number of IPv6 addresses to associate with the primary network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.ipv6Addresses">ipv6_addresses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>]</code> | [EC2-VPC] The IPv6 addresses from the range of the subnet to associate with the primary network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.kernelId">kernel_id</a></code> | <code>str</code> | The ID of the kernel. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.keyName">key_name</a></code> | <code>str</code> | The name of the key pair. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.launchTemplate">launch_template</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a></code> | The launch template to use to launch the instances. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.licenseSpecifications">license_specifications</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>]</code> | The license configurations. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.metadataOptions">metadata_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a></code> | The metadata options for the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.monitoring">monitoring</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether detailed monitoring is enabled for the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.networkInterfaces">network_interfaces</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>]</code> | The network interfaces to associate with the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.placementGroupName">placement_group_name</a></code> | <code>str</code> | The name of an existing placement group that you want to launch the instance into (cluster \| partition \| spread). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.privateDnsNameOptions">private_dns_name_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a></code> | The options for the instance hostname. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.privateIpAddress">private_ip_address</a></code> | <code>str</code> | [EC2-VPC] The primary IPv4 address. You must specify a value from the IPv4 address range of the subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.propagateTagsToVolumeOnCreation">propagate_tags_to_volume_on_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to assign the tags from the instance to all of the volumes attached to the instance at launch. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.ramdiskId">ramdisk_id</a></code> | <code>str</code> | The ID of the RAM disk to select. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The IDs of the security groups. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | the names of the security groups. For a nondefault VPC, you must use security group IDs instead. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.sourceDestCheck">source_dest_check</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to enable an instance launched in a VPC to perform NAT. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.ssmAssociations">ssm_associations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>]</code> | The SSM document and parameter values in AWS Systems Manager to associate with this instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | [EC2-VPC] The ID of the subnet to launch the instance into. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>]</code> | The tags to add to the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.tenancy">tenancy</a></code> | <code>str</code> | The tenancy of the instance (if the instance is running in a VPC). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.userData">user_data</a></code> | <code>str</code> | The user data to make available to the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.volumes">volumes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>]</code> | The volumes to attach to the instance. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `additional_info`<sup>Optional</sup> <a name="additional_info" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.additionalInfo"></a>

- *Type:* str

This property is reserved for internal use.

If you use it, the stack fails with this error: Bad property set: [Testing this property] (Service: AmazonEC2; Status Code: 400; Error Code: InvalidParameterCombination; Request ID: 0XXXXXX-49c7-4b40-8bcc-76885dcXXXXX).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#additional_info Ec2Instance#additional_info}

---

##### `affinity`<sup>Optional</sup> <a name="affinity" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.affinity"></a>

- *Type:* str

Indicates whether the instance is associated with a dedicated host.

If you want the instance to always restart on the same host on which it was launched, specify host. If you want the instance to restart on any available host, but try to launch onto the last host it ran on (on a best-effort basis), specify default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#affinity Ec2Instance#affinity}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.availabilityZone"></a>

- *Type:* str

The Availability Zone of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#availability_zone Ec2Instance#availability_zone}

---

##### `block_device_mappings`<sup>Optional</sup> <a name="block_device_mappings" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.blockDeviceMappings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>]

The block device mapping entries that defines the block devices to attach to the instance at launch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#block_device_mappings Ec2Instance#block_device_mappings}

---

##### `cpu_options`<sup>Optional</sup> <a name="cpu_options" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.cpuOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a>

The CPU options for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#cpu_options Ec2Instance#cpu_options}

---

##### `credit_specification`<sup>Optional</sup> <a name="credit_specification" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.creditSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a>

The credit option for CPU usage of the burstable performance instance. Valid values are standard and unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#credit_specification Ec2Instance#credit_specification}

---

##### `disable_api_termination`<sup>Optional</sup> <a name="disable_api_termination" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.disableApiTermination"></a>

- *Type:* bool | cdktn.IResolvable

If you set this parameter to true, you can't terminate the instance using the Amazon EC2 console, CLI, or API;

otherwise, you can.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#disable_api_termination Ec2Instance#disable_api_termination}

---

##### `ebs_optimized`<sup>Optional</sup> <a name="ebs_optimized" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.ebsOptimized"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the instance is optimized for Amazon EBS I/O.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#ebs_optimized Ec2Instance#ebs_optimized}

---

##### `elastic_gpu_specifications`<sup>Optional</sup> <a name="elastic_gpu_specifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.elasticGpuSpecifications"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>]

An elastic GPU to associate with the instance. Amazon Elastic Graphics is no longer available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#elastic_gpu_specifications Ec2Instance#elastic_gpu_specifications}

---

##### `elastic_inference_accelerators`<sup>Optional</sup> <a name="elastic_inference_accelerators" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.elasticInferenceAccelerators"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>]

An elastic inference accelerator to associate with the instance. Amazon Elastic Inference is no longer available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#elastic_inference_accelerators Ec2Instance#elastic_inference_accelerators}

---

##### `enclave_options`<sup>Optional</sup> <a name="enclave_options" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.enclaveOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a>

Indicates whether the instance is enabled for AWS Nitro Enclaves.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#enclave_options Ec2Instance#enclave_options}

---

##### `hibernation_options`<sup>Optional</sup> <a name="hibernation_options" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.hibernationOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a>

Indicates whether an instance is enabled for hibernation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#hibernation_options Ec2Instance#hibernation_options}

---

##### `host_id`<sup>Optional</sup> <a name="host_id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.hostId"></a>

- *Type:* str

If you specify host for the Affinity property, the ID of a dedicated host that the instance is associated with.

If you don't specify an ID, Amazon EC2 launches the instance onto any available, compatible dedicated host in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#host_id Ec2Instance#host_id}

---

##### `host_resource_group_arn`<sup>Optional</sup> <a name="host_resource_group_arn" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.hostResourceGroupArn"></a>

- *Type:* str

The ARN of the host resource group in which to launch the instances.

If you specify a host resource group ARN, omit the Tenancy parameter or set it to host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#host_resource_group_arn Ec2Instance#host_resource_group_arn}

---

##### `iam_instance_profile`<sup>Optional</sup> <a name="iam_instance_profile" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.iamInstanceProfile"></a>

- *Type:* str

The IAM instance profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#iam_instance_profile Ec2Instance#iam_instance_profile}

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.imageId"></a>

- *Type:* str

The ID of the AMI.

An AMI ID is required to launch an instance and must be specified here or in a launch template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#image_id Ec2Instance#image_id}

---

##### `instance_initiated_shutdown_behavior`<sup>Optional</sup> <a name="instance_initiated_shutdown_behavior" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.instanceInitiatedShutdownBehavior"></a>

- *Type:* str

Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#instance_initiated_shutdown_behavior Ec2Instance#instance_initiated_shutdown_behavior}

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.instanceType"></a>

- *Type:* str

The instance type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#instance_type Ec2Instance#instance_type}

---

##### `ipv6_address_count`<sup>Optional</sup> <a name="ipv6_address_count" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.ipv6AddressCount"></a>

- *Type:* typing.Union[int, float]

[EC2-VPC] The number of IPv6 addresses to associate with the primary network interface.

Amazon EC2 chooses the IPv6 addresses from the range of your subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#ipv_6_address_count Ec2Instance#ipv_6_address_count}

---

##### `ipv6_addresses`<sup>Optional</sup> <a name="ipv6_addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.ipv6Addresses"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>]

[EC2-VPC] The IPv6 addresses from the range of the subnet to associate with the primary network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#ipv_6_addresses Ec2Instance#ipv_6_addresses}

---

##### `kernel_id`<sup>Optional</sup> <a name="kernel_id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.kernelId"></a>

- *Type:* str

The ID of the kernel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#kernel_id Ec2Instance#kernel_id}

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.keyName"></a>

- *Type:* str

The name of the key pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#key_name Ec2Instance#key_name}

---

##### `launch_template`<sup>Optional</sup> <a name="launch_template" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.launchTemplate"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a>

The launch template to use to launch the instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#launch_template Ec2Instance#launch_template}

---

##### `license_specifications`<sup>Optional</sup> <a name="license_specifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.licenseSpecifications"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>]

The license configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#license_specifications Ec2Instance#license_specifications}

---

##### `metadata_options`<sup>Optional</sup> <a name="metadata_options" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.metadataOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a>

The metadata options for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#metadata_options Ec2Instance#metadata_options}

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.monitoring"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether detailed monitoring is enabled for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#monitoring Ec2Instance#monitoring}

---

##### `network_interfaces`<sup>Optional</sup> <a name="network_interfaces" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.networkInterfaces"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>]

The network interfaces to associate with the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#network_interfaces Ec2Instance#network_interfaces}

---

##### `placement_group_name`<sup>Optional</sup> <a name="placement_group_name" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.placementGroupName"></a>

- *Type:* str

The name of an existing placement group that you want to launch the instance into (cluster | partition | spread).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#placement_group_name Ec2Instance#placement_group_name}

---

##### `private_dns_name_options`<sup>Optional</sup> <a name="private_dns_name_options" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.privateDnsNameOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a>

The options for the instance hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#private_dns_name_options Ec2Instance#private_dns_name_options}

---

##### `private_ip_address`<sup>Optional</sup> <a name="private_ip_address" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.privateIpAddress"></a>

- *Type:* str

[EC2-VPC] The primary IPv4 address. You must specify a value from the IPv4 address range of the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#private_ip_address Ec2Instance#private_ip_address}

---

##### `propagate_tags_to_volume_on_creation`<sup>Optional</sup> <a name="propagate_tags_to_volume_on_creation" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.propagateTagsToVolumeOnCreation"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether to assign the tags from the instance to all of the volumes attached to the instance at launch.

If you specify true and you assign tags to the instance, those tags are automatically assigned to all of the volumes that you attach to the instance at launch. If you specify false, those tags are not assigned to the attached volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#propagate_tags_to_volume_on_creation Ec2Instance#propagate_tags_to_volume_on_creation}

---

##### `ramdisk_id`<sup>Optional</sup> <a name="ramdisk_id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.ramdiskId"></a>

- *Type:* str

The ID of the RAM disk to select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#ramdisk_id Ec2Instance#ramdisk_id}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

The IDs of the security groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#security_group_ids Ec2Instance#security_group_ids}

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.securityGroups"></a>

- *Type:* typing.List[str]

the names of the security groups. For a nondefault VPC, you must use security group IDs instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#security_groups Ec2Instance#security_groups}

---

##### `source_dest_check`<sup>Optional</sup> <a name="source_dest_check" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.sourceDestCheck"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to enable an instance launched in a VPC to perform NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#source_dest_check Ec2Instance#source_dest_check}

---

##### `ssm_associations`<sup>Optional</sup> <a name="ssm_associations" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.ssmAssociations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>]

The SSM document and parameter values in AWS Systems Manager to associate with this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#ssm_associations Ec2Instance#ssm_associations}

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.subnetId"></a>

- *Type:* str

[EC2-VPC] The ID of the subnet to launch the instance into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#subnet_id Ec2Instance#subnet_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>]

The tags to add to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#tags Ec2Instance#tags}

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.tenancy"></a>

- *Type:* str

The tenancy of the instance (if the instance is running in a VPC).

An instance with a tenancy of dedicated runs on single-tenant hardware.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#tenancy Ec2Instance#tenancy}

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.userData"></a>

- *Type:* str

The user data to make available to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#user_data Ec2Instance#user_data}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.volumes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>]

The volumes to attach to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#volumes Ec2Instance#volumes}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putBlockDeviceMappings">put_block_device_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putCpuOptions">put_cpu_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putCreditSpecification">put_credit_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putElasticGpuSpecifications">put_elastic_gpu_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putElasticInferenceAccelerators">put_elastic_inference_accelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putEnclaveOptions">put_enclave_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putHibernationOptions">put_hibernation_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putIpv6Addresses">put_ipv6_addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putLaunchTemplate">put_launch_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putLicenseSpecifications">put_license_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putMetadataOptions">put_metadata_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putNetworkInterfaces">put_network_interfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putPrivateDnsNameOptions">put_private_dns_name_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putSsmAssociations">put_ssm_associations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putVolumes">put_volumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetAdditionalInfo">reset_additional_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetAffinity">reset_affinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetBlockDeviceMappings">reset_block_device_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetCpuOptions">reset_cpu_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetCreditSpecification">reset_credit_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetDisableApiTermination">reset_disable_api_termination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetEbsOptimized">reset_ebs_optimized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetElasticGpuSpecifications">reset_elastic_gpu_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetElasticInferenceAccelerators">reset_elastic_inference_accelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetEnclaveOptions">reset_enclave_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetHibernationOptions">reset_hibernation_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetHostId">reset_host_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetHostResourceGroupArn">reset_host_resource_group_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetIamInstanceProfile">reset_iam_instance_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetImageId">reset_image_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetInstanceInitiatedShutdownBehavior">reset_instance_initiated_shutdown_behavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetIpv6AddressCount">reset_ipv6_address_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetIpv6Addresses">reset_ipv6_addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetKernelId">reset_kernel_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetKeyName">reset_key_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetLaunchTemplate">reset_launch_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetLicenseSpecifications">reset_license_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetMetadataOptions">reset_metadata_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetMonitoring">reset_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetNetworkInterfaces">reset_network_interfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPlacementGroupName">reset_placement_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPrivateDnsNameOptions">reset_private_dns_name_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPrivateIpAddress">reset_private_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPropagateTagsToVolumeOnCreation">reset_propagate_tags_to_volume_on_creation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetRamdiskId">reset_ramdisk_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSourceDestCheck">reset_source_dest_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSsmAssociations">reset_ssm_associations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetTenancy">reset_tenancy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetUserData">reset_user_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetVolumes">reset_volumes</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_block_device_mappings` <a name="put_block_device_mappings" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putBlockDeviceMappings"></a>

```python
def put_block_device_mappings(
  value: IResolvable | typing.List[Ec2InstanceBlockDeviceMappings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putBlockDeviceMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>]

---

##### `put_cpu_options` <a name="put_cpu_options" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putCpuOptions"></a>

```python
def put_cpu_options(
  core_count: typing.Union[int, float] = None,
  threads_per_core: typing.Union[int, float] = None
) -> None
```

###### `core_count`<sup>Optional</sup> <a name="core_count" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putCpuOptions.parameter.coreCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#core_count Ec2Instance#core_count}.

---

###### `threads_per_core`<sup>Optional</sup> <a name="threads_per_core" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putCpuOptions.parameter.threadsPerCore"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#threads_per_core Ec2Instance#threads_per_core}.

---

##### `put_credit_specification` <a name="put_credit_specification" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putCreditSpecification"></a>

```python
def put_credit_specification(
  cpu_credits: str = None
) -> None
```

###### `cpu_credits`<sup>Optional</sup> <a name="cpu_credits" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putCreditSpecification.parameter.cpuCredits"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#cpu_credits Ec2Instance#cpu_credits}.

---

##### `put_elastic_gpu_specifications` <a name="put_elastic_gpu_specifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putElasticGpuSpecifications"></a>

```python
def put_elastic_gpu_specifications(
  value: IResolvable | typing.List[Ec2InstanceElasticGpuSpecifications]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putElasticGpuSpecifications.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>]

---

##### `put_elastic_inference_accelerators` <a name="put_elastic_inference_accelerators" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putElasticInferenceAccelerators"></a>

```python
def put_elastic_inference_accelerators(
  value: IResolvable | typing.List[Ec2InstanceElasticInferenceAccelerators]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putElasticInferenceAccelerators.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>]

---

##### `put_enclave_options` <a name="put_enclave_options" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putEnclaveOptions"></a>

```python
def put_enclave_options(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putEnclaveOptions.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

If this parameter is set to true, the instance is enabled for AWS Nitro Enclaves;

otherwise, it is not enabled for AWS Nitro Enclaves.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#enabled Ec2Instance#enabled}

---

##### `put_hibernation_options` <a name="put_hibernation_options" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putHibernationOptions"></a>

```python
def put_hibernation_options(
  configured: bool | IResolvable = None
) -> None
```

###### `configured`<sup>Optional</sup> <a name="configured" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putHibernationOptions.parameter.configured"></a>

- *Type:* bool | cdktn.IResolvable

If you set this parameter to true, your instance is enabled for hibernation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#configured Ec2Instance#configured}

---

##### `put_ipv6_addresses` <a name="put_ipv6_addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putIpv6Addresses"></a>

```python
def put_ipv6_addresses(
  value: IResolvable | typing.List[Ec2InstanceIpv6Addresses]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putIpv6Addresses.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>]

---

##### `put_launch_template` <a name="put_launch_template" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putLaunchTemplate"></a>

```python
def put_launch_template(
  launch_template_id: str = None,
  launch_template_name: str = None,
  version: str = None
) -> None
```

###### `launch_template_id`<sup>Optional</sup> <a name="launch_template_id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putLaunchTemplate.parameter.launchTemplateId"></a>

- *Type:* str

The ID of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#launch_template_id Ec2Instance#launch_template_id}

---

###### `launch_template_name`<sup>Optional</sup> <a name="launch_template_name" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putLaunchTemplate.parameter.launchTemplateName"></a>

- *Type:* str

The name of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#launch_template_name Ec2Instance#launch_template_name}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putLaunchTemplate.parameter.version"></a>

- *Type:* str

The version number of the launch template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#version Ec2Instance#version}

---

##### `put_license_specifications` <a name="put_license_specifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putLicenseSpecifications"></a>

```python
def put_license_specifications(
  value: IResolvable | typing.List[Ec2InstanceLicenseSpecifications]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putLicenseSpecifications.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>]

---

##### `put_metadata_options` <a name="put_metadata_options" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putMetadataOptions"></a>

```python
def put_metadata_options(
  http_endpoint: str = None,
  http_protocol_ipv6: str = None,
  http_put_response_hop_limit: typing.Union[int, float] = None,
  http_tokens: str = None,
  instance_metadata_tags: str = None
) -> None
```

###### `http_endpoint`<sup>Optional</sup> <a name="http_endpoint" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putMetadataOptions.parameter.httpEndpoint"></a>

- *Type:* str

Enables or disables the HTTP metadata endpoint on your instances.

If you specify a value of disabled, you cannot access your instance metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#http_endpoint Ec2Instance#http_endpoint}

---

###### `http_protocol_ipv6`<sup>Optional</sup> <a name="http_protocol_ipv6" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putMetadataOptions.parameter.httpProtocolIpv6"></a>

- *Type:* str

Enables or disables the IPv6 endpoint for the instance metadata service.

To use this option, the instance must be a Nitro-based instance launched in a subnet that supports IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#http_protocol_ipv_6 Ec2Instance#http_protocol_ipv_6}

---

###### `http_put_response_hop_limit`<sup>Optional</sup> <a name="http_put_response_hop_limit" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putMetadataOptions.parameter.httpPutResponseHopLimit"></a>

- *Type:* typing.Union[int, float]

The number of network hops that the metadata token can travel. Maximum is 64.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#http_put_response_hop_limit Ec2Instance#http_put_response_hop_limit}

---

###### `http_tokens`<sup>Optional</sup> <a name="http_tokens" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putMetadataOptions.parameter.httpTokens"></a>

- *Type:* str

Indicates whether IMDSv2 is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#http_tokens Ec2Instance#http_tokens}

---

###### `instance_metadata_tags`<sup>Optional</sup> <a name="instance_metadata_tags" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putMetadataOptions.parameter.instanceMetadataTags"></a>

- *Type:* str

Indicates whether tags from the instance are propagated to the EBS volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#instance_metadata_tags Ec2Instance#instance_metadata_tags}

---

##### `put_network_interfaces` <a name="put_network_interfaces" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putNetworkInterfaces"></a>

```python
def put_network_interfaces(
  value: IResolvable | typing.List[Ec2InstanceNetworkInterfaces]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putNetworkInterfaces.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>]

---

##### `put_private_dns_name_options` <a name="put_private_dns_name_options" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putPrivateDnsNameOptions"></a>

```python
def put_private_dns_name_options(
  enable_resource_name_dns_aaaa_record: bool | IResolvable = None,
  enable_resource_name_dns_a_record: bool | IResolvable = None,
  hostname_type: str = None
) -> None
```

###### `enable_resource_name_dns_aaaa_record`<sup>Optional</sup> <a name="enable_resource_name_dns_aaaa_record" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putPrivateDnsNameOptions.parameter.enableResourceNameDnsAaaaRecord"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.

For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#enable_resource_name_dns_aaaa_record Ec2Instance#enable_resource_name_dns_aaaa_record}

---

###### `enable_resource_name_dns_a_record`<sup>Optional</sup> <a name="enable_resource_name_dns_a_record" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putPrivateDnsNameOptions.parameter.enableResourceNameDnsARecord"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether to respond to DNS queries for instance hostnames with DNS A records.

For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#enable_resource_name_dns_a_record Ec2Instance#enable_resource_name_dns_a_record}

---

###### `hostname_type`<sup>Optional</sup> <a name="hostname_type" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putPrivateDnsNameOptions.parameter.hostnameType"></a>

- *Type:* str

The type of hostnames to assign to instances in the subnet at launch.

For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#hostname_type Ec2Instance#hostname_type}

---

##### `put_ssm_associations` <a name="put_ssm_associations" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putSsmAssociations"></a>

```python
def put_ssm_associations(
  value: IResolvable | typing.List[Ec2InstanceSsmAssociations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putSsmAssociations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2InstanceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>]

---

##### `put_volumes` <a name="put_volumes" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putVolumes"></a>

```python
def put_volumes(
  value: IResolvable | typing.List[Ec2InstanceVolumes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putVolumes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>]

---

##### `reset_additional_info` <a name="reset_additional_info" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetAdditionalInfo"></a>

```python
def reset_additional_info() -> None
```

##### `reset_affinity` <a name="reset_affinity" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetAffinity"></a>

```python
def reset_affinity() -> None
```

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_block_device_mappings` <a name="reset_block_device_mappings" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetBlockDeviceMappings"></a>

```python
def reset_block_device_mappings() -> None
```

##### `reset_cpu_options` <a name="reset_cpu_options" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetCpuOptions"></a>

```python
def reset_cpu_options() -> None
```

##### `reset_credit_specification` <a name="reset_credit_specification" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetCreditSpecification"></a>

```python
def reset_credit_specification() -> None
```

##### `reset_disable_api_termination` <a name="reset_disable_api_termination" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetDisableApiTermination"></a>

```python
def reset_disable_api_termination() -> None
```

##### `reset_ebs_optimized` <a name="reset_ebs_optimized" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetEbsOptimized"></a>

```python
def reset_ebs_optimized() -> None
```

##### `reset_elastic_gpu_specifications` <a name="reset_elastic_gpu_specifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetElasticGpuSpecifications"></a>

```python
def reset_elastic_gpu_specifications() -> None
```

##### `reset_elastic_inference_accelerators` <a name="reset_elastic_inference_accelerators" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetElasticInferenceAccelerators"></a>

```python
def reset_elastic_inference_accelerators() -> None
```

##### `reset_enclave_options` <a name="reset_enclave_options" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetEnclaveOptions"></a>

```python
def reset_enclave_options() -> None
```

##### `reset_hibernation_options` <a name="reset_hibernation_options" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetHibernationOptions"></a>

```python
def reset_hibernation_options() -> None
```

##### `reset_host_id` <a name="reset_host_id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetHostId"></a>

```python
def reset_host_id() -> None
```

##### `reset_host_resource_group_arn` <a name="reset_host_resource_group_arn" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetHostResourceGroupArn"></a>

```python
def reset_host_resource_group_arn() -> None
```

##### `reset_iam_instance_profile` <a name="reset_iam_instance_profile" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetIamInstanceProfile"></a>

```python
def reset_iam_instance_profile() -> None
```

##### `reset_image_id` <a name="reset_image_id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetImageId"></a>

```python
def reset_image_id() -> None
```

##### `reset_instance_initiated_shutdown_behavior` <a name="reset_instance_initiated_shutdown_behavior" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetInstanceInitiatedShutdownBehavior"></a>

```python
def reset_instance_initiated_shutdown_behavior() -> None
```

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_ipv6_address_count` <a name="reset_ipv6_address_count" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetIpv6AddressCount"></a>

```python
def reset_ipv6_address_count() -> None
```

##### `reset_ipv6_addresses` <a name="reset_ipv6_addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetIpv6Addresses"></a>

```python
def reset_ipv6_addresses() -> None
```

##### `reset_kernel_id` <a name="reset_kernel_id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetKernelId"></a>

```python
def reset_kernel_id() -> None
```

##### `reset_key_name` <a name="reset_key_name" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetKeyName"></a>

```python
def reset_key_name() -> None
```

##### `reset_launch_template` <a name="reset_launch_template" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetLaunchTemplate"></a>

```python
def reset_launch_template() -> None
```

##### `reset_license_specifications` <a name="reset_license_specifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetLicenseSpecifications"></a>

```python
def reset_license_specifications() -> None
```

##### `reset_metadata_options` <a name="reset_metadata_options" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetMetadataOptions"></a>

```python
def reset_metadata_options() -> None
```

##### `reset_monitoring` <a name="reset_monitoring" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetMonitoring"></a>

```python
def reset_monitoring() -> None
```

##### `reset_network_interfaces` <a name="reset_network_interfaces" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetNetworkInterfaces"></a>

```python
def reset_network_interfaces() -> None
```

##### `reset_placement_group_name` <a name="reset_placement_group_name" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPlacementGroupName"></a>

```python
def reset_placement_group_name() -> None
```

##### `reset_private_dns_name_options` <a name="reset_private_dns_name_options" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPrivateDnsNameOptions"></a>

```python
def reset_private_dns_name_options() -> None
```

##### `reset_private_ip_address` <a name="reset_private_ip_address" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPrivateIpAddress"></a>

```python
def reset_private_ip_address() -> None
```

##### `reset_propagate_tags_to_volume_on_creation` <a name="reset_propagate_tags_to_volume_on_creation" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPropagateTagsToVolumeOnCreation"></a>

```python
def reset_propagate_tags_to_volume_on_creation() -> None
```

##### `reset_ramdisk_id` <a name="reset_ramdisk_id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetRamdiskId"></a>

```python
def reset_ramdisk_id() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```

##### `reset_source_dest_check` <a name="reset_source_dest_check" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSourceDestCheck"></a>

```python
def reset_source_dest_check() -> None
```

##### `reset_ssm_associations` <a name="reset_ssm_associations" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSsmAssociations"></a>

```python
def reset_ssm_associations() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tenancy` <a name="reset_tenancy" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetTenancy"></a>

```python
def reset_tenancy() -> None
```

##### `reset_user_data` <a name="reset_user_data" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetUserData"></a>

```python
def reset_user_data() -> None
```

##### `reset_volumes` <a name="reset_volumes" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetVolumes"></a>

```python
def reset_volumes() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2Instance resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2Instance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2Instance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2Instance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2Instance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2Instance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2Instance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2Instance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2Instance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.blockDeviceMappings">block_device_mappings</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList">Ec2InstanceBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.cpuOptions">cpu_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference">Ec2InstanceCpuOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.creditSpecification">credit_specification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference">Ec2InstanceCreditSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticGpuSpecifications">elastic_gpu_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList">Ec2InstanceElasticGpuSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticInferenceAccelerators">elastic_inference_accelerators</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList">Ec2InstanceElasticInferenceAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.enclaveOptions">enclave_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference">Ec2InstanceEnclaveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hibernationOptions">hibernation_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference">Ec2InstanceHibernationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6Addresses">ipv6_addresses</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList">Ec2InstanceIpv6AddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.launchTemplate">launch_template</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference">Ec2InstanceLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.licenseSpecifications">license_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList">Ec2InstanceLicenseSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.metadataOptions">metadata_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference">Ec2InstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.networkInterfaces">network_interfaces</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList">Ec2InstanceNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateDnsName">private_dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateDnsNameOptions">private_dns_name_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference">Ec2InstancePrivateDnsNameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.publicDnsName">public_dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.publicIp">public_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ssmAssociations">ssm_associations</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList">Ec2InstanceSsmAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.state">state</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference">Ec2InstanceStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList">Ec2InstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.volumes">volumes</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList">Ec2InstanceVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.additionalInfoInput">additional_info_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.affinityInput">affinity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.blockDeviceMappingsInput">block_device_mappings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.cpuOptionsInput">cpu_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.creditSpecificationInput">credit_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.disableApiTerminationInput">disable_api_termination_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ebsOptimizedInput">ebs_optimized_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticGpuSpecificationsInput">elastic_gpu_specifications_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticInferenceAcceleratorsInput">elastic_inference_accelerators_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.enclaveOptionsInput">enclave_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hibernationOptionsInput">hibernation_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostIdInput">host_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostResourceGroupArnInput">host_resource_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.iamInstanceProfileInput">iam_instance_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.imageIdInput">image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceInitiatedShutdownBehaviorInput">instance_initiated_shutdown_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6AddressCountInput">ipv6_address_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6AddressesInput">ipv6_addresses_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.kernelIdInput">kernel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.launchTemplateInput">launch_template_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.licenseSpecificationsInput">license_specifications_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.metadataOptionsInput">metadata_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.monitoringInput">monitoring_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.networkInterfacesInput">network_interfaces_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.placementGroupNameInput">placement_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateDnsNameOptionsInput">private_dns_name_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateIpAddressInput">private_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.propagateTagsToVolumeOnCreationInput">propagate_tags_to_volume_on_creation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ramdiskIdInput">ramdisk_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.sourceDestCheckInput">source_dest_check_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ssmAssociationsInput">ssm_associations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tenancyInput">tenancy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.userDataInput">user_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.volumesInput">volumes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.additionalInfo">additional_info</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.affinity">affinity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.disableApiTermination">disable_api_termination</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ebsOptimized">ebs_optimized</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostId">host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostResourceGroupArn">host_resource_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceInitiatedShutdownBehavior">instance_initiated_shutdown_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6AddressCount">ipv6_address_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.kernelId">kernel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.monitoring">monitoring</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.placementGroupName">placement_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.propagateTagsToVolumeOnCreation">propagate_tags_to_volume_on_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ramdiskId">ramdisk_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.sourceDestCheck">source_dest_check</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tenancy">tenancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.userData">user_data</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `block_device_mappings`<sup>Required</sup> <a name="block_device_mappings" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.blockDeviceMappings"></a>

```python
block_device_mappings: Ec2InstanceBlockDeviceMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList">Ec2InstanceBlockDeviceMappingsList</a>

---

##### `cpu_options`<sup>Required</sup> <a name="cpu_options" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.cpuOptions"></a>

```python
cpu_options: Ec2InstanceCpuOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference">Ec2InstanceCpuOptionsOutputReference</a>

---

##### `credit_specification`<sup>Required</sup> <a name="credit_specification" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.creditSpecification"></a>

```python
credit_specification: Ec2InstanceCreditSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference">Ec2InstanceCreditSpecificationOutputReference</a>

---

##### `elastic_gpu_specifications`<sup>Required</sup> <a name="elastic_gpu_specifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticGpuSpecifications"></a>

```python
elastic_gpu_specifications: Ec2InstanceElasticGpuSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList">Ec2InstanceElasticGpuSpecificationsList</a>

---

##### `elastic_inference_accelerators`<sup>Required</sup> <a name="elastic_inference_accelerators" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticInferenceAccelerators"></a>

```python
elastic_inference_accelerators: Ec2InstanceElasticInferenceAcceleratorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList">Ec2InstanceElasticInferenceAcceleratorsList</a>

---

##### `enclave_options`<sup>Required</sup> <a name="enclave_options" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.enclaveOptions"></a>

```python
enclave_options: Ec2InstanceEnclaveOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference">Ec2InstanceEnclaveOptionsOutputReference</a>

---

##### `hibernation_options`<sup>Required</sup> <a name="hibernation_options" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hibernationOptions"></a>

```python
hibernation_options: Ec2InstanceHibernationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference">Ec2InstanceHibernationOptionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `ipv6_addresses`<sup>Required</sup> <a name="ipv6_addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6Addresses"></a>

```python
ipv6_addresses: Ec2InstanceIpv6AddressesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList">Ec2InstanceIpv6AddressesList</a>

---

##### `launch_template`<sup>Required</sup> <a name="launch_template" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.launchTemplate"></a>

```python
launch_template: Ec2InstanceLaunchTemplateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference">Ec2InstanceLaunchTemplateOutputReference</a>

---

##### `license_specifications`<sup>Required</sup> <a name="license_specifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.licenseSpecifications"></a>

```python
license_specifications: Ec2InstanceLicenseSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList">Ec2InstanceLicenseSpecificationsList</a>

---

##### `metadata_options`<sup>Required</sup> <a name="metadata_options" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.metadataOptions"></a>

```python
metadata_options: Ec2InstanceMetadataOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference">Ec2InstanceMetadataOptionsOutputReference</a>

---

##### `network_interfaces`<sup>Required</sup> <a name="network_interfaces" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.networkInterfaces"></a>

```python
network_interfaces: Ec2InstanceNetworkInterfacesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList">Ec2InstanceNetworkInterfacesList</a>

---

##### `private_dns_name`<sup>Required</sup> <a name="private_dns_name" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateDnsName"></a>

```python
private_dns_name: str
```

- *Type:* str

---

##### `private_dns_name_options`<sup>Required</sup> <a name="private_dns_name_options" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateDnsNameOptions"></a>

```python
private_dns_name_options: Ec2InstancePrivateDnsNameOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference">Ec2InstancePrivateDnsNameOptionsOutputReference</a>

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `public_dns_name`<sup>Required</sup> <a name="public_dns_name" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.publicDnsName"></a>

```python
public_dns_name: str
```

- *Type:* str

---

##### `public_ip`<sup>Required</sup> <a name="public_ip" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.publicIp"></a>

```python
public_ip: str
```

- *Type:* str

---

##### `ssm_associations`<sup>Required</sup> <a name="ssm_associations" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ssmAssociations"></a>

```python
ssm_associations: Ec2InstanceSsmAssociationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList">Ec2InstanceSsmAssociationsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.state"></a>

```python
state: Ec2InstanceStateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference">Ec2InstanceStateOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tags"></a>

```python
tags: Ec2InstanceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList">Ec2InstanceTagsList</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.volumes"></a>

```python
volumes: Ec2InstanceVolumesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList">Ec2InstanceVolumesList</a>

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `additional_info_input`<sup>Optional</sup> <a name="additional_info_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.additionalInfoInput"></a>

```python
additional_info_input: str
```

- *Type:* str

---

##### `affinity_input`<sup>Optional</sup> <a name="affinity_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.affinityInput"></a>

```python
affinity_input: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `block_device_mappings_input`<sup>Optional</sup> <a name="block_device_mappings_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.blockDeviceMappingsInput"></a>

```python
block_device_mappings_input: IResolvable | typing.List[Ec2InstanceBlockDeviceMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>]

---

##### `cpu_options_input`<sup>Optional</sup> <a name="cpu_options_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.cpuOptionsInput"></a>

```python
cpu_options_input: IResolvable | Ec2InstanceCpuOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a>

---

##### `credit_specification_input`<sup>Optional</sup> <a name="credit_specification_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.creditSpecificationInput"></a>

```python
credit_specification_input: IResolvable | Ec2InstanceCreditSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a>

---

##### `disable_api_termination_input`<sup>Optional</sup> <a name="disable_api_termination_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.disableApiTerminationInput"></a>

```python
disable_api_termination_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ebs_optimized_input`<sup>Optional</sup> <a name="ebs_optimized_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ebsOptimizedInput"></a>

```python
ebs_optimized_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `elastic_gpu_specifications_input`<sup>Optional</sup> <a name="elastic_gpu_specifications_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticGpuSpecificationsInput"></a>

```python
elastic_gpu_specifications_input: IResolvable | typing.List[Ec2InstanceElasticGpuSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>]

---

##### `elastic_inference_accelerators_input`<sup>Optional</sup> <a name="elastic_inference_accelerators_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticInferenceAcceleratorsInput"></a>

```python
elastic_inference_accelerators_input: IResolvable | typing.List[Ec2InstanceElasticInferenceAccelerators]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>]

---

##### `enclave_options_input`<sup>Optional</sup> <a name="enclave_options_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.enclaveOptionsInput"></a>

```python
enclave_options_input: IResolvable | Ec2InstanceEnclaveOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a>

---

##### `hibernation_options_input`<sup>Optional</sup> <a name="hibernation_options_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hibernationOptionsInput"></a>

```python
hibernation_options_input: IResolvable | Ec2InstanceHibernationOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a>

---

##### `host_id_input`<sup>Optional</sup> <a name="host_id_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostIdInput"></a>

```python
host_id_input: str
```

- *Type:* str

---

##### `host_resource_group_arn_input`<sup>Optional</sup> <a name="host_resource_group_arn_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostResourceGroupArnInput"></a>

```python
host_resource_group_arn_input: str
```

- *Type:* str

---

##### `iam_instance_profile_input`<sup>Optional</sup> <a name="iam_instance_profile_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.iamInstanceProfileInput"></a>

```python
iam_instance_profile_input: str
```

- *Type:* str

---

##### `image_id_input`<sup>Optional</sup> <a name="image_id_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.imageIdInput"></a>

```python
image_id_input: str
```

- *Type:* str

---

##### `instance_initiated_shutdown_behavior_input`<sup>Optional</sup> <a name="instance_initiated_shutdown_behavior_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceInitiatedShutdownBehaviorInput"></a>

```python
instance_initiated_shutdown_behavior_input: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `ipv6_address_count_input`<sup>Optional</sup> <a name="ipv6_address_count_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6AddressCountInput"></a>

```python
ipv6_address_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_addresses_input`<sup>Optional</sup> <a name="ipv6_addresses_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6AddressesInput"></a>

```python
ipv6_addresses_input: IResolvable | typing.List[Ec2InstanceIpv6Addresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>]

---

##### `kernel_id_input`<sup>Optional</sup> <a name="kernel_id_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.kernelIdInput"></a>

```python
kernel_id_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `launch_template_input`<sup>Optional</sup> <a name="launch_template_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.launchTemplateInput"></a>

```python
launch_template_input: IResolvable | Ec2InstanceLaunchTemplate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a>

---

##### `license_specifications_input`<sup>Optional</sup> <a name="license_specifications_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.licenseSpecificationsInput"></a>

```python
license_specifications_input: IResolvable | typing.List[Ec2InstanceLicenseSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>]

---

##### `metadata_options_input`<sup>Optional</sup> <a name="metadata_options_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.metadataOptionsInput"></a>

```python
metadata_options_input: IResolvable | Ec2InstanceMetadataOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a>

---

##### `monitoring_input`<sup>Optional</sup> <a name="monitoring_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.monitoringInput"></a>

```python
monitoring_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `network_interfaces_input`<sup>Optional</sup> <a name="network_interfaces_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.networkInterfacesInput"></a>

```python
network_interfaces_input: IResolvable | typing.List[Ec2InstanceNetworkInterfaces]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>]

---

##### `placement_group_name_input`<sup>Optional</sup> <a name="placement_group_name_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.placementGroupNameInput"></a>

```python
placement_group_name_input: str
```

- *Type:* str

---

##### `private_dns_name_options_input`<sup>Optional</sup> <a name="private_dns_name_options_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateDnsNameOptionsInput"></a>

```python
private_dns_name_options_input: IResolvable | Ec2InstancePrivateDnsNameOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a>

---

##### `private_ip_address_input`<sup>Optional</sup> <a name="private_ip_address_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateIpAddressInput"></a>

```python
private_ip_address_input: str
```

- *Type:* str

---

##### `propagate_tags_to_volume_on_creation_input`<sup>Optional</sup> <a name="propagate_tags_to_volume_on_creation_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.propagateTagsToVolumeOnCreationInput"></a>

```python
propagate_tags_to_volume_on_creation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ramdisk_id_input`<sup>Optional</sup> <a name="ramdisk_id_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ramdiskIdInput"></a>

```python
ramdisk_id_input: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_dest_check_input`<sup>Optional</sup> <a name="source_dest_check_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.sourceDestCheckInput"></a>

```python
source_dest_check_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ssm_associations_input`<sup>Optional</sup> <a name="ssm_associations_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ssmAssociationsInput"></a>

```python
ssm_associations_input: IResolvable | typing.List[Ec2InstanceSsmAssociations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2InstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>]

---

##### `tenancy_input`<sup>Optional</sup> <a name="tenancy_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tenancyInput"></a>

```python
tenancy_input: str
```

- *Type:* str

---

##### `user_data_input`<sup>Optional</sup> <a name="user_data_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.userDataInput"></a>

```python
user_data_input: str
```

- *Type:* str

---

##### `volumes_input`<sup>Optional</sup> <a name="volumes_input" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.volumesInput"></a>

```python
volumes_input: IResolvable | typing.List[Ec2InstanceVolumes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>]

---

##### `additional_info`<sup>Required</sup> <a name="additional_info" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.additionalInfo"></a>

```python
additional_info: str
```

- *Type:* str

---

##### `affinity`<sup>Required</sup> <a name="affinity" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.affinity"></a>

```python
affinity: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `disable_api_termination`<sup>Required</sup> <a name="disable_api_termination" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.disableApiTermination"></a>

```python
disable_api_termination: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ebs_optimized`<sup>Required</sup> <a name="ebs_optimized" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ebsOptimized"></a>

```python
ebs_optimized: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `host_id`<sup>Required</sup> <a name="host_id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

---

##### `host_resource_group_arn`<sup>Required</sup> <a name="host_resource_group_arn" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostResourceGroupArn"></a>

```python
host_resource_group_arn: str
```

- *Type:* str

---

##### `iam_instance_profile`<sup>Required</sup> <a name="iam_instance_profile" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.iamInstanceProfile"></a>

```python
iam_instance_profile: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `instance_initiated_shutdown_behavior`<sup>Required</sup> <a name="instance_initiated_shutdown_behavior" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceInitiatedShutdownBehavior"></a>

```python
instance_initiated_shutdown_behavior: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `ipv6_address_count`<sup>Required</sup> <a name="ipv6_address_count" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6AddressCount"></a>

```python
ipv6_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kernel_id`<sup>Required</sup> <a name="kernel_id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.kernelId"></a>

```python
kernel_id: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.monitoring"></a>

```python
monitoring: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `placement_group_name`<sup>Required</sup> <a name="placement_group_name" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.placementGroupName"></a>

```python
placement_group_name: str
```

- *Type:* str

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `propagate_tags_to_volume_on_creation`<sup>Required</sup> <a name="propagate_tags_to_volume_on_creation" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.propagateTagsToVolumeOnCreation"></a>

```python
propagate_tags_to_volume_on_creation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ramdisk_id`<sup>Required</sup> <a name="ramdisk_id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ramdiskId"></a>

```python
ramdisk_id: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_dest_check`<sup>Required</sup> <a name="source_dest_check" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.sourceDestCheck"></a>

```python
source_dest_check: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

---

##### `user_data`<sup>Required</sup> <a name="user_data" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.userData"></a>

```python
user_data: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2InstanceBlockDeviceMappings <a name="Ec2InstanceBlockDeviceMappings" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceBlockDeviceMappings(
  device_name: str = None,
  ebs: Ec2InstanceBlockDeviceMappingsEbs = None,
  no_device: str = None,
  virtual_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.deviceName">device_name</a></code> | <code>str</code> | The device name (for example, /dev/sdh or xvdh). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs">Ec2InstanceBlockDeviceMappingsEbs</a></code> | Parameters used to automatically set up EBS volumes when the instance is launched. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.noDevice">no_device</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#no_device Ec2Instance#no_device}. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.virtualName">virtual_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#virtual_name Ec2Instance#virtual_name}. |

---

##### `device_name`<sup>Optional</sup> <a name="device_name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

The device name (for example, /dev/sdh or xvdh).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#device_name Ec2Instance#device_name}

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.ebs"></a>

```python
ebs: Ec2InstanceBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs">Ec2InstanceBlockDeviceMappingsEbs</a>

Parameters used to automatically set up EBS volumes when the instance is launched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#ebs Ec2Instance#ebs}

---

##### `no_device`<sup>Optional</sup> <a name="no_device" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.noDevice"></a>

```python
no_device: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#no_device Ec2Instance#no_device}.

---

##### `virtual_name`<sup>Optional</sup> <a name="virtual_name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#virtual_name Ec2Instance#virtual_name}.

---

### Ec2InstanceBlockDeviceMappingsEbs <a name="Ec2InstanceBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceBlockDeviceMappingsEbs(
  delete_on_termination: bool | IResolvable = None,
  encrypted: bool | IResolvable = None,
  iops: typing.Union[int, float] = None,
  kms_key_id: str = None,
  snapshot_id: str = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.deleteOnTermination">delete_on_termination</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the EBS volume is deleted on instance termination. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.encrypted">encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the volume should be encrypted. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | The number of I/O operations per second (IOPS). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The identifier of the AWS Key Management Service (AWS KMS) customer managed CMK to use for Amazon EBS encryption. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.snapshotId">snapshot_id</a></code> | <code>str</code> | The ID of the snapshot. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | The size of the volume, in GiBs. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.volumeType">volume_type</a></code> | <code>str</code> | The volume type. |

---

##### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```python
delete_on_termination: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the EBS volume is deleted on instance termination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#delete_on_termination Ec2Instance#delete_on_termination}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.encrypted"></a>

```python
encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the volume should be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#encrypted Ec2Instance#encrypted}

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of I/O operations per second (IOPS).

For gp3, io1, and io2 volumes, this represents the number of IOPS that are provisioned for the volume. For gp2 volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#iops Ec2Instance#iops}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The identifier of the AWS Key Management Service (AWS KMS) customer managed CMK to use for Amazon EBS encryption.

If KmsKeyId is specified, the encrypted state must be true. If the encrypted state is true but you do not specify KmsKeyId, your AWS managed CMK for EBS is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#kms_key_id Ec2Instance#kms_key_id}

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

The ID of the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#snapshot_id Ec2Instance#snapshot_id}

---

##### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of the volume, in GiBs.

You must specify either a snapshot ID or a volume size. If you specify a snapshot, the default is the snapshot size. You can specify a volume size that is equal to or larger than the snapshot size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#volume_size Ec2Instance#volume_size}

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

The volume type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#volume_type Ec2Instance#volume_type}

---

### Ec2InstanceConfig <a name="Ec2InstanceConfig" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  additional_info: str = None,
  affinity: str = None,
  availability_zone: str = None,
  block_device_mappings: IResolvable | typing.List[Ec2InstanceBlockDeviceMappings] = None,
  cpu_options: Ec2InstanceCpuOptions = None,
  credit_specification: Ec2InstanceCreditSpecification = None,
  disable_api_termination: bool | IResolvable = None,
  ebs_optimized: bool | IResolvable = None,
  elastic_gpu_specifications: IResolvable | typing.List[Ec2InstanceElasticGpuSpecifications] = None,
  elastic_inference_accelerators: IResolvable | typing.List[Ec2InstanceElasticInferenceAccelerators] = None,
  enclave_options: Ec2InstanceEnclaveOptions = None,
  hibernation_options: Ec2InstanceHibernationOptions = None,
  host_id: str = None,
  host_resource_group_arn: str = None,
  iam_instance_profile: str = None,
  image_id: str = None,
  instance_initiated_shutdown_behavior: str = None,
  instance_type: str = None,
  ipv6_address_count: typing.Union[int, float] = None,
  ipv6_addresses: IResolvable | typing.List[Ec2InstanceIpv6Addresses] = None,
  kernel_id: str = None,
  key_name: str = None,
  launch_template: Ec2InstanceLaunchTemplate = None,
  license_specifications: IResolvable | typing.List[Ec2InstanceLicenseSpecifications] = None,
  metadata_options: Ec2InstanceMetadataOptions = None,
  monitoring: bool | IResolvable = None,
  network_interfaces: IResolvable | typing.List[Ec2InstanceNetworkInterfaces] = None,
  placement_group_name: str = None,
  private_dns_name_options: Ec2InstancePrivateDnsNameOptions = None,
  private_ip_address: str = None,
  propagate_tags_to_volume_on_creation: bool | IResolvable = None,
  ramdisk_id: str = None,
  security_group_ids: typing.List[str] = None,
  security_groups: typing.List[str] = None,
  source_dest_check: bool | IResolvable = None,
  ssm_associations: IResolvable | typing.List[Ec2InstanceSsmAssociations] = None,
  subnet_id: str = None,
  tags: IResolvable | typing.List[Ec2InstanceTags] = None,
  tenancy: str = None,
  user_data: str = None,
  volumes: IResolvable | typing.List[Ec2InstanceVolumes] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.additionalInfo">additional_info</a></code> | <code>str</code> | This property is reserved for internal use. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.affinity">affinity</a></code> | <code>str</code> | Indicates whether the instance is associated with a dedicated host. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | The Availability Zone of the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.blockDeviceMappings">block_device_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>]</code> | The block device mapping entries that defines the block devices to attach to the instance at launch. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.cpuOptions">cpu_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a></code> | The CPU options for the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.creditSpecification">credit_specification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a></code> | The credit option for CPU usage of the burstable performance instance. Valid values are standard and unlimited. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.disableApiTermination">disable_api_termination</a></code> | <code>bool \| cdktn.IResolvable</code> | If you set this parameter to true, you can't terminate the instance using the Amazon EC2 console, CLI, or API; |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ebsOptimized">ebs_optimized</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the instance is optimized for Amazon EBS I/O. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.elasticGpuSpecifications">elastic_gpu_specifications</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>]</code> | An elastic GPU to associate with the instance. Amazon Elastic Graphics is no longer available. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.elasticInferenceAccelerators">elastic_inference_accelerators</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>]</code> | An elastic inference accelerator to associate with the instance. Amazon Elastic Inference is no longer available. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.enclaveOptions">enclave_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a></code> | Indicates whether the instance is enabled for AWS Nitro Enclaves. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.hibernationOptions">hibernation_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a></code> | Indicates whether an instance is enabled for hibernation. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.hostId">host_id</a></code> | <code>str</code> | If you specify host for the Affinity property, the ID of a dedicated host that the instance is associated with. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.hostResourceGroupArn">host_resource_group_arn</a></code> | <code>str</code> | The ARN of the host resource group in which to launch the instances. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | The IAM instance profile. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.imageId">image_id</a></code> | <code>str</code> | The ID of the AMI. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.instanceInitiatedShutdownBehavior">instance_initiated_shutdown_behavior</a></code> | <code>str</code> | Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.instanceType">instance_type</a></code> | <code>str</code> | The instance type. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ipv6AddressCount">ipv6_address_count</a></code> | <code>typing.Union[int, float]</code> | [EC2-VPC] The number of IPv6 addresses to associate with the primary network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ipv6Addresses">ipv6_addresses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>]</code> | [EC2-VPC] The IPv6 addresses from the range of the subnet to associate with the primary network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.kernelId">kernel_id</a></code> | <code>str</code> | The ID of the kernel. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.keyName">key_name</a></code> | <code>str</code> | The name of the key pair. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.launchTemplate">launch_template</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a></code> | The launch template to use to launch the instances. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.licenseSpecifications">license_specifications</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>]</code> | The license configurations. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.metadataOptions">metadata_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a></code> | The metadata options for the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.monitoring">monitoring</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether detailed monitoring is enabled for the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.networkInterfaces">network_interfaces</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>]</code> | The network interfaces to associate with the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.placementGroupName">placement_group_name</a></code> | <code>str</code> | The name of an existing placement group that you want to launch the instance into (cluster \| partition \| spread). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.privateDnsNameOptions">private_dns_name_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a></code> | The options for the instance hostname. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | [EC2-VPC] The primary IPv4 address. You must specify a value from the IPv4 address range of the subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.propagateTagsToVolumeOnCreation">propagate_tags_to_volume_on_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to assign the tags from the instance to all of the volumes attached to the instance at launch. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ramdiskId">ramdisk_id</a></code> | <code>str</code> | The ID of the RAM disk to select. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The IDs of the security groups. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | the names of the security groups. For a nondefault VPC, you must use security group IDs instead. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.sourceDestCheck">source_dest_check</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to enable an instance launched in a VPC to perform NAT. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ssmAssociations">ssm_associations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>]</code> | The SSM document and parameter values in AWS Systems Manager to associate with this instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | [EC2-VPC] The ID of the subnet to launch the instance into. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>]</code> | The tags to add to the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.tenancy">tenancy</a></code> | <code>str</code> | The tenancy of the instance (if the instance is running in a VPC). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.userData">user_data</a></code> | <code>str</code> | The user data to make available to the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.volumes">volumes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>]</code> | The volumes to attach to the instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `additional_info`<sup>Optional</sup> <a name="additional_info" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.additionalInfo"></a>

```python
additional_info: str
```

- *Type:* str

This property is reserved for internal use.

If you use it, the stack fails with this error: Bad property set: [Testing this property] (Service: AmazonEC2; Status Code: 400; Error Code: InvalidParameterCombination; Request ID: 0XXXXXX-49c7-4b40-8bcc-76885dcXXXXX).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#additional_info Ec2Instance#additional_info}

---

##### `affinity`<sup>Optional</sup> <a name="affinity" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.affinity"></a>

```python
affinity: str
```

- *Type:* str

Indicates whether the instance is associated with a dedicated host.

If you want the instance to always restart on the same host on which it was launched, specify host. If you want the instance to restart on any available host, but try to launch onto the last host it ran on (on a best-effort basis), specify default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#affinity Ec2Instance#affinity}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

The Availability Zone of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#availability_zone Ec2Instance#availability_zone}

---

##### `block_device_mappings`<sup>Optional</sup> <a name="block_device_mappings" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.blockDeviceMappings"></a>

```python
block_device_mappings: IResolvable | typing.List[Ec2InstanceBlockDeviceMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>]

The block device mapping entries that defines the block devices to attach to the instance at launch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#block_device_mappings Ec2Instance#block_device_mappings}

---

##### `cpu_options`<sup>Optional</sup> <a name="cpu_options" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.cpuOptions"></a>

```python
cpu_options: Ec2InstanceCpuOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a>

The CPU options for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#cpu_options Ec2Instance#cpu_options}

---

##### `credit_specification`<sup>Optional</sup> <a name="credit_specification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.creditSpecification"></a>

```python
credit_specification: Ec2InstanceCreditSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a>

The credit option for CPU usage of the burstable performance instance. Valid values are standard and unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#credit_specification Ec2Instance#credit_specification}

---

##### `disable_api_termination`<sup>Optional</sup> <a name="disable_api_termination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.disableApiTermination"></a>

```python
disable_api_termination: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If you set this parameter to true, you can't terminate the instance using the Amazon EC2 console, CLI, or API;

otherwise, you can.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#disable_api_termination Ec2Instance#disable_api_termination}

---

##### `ebs_optimized`<sup>Optional</sup> <a name="ebs_optimized" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ebsOptimized"></a>

```python
ebs_optimized: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the instance is optimized for Amazon EBS I/O.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#ebs_optimized Ec2Instance#ebs_optimized}

---

##### `elastic_gpu_specifications`<sup>Optional</sup> <a name="elastic_gpu_specifications" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.elasticGpuSpecifications"></a>

```python
elastic_gpu_specifications: IResolvable | typing.List[Ec2InstanceElasticGpuSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>]

An elastic GPU to associate with the instance. Amazon Elastic Graphics is no longer available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#elastic_gpu_specifications Ec2Instance#elastic_gpu_specifications}

---

##### `elastic_inference_accelerators`<sup>Optional</sup> <a name="elastic_inference_accelerators" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.elasticInferenceAccelerators"></a>

```python
elastic_inference_accelerators: IResolvable | typing.List[Ec2InstanceElasticInferenceAccelerators]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>]

An elastic inference accelerator to associate with the instance. Amazon Elastic Inference is no longer available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#elastic_inference_accelerators Ec2Instance#elastic_inference_accelerators}

---

##### `enclave_options`<sup>Optional</sup> <a name="enclave_options" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.enclaveOptions"></a>

```python
enclave_options: Ec2InstanceEnclaveOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a>

Indicates whether the instance is enabled for AWS Nitro Enclaves.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#enclave_options Ec2Instance#enclave_options}

---

##### `hibernation_options`<sup>Optional</sup> <a name="hibernation_options" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.hibernationOptions"></a>

```python
hibernation_options: Ec2InstanceHibernationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a>

Indicates whether an instance is enabled for hibernation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#hibernation_options Ec2Instance#hibernation_options}

---

##### `host_id`<sup>Optional</sup> <a name="host_id" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

If you specify host for the Affinity property, the ID of a dedicated host that the instance is associated with.

If you don't specify an ID, Amazon EC2 launches the instance onto any available, compatible dedicated host in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#host_id Ec2Instance#host_id}

---

##### `host_resource_group_arn`<sup>Optional</sup> <a name="host_resource_group_arn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.hostResourceGroupArn"></a>

```python
host_resource_group_arn: str
```

- *Type:* str

The ARN of the host resource group in which to launch the instances.

If you specify a host resource group ARN, omit the Tenancy parameter or set it to host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#host_resource_group_arn Ec2Instance#host_resource_group_arn}

---

##### `iam_instance_profile`<sup>Optional</sup> <a name="iam_instance_profile" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.iamInstanceProfile"></a>

```python
iam_instance_profile: str
```

- *Type:* str

The IAM instance profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#iam_instance_profile Ec2Instance#iam_instance_profile}

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

The ID of the AMI.

An AMI ID is required to launch an instance and must be specified here or in a launch template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#image_id Ec2Instance#image_id}

---

##### `instance_initiated_shutdown_behavior`<sup>Optional</sup> <a name="instance_initiated_shutdown_behavior" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.instanceInitiatedShutdownBehavior"></a>

```python
instance_initiated_shutdown_behavior: str
```

- *Type:* str

Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#instance_initiated_shutdown_behavior Ec2Instance#instance_initiated_shutdown_behavior}

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

The instance type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#instance_type Ec2Instance#instance_type}

---

##### `ipv6_address_count`<sup>Optional</sup> <a name="ipv6_address_count" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ipv6AddressCount"></a>

```python
ipv6_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

[EC2-VPC] The number of IPv6 addresses to associate with the primary network interface.

Amazon EC2 chooses the IPv6 addresses from the range of your subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#ipv_6_address_count Ec2Instance#ipv_6_address_count}

---

##### `ipv6_addresses`<sup>Optional</sup> <a name="ipv6_addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ipv6Addresses"></a>

```python
ipv6_addresses: IResolvable | typing.List[Ec2InstanceIpv6Addresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>]

[EC2-VPC] The IPv6 addresses from the range of the subnet to associate with the primary network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#ipv_6_addresses Ec2Instance#ipv_6_addresses}

---

##### `kernel_id`<sup>Optional</sup> <a name="kernel_id" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.kernelId"></a>

```python
kernel_id: str
```

- *Type:* str

The ID of the kernel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#kernel_id Ec2Instance#kernel_id}

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

The name of the key pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#key_name Ec2Instance#key_name}

---

##### `launch_template`<sup>Optional</sup> <a name="launch_template" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.launchTemplate"></a>

```python
launch_template: Ec2InstanceLaunchTemplate
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a>

The launch template to use to launch the instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#launch_template Ec2Instance#launch_template}

---

##### `license_specifications`<sup>Optional</sup> <a name="license_specifications" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.licenseSpecifications"></a>

```python
license_specifications: IResolvable | typing.List[Ec2InstanceLicenseSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>]

The license configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#license_specifications Ec2Instance#license_specifications}

---

##### `metadata_options`<sup>Optional</sup> <a name="metadata_options" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.metadataOptions"></a>

```python
metadata_options: Ec2InstanceMetadataOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a>

The metadata options for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#metadata_options Ec2Instance#metadata_options}

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.monitoring"></a>

```python
monitoring: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether detailed monitoring is enabled for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#monitoring Ec2Instance#monitoring}

---

##### `network_interfaces`<sup>Optional</sup> <a name="network_interfaces" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.networkInterfaces"></a>

```python
network_interfaces: IResolvable | typing.List[Ec2InstanceNetworkInterfaces]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>]

The network interfaces to associate with the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#network_interfaces Ec2Instance#network_interfaces}

---

##### `placement_group_name`<sup>Optional</sup> <a name="placement_group_name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.placementGroupName"></a>

```python
placement_group_name: str
```

- *Type:* str

The name of an existing placement group that you want to launch the instance into (cluster | partition | spread).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#placement_group_name Ec2Instance#placement_group_name}

---

##### `private_dns_name_options`<sup>Optional</sup> <a name="private_dns_name_options" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.privateDnsNameOptions"></a>

```python
private_dns_name_options: Ec2InstancePrivateDnsNameOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a>

The options for the instance hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#private_dns_name_options Ec2Instance#private_dns_name_options}

---

##### `private_ip_address`<sup>Optional</sup> <a name="private_ip_address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

[EC2-VPC] The primary IPv4 address. You must specify a value from the IPv4 address range of the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#private_ip_address Ec2Instance#private_ip_address}

---

##### `propagate_tags_to_volume_on_creation`<sup>Optional</sup> <a name="propagate_tags_to_volume_on_creation" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.propagateTagsToVolumeOnCreation"></a>

```python
propagate_tags_to_volume_on_creation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to assign the tags from the instance to all of the volumes attached to the instance at launch.

If you specify true and you assign tags to the instance, those tags are automatically assigned to all of the volumes that you attach to the instance at launch. If you specify false, those tags are not assigned to the attached volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#propagate_tags_to_volume_on_creation Ec2Instance#propagate_tags_to_volume_on_creation}

---

##### `ramdisk_id`<sup>Optional</sup> <a name="ramdisk_id" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ramdiskId"></a>

```python
ramdisk_id: str
```

- *Type:* str

The ID of the RAM disk to select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#ramdisk_id Ec2Instance#ramdisk_id}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

The IDs of the security groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#security_group_ids Ec2Instance#security_group_ids}

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

the names of the security groups. For a nondefault VPC, you must use security group IDs instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#security_groups Ec2Instance#security_groups}

---

##### `source_dest_check`<sup>Optional</sup> <a name="source_dest_check" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.sourceDestCheck"></a>

```python
source_dest_check: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to enable an instance launched in a VPC to perform NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#source_dest_check Ec2Instance#source_dest_check}

---

##### `ssm_associations`<sup>Optional</sup> <a name="ssm_associations" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ssmAssociations"></a>

```python
ssm_associations: IResolvable | typing.List[Ec2InstanceSsmAssociations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>]

The SSM document and parameter values in AWS Systems Manager to associate with this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#ssm_associations Ec2Instance#ssm_associations}

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

[EC2-VPC] The ID of the subnet to launch the instance into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#subnet_id Ec2Instance#subnet_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2InstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>]

The tags to add to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#tags Ec2Instance#tags}

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

The tenancy of the instance (if the instance is running in a VPC).

An instance with a tenancy of dedicated runs on single-tenant hardware.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#tenancy Ec2Instance#tenancy}

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.userData"></a>

```python
user_data: str
```

- *Type:* str

The user data to make available to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#user_data Ec2Instance#user_data}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.volumes"></a>

```python
volumes: IResolvable | typing.List[Ec2InstanceVolumes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>]

The volumes to attach to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#volumes Ec2Instance#volumes}

---

### Ec2InstanceCpuOptions <a name="Ec2InstanceCpuOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceCpuOptions(
  core_count: typing.Union[int, float] = None,
  threads_per_core: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions.property.coreCount">core_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#core_count Ec2Instance#core_count}. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions.property.threadsPerCore">threads_per_core</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#threads_per_core Ec2Instance#threads_per_core}. |

---

##### `core_count`<sup>Optional</sup> <a name="core_count" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions.property.coreCount"></a>

```python
core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#core_count Ec2Instance#core_count}.

---

##### `threads_per_core`<sup>Optional</sup> <a name="threads_per_core" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions.property.threadsPerCore"></a>

```python
threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#threads_per_core Ec2Instance#threads_per_core}.

---

### Ec2InstanceCreditSpecification <a name="Ec2InstanceCreditSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceCreditSpecification(
  cpu_credits: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification.property.cpuCredits">cpu_credits</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#cpu_credits Ec2Instance#cpu_credits}. |

---

##### `cpu_credits`<sup>Optional</sup> <a name="cpu_credits" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification.property.cpuCredits"></a>

```python
cpu_credits: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#cpu_credits Ec2Instance#cpu_credits}.

---

### Ec2InstanceElasticGpuSpecifications <a name="Ec2InstanceElasticGpuSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceElasticGpuSpecifications(
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications.property.type">type</a></code> | <code>str</code> | The type of Elastic Graphics accelerator. Amazon Elastic Graphics is no longer available. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications.property.type"></a>

```python
type: str
```

- *Type:* str

The type of Elastic Graphics accelerator. Amazon Elastic Graphics is no longer available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#type Ec2Instance#type}

---

### Ec2InstanceElasticInferenceAccelerators <a name="Ec2InstanceElasticInferenceAccelerators" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceElasticInferenceAccelerators(
  count: typing.Union[int, float] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators.property.count">count</a></code> | <code>typing.Union[int, float]</code> | The number of elastic inference accelerators to attach to the instance. Amazon Elastic Inference is no longer available. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators.property.type">type</a></code> | <code>str</code> | The type of elastic inference accelerator. Amazon Elastic Inference is no longer available. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of elastic inference accelerators to attach to the instance. Amazon Elastic Inference is no longer available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#count Ec2Instance#count}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators.property.type"></a>

```python
type: str
```

- *Type:* str

The type of elastic inference accelerator. Amazon Elastic Inference is no longer available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#type Ec2Instance#type}

---

### Ec2InstanceEnclaveOptions <a name="Ec2InstanceEnclaveOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceEnclaveOptions(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | If this parameter is set to true, the instance is enabled for AWS Nitro Enclaves; |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If this parameter is set to true, the instance is enabled for AWS Nitro Enclaves;

otherwise, it is not enabled for AWS Nitro Enclaves.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#enabled Ec2Instance#enabled}

---

### Ec2InstanceHibernationOptions <a name="Ec2InstanceHibernationOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceHibernationOptions(
  configured: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions.property.configured">configured</a></code> | <code>bool \| cdktn.IResolvable</code> | If you set this parameter to true, your instance is enabled for hibernation. |

---

##### `configured`<sup>Optional</sup> <a name="configured" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions.property.configured"></a>

```python
configured: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If you set this parameter to true, your instance is enabled for hibernation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#configured Ec2Instance#configured}

---

### Ec2InstanceIpv6Addresses <a name="Ec2InstanceIpv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceIpv6Addresses(
  ipv6_address: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | The IPv6 address. |

---

##### `ipv6_address`<sup>Optional</sup> <a name="ipv6_address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

The IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#ipv_6_address Ec2Instance#ipv_6_address}

---

### Ec2InstanceLaunchTemplate <a name="Ec2InstanceLaunchTemplate" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceLaunchTemplate(
  launch_template_id: str = None,
  launch_template_name: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.property.launchTemplateId">launch_template_id</a></code> | <code>str</code> | The ID of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.property.launchTemplateName">launch_template_name</a></code> | <code>str</code> | The name of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.property.version">version</a></code> | <code>str</code> | The version number of the launch template. |

---

##### `launch_template_id`<sup>Optional</sup> <a name="launch_template_id" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.property.launchTemplateId"></a>

```python
launch_template_id: str
```

- *Type:* str

The ID of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#launch_template_id Ec2Instance#launch_template_id}

---

##### `launch_template_name`<sup>Optional</sup> <a name="launch_template_name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.property.launchTemplateName"></a>

```python
launch_template_name: str
```

- *Type:* str

The name of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#launch_template_name Ec2Instance#launch_template_name}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.property.version"></a>

```python
version: str
```

- *Type:* str

The version number of the launch template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#version Ec2Instance#version}

---

### Ec2InstanceLicenseSpecifications <a name="Ec2InstanceLicenseSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceLicenseSpecifications(
  license_configuration_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications.property.licenseConfigurationArn">license_configuration_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the license configuration. |

---

##### `license_configuration_arn`<sup>Optional</sup> <a name="license_configuration_arn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications.property.licenseConfigurationArn"></a>

```python
license_configuration_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the license configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#license_configuration_arn Ec2Instance#license_configuration_arn}

---

### Ec2InstanceMetadataOptions <a name="Ec2InstanceMetadataOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceMetadataOptions(
  http_endpoint: str = None,
  http_protocol_ipv6: str = None,
  http_put_response_hop_limit: typing.Union[int, float] = None,
  http_tokens: str = None,
  instance_metadata_tags: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpEndpoint">http_endpoint</a></code> | <code>str</code> | Enables or disables the HTTP metadata endpoint on your instances. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpProtocolIpv6">http_protocol_ipv6</a></code> | <code>str</code> | Enables or disables the IPv6 endpoint for the instance metadata service. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpPutResponseHopLimit">http_put_response_hop_limit</a></code> | <code>typing.Union[int, float]</code> | The number of network hops that the metadata token can travel. Maximum is 64. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpTokens">http_tokens</a></code> | <code>str</code> | Indicates whether IMDSv2 is required. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.instanceMetadataTags">instance_metadata_tags</a></code> | <code>str</code> | Indicates whether tags from the instance are propagated to the EBS volumes. |

---

##### `http_endpoint`<sup>Optional</sup> <a name="http_endpoint" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpEndpoint"></a>

```python
http_endpoint: str
```

- *Type:* str

Enables or disables the HTTP metadata endpoint on your instances.

If you specify a value of disabled, you cannot access your instance metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#http_endpoint Ec2Instance#http_endpoint}

---

##### `http_protocol_ipv6`<sup>Optional</sup> <a name="http_protocol_ipv6" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpProtocolIpv6"></a>

```python
http_protocol_ipv6: str
```

- *Type:* str

Enables or disables the IPv6 endpoint for the instance metadata service.

To use this option, the instance must be a Nitro-based instance launched in a subnet that supports IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#http_protocol_ipv_6 Ec2Instance#http_protocol_ipv_6}

---

##### `http_put_response_hop_limit`<sup>Optional</sup> <a name="http_put_response_hop_limit" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

```python
http_put_response_hop_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of network hops that the metadata token can travel. Maximum is 64.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#http_put_response_hop_limit Ec2Instance#http_put_response_hop_limit}

---

##### `http_tokens`<sup>Optional</sup> <a name="http_tokens" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpTokens"></a>

```python
http_tokens: str
```

- *Type:* str

Indicates whether IMDSv2 is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#http_tokens Ec2Instance#http_tokens}

---

##### `instance_metadata_tags`<sup>Optional</sup> <a name="instance_metadata_tags" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.instanceMetadataTags"></a>

```python
instance_metadata_tags: str
```

- *Type:* str

Indicates whether tags from the instance are propagated to the EBS volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#instance_metadata_tags Ec2Instance#instance_metadata_tags}

---

### Ec2InstanceNetworkInterfaces <a name="Ec2InstanceNetworkInterfaces" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceNetworkInterfaces(
  associate_carrier_ip_address: bool | IResolvable = None,
  associate_public_ip_address: bool | IResolvable = None,
  delete_on_termination: bool | IResolvable = None,
  description: str = None,
  device_index: str = None,
  ena_srd_specification: Ec2InstanceNetworkInterfacesEnaSrdSpecification = None,
  group_set: typing.List[str] = None,
  ipv6_address_count: typing.Union[int, float] = None,
  ipv6_addresses: IResolvable | typing.List[Ec2InstanceNetworkInterfacesIpv6Addresses] = None,
  network_interface_id: str = None,
  private_ip_address: str = None,
  private_ip_addresses: IResolvable | typing.List[Ec2InstanceNetworkInterfacesPrivateIpAddresses] = None,
  secondary_private_ip_address_count: typing.Union[int, float] = None,
  subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.associateCarrierIpAddress">associate_carrier_ip_address</a></code> | <code>bool \| cdktn.IResolvable</code> | Not currently supported by AWS CloudFormation. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to assign a public IPv4 address to an instance you launch in a VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.deleteOnTermination">delete_on_termination</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to true, the interface is deleted when the instance is terminated. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.description">description</a></code> | <code>str</code> | The description of the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.deviceIndex">device_index</a></code> | <code>str</code> | The position of the network interface in the attachment order. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.enaSrdSpecification">ena_srd_specification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecification</a></code> | Specifies the ENA Express settings for the network interface that's attached to the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.groupSet">group_set</a></code> | <code>typing.List[str]</code> | The IDs of the security groups for the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.ipv6AddressCount">ipv6_address_count</a></code> | <code>typing.Union[int, float]</code> | A number of IPv6 addresses to assign to the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.ipv6Addresses">ipv6_addresses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>]</code> | The IPv6 addresses associated with the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | The ID of the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | The private IPv4 address of the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.privateIpAddresses">private_ip_addresses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>]</code> | One or more private IPv4 addresses to assign to the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.secondaryPrivateIpAddressCount">secondary_private_ip_address_count</a></code> | <code>typing.Union[int, float]</code> | The number of secondary private IPv4 addresses. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.subnetId">subnet_id</a></code> | <code>str</code> | The ID of the subnet. |

---

##### `associate_carrier_ip_address`<sup>Optional</sup> <a name="associate_carrier_ip_address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.associateCarrierIpAddress"></a>

```python
associate_carrier_ip_address: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Not currently supported by AWS CloudFormation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#associate_carrier_ip_address Ec2Instance#associate_carrier_ip_address}

---

##### `associate_public_ip_address`<sup>Optional</sup> <a name="associate_public_ip_address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.associatePublicIpAddress"></a>

```python
associate_public_ip_address: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to assign a public IPv4 address to an instance you launch in a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#associate_public_ip_address Ec2Instance#associate_public_ip_address}

---

##### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.deleteOnTermination"></a>

```python
delete_on_termination: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set to true, the interface is deleted when the instance is terminated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#delete_on_termination Ec2Instance#delete_on_termination}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#description Ec2Instance#description}

---

##### `device_index`<sup>Optional</sup> <a name="device_index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.deviceIndex"></a>

```python
device_index: str
```

- *Type:* str

The position of the network interface in the attachment order.

A primary network interface has a device index of 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#device_index Ec2Instance#device_index}

---

##### `ena_srd_specification`<sup>Optional</sup> <a name="ena_srd_specification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.enaSrdSpecification"></a>

```python
ena_srd_specification: Ec2InstanceNetworkInterfacesEnaSrdSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecification</a>

Specifies the ENA Express settings for the network interface that's attached to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#ena_srd_specification Ec2Instance#ena_srd_specification}

---

##### `group_set`<sup>Optional</sup> <a name="group_set" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.groupSet"></a>

```python
group_set: typing.List[str]
```

- *Type:* typing.List[str]

The IDs of the security groups for the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#group_set Ec2Instance#group_set}

---

##### `ipv6_address_count`<sup>Optional</sup> <a name="ipv6_address_count" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.ipv6AddressCount"></a>

```python
ipv6_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A number of IPv6 addresses to assign to the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#ipv_6_address_count Ec2Instance#ipv_6_address_count}

---

##### `ipv6_addresses`<sup>Optional</sup> <a name="ipv6_addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.ipv6Addresses"></a>

```python
ipv6_addresses: IResolvable | typing.List[Ec2InstanceNetworkInterfacesIpv6Addresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>]

The IPv6 addresses associated with the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#ipv_6_addresses Ec2Instance#ipv_6_addresses}

---

##### `network_interface_id`<sup>Optional</sup> <a name="network_interface_id" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

The ID of the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#network_interface_id Ec2Instance#network_interface_id}

---

##### `private_ip_address`<sup>Optional</sup> <a name="private_ip_address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

The private IPv4 address of the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#private_ip_address Ec2Instance#private_ip_address}

---

##### `private_ip_addresses`<sup>Optional</sup> <a name="private_ip_addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.privateIpAddresses"></a>

```python
private_ip_addresses: IResolvable | typing.List[Ec2InstanceNetworkInterfacesPrivateIpAddresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>]

One or more private IPv4 addresses to assign to the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#private_ip_addresses Ec2Instance#private_ip_addresses}

---

##### `secondary_private_ip_address_count`<sup>Optional</sup> <a name="secondary_private_ip_address_count" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.secondaryPrivateIpAddressCount"></a>

```python
secondary_private_ip_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of secondary private IPv4 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#secondary_private_ip_address_count Ec2Instance#secondary_private_ip_address_count}

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

The ID of the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#subnet_id Ec2Instance#subnet_id}

---

### Ec2InstanceNetworkInterfacesEnaSrdSpecification <a name="Ec2InstanceNetworkInterfacesEnaSrdSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification(
  ena_srd_enabled: bool | IResolvable = None,
  ena_srd_udp_specification: Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification.property.enaSrdEnabled">ena_srd_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether ENA Express is enabled for the network interface when you launch an instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification.property.enaSrdUdpSpecification">ena_srd_udp_specification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | Contains ENA Express settings for UDP network traffic for the network interface that's attached to the instance. |

---

##### `ena_srd_enabled`<sup>Optional</sup> <a name="ena_srd_enabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification.property.enaSrdEnabled"></a>

```python
ena_srd_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether ENA Express is enabled for the network interface when you launch an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#ena_srd_enabled Ec2Instance#ena_srd_enabled}

---

##### `ena_srd_udp_specification`<sup>Optional</sup> <a name="ena_srd_udp_specification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification.property.enaSrdUdpSpecification"></a>

```python
ena_srd_udp_specification: Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a>

Contains ENA Express settings for UDP network traffic for the network interface that's attached to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#ena_srd_udp_specification Ec2Instance#ena_srd_udp_specification}

---

### Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification <a name="Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification(
  ena_srd_udp_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification.property.enaSrdUdpEnabled">ena_srd_udp_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether UDP traffic uses ENA Express for your instance. |

---

##### `ena_srd_udp_enabled`<sup>Optional</sup> <a name="ena_srd_udp_enabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification.property.enaSrdUdpEnabled"></a>

```python
ena_srd_udp_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether UDP traffic uses ENA Express for your instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#ena_srd_udp_enabled Ec2Instance#ena_srd_udp_enabled}

---

### Ec2InstanceNetworkInterfacesIpv6Addresses <a name="Ec2InstanceNetworkInterfacesIpv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses(
  ipv6_address: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | The IPv6 address. |

---

##### `ipv6_address`<sup>Optional</sup> <a name="ipv6_address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

The IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#ipv_6_address Ec2Instance#ipv_6_address}

---

### Ec2InstanceNetworkInterfacesPrivateIpAddresses <a name="Ec2InstanceNetworkInterfacesPrivateIpAddresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses(
  primary: bool | IResolvable = None,
  private_ip_address: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses.property.primary">primary</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the private IPv4 address is the primary private IPv4 address. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | The private IPv4 addresses. |

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses.property.primary"></a>

```python
primary: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the private IPv4 address is the primary private IPv4 address.

Only one IPv4 address can be designated as primary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#primary Ec2Instance#primary}

---

##### `private_ip_address`<sup>Optional</sup> <a name="private_ip_address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

The private IPv4 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#private_ip_address Ec2Instance#private_ip_address}

---

### Ec2InstancePrivateDnsNameOptions <a name="Ec2InstancePrivateDnsNameOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstancePrivateDnsNameOptions(
  enable_resource_name_dns_aaaa_record: bool | IResolvable = None,
  enable_resource_name_dns_a_record: bool | IResolvable = None,
  hostname_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord">enable_resource_name_dns_aaaa_record</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.property.enableResourceNameDnsARecord">enable_resource_name_dns_a_record</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to respond to DNS queries for instance hostnames with DNS A records. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.property.hostnameType">hostname_type</a></code> | <code>str</code> | The type of hostnames to assign to instances in the subnet at launch. |

---

##### `enable_resource_name_dns_aaaa_record`<sup>Optional</sup> <a name="enable_resource_name_dns_aaaa_record" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord"></a>

```python
enable_resource_name_dns_aaaa_record: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.

For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#enable_resource_name_dns_aaaa_record Ec2Instance#enable_resource_name_dns_aaaa_record}

---

##### `enable_resource_name_dns_a_record`<sup>Optional</sup> <a name="enable_resource_name_dns_a_record" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.property.enableResourceNameDnsARecord"></a>

```python
enable_resource_name_dns_a_record: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to respond to DNS queries for instance hostnames with DNS A records.

For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#enable_resource_name_dns_a_record Ec2Instance#enable_resource_name_dns_a_record}

---

##### `hostname_type`<sup>Optional</sup> <a name="hostname_type" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.property.hostnameType"></a>

```python
hostname_type: str
```

- *Type:* str

The type of hostnames to assign to instances in the subnet at launch.

For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#hostname_type Ec2Instance#hostname_type}

---

### Ec2InstanceSsmAssociations <a name="Ec2InstanceSsmAssociations" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceSsmAssociations(
  association_parameters: IResolvable | typing.List[Ec2InstanceSsmAssociationsAssociationParameters] = None,
  document_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations.property.associationParameters">association_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>]</code> | The input parameter values to use with the associated SSM document. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations.property.documentName">document_name</a></code> | <code>str</code> | The name of an SSM document to associate with the instance. |

---

##### `association_parameters`<sup>Optional</sup> <a name="association_parameters" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations.property.associationParameters"></a>

```python
association_parameters: IResolvable | typing.List[Ec2InstanceSsmAssociationsAssociationParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>]

The input parameter values to use with the associated SSM document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#association_parameters Ec2Instance#association_parameters}

---

##### `document_name`<sup>Optional</sup> <a name="document_name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations.property.documentName"></a>

```python
document_name: str
```

- *Type:* str

The name of an SSM document to associate with the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#document_name Ec2Instance#document_name}

---

### Ec2InstanceSsmAssociationsAssociationParameters <a name="Ec2InstanceSsmAssociationsAssociationParameters" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters(
  key: str = None,
  value: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters.property.key">key</a></code> | <code>str</code> | The name of an input parameter that is in the associated SSM document. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters.property.value">value</a></code> | <code>typing.List[str]</code> | The value of an input parameter. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters.property.key"></a>

```python
key: str
```

- *Type:* str

The name of an input parameter that is in the associated SSM document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#key Ec2Instance#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters.property.value"></a>

```python
value: typing.List[str]
```

- *Type:* typing.List[str]

The value of an input parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#value Ec2Instance#value}

---

### Ec2InstanceState <a name="Ec2InstanceState" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceState.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceState()
```


### Ec2InstanceTags <a name="Ec2InstanceTags" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#key Ec2Instance#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#value Ec2Instance#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#key Ec2Instance#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#value Ec2Instance#value}.

---

### Ec2InstanceVolumes <a name="Ec2InstanceVolumes" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceVolumes(
  device: str = None,
  volume_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes.property.device">device</a></code> | <code>str</code> | The device name (for example, /dev/sdh or xvdh). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes.property.volumeId">volume_id</a></code> | <code>str</code> | The ID of the EBS volume. The volume and instance must be within the same Availability Zone. |

---

##### `device`<sup>Optional</sup> <a name="device" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes.property.device"></a>

```python
device: str
```

- *Type:* str

The device name (for example, /dev/sdh or xvdh).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#device Ec2Instance#device}

---

##### `volume_id`<sup>Optional</sup> <a name="volume_id" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

The ID of the EBS volume. The volume and instance must be within the same Availability Zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#volume_id Ec2Instance#volume_id}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2InstanceBlockDeviceMappingsEbsOutputReference <a name="Ec2InstanceBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">reset_delete_on_termination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetSnapshotId">reset_snapshot_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetVolumeSize">reset_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_on_termination` <a name="reset_delete_on_termination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```python
def reset_delete_on_termination() -> None
```

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_snapshot_id` <a name="reset_snapshot_id" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```python
def reset_snapshot_id() -> None
```

##### `reset_volume_size` <a name="reset_volume_size" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```python
def reset_volume_size() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">delete_on_termination_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.encryptedInput">encrypted_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs">Ec2InstanceBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_on_termination_input`<sup>Optional</sup> <a name="delete_on_termination_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```python
delete_on_termination_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```python
encrypted_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `volume_size_input`<sup>Optional</sup> <a name="volume_size_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```python
volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```python
encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2InstanceBlockDeviceMappingsEbs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs">Ec2InstanceBlockDeviceMappingsEbs</a>

---


### Ec2InstanceBlockDeviceMappingsList <a name="Ec2InstanceBlockDeviceMappingsList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceBlockDeviceMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2InstanceBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2InstanceBlockDeviceMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>]

---


### Ec2InstanceBlockDeviceMappingsOutputReference <a name="Ec2InstanceBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.putEbs">put_ebs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetDeviceName">reset_device_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetEbs">reset_ebs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetNoDevice">reset_no_device</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetVirtualName">reset_virtual_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ebs` <a name="put_ebs" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.putEbs"></a>

```python
def put_ebs(
  delete_on_termination: bool | IResolvable = None,
  encrypted: bool | IResolvable = None,
  iops: typing.Union[int, float] = None,
  kms_key_id: str = None,
  snapshot_id: str = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
) -> None
```

###### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.putEbs.parameter.deleteOnTermination"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the EBS volume is deleted on instance termination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#delete_on_termination Ec2Instance#delete_on_termination}

---

###### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.putEbs.parameter.encrypted"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the volume should be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#encrypted Ec2Instance#encrypted}

---

###### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.putEbs.parameter.iops"></a>

- *Type:* typing.Union[int, float]

The number of I/O operations per second (IOPS).

For gp3, io1, and io2 volumes, this represents the number of IOPS that are provisioned for the volume. For gp2 volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#iops Ec2Instance#iops}

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.putEbs.parameter.kmsKeyId"></a>

- *Type:* str

The identifier of the AWS Key Management Service (AWS KMS) customer managed CMK to use for Amazon EBS encryption.

If KmsKeyId is specified, the encrypted state must be true. If the encrypted state is true but you do not specify KmsKeyId, your AWS managed CMK for EBS is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#kms_key_id Ec2Instance#kms_key_id}

---

###### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.putEbs.parameter.snapshotId"></a>

- *Type:* str

The ID of the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#snapshot_id Ec2Instance#snapshot_id}

---

###### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.putEbs.parameter.volumeSize"></a>

- *Type:* typing.Union[int, float]

The size of the volume, in GiBs.

You must specify either a snapshot ID or a volume size. If you specify a snapshot, the default is the snapshot size. You can specify a volume size that is equal to or larger than the snapshot size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#volume_size Ec2Instance#volume_size}

---

###### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.putEbs.parameter.volumeType"></a>

- *Type:* str

The volume type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#volume_type Ec2Instance#volume_type}

---

##### `reset_device_name` <a name="reset_device_name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```python
def reset_device_name() -> None
```

##### `reset_ebs` <a name="reset_ebs" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetEbs"></a>

```python
def reset_ebs() -> None
```

##### `reset_no_device` <a name="reset_no_device" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```python
def reset_no_device() -> None
```

##### `reset_virtual_name` <a name="reset_virtual_name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```python
def reset_virtual_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference">Ec2InstanceBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.ebsInput">ebs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs">Ec2InstanceBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.noDeviceInput">no_device_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.virtualNameInput">virtual_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.noDevice">no_device</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.virtualName">virtual_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.ebs"></a>

```python
ebs: Ec2InstanceBlockDeviceMappingsEbsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference">Ec2InstanceBlockDeviceMappingsEbsOutputReference</a>

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `ebs_input`<sup>Optional</sup> <a name="ebs_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```python
ebs_input: IResolvable | Ec2InstanceBlockDeviceMappingsEbs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs">Ec2InstanceBlockDeviceMappingsEbs</a>

---

##### `no_device_input`<sup>Optional</sup> <a name="no_device_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```python
no_device_input: str
```

- *Type:* str

---

##### `virtual_name_input`<sup>Optional</sup> <a name="virtual_name_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```python
virtual_name_input: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `no_device`<sup>Required</sup> <a name="no_device" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.noDevice"></a>

```python
no_device: str
```

- *Type:* str

---

##### `virtual_name`<sup>Required</sup> <a name="virtual_name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2InstanceBlockDeviceMappings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>

---


### Ec2InstanceCpuOptionsOutputReference <a name="Ec2InstanceCpuOptionsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceCpuOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resetCoreCount">reset_core_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resetThreadsPerCore">reset_threads_per_core</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_core_count` <a name="reset_core_count" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resetCoreCount"></a>

```python
def reset_core_count() -> None
```

##### `reset_threads_per_core` <a name="reset_threads_per_core" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resetThreadsPerCore"></a>

```python
def reset_threads_per_core() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.coreCountInput">core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.threadsPerCoreInput">threads_per_core_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.coreCount">core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.threadsPerCore">threads_per_core</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `core_count_input`<sup>Optional</sup> <a name="core_count_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.coreCountInput"></a>

```python
core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threads_per_core_input`<sup>Optional</sup> <a name="threads_per_core_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.threadsPerCoreInput"></a>

```python
threads_per_core_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `core_count`<sup>Required</sup> <a name="core_count" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.coreCount"></a>

```python
core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threads_per_core`<sup>Required</sup> <a name="threads_per_core" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.threadsPerCore"></a>

```python
threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2InstanceCpuOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a>

---


### Ec2InstanceCreditSpecificationOutputReference <a name="Ec2InstanceCreditSpecificationOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceCreditSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.resetCpuCredits">reset_cpu_credits</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu_credits` <a name="reset_cpu_credits" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.resetCpuCredits"></a>

```python
def reset_cpu_credits() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.cpuCreditsInput">cpu_credits_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.cpuCredits">cpu_credits</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_credits_input`<sup>Optional</sup> <a name="cpu_credits_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.cpuCreditsInput"></a>

```python
cpu_credits_input: str
```

- *Type:* str

---

##### `cpu_credits`<sup>Required</sup> <a name="cpu_credits" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.cpuCredits"></a>

```python
cpu_credits: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2InstanceCreditSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a>

---


### Ec2InstanceElasticGpuSpecificationsList <a name="Ec2InstanceElasticGpuSpecificationsList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceElasticGpuSpecificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2InstanceElasticGpuSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2InstanceElasticGpuSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>]

---


### Ec2InstanceElasticGpuSpecificationsOutputReference <a name="Ec2InstanceElasticGpuSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2InstanceElasticGpuSpecifications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>

---


### Ec2InstanceElasticInferenceAcceleratorsList <a name="Ec2InstanceElasticInferenceAcceleratorsList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2InstanceElasticInferenceAcceleratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2InstanceElasticInferenceAccelerators]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>]

---


### Ec2InstanceElasticInferenceAcceleratorsOutputReference <a name="Ec2InstanceElasticInferenceAcceleratorsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resetCount">reset_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_count` <a name="reset_count" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resetCount"></a>

```python
def reset_count() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2InstanceElasticInferenceAccelerators
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>

---


### Ec2InstanceEnclaveOptionsOutputReference <a name="Ec2InstanceEnclaveOptionsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceEnclaveOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2InstanceEnclaveOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a>

---


### Ec2InstanceHibernationOptionsOutputReference <a name="Ec2InstanceHibernationOptionsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceHibernationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.resetConfigured">reset_configured</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_configured` <a name="reset_configured" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.resetConfigured"></a>

```python
def reset_configured() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.configuredInput">configured_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.configured">configured</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configured_input`<sup>Optional</sup> <a name="configured_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.configuredInput"></a>

```python
configured_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `configured`<sup>Required</sup> <a name="configured" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.configured"></a>

```python
configured: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2InstanceHibernationOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a>

---


### Ec2InstanceIpv6AddressesList <a name="Ec2InstanceIpv6AddressesList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceIpv6AddressesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2InstanceIpv6AddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2InstanceIpv6Addresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>]

---


### Ec2InstanceIpv6AddressesOutputReference <a name="Ec2InstanceIpv6AddressesOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceIpv6AddressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.resetIpv6Address">reset_ipv6_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ipv6_address` <a name="reset_ipv6_address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.resetIpv6Address"></a>

```python
def reset_ipv6_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.ipv6AddressInput">ipv6_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv6_address_input`<sup>Optional</sup> <a name="ipv6_address_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.ipv6AddressInput"></a>

```python
ipv6_address_input: str
```

- *Type:* str

---

##### `ipv6_address`<sup>Required</sup> <a name="ipv6_address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2InstanceIpv6Addresses
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>

---


### Ec2InstanceLaunchTemplateOutputReference <a name="Ec2InstanceLaunchTemplateOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceLaunchTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resetLaunchTemplateId">reset_launch_template_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resetLaunchTemplateName">reset_launch_template_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_launch_template_id` <a name="reset_launch_template_id" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resetLaunchTemplateId"></a>

```python
def reset_launch_template_id() -> None
```

##### `reset_launch_template_name` <a name="reset_launch_template_name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resetLaunchTemplateName"></a>

```python
def reset_launch_template_name() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateIdInput">launch_template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateNameInput">launch_template_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateId">launch_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateName">launch_template_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `launch_template_id_input`<sup>Optional</sup> <a name="launch_template_id_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateIdInput"></a>

```python
launch_template_id_input: str
```

- *Type:* str

---

##### `launch_template_name_input`<sup>Optional</sup> <a name="launch_template_name_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateNameInput"></a>

```python
launch_template_name_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `launch_template_id`<sup>Required</sup> <a name="launch_template_id" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateId"></a>

```python
launch_template_id: str
```

- *Type:* str

---

##### `launch_template_name`<sup>Required</sup> <a name="launch_template_name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateName"></a>

```python
launch_template_name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2InstanceLaunchTemplate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a>

---


### Ec2InstanceLicenseSpecificationsList <a name="Ec2InstanceLicenseSpecificationsList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceLicenseSpecificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2InstanceLicenseSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2InstanceLicenseSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>]

---


### Ec2InstanceLicenseSpecificationsOutputReference <a name="Ec2InstanceLicenseSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.resetLicenseConfigurationArn">reset_license_configuration_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_license_configuration_arn` <a name="reset_license_configuration_arn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.resetLicenseConfigurationArn"></a>

```python
def reset_license_configuration_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArnInput">license_configuration_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArn">license_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `license_configuration_arn_input`<sup>Optional</sup> <a name="license_configuration_arn_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArnInput"></a>

```python
license_configuration_arn_input: str
```

- *Type:* str

---

##### `license_configuration_arn`<sup>Required</sup> <a name="license_configuration_arn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArn"></a>

```python
license_configuration_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2InstanceLicenseSpecifications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>

---


### Ec2InstanceMetadataOptionsOutputReference <a name="Ec2InstanceMetadataOptionsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceMetadataOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpEndpoint">reset_http_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpProtocolIpv6">reset_http_protocol_ipv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">reset_http_put_response_hop_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpTokens">reset_http_tokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetInstanceMetadataTags">reset_instance_metadata_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_http_endpoint` <a name="reset_http_endpoint" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpEndpoint"></a>

```python
def reset_http_endpoint() -> None
```

##### `reset_http_protocol_ipv6` <a name="reset_http_protocol_ipv6" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpProtocolIpv6"></a>

```python
def reset_http_protocol_ipv6() -> None
```

##### `reset_http_put_response_hop_limit` <a name="reset_http_put_response_hop_limit" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```python
def reset_http_put_response_hop_limit() -> None
```

##### `reset_http_tokens` <a name="reset_http_tokens" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpTokens"></a>

```python
def reset_http_tokens() -> None
```

##### `reset_instance_metadata_tags` <a name="reset_instance_metadata_tags" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetInstanceMetadataTags"></a>

```python
def reset_instance_metadata_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpEndpointInput">http_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpProtocolIpv6Input">http_protocol_ipv6_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">http_put_response_hop_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpTokensInput">http_tokens_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.instanceMetadataTagsInput">instance_metadata_tags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpEndpoint">http_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpProtocolIpv6">http_protocol_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">http_put_response_hop_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpTokens">http_tokens</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.instanceMetadataTags">instance_metadata_tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_endpoint_input`<sup>Optional</sup> <a name="http_endpoint_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpEndpointInput"></a>

```python
http_endpoint_input: str
```

- *Type:* str

---

##### `http_protocol_ipv6_input`<sup>Optional</sup> <a name="http_protocol_ipv6_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpProtocolIpv6Input"></a>

```python
http_protocol_ipv6_input: str
```

- *Type:* str

---

##### `http_put_response_hop_limit_input`<sup>Optional</sup> <a name="http_put_response_hop_limit_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```python
http_put_response_hop_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_tokens_input`<sup>Optional</sup> <a name="http_tokens_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpTokensInput"></a>

```python
http_tokens_input: str
```

- *Type:* str

---

##### `instance_metadata_tags_input`<sup>Optional</sup> <a name="instance_metadata_tags_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.instanceMetadataTagsInput"></a>

```python
instance_metadata_tags_input: str
```

- *Type:* str

---

##### `http_endpoint`<sup>Required</sup> <a name="http_endpoint" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpEndpoint"></a>

```python
http_endpoint: str
```

- *Type:* str

---

##### `http_protocol_ipv6`<sup>Required</sup> <a name="http_protocol_ipv6" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpProtocolIpv6"></a>

```python
http_protocol_ipv6: str
```

- *Type:* str

---

##### `http_put_response_hop_limit`<sup>Required</sup> <a name="http_put_response_hop_limit" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```python
http_put_response_hop_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_tokens`<sup>Required</sup> <a name="http_tokens" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```python
http_tokens: str
```

- *Type:* str

---

##### `instance_metadata_tags`<sup>Required</sup> <a name="instance_metadata_tags" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```python
instance_metadata_tags: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2InstanceMetadataOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a>

---


### Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference <a name="Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resetEnaSrdUdpEnabled">reset_ena_srd_udp_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ena_srd_udp_enabled` <a name="reset_ena_srd_udp_enabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resetEnaSrdUdpEnabled"></a>

```python
def reset_ena_srd_udp_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabledInput">ena_srd_udp_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled">ena_srd_udp_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ena_srd_udp_enabled_input`<sup>Optional</sup> <a name="ena_srd_udp_enabled_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabledInput"></a>

```python
ena_srd_udp_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ena_srd_udp_enabled`<sup>Required</sup> <a name="ena_srd_udp_enabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled"></a>

```python
ena_srd_udp_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a>

---


### Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference <a name="Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification">put_ena_srd_udp_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resetEnaSrdEnabled">reset_ena_srd_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resetEnaSrdUdpSpecification">reset_ena_srd_udp_specification</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ena_srd_udp_specification` <a name="put_ena_srd_udp_specification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification"></a>

```python
def put_ena_srd_udp_specification(
  ena_srd_udp_enabled: bool | IResolvable = None
) -> None
```

###### `ena_srd_udp_enabled`<sup>Optional</sup> <a name="ena_srd_udp_enabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification.parameter.enaSrdUdpEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether UDP traffic uses ENA Express for your instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#ena_srd_udp_enabled Ec2Instance#ena_srd_udp_enabled}

---

##### `reset_ena_srd_enabled` <a name="reset_ena_srd_enabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resetEnaSrdEnabled"></a>

```python
def reset_ena_srd_enabled() -> None
```

##### `reset_ena_srd_udp_specification` <a name="reset_ena_srd_udp_specification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resetEnaSrdUdpSpecification"></a>

```python
def reset_ena_srd_udp_specification() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification">ena_srd_udp_specification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdEnabledInput">ena_srd_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecificationInput">ena_srd_udp_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdEnabled">ena_srd_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ena_srd_udp_specification`<sup>Required</sup> <a name="ena_srd_udp_specification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification"></a>

```python
ena_srd_udp_specification: Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a>

---

##### `ena_srd_enabled_input`<sup>Optional</sup> <a name="ena_srd_enabled_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdEnabledInput"></a>

```python
ena_srd_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ena_srd_udp_specification_input`<sup>Optional</sup> <a name="ena_srd_udp_specification_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecificationInput"></a>

```python
ena_srd_udp_specification_input: IResolvable | Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a>

---

##### `ena_srd_enabled`<sup>Required</sup> <a name="ena_srd_enabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdEnabled"></a>

```python
ena_srd_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2InstanceNetworkInterfacesEnaSrdSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecification</a>

---


### Ec2InstanceNetworkInterfacesIpv6AddressesList <a name="Ec2InstanceNetworkInterfacesIpv6AddressesList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2InstanceNetworkInterfacesIpv6Addresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>]

---


### Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference <a name="Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.resetIpv6Address">reset_ipv6_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ipv6_address` <a name="reset_ipv6_address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.resetIpv6Address"></a>

```python
def reset_ipv6_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.ipv6AddressInput">ipv6_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv6_address_input`<sup>Optional</sup> <a name="ipv6_address_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.ipv6AddressInput"></a>

```python
ipv6_address_input: str
```

- *Type:* str

---

##### `ipv6_address`<sup>Required</sup> <a name="ipv6_address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2InstanceNetworkInterfacesIpv6Addresses
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>

---


### Ec2InstanceNetworkInterfacesList <a name="Ec2InstanceNetworkInterfacesList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceNetworkInterfacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2InstanceNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2InstanceNetworkInterfaces]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>]

---


### Ec2InstanceNetworkInterfacesOutputReference <a name="Ec2InstanceNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceNetworkInterfacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putEnaSrdSpecification">put_ena_srd_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putIpv6Addresses">put_ipv6_addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putPrivateIpAddresses">put_private_ip_addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetAssociateCarrierIpAddress">reset_associate_carrier_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetAssociatePublicIpAddress">reset_associate_public_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetDeleteOnTermination">reset_delete_on_termination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetDeviceIndex">reset_device_index</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetEnaSrdSpecification">reset_ena_srd_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetGroupSet">reset_group_set</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetIpv6AddressCount">reset_ipv6_address_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetIpv6Addresses">reset_ipv6_addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetNetworkInterfaceId">reset_network_interface_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetPrivateIpAddress">reset_private_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetPrivateIpAddresses">reset_private_ip_addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetSecondaryPrivateIpAddressCount">reset_secondary_private_ip_address_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ena_srd_specification` <a name="put_ena_srd_specification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putEnaSrdSpecification"></a>

```python
def put_ena_srd_specification(
  ena_srd_enabled: bool | IResolvable = None,
  ena_srd_udp_specification: Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification = None
) -> None
```

###### `ena_srd_enabled`<sup>Optional</sup> <a name="ena_srd_enabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putEnaSrdSpecification.parameter.enaSrdEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether ENA Express is enabled for the network interface when you launch an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#ena_srd_enabled Ec2Instance#ena_srd_enabled}

---

###### `ena_srd_udp_specification`<sup>Optional</sup> <a name="ena_srd_udp_specification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putEnaSrdSpecification.parameter.enaSrdUdpSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a>

Contains ENA Express settings for UDP network traffic for the network interface that's attached to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_instance#ena_srd_udp_specification Ec2Instance#ena_srd_udp_specification}

---

##### `put_ipv6_addresses` <a name="put_ipv6_addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putIpv6Addresses"></a>

```python
def put_ipv6_addresses(
  value: IResolvable | typing.List[Ec2InstanceNetworkInterfacesIpv6Addresses]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putIpv6Addresses.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>]

---

##### `put_private_ip_addresses` <a name="put_private_ip_addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putPrivateIpAddresses"></a>

```python
def put_private_ip_addresses(
  value: IResolvable | typing.List[Ec2InstanceNetworkInterfacesPrivateIpAddresses]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putPrivateIpAddresses.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>]

---

##### `reset_associate_carrier_ip_address` <a name="reset_associate_carrier_ip_address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetAssociateCarrierIpAddress"></a>

```python
def reset_associate_carrier_ip_address() -> None
```

##### `reset_associate_public_ip_address` <a name="reset_associate_public_ip_address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetAssociatePublicIpAddress"></a>

```python
def reset_associate_public_ip_address() -> None
```

##### `reset_delete_on_termination` <a name="reset_delete_on_termination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetDeleteOnTermination"></a>

```python
def reset_delete_on_termination() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_device_index` <a name="reset_device_index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetDeviceIndex"></a>

```python
def reset_device_index() -> None
```

##### `reset_ena_srd_specification` <a name="reset_ena_srd_specification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetEnaSrdSpecification"></a>

```python
def reset_ena_srd_specification() -> None
```

##### `reset_group_set` <a name="reset_group_set" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetGroupSet"></a>

```python
def reset_group_set() -> None
```

##### `reset_ipv6_address_count` <a name="reset_ipv6_address_count" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetIpv6AddressCount"></a>

```python
def reset_ipv6_address_count() -> None
```

##### `reset_ipv6_addresses` <a name="reset_ipv6_addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetIpv6Addresses"></a>

```python
def reset_ipv6_addresses() -> None
```

##### `reset_network_interface_id` <a name="reset_network_interface_id" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetNetworkInterfaceId"></a>

```python
def reset_network_interface_id() -> None
```

##### `reset_private_ip_address` <a name="reset_private_ip_address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetPrivateIpAddress"></a>

```python
def reset_private_ip_address() -> None
```

##### `reset_private_ip_addresses` <a name="reset_private_ip_addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetPrivateIpAddresses"></a>

```python
def reset_private_ip_addresses() -> None
```

##### `reset_secondary_private_ip_address_count` <a name="reset_secondary_private_ip_address_count" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetSecondaryPrivateIpAddressCount"></a>

```python
def reset_secondary_private_ip_address_count() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.enaSrdSpecification">ena_srd_specification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference">Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6Addresses">ipv6_addresses</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList">Ec2InstanceNetworkInterfacesIpv6AddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddresses">private_ip_addresses</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList">Ec2InstanceNetworkInterfacesPrivateIpAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associateCarrierIpAddressInput">associate_carrier_ip_address_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associatePublicIpAddressInput">associate_public_ip_address_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deleteOnTerminationInput">delete_on_termination_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deviceIndexInput">device_index_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.enaSrdSpecificationInput">ena_srd_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.groupSetInput">group_set_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6AddressCountInput">ipv6_address_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6AddressesInput">ipv6_addresses_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.networkInterfaceIdInput">network_interface_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddressesInput">private_ip_addresses_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddressInput">private_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCountInput">secondary_private_ip_address_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associateCarrierIpAddress">associate_carrier_ip_address</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deviceIndex">device_index</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.groupSet">group_set</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6AddressCount">ipv6_address_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCount">secondary_private_ip_address_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ena_srd_specification`<sup>Required</sup> <a name="ena_srd_specification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.enaSrdSpecification"></a>

```python
ena_srd_specification: Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference">Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference</a>

---

##### `ipv6_addresses`<sup>Required</sup> <a name="ipv6_addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6Addresses"></a>

```python
ipv6_addresses: Ec2InstanceNetworkInterfacesIpv6AddressesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList">Ec2InstanceNetworkInterfacesIpv6AddressesList</a>

---

##### `private_ip_addresses`<sup>Required</sup> <a name="private_ip_addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddresses"></a>

```python
private_ip_addresses: Ec2InstanceNetworkInterfacesPrivateIpAddressesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList">Ec2InstanceNetworkInterfacesPrivateIpAddressesList</a>

---

##### `associate_carrier_ip_address_input`<sup>Optional</sup> <a name="associate_carrier_ip_address_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associateCarrierIpAddressInput"></a>

```python
associate_carrier_ip_address_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `associate_public_ip_address_input`<sup>Optional</sup> <a name="associate_public_ip_address_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associatePublicIpAddressInput"></a>

```python
associate_public_ip_address_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delete_on_termination_input`<sup>Optional</sup> <a name="delete_on_termination_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deleteOnTerminationInput"></a>

```python
delete_on_termination_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `device_index_input`<sup>Optional</sup> <a name="device_index_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deviceIndexInput"></a>

```python
device_index_input: str
```

- *Type:* str

---

##### `ena_srd_specification_input`<sup>Optional</sup> <a name="ena_srd_specification_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.enaSrdSpecificationInput"></a>

```python
ena_srd_specification_input: IResolvable | Ec2InstanceNetworkInterfacesEnaSrdSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecification</a>

---

##### `group_set_input`<sup>Optional</sup> <a name="group_set_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.groupSetInput"></a>

```python
group_set_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv6_address_count_input`<sup>Optional</sup> <a name="ipv6_address_count_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6AddressCountInput"></a>

```python
ipv6_address_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_addresses_input`<sup>Optional</sup> <a name="ipv6_addresses_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6AddressesInput"></a>

```python
ipv6_addresses_input: IResolvable | typing.List[Ec2InstanceNetworkInterfacesIpv6Addresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>]

---

##### `network_interface_id_input`<sup>Optional</sup> <a name="network_interface_id_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.networkInterfaceIdInput"></a>

```python
network_interface_id_input: str
```

- *Type:* str

---

##### `private_ip_addresses_input`<sup>Optional</sup> <a name="private_ip_addresses_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddressesInput"></a>

```python
private_ip_addresses_input: IResolvable | typing.List[Ec2InstanceNetworkInterfacesPrivateIpAddresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>]

---

##### `private_ip_address_input`<sup>Optional</sup> <a name="private_ip_address_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddressInput"></a>

```python
private_ip_address_input: str
```

- *Type:* str

---

##### `secondary_private_ip_address_count_input`<sup>Optional</sup> <a name="secondary_private_ip_address_count_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCountInput"></a>

```python
secondary_private_ip_address_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `associate_carrier_ip_address`<sup>Required</sup> <a name="associate_carrier_ip_address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associateCarrierIpAddress"></a>

```python
associate_carrier_ip_address: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `associate_public_ip_address`<sup>Required</sup> <a name="associate_public_ip_address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associatePublicIpAddress"></a>

```python
associate_public_ip_address: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `device_index`<sup>Required</sup> <a name="device_index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deviceIndex"></a>

```python
device_index: str
```

- *Type:* str

---

##### `group_set`<sup>Required</sup> <a name="group_set" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.groupSet"></a>

```python
group_set: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv6_address_count`<sup>Required</sup> <a name="ipv6_address_count" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6AddressCount"></a>

```python
ipv6_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `secondary_private_ip_address_count`<sup>Required</sup> <a name="secondary_private_ip_address_count" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCount"></a>

```python
secondary_private_ip_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2InstanceNetworkInterfaces
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>

---


### Ec2InstanceNetworkInterfacesPrivateIpAddressesList <a name="Ec2InstanceNetworkInterfacesPrivateIpAddressesList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2InstanceNetworkInterfacesPrivateIpAddresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>]

---


### Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference <a name="Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resetPrivateIpAddress">reset_private_ip_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_primary` <a name="reset_primary" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```

##### `reset_private_ip_address` <a name="reset_private_ip_address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resetPrivateIpAddress"></a>

```python
def reset_private_ip_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.primaryInput">primary_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddressInput">private_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.primary">primary</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.primaryInput"></a>

```python
primary_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `private_ip_address_input`<sup>Optional</sup> <a name="private_ip_address_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddressInput"></a>

```python
private_ip_address_input: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.primary"></a>

```python
primary: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2InstanceNetworkInterfacesPrivateIpAddresses
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>

---


### Ec2InstancePrivateDnsNameOptionsOutputReference <a name="Ec2InstancePrivateDnsNameOptionsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord">reset_enable_resource_name_dns_aaaa_record</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord">reset_enable_resource_name_dns_a_record</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resetHostnameType">reset_hostname_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_resource_name_dns_aaaa_record` <a name="reset_enable_resource_name_dns_aaaa_record" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord"></a>

```python
def reset_enable_resource_name_dns_aaaa_record() -> None
```

##### `reset_enable_resource_name_dns_a_record` <a name="reset_enable_resource_name_dns_a_record" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord"></a>

```python
def reset_enable_resource_name_dns_a_record() -> None
```

##### `reset_hostname_type` <a name="reset_hostname_type" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resetHostnameType"></a>

```python
def reset_hostname_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput">enable_resource_name_dns_aaaa_record_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput">enable_resource_name_dns_a_record_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput">hostname_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord">enable_resource_name_dns_aaaa_record</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord">enable_resource_name_dns_a_record</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.hostnameType">hostname_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_resource_name_dns_aaaa_record_input`<sup>Optional</sup> <a name="enable_resource_name_dns_aaaa_record_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput"></a>

```python
enable_resource_name_dns_aaaa_record_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_resource_name_dns_a_record_input`<sup>Optional</sup> <a name="enable_resource_name_dns_a_record_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput"></a>

```python
enable_resource_name_dns_a_record_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `hostname_type_input`<sup>Optional</sup> <a name="hostname_type_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput"></a>

```python
hostname_type_input: str
```

- *Type:* str

---

##### `enable_resource_name_dns_aaaa_record`<sup>Required</sup> <a name="enable_resource_name_dns_aaaa_record" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```python
enable_resource_name_dns_aaaa_record: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_resource_name_dns_a_record`<sup>Required</sup> <a name="enable_resource_name_dns_a_record" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord"></a>

```python
enable_resource_name_dns_a_record: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `hostname_type`<sup>Required</sup> <a name="hostname_type" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.hostnameType"></a>

```python
hostname_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2InstancePrivateDnsNameOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a>

---


### Ec2InstanceSsmAssociationsAssociationParametersList <a name="Ec2InstanceSsmAssociationsAssociationParametersList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2InstanceSsmAssociationsAssociationParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2InstanceSsmAssociationsAssociationParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>]

---


### Ec2InstanceSsmAssociationsAssociationParametersOutputReference <a name="Ec2InstanceSsmAssociationsAssociationParametersOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.valueInput">value_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.value">value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.valueInput"></a>

```python
value_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.value"></a>

```python
value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2InstanceSsmAssociationsAssociationParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>

---


### Ec2InstanceSsmAssociationsList <a name="Ec2InstanceSsmAssociationsList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceSsmAssociationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2InstanceSsmAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2InstanceSsmAssociations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>]

---


### Ec2InstanceSsmAssociationsOutputReference <a name="Ec2InstanceSsmAssociationsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceSsmAssociationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.putAssociationParameters">put_association_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resetAssociationParameters">reset_association_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resetDocumentName">reset_document_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_association_parameters` <a name="put_association_parameters" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.putAssociationParameters"></a>

```python
def put_association_parameters(
  value: IResolvable | typing.List[Ec2InstanceSsmAssociationsAssociationParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.putAssociationParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>]

---

##### `reset_association_parameters` <a name="reset_association_parameters" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resetAssociationParameters"></a>

```python
def reset_association_parameters() -> None
```

##### `reset_document_name` <a name="reset_document_name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resetDocumentName"></a>

```python
def reset_document_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.associationParameters">association_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList">Ec2InstanceSsmAssociationsAssociationParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.associationParametersInput">association_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.documentNameInput">document_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.documentName">document_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `association_parameters`<sup>Required</sup> <a name="association_parameters" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.associationParameters"></a>

```python
association_parameters: Ec2InstanceSsmAssociationsAssociationParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList">Ec2InstanceSsmAssociationsAssociationParametersList</a>

---

##### `association_parameters_input`<sup>Optional</sup> <a name="association_parameters_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.associationParametersInput"></a>

```python
association_parameters_input: IResolvable | typing.List[Ec2InstanceSsmAssociationsAssociationParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>]

---

##### `document_name_input`<sup>Optional</sup> <a name="document_name_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.documentNameInput"></a>

```python
document_name_input: str
```

- *Type:* str

---

##### `document_name`<sup>Required</sup> <a name="document_name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.documentName"></a>

```python
document_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2InstanceSsmAssociations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>

---


### Ec2InstanceStateOutputReference <a name="Ec2InstanceStateOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceState">Ec2InstanceState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.internalValue"></a>

```python
internal_value: Ec2InstanceState
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceState">Ec2InstanceState</a>

---


### Ec2InstanceTagsList <a name="Ec2InstanceTagsList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2InstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2InstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>]

---


### Ec2InstanceTagsOutputReference <a name="Ec2InstanceTagsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2InstanceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>

---


### Ec2InstanceVolumesList <a name="Ec2InstanceVolumesList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2InstanceVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2InstanceVolumes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>]

---


### Ec2InstanceVolumesOutputReference <a name="Ec2InstanceVolumesOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance

ec2Instance.Ec2InstanceVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resetDevice">reset_device</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resetVolumeId">reset_volume_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_device` <a name="reset_device" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resetDevice"></a>

```python
def reset_device() -> None
```

##### `reset_volume_id` <a name="reset_volume_id" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resetVolumeId"></a>

```python
def reset_volume_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.deviceInput">device_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.volumeIdInput">volume_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.device">device</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_input`<sup>Optional</sup> <a name="device_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.deviceInput"></a>

```python
device_input: str
```

- *Type:* str

---

##### `volume_id_input`<sup>Optional</sup> <a name="volume_id_input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.volumeIdInput"></a>

```python
volume_id_input: str
```

- *Type:* str

---

##### `device`<sup>Required</sup> <a name="device" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.device"></a>

```python
device: str
```

- *Type:* str

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2InstanceVolumes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>

---



