# `sagemakerNotebookInstance` Submodule <a name="`sagemakerNotebookInstance` Submodule" id="@cdktn/provider-awscc.sagemakerNotebookInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerNotebookInstance <a name="SagemakerNotebookInstance" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance awscc_sagemaker_notebook_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_notebook_instance

sagemakerNotebookInstance.SagemakerNotebookInstance(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_type: str,
  role_arn: str,
  accelerator_types: typing.List[str] = None,
  additional_code_repositories: typing.List[str] = None,
  default_code_repository: str = None,
  direct_internet_access: str = None,
  instance_metadata_service_configuration: SagemakerNotebookInstanceInstanceMetadataServiceConfiguration = None,
  kms_key_id: str = None,
  lifecycle_config_name: str = None,
  notebook_instance_name: str = None,
  platform_identifier: str = None,
  root_access: str = None,
  security_group_ids: typing.List[str] = None,
  subnet_id: str = None,
  tags: IResolvable | typing.List[SagemakerNotebookInstanceTags] = None,
  volume_size_in_gb: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.instanceType">instance_type</a></code> | <code>str</code> | The type of ML compute instance to launch for the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | When you send any requests to AWS resources from the notebook instance, SageMaker AI assumes this role to perform tasks on your behalf. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.acceleratorTypes">accelerator_types</a></code> | <code>typing.List[str]</code> | A list of Amazon Elastic Inference (EI) instance types to associate with the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.additionalCodeRepositories">additional_code_repositories</a></code> | <code>typing.List[str]</code> | An array of up to three Git repositories associated with the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.defaultCodeRepository">default_code_repository</a></code> | <code>str</code> | The Git repository associated with the notebook instance as its default code repository. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.directInternetAccess">direct_internet_access</a></code> | <code>str</code> | Sets whether SageMaker AI provides internet access to the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.instanceMetadataServiceConfiguration">instance_metadata_service_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a></code> | Information on the IMDS configuration of the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of a AWS Key Management Service key that SageMaker AI uses to encrypt data on the storage volume attached to your notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.lifecycleConfigName">lifecycle_config_name</a></code> | <code>str</code> | The name of a lifecycle configuration to associate with the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.notebookInstanceName">notebook_instance_name</a></code> | <code>str</code> | The name of the new notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.platformIdentifier">platform_identifier</a></code> | <code>str</code> | The platform identifier of the notebook instance runtime environment. The default value is notebook-al2023-v1. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.rootAccess">root_access</a></code> | <code>str</code> | Whether root access is enabled or disabled for users of the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The VPC security group IDs, in the form sg-xxxxxxxx. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | The ID of the subnet in a VPC to which you would like to have a connectivity from your ML compute instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>]</code> | A list of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.volumeSizeInGb">volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | The size, in GB, of the ML storage volume to attach to the notebook instance. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.instanceType"></a>

- *Type:* str

The type of ML compute instance to launch for the notebook instance.

Expect some interruption of service if this parameter is changed as CloudFormation stops a notebook instance and starts it up again to update it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#instance_type SagemakerNotebookInstance#instance_type}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.roleArn"></a>

- *Type:* str

When you send any requests to AWS resources from the notebook instance, SageMaker AI assumes this role to perform tasks on your behalf.

You must grant this role necessary permissions so SageMaker AI can perform these tasks. The policy must allow the SageMaker AI service principal (sagemaker.amazonaws.com) permissions to assume this role. To be able to pass this role to SageMaker AI, the caller of this API must have the iam:PassRole permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#role_arn SagemakerNotebookInstance#role_arn}

---

##### `accelerator_types`<sup>Optional</sup> <a name="accelerator_types" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.acceleratorTypes"></a>

- *Type:* typing.List[str]

A list of Amazon Elastic Inference (EI) instance types to associate with the notebook instance.

Currently, only one instance type can be associated with a notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#accelerator_types SagemakerNotebookInstance#accelerator_types}

---

##### `additional_code_repositories`<sup>Optional</sup> <a name="additional_code_repositories" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.additionalCodeRepositories"></a>

- *Type:* typing.List[str]

An array of up to three Git repositories associated with the notebook instance.

These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in AWS CodeCommit or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#additional_code_repositories SagemakerNotebookInstance#additional_code_repositories}

---

##### `default_code_repository`<sup>Optional</sup> <a name="default_code_repository" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.defaultCodeRepository"></a>

- *Type:* str

The Git repository associated with the notebook instance as its default code repository.

This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in AWS CodeCommit or in any other Git repository. When you open a notebook instance, it opens in the directory that contains this repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#default_code_repository SagemakerNotebookInstance#default_code_repository}

---

##### `direct_internet_access`<sup>Optional</sup> <a name="direct_internet_access" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.directInternetAccess"></a>

- *Type:* str

Sets whether SageMaker AI provides internet access to the notebook instance.

If you set this to Disabled this notebook instance is able to access resources only in your VPC, and is not be able to connect to SageMaker AI training and endpoint services unless you configure a NAT Gateway in your VPC. You can set the value of this parameter to Disabled only if you set a value for the SubnetId parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#direct_internet_access SagemakerNotebookInstance#direct_internet_access}

---

##### `instance_metadata_service_configuration`<sup>Optional</sup> <a name="instance_metadata_service_configuration" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.instanceMetadataServiceConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a>

Information on the IMDS configuration of the notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#instance_metadata_service_configuration SagemakerNotebookInstance#instance_metadata_service_configuration}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

The Amazon Resource Name (ARN) of a AWS Key Management Service key that SageMaker AI uses to encrypt data on the storage volume attached to your notebook instance.

The KMS key you provide must be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#kms_key_id SagemakerNotebookInstance#kms_key_id}

---

##### `lifecycle_config_name`<sup>Optional</sup> <a name="lifecycle_config_name" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.lifecycleConfigName"></a>

- *Type:* str

The name of a lifecycle configuration to associate with the notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#lifecycle_config_name SagemakerNotebookInstance#lifecycle_config_name}

---

##### `notebook_instance_name`<sup>Optional</sup> <a name="notebook_instance_name" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.notebookInstanceName"></a>

- *Type:* str

The name of the new notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#notebook_instance_name SagemakerNotebookInstance#notebook_instance_name}

---

##### `platform_identifier`<sup>Optional</sup> <a name="platform_identifier" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.platformIdentifier"></a>

- *Type:* str

The platform identifier of the notebook instance runtime environment. The default value is notebook-al2023-v1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#platform_identifier SagemakerNotebookInstance#platform_identifier}

---

##### `root_access`<sup>Optional</sup> <a name="root_access" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.rootAccess"></a>

- *Type:* str

Whether root access is enabled or disabled for users of the notebook instance.

The default value is Enabled. Lifecycle configurations need root access to be able to set up a notebook instance. Because of this, lifecycle configurations associated with a notebook instance always run with root access even if you disable root access for users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#root_access SagemakerNotebookInstance#root_access}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

The VPC security group IDs, in the form sg-xxxxxxxx.

The security groups must be for the same VPC as specified in the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#security_group_ids SagemakerNotebookInstance#security_group_ids}

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.subnetId"></a>

- *Type:* str

The ID of the subnet in a VPC to which you would like to have a connectivity from your ML compute instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#subnet_id SagemakerNotebookInstance#subnet_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>]

A list of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#tags SagemakerNotebookInstance#tags}

---

##### `volume_size_in_gb`<sup>Optional</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.volumeSizeInGb"></a>

- *Type:* typing.Union[int, float]

The size, in GB, of the ML storage volume to attach to the notebook instance.

The default value is 5 GB. Expect some interruption of service if this parameter is changed as CloudFormation stops a notebook instance and starts it up again to update it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#volume_size_in_gb SagemakerNotebookInstance#volume_size_in_gb}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.putInstanceMetadataServiceConfiguration">put_instance_metadata_service_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetAcceleratorTypes">reset_accelerator_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetAdditionalCodeRepositories">reset_additional_code_repositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetDefaultCodeRepository">reset_default_code_repository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetDirectInternetAccess">reset_direct_internet_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetInstanceMetadataServiceConfiguration">reset_instance_metadata_service_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetLifecycleConfigName">reset_lifecycle_config_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetNotebookInstanceName">reset_notebook_instance_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetPlatformIdentifier">reset_platform_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetRootAccess">reset_root_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetVolumeSizeInGb">reset_volume_size_in_gb</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_instance_metadata_service_configuration` <a name="put_instance_metadata_service_configuration" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.putInstanceMetadataServiceConfiguration"></a>

```python
def put_instance_metadata_service_configuration(
  minimum_instance_metadata_service_version: str = None
) -> None
```

###### `minimum_instance_metadata_service_version`<sup>Optional</sup> <a name="minimum_instance_metadata_service_version" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.putInstanceMetadataServiceConfiguration.parameter.minimumInstanceMetadataServiceVersion"></a>

- *Type:* str

Indicates the minimum IMDS version that the notebook instance supports.

When passed as part of CreateNotebookInstance, if no value is selected, then it defaults to IMDSv1. This means that both IMDSv1 and IMDSv2 are supported. If passed as part of UpdateNotebookInstance, there is no default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#minimum_instance_metadata_service_version SagemakerNotebookInstance#minimum_instance_metadata_service_version}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SagemakerNotebookInstanceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>]

---

##### `reset_accelerator_types` <a name="reset_accelerator_types" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetAcceleratorTypes"></a>

```python
def reset_accelerator_types() -> None
```

##### `reset_additional_code_repositories` <a name="reset_additional_code_repositories" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetAdditionalCodeRepositories"></a>

```python
def reset_additional_code_repositories() -> None
```

##### `reset_default_code_repository` <a name="reset_default_code_repository" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetDefaultCodeRepository"></a>

```python
def reset_default_code_repository() -> None
```

##### `reset_direct_internet_access` <a name="reset_direct_internet_access" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetDirectInternetAccess"></a>

```python
def reset_direct_internet_access() -> None
```

##### `reset_instance_metadata_service_configuration` <a name="reset_instance_metadata_service_configuration" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetInstanceMetadataServiceConfiguration"></a>

```python
def reset_instance_metadata_service_configuration() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_lifecycle_config_name` <a name="reset_lifecycle_config_name" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetLifecycleConfigName"></a>

```python
def reset_lifecycle_config_name() -> None
```

##### `reset_notebook_instance_name` <a name="reset_notebook_instance_name" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetNotebookInstanceName"></a>

```python
def reset_notebook_instance_name() -> None
```

##### `reset_platform_identifier` <a name="reset_platform_identifier" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetPlatformIdentifier"></a>

```python
def reset_platform_identifier() -> None
```

##### `reset_root_access` <a name="reset_root_access" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetRootAccess"></a>

```python
def reset_root_access() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_volume_size_in_gb` <a name="reset_volume_size_in_gb" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetVolumeSizeInGb"></a>

```python
def reset_volume_size_in_gb() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerNotebookInstance resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.isConstruct"></a>

```python
from cdktn_provider_awscc import sagemaker_notebook_instance

sagemakerNotebookInstance.SagemakerNotebookInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sagemaker_notebook_instance

sagemakerNotebookInstance.SagemakerNotebookInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sagemaker_notebook_instance

sagemakerNotebookInstance.SagemakerNotebookInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sagemaker_notebook_instance

sagemakerNotebookInstance.SagemakerNotebookInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerNotebookInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerNotebookInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerNotebookInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerNotebookInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceMetadataServiceConfiguration">instance_metadata_service_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference">SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.notebookInstanceArn">notebook_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList">SagemakerNotebookInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.acceleratorTypesInput">accelerator_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.additionalCodeRepositoriesInput">additional_code_repositories_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.defaultCodeRepositoryInput">default_code_repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.directInternetAccessInput">direct_internet_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceMetadataServiceConfigurationInput">instance_metadata_service_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycleConfigNameInput">lifecycle_config_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.notebookInstanceNameInput">notebook_instance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.platformIdentifierInput">platform_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.rootAccessInput">root_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.volumeSizeInGbInput">volume_size_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.acceleratorTypes">accelerator_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.additionalCodeRepositories">additional_code_repositories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.defaultCodeRepository">default_code_repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.directInternetAccess">direct_internet_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycleConfigName">lifecycle_config_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.notebookInstanceName">notebook_instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.platformIdentifier">platform_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.rootAccess">root_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.volumeSizeInGb">volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_metadata_service_configuration`<sup>Required</sup> <a name="instance_metadata_service_configuration" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceMetadataServiceConfiguration"></a>

```python
instance_metadata_service_configuration: SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference">SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference</a>

---

##### `notebook_instance_arn`<sup>Required</sup> <a name="notebook_instance_arn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.notebookInstanceArn"></a>

```python
notebook_instance_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tags"></a>

```python
tags: SagemakerNotebookInstanceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList">SagemakerNotebookInstanceTagsList</a>

---

##### `accelerator_types_input`<sup>Optional</sup> <a name="accelerator_types_input" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.acceleratorTypesInput"></a>

```python
accelerator_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `additional_code_repositories_input`<sup>Optional</sup> <a name="additional_code_repositories_input" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.additionalCodeRepositoriesInput"></a>

```python
additional_code_repositories_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_code_repository_input`<sup>Optional</sup> <a name="default_code_repository_input" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.defaultCodeRepositoryInput"></a>

```python
default_code_repository_input: str
```

- *Type:* str

---

##### `direct_internet_access_input`<sup>Optional</sup> <a name="direct_internet_access_input" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.directInternetAccessInput"></a>

```python
direct_internet_access_input: str
```

- *Type:* str

---

##### `instance_metadata_service_configuration_input`<sup>Optional</sup> <a name="instance_metadata_service_configuration_input" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceMetadataServiceConfigurationInput"></a>

```python
instance_metadata_service_configuration_input: IResolvable | SagemakerNotebookInstanceInstanceMetadataServiceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a>

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `lifecycle_config_name_input`<sup>Optional</sup> <a name="lifecycle_config_name_input" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycleConfigNameInput"></a>

```python
lifecycle_config_name_input: str
```

- *Type:* str

---

##### `notebook_instance_name_input`<sup>Optional</sup> <a name="notebook_instance_name_input" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.notebookInstanceNameInput"></a>

```python
notebook_instance_name_input: str
```

- *Type:* str

---

##### `platform_identifier_input`<sup>Optional</sup> <a name="platform_identifier_input" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.platformIdentifierInput"></a>

```python
platform_identifier_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `root_access_input`<sup>Optional</sup> <a name="root_access_input" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.rootAccessInput"></a>

```python
root_access_input: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SagemakerNotebookInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>]

---

##### `volume_size_in_gb_input`<sup>Optional</sup> <a name="volume_size_in_gb_input" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.volumeSizeInGbInput"></a>

```python
volume_size_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `accelerator_types`<sup>Required</sup> <a name="accelerator_types" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.acceleratorTypes"></a>

```python
accelerator_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `additional_code_repositories`<sup>Required</sup> <a name="additional_code_repositories" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.additionalCodeRepositories"></a>

```python
additional_code_repositories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_code_repository`<sup>Required</sup> <a name="default_code_repository" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.defaultCodeRepository"></a>

```python
default_code_repository: str
```

- *Type:* str

---

##### `direct_internet_access`<sup>Required</sup> <a name="direct_internet_access" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.directInternetAccess"></a>

```python
direct_internet_access: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `lifecycle_config_name`<sup>Required</sup> <a name="lifecycle_config_name" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycleConfigName"></a>

```python
lifecycle_config_name: str
```

- *Type:* str

---

##### `notebook_instance_name`<sup>Required</sup> <a name="notebook_instance_name" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.notebookInstanceName"></a>

```python
notebook_instance_name: str
```

- *Type:* str

---

##### `platform_identifier`<sup>Required</sup> <a name="platform_identifier" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.platformIdentifier"></a>

```python
platform_identifier: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `root_access`<sup>Required</sup> <a name="root_access" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.rootAccess"></a>

```python
root_access: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `volume_size_in_gb`<sup>Required</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.volumeSizeInGb"></a>

```python
volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerNotebookInstanceConfig <a name="SagemakerNotebookInstanceConfig" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_notebook_instance

sagemakerNotebookInstance.SagemakerNotebookInstanceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_type: str,
  role_arn: str,
  accelerator_types: typing.List[str] = None,
  additional_code_repositories: typing.List[str] = None,
  default_code_repository: str = None,
  direct_internet_access: str = None,
  instance_metadata_service_configuration: SagemakerNotebookInstanceInstanceMetadataServiceConfiguration = None,
  kms_key_id: str = None,
  lifecycle_config_name: str = None,
  notebook_instance_name: str = None,
  platform_identifier: str = None,
  root_access: str = None,
  security_group_ids: typing.List[str] = None,
  subnet_id: str = None,
  tags: IResolvable | typing.List[SagemakerNotebookInstanceTags] = None,
  volume_size_in_gb: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.instanceType">instance_type</a></code> | <code>str</code> | The type of ML compute instance to launch for the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.roleArn">role_arn</a></code> | <code>str</code> | When you send any requests to AWS resources from the notebook instance, SageMaker AI assumes this role to perform tasks on your behalf. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.acceleratorTypes">accelerator_types</a></code> | <code>typing.List[str]</code> | A list of Amazon Elastic Inference (EI) instance types to associate with the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.additionalCodeRepositories">additional_code_repositories</a></code> | <code>typing.List[str]</code> | An array of up to three Git repositories associated with the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.defaultCodeRepository">default_code_repository</a></code> | <code>str</code> | The Git repository associated with the notebook instance as its default code repository. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.directInternetAccess">direct_internet_access</a></code> | <code>str</code> | Sets whether SageMaker AI provides internet access to the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.instanceMetadataServiceConfiguration">instance_metadata_service_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a></code> | Information on the IMDS configuration of the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of a AWS Key Management Service key that SageMaker AI uses to encrypt data on the storage volume attached to your notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.lifecycleConfigName">lifecycle_config_name</a></code> | <code>str</code> | The name of a lifecycle configuration to associate with the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.notebookInstanceName">notebook_instance_name</a></code> | <code>str</code> | The name of the new notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.platformIdentifier">platform_identifier</a></code> | <code>str</code> | The platform identifier of the notebook instance runtime environment. The default value is notebook-al2023-v1. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.rootAccess">root_access</a></code> | <code>str</code> | Whether root access is enabled or disabled for users of the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The VPC security group IDs, in the form sg-xxxxxxxx. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | The ID of the subnet in a VPC to which you would like to have a connectivity from your ML compute instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>]</code> | A list of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.volumeSizeInGb">volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | The size, in GB, of the ML storage volume to attach to the notebook instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

The type of ML compute instance to launch for the notebook instance.

Expect some interruption of service if this parameter is changed as CloudFormation stops a notebook instance and starts it up again to update it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#instance_type SagemakerNotebookInstance#instance_type}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

When you send any requests to AWS resources from the notebook instance, SageMaker AI assumes this role to perform tasks on your behalf.

You must grant this role necessary permissions so SageMaker AI can perform these tasks. The policy must allow the SageMaker AI service principal (sagemaker.amazonaws.com) permissions to assume this role. To be able to pass this role to SageMaker AI, the caller of this API must have the iam:PassRole permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#role_arn SagemakerNotebookInstance#role_arn}

---

##### `accelerator_types`<sup>Optional</sup> <a name="accelerator_types" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.acceleratorTypes"></a>

```python
accelerator_types: typing.List[str]
```

- *Type:* typing.List[str]

A list of Amazon Elastic Inference (EI) instance types to associate with the notebook instance.

Currently, only one instance type can be associated with a notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#accelerator_types SagemakerNotebookInstance#accelerator_types}

---

##### `additional_code_repositories`<sup>Optional</sup> <a name="additional_code_repositories" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.additionalCodeRepositories"></a>

```python
additional_code_repositories: typing.List[str]
```

- *Type:* typing.List[str]

An array of up to three Git repositories associated with the notebook instance.

These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in AWS CodeCommit or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#additional_code_repositories SagemakerNotebookInstance#additional_code_repositories}

---

##### `default_code_repository`<sup>Optional</sup> <a name="default_code_repository" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.defaultCodeRepository"></a>

```python
default_code_repository: str
```

- *Type:* str

The Git repository associated with the notebook instance as its default code repository.

This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in AWS CodeCommit or in any other Git repository. When you open a notebook instance, it opens in the directory that contains this repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#default_code_repository SagemakerNotebookInstance#default_code_repository}

---

##### `direct_internet_access`<sup>Optional</sup> <a name="direct_internet_access" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.directInternetAccess"></a>

```python
direct_internet_access: str
```

- *Type:* str

Sets whether SageMaker AI provides internet access to the notebook instance.

If you set this to Disabled this notebook instance is able to access resources only in your VPC, and is not be able to connect to SageMaker AI training and endpoint services unless you configure a NAT Gateway in your VPC. You can set the value of this parameter to Disabled only if you set a value for the SubnetId parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#direct_internet_access SagemakerNotebookInstance#direct_internet_access}

---

##### `instance_metadata_service_configuration`<sup>Optional</sup> <a name="instance_metadata_service_configuration" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.instanceMetadataServiceConfiguration"></a>

```python
instance_metadata_service_configuration: SagemakerNotebookInstanceInstanceMetadataServiceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a>

Information on the IMDS configuration of the notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#instance_metadata_service_configuration SagemakerNotebookInstance#instance_metadata_service_configuration}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The Amazon Resource Name (ARN) of a AWS Key Management Service key that SageMaker AI uses to encrypt data on the storage volume attached to your notebook instance.

The KMS key you provide must be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#kms_key_id SagemakerNotebookInstance#kms_key_id}

---

##### `lifecycle_config_name`<sup>Optional</sup> <a name="lifecycle_config_name" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.lifecycleConfigName"></a>

```python
lifecycle_config_name: str
```

- *Type:* str

The name of a lifecycle configuration to associate with the notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#lifecycle_config_name SagemakerNotebookInstance#lifecycle_config_name}

---

##### `notebook_instance_name`<sup>Optional</sup> <a name="notebook_instance_name" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.notebookInstanceName"></a>

```python
notebook_instance_name: str
```

- *Type:* str

The name of the new notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#notebook_instance_name SagemakerNotebookInstance#notebook_instance_name}

---

##### `platform_identifier`<sup>Optional</sup> <a name="platform_identifier" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.platformIdentifier"></a>

```python
platform_identifier: str
```

- *Type:* str

The platform identifier of the notebook instance runtime environment. The default value is notebook-al2023-v1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#platform_identifier SagemakerNotebookInstance#platform_identifier}

---

##### `root_access`<sup>Optional</sup> <a name="root_access" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.rootAccess"></a>

```python
root_access: str
```

- *Type:* str

Whether root access is enabled or disabled for users of the notebook instance.

The default value is Enabled. Lifecycle configurations need root access to be able to set up a notebook instance. Because of this, lifecycle configurations associated with a notebook instance always run with root access even if you disable root access for users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#root_access SagemakerNotebookInstance#root_access}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

The VPC security group IDs, in the form sg-xxxxxxxx.

The security groups must be for the same VPC as specified in the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#security_group_ids SagemakerNotebookInstance#security_group_ids}

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

The ID of the subnet in a VPC to which you would like to have a connectivity from your ML compute instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#subnet_id SagemakerNotebookInstance#subnet_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SagemakerNotebookInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>]

A list of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#tags SagemakerNotebookInstance#tags}

---

##### `volume_size_in_gb`<sup>Optional</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.volumeSizeInGb"></a>

```python
volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size, in GB, of the ML storage volume to attach to the notebook instance.

The default value is 5 GB. Expect some interruption of service if this parameter is changed as CloudFormation stops a notebook instance and starts it up again to update it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#volume_size_in_gb SagemakerNotebookInstance#volume_size_in_gb}

---

### SagemakerNotebookInstanceInstanceMetadataServiceConfiguration <a name="SagemakerNotebookInstanceInstanceMetadataServiceConfiguration" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_notebook_instance

sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration(
  minimum_instance_metadata_service_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration.property.minimumInstanceMetadataServiceVersion">minimum_instance_metadata_service_version</a></code> | <code>str</code> | Indicates the minimum IMDS version that the notebook instance supports. |

---

##### `minimum_instance_metadata_service_version`<sup>Optional</sup> <a name="minimum_instance_metadata_service_version" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration.property.minimumInstanceMetadataServiceVersion"></a>

```python
minimum_instance_metadata_service_version: str
```

- *Type:* str

Indicates the minimum IMDS version that the notebook instance supports.

When passed as part of CreateNotebookInstance, if no value is selected, then it defaults to IMDSv1. This means that both IMDSv1 and IMDSv2 are supported. If passed as part of UpdateNotebookInstance, there is no default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#minimum_instance_metadata_service_version SagemakerNotebookInstance#minimum_instance_metadata_service_version}

---

### SagemakerNotebookInstanceTags <a name="SagemakerNotebookInstanceTags" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_notebook_instance

sagemakerNotebookInstance.SagemakerNotebookInstanceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags.property.key">key</a></code> | <code>str</code> | The tag key. Tag keys must be unique per resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key. Tag keys must be unique per resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#key SagemakerNotebookInstance#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#value SagemakerNotebookInstance#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference <a name="SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_notebook_instance

sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resetMinimumInstanceMetadataServiceVersion">reset_minimum_instance_metadata_service_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_minimum_instance_metadata_service_version` <a name="reset_minimum_instance_metadata_service_version" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resetMinimumInstanceMetadataServiceVersion"></a>

```python
def reset_minimum_instance_metadata_service_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.minimumInstanceMetadataServiceVersionInput">minimum_instance_metadata_service_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.minimumInstanceMetadataServiceVersion">minimum_instance_metadata_service_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `minimum_instance_metadata_service_version_input`<sup>Optional</sup> <a name="minimum_instance_metadata_service_version_input" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.minimumInstanceMetadataServiceVersionInput"></a>

```python
minimum_instance_metadata_service_version_input: str
```

- *Type:* str

---

##### `minimum_instance_metadata_service_version`<sup>Required</sup> <a name="minimum_instance_metadata_service_version" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.minimumInstanceMetadataServiceVersion"></a>

```python
minimum_instance_metadata_service_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerNotebookInstanceInstanceMetadataServiceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a>

---


### SagemakerNotebookInstanceTagsList <a name="SagemakerNotebookInstanceTagsList" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_notebook_instance

sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerNotebookInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerNotebookInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>]

---


### SagemakerNotebookInstanceTagsOutputReference <a name="SagemakerNotebookInstanceTagsOutputReference" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_notebook_instance

sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerNotebookInstanceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>

---



