# `sagemakerNotebookInstance` Submodule <a name="`sagemakerNotebookInstance` Submodule" id="@cdktn/provider-awscc.sagemakerNotebookInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerNotebookInstance <a name="SagemakerNotebookInstance" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance awscc_sagemaker_notebook_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_notebook_instance.SagemakerNotebookInstance;

SagemakerNotebookInstance.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceType(java.lang.String)
    .roleArn(java.lang.String)
//  .acceleratorTypes(java.util.List<java.lang.String>)
//  .additionalCodeRepositories(java.util.List<java.lang.String>)
//  .defaultCodeRepository(java.lang.String)
//  .directInternetAccess(java.lang.String)
//  .instanceMetadataServiceConfiguration(SagemakerNotebookInstanceInstanceMetadataServiceConfiguration)
//  .kmsKeyId(java.lang.String)
//  .lifecycleConfigName(java.lang.String)
//  .notebookInstanceName(java.lang.String)
//  .platformIdentifier(java.lang.String)
//  .rootAccess(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnetId(java.lang.String)
//  .tags(IResolvable|java.util.List<SagemakerNotebookInstanceTags>)
//  .volumeSizeInGb(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.instanceType">instanceType</a></code> | <code>java.lang.String</code> | The type of ML compute instance to launch for the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | When you send any requests to AWS resources from the notebook instance, SageMaker AI assumes this role to perform tasks on your behalf. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.acceleratorTypes">acceleratorTypes</a></code> | <code>java.util.List<java.lang.String></code> | A list of Amazon Elastic Inference (EI) instance types to associate with the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.additionalCodeRepositories">additionalCodeRepositories</a></code> | <code>java.util.List<java.lang.String></code> | An array of up to three Git repositories associated with the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.defaultCodeRepository">defaultCodeRepository</a></code> | <code>java.lang.String</code> | The Git repository associated with the notebook instance as its default code repository. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.directInternetAccess">directInternetAccess</a></code> | <code>java.lang.String</code> | Sets whether SageMaker AI provides internet access to the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.instanceMetadataServiceConfiguration">instanceMetadataServiceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a></code> | Information on the IMDS configuration of the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of a AWS Key Management Service key that SageMaker AI uses to encrypt data on the storage volume attached to your notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.lifecycleConfigName">lifecycleConfigName</a></code> | <code>java.lang.String</code> | The name of a lifecycle configuration to associate with the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.notebookInstanceName">notebookInstanceName</a></code> | <code>java.lang.String</code> | The name of the new notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.platformIdentifier">platformIdentifier</a></code> | <code>java.lang.String</code> | The platform identifier of the notebook instance runtime environment. The default value is notebook-al2023-v1. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.rootAccess">rootAccess</a></code> | <code>java.lang.String</code> | Whether root access is enabled or disabled for users of the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The VPC security group IDs, in the form sg-xxxxxxxx. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | The ID of the subnet in a VPC to which you would like to have a connectivity from your ML compute instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>></code> | A list of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.volumeSizeInGb">volumeSizeInGb</a></code> | <code>java.lang.Number</code> | The size, in GB, of the ML storage volume to attach to the notebook instance. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.instanceType"></a>

- *Type:* java.lang.String

The type of ML compute instance to launch for the notebook instance.

Expect some interruption of service if this parameter is changed as CloudFormation stops a notebook instance and starts it up again to update it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#instance_type SagemakerNotebookInstance#instance_type}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

When you send any requests to AWS resources from the notebook instance, SageMaker AI assumes this role to perform tasks on your behalf.

You must grant this role necessary permissions so SageMaker AI can perform these tasks. The policy must allow the SageMaker AI service principal (sagemaker.amazonaws.com) permissions to assume this role. To be able to pass this role to SageMaker AI, the caller of this API must have the iam:PassRole permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#role_arn SagemakerNotebookInstance#role_arn}

---

##### `acceleratorTypes`<sup>Optional</sup> <a name="acceleratorTypes" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.acceleratorTypes"></a>

- *Type:* java.util.List<java.lang.String>

A list of Amazon Elastic Inference (EI) instance types to associate with the notebook instance.

Currently, only one instance type can be associated with a notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#accelerator_types SagemakerNotebookInstance#accelerator_types}

---

##### `additionalCodeRepositories`<sup>Optional</sup> <a name="additionalCodeRepositories" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.additionalCodeRepositories"></a>

- *Type:* java.util.List<java.lang.String>

An array of up to three Git repositories associated with the notebook instance.

These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in AWS CodeCommit or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#additional_code_repositories SagemakerNotebookInstance#additional_code_repositories}

---

##### `defaultCodeRepository`<sup>Optional</sup> <a name="defaultCodeRepository" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.defaultCodeRepository"></a>

- *Type:* java.lang.String

The Git repository associated with the notebook instance as its default code repository.

This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in AWS CodeCommit or in any other Git repository. When you open a notebook instance, it opens in the directory that contains this repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#default_code_repository SagemakerNotebookInstance#default_code_repository}

---

##### `directInternetAccess`<sup>Optional</sup> <a name="directInternetAccess" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.directInternetAccess"></a>

- *Type:* java.lang.String

Sets whether SageMaker AI provides internet access to the notebook instance.

If you set this to Disabled this notebook instance is able to access resources only in your VPC, and is not be able to connect to SageMaker AI training and endpoint services unless you configure a NAT Gateway in your VPC. You can set the value of this parameter to Disabled only if you set a value for the SubnetId parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#direct_internet_access SagemakerNotebookInstance#direct_internet_access}

---

##### `instanceMetadataServiceConfiguration`<sup>Optional</sup> <a name="instanceMetadataServiceConfiguration" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.instanceMetadataServiceConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a>

Information on the IMDS configuration of the notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#instance_metadata_service_configuration SagemakerNotebookInstance#instance_metadata_service_configuration}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of a AWS Key Management Service key that SageMaker AI uses to encrypt data on the storage volume attached to your notebook instance.

The KMS key you provide must be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#kms_key_id SagemakerNotebookInstance#kms_key_id}

---

##### `lifecycleConfigName`<sup>Optional</sup> <a name="lifecycleConfigName" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.lifecycleConfigName"></a>

- *Type:* java.lang.String

The name of a lifecycle configuration to associate with the notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#lifecycle_config_name SagemakerNotebookInstance#lifecycle_config_name}

---

##### `notebookInstanceName`<sup>Optional</sup> <a name="notebookInstanceName" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.notebookInstanceName"></a>

- *Type:* java.lang.String

The name of the new notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#notebook_instance_name SagemakerNotebookInstance#notebook_instance_name}

---

##### `platformIdentifier`<sup>Optional</sup> <a name="platformIdentifier" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.platformIdentifier"></a>

- *Type:* java.lang.String

The platform identifier of the notebook instance runtime environment. The default value is notebook-al2023-v1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#platform_identifier SagemakerNotebookInstance#platform_identifier}

---

##### `rootAccess`<sup>Optional</sup> <a name="rootAccess" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.rootAccess"></a>

- *Type:* java.lang.String

Whether root access is enabled or disabled for users of the notebook instance.

The default value is Enabled. Lifecycle configurations need root access to be able to set up a notebook instance. Because of this, lifecycle configurations associated with a notebook instance always run with root access even if you disable root access for users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#root_access SagemakerNotebookInstance#root_access}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.securityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

The VPC security group IDs, in the form sg-xxxxxxxx.

The security groups must be for the same VPC as specified in the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#security_group_ids SagemakerNotebookInstance#security_group_ids}

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

The ID of the subnet in a VPC to which you would like to have a connectivity from your ML compute instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#subnet_id SagemakerNotebookInstance#subnet_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>>

A list of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#tags SagemakerNotebookInstance#tags}

---

##### `volumeSizeInGb`<sup>Optional</sup> <a name="volumeSizeInGb" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.volumeSizeInGb"></a>

- *Type:* java.lang.Number

The size, in GB, of the ML storage volume to attach to the notebook instance.

The default value is 5 GB. Expect some interruption of service if this parameter is changed as CloudFormation stops a notebook instance and starts it up again to update it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#volume_size_in_gb SagemakerNotebookInstance#volume_size_in_gb}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.putInstanceMetadataServiceConfiguration">putInstanceMetadataServiceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetAcceleratorTypes">resetAcceleratorTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetAdditionalCodeRepositories">resetAdditionalCodeRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetDefaultCodeRepository">resetDefaultCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetDirectInternetAccess">resetDirectInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetInstanceMetadataServiceConfiguration">resetInstanceMetadataServiceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetLifecycleConfigName">resetLifecycleConfigName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetNotebookInstanceName">resetNotebookInstanceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetPlatformIdentifier">resetPlatformIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetRootAccess">resetRootAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetVolumeSizeInGb">resetVolumeSizeInGb</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInstanceMetadataServiceConfiguration` <a name="putInstanceMetadataServiceConfiguration" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.putInstanceMetadataServiceConfiguration"></a>

```java
public void putInstanceMetadataServiceConfiguration(SagemakerNotebookInstanceInstanceMetadataServiceConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.putInstanceMetadataServiceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SagemakerNotebookInstanceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>>

---

##### `resetAcceleratorTypes` <a name="resetAcceleratorTypes" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetAcceleratorTypes"></a>

```java
public void resetAcceleratorTypes()
```

##### `resetAdditionalCodeRepositories` <a name="resetAdditionalCodeRepositories" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetAdditionalCodeRepositories"></a>

```java
public void resetAdditionalCodeRepositories()
```

##### `resetDefaultCodeRepository` <a name="resetDefaultCodeRepository" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetDefaultCodeRepository"></a>

```java
public void resetDefaultCodeRepository()
```

##### `resetDirectInternetAccess` <a name="resetDirectInternetAccess" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetDirectInternetAccess"></a>

```java
public void resetDirectInternetAccess()
```

##### `resetInstanceMetadataServiceConfiguration` <a name="resetInstanceMetadataServiceConfiguration" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetInstanceMetadataServiceConfiguration"></a>

```java
public void resetInstanceMetadataServiceConfiguration()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetLifecycleConfigName` <a name="resetLifecycleConfigName" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetLifecycleConfigName"></a>

```java
public void resetLifecycleConfigName()
```

##### `resetNotebookInstanceName` <a name="resetNotebookInstanceName" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetNotebookInstanceName"></a>

```java
public void resetNotebookInstanceName()
```

##### `resetPlatformIdentifier` <a name="resetPlatformIdentifier" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetPlatformIdentifier"></a>

```java
public void resetPlatformIdentifier()
```

##### `resetRootAccess` <a name="resetRootAccess" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetRootAccess"></a>

```java
public void resetRootAccess()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetTags"></a>

```java
public void resetTags()
```

##### `resetVolumeSizeInGb` <a name="resetVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetVolumeSizeInGb"></a>

```java
public void resetVolumeSizeInGb()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerNotebookInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.isConstruct"></a>

```java
import io.cdktn.providers.awscc.sagemaker_notebook_instance.SagemakerNotebookInstance;

SagemakerNotebookInstance.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.sagemaker_notebook_instance.SagemakerNotebookInstance;

SagemakerNotebookInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.sagemaker_notebook_instance.SagemakerNotebookInstance;

SagemakerNotebookInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.sagemaker_notebook_instance.SagemakerNotebookInstance;

SagemakerNotebookInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SagemakerNotebookInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SagemakerNotebookInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SagemakerNotebookInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SagemakerNotebookInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerNotebookInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceMetadataServiceConfiguration">instanceMetadataServiceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference">SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.notebookInstanceArn">notebookInstanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList">SagemakerNotebookInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.acceleratorTypesInput">acceleratorTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.additionalCodeRepositoriesInput">additionalCodeRepositoriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.defaultCodeRepositoryInput">defaultCodeRepositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.directInternetAccessInput">directInternetAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceMetadataServiceConfigurationInput">instanceMetadataServiceConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycleConfigNameInput">lifecycleConfigNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.notebookInstanceNameInput">notebookInstanceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.platformIdentifierInput">platformIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.rootAccessInput">rootAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.volumeSizeInGbInput">volumeSizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.acceleratorTypes">acceleratorTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.additionalCodeRepositories">additionalCodeRepositories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.defaultCodeRepository">defaultCodeRepository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.directInternetAccess">directInternetAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycleConfigName">lifecycleConfigName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.notebookInstanceName">notebookInstanceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.platformIdentifier">platformIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.rootAccess">rootAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceMetadataServiceConfiguration`<sup>Required</sup> <a name="instanceMetadataServiceConfiguration" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceMetadataServiceConfiguration"></a>

```java
public SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference getInstanceMetadataServiceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference">SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference</a>

---

##### `notebookInstanceArn`<sup>Required</sup> <a name="notebookInstanceArn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.notebookInstanceArn"></a>

```java
public java.lang.String getNotebookInstanceArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tags"></a>

```java
public SagemakerNotebookInstanceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList">SagemakerNotebookInstanceTagsList</a>

---

##### `acceleratorTypesInput`<sup>Optional</sup> <a name="acceleratorTypesInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.acceleratorTypesInput"></a>

```java
public java.util.List<java.lang.String> getAcceleratorTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `additionalCodeRepositoriesInput`<sup>Optional</sup> <a name="additionalCodeRepositoriesInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.additionalCodeRepositoriesInput"></a>

```java
public java.util.List<java.lang.String> getAdditionalCodeRepositoriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultCodeRepositoryInput`<sup>Optional</sup> <a name="defaultCodeRepositoryInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.defaultCodeRepositoryInput"></a>

```java
public java.lang.String getDefaultCodeRepositoryInput();
```

- *Type:* java.lang.String

---

##### `directInternetAccessInput`<sup>Optional</sup> <a name="directInternetAccessInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.directInternetAccessInput"></a>

```java
public java.lang.String getDirectInternetAccessInput();
```

- *Type:* java.lang.String

---

##### `instanceMetadataServiceConfigurationInput`<sup>Optional</sup> <a name="instanceMetadataServiceConfigurationInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceMetadataServiceConfigurationInput"></a>

```java
public IResolvable|SagemakerNotebookInstanceInstanceMetadataServiceConfiguration getInstanceMetadataServiceConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a>

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigNameInput`<sup>Optional</sup> <a name="lifecycleConfigNameInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycleConfigNameInput"></a>

```java
public java.lang.String getLifecycleConfigNameInput();
```

- *Type:* java.lang.String

---

##### `notebookInstanceNameInput`<sup>Optional</sup> <a name="notebookInstanceNameInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.notebookInstanceNameInput"></a>

```java
public java.lang.String getNotebookInstanceNameInput();
```

- *Type:* java.lang.String

---

##### `platformIdentifierInput`<sup>Optional</sup> <a name="platformIdentifierInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.platformIdentifierInput"></a>

```java
public java.lang.String getPlatformIdentifierInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `rootAccessInput`<sup>Optional</sup> <a name="rootAccessInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.rootAccessInput"></a>

```java
public java.lang.String getRootAccessInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SagemakerNotebookInstanceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>>

---

##### `volumeSizeInGbInput`<sup>Optional</sup> <a name="volumeSizeInGbInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.volumeSizeInGbInput"></a>

```java
public java.lang.Number getVolumeSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `acceleratorTypes`<sup>Required</sup> <a name="acceleratorTypes" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.acceleratorTypes"></a>

```java
public java.util.List<java.lang.String> getAcceleratorTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `additionalCodeRepositories`<sup>Required</sup> <a name="additionalCodeRepositories" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.additionalCodeRepositories"></a>

```java
public java.util.List<java.lang.String> getAdditionalCodeRepositories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultCodeRepository`<sup>Required</sup> <a name="defaultCodeRepository" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.defaultCodeRepository"></a>

```java
public java.lang.String getDefaultCodeRepository();
```

- *Type:* java.lang.String

---

##### `directInternetAccess`<sup>Required</sup> <a name="directInternetAccess" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.directInternetAccess"></a>

```java
public java.lang.String getDirectInternetAccess();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigName`<sup>Required</sup> <a name="lifecycleConfigName" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycleConfigName"></a>

```java
public java.lang.String getLifecycleConfigName();
```

- *Type:* java.lang.String

---

##### `notebookInstanceName`<sup>Required</sup> <a name="notebookInstanceName" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.notebookInstanceName"></a>

```java
public java.lang.String getNotebookInstanceName();
```

- *Type:* java.lang.String

---

##### `platformIdentifier`<sup>Required</sup> <a name="platformIdentifier" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.platformIdentifier"></a>

```java
public java.lang.String getPlatformIdentifier();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `rootAccess`<sup>Required</sup> <a name="rootAccess" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.rootAccess"></a>

```java
public java.lang.String getRootAccess();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `volumeSizeInGb`<sup>Required</sup> <a name="volumeSizeInGb" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.volumeSizeInGb"></a>

```java
public java.lang.Number getVolumeSizeInGb();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerNotebookInstanceConfig <a name="SagemakerNotebookInstanceConfig" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_notebook_instance.SagemakerNotebookInstanceConfig;

SagemakerNotebookInstanceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceType(java.lang.String)
    .roleArn(java.lang.String)
//  .acceleratorTypes(java.util.List<java.lang.String>)
//  .additionalCodeRepositories(java.util.List<java.lang.String>)
//  .defaultCodeRepository(java.lang.String)
//  .directInternetAccess(java.lang.String)
//  .instanceMetadataServiceConfiguration(SagemakerNotebookInstanceInstanceMetadataServiceConfiguration)
//  .kmsKeyId(java.lang.String)
//  .lifecycleConfigName(java.lang.String)
//  .notebookInstanceName(java.lang.String)
//  .platformIdentifier(java.lang.String)
//  .rootAccess(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnetId(java.lang.String)
//  .tags(IResolvable|java.util.List<SagemakerNotebookInstanceTags>)
//  .volumeSizeInGb(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | The type of ML compute instance to launch for the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | When you send any requests to AWS resources from the notebook instance, SageMaker AI assumes this role to perform tasks on your behalf. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.acceleratorTypes">acceleratorTypes</a></code> | <code>java.util.List<java.lang.String></code> | A list of Amazon Elastic Inference (EI) instance types to associate with the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.additionalCodeRepositories">additionalCodeRepositories</a></code> | <code>java.util.List<java.lang.String></code> | An array of up to three Git repositories associated with the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.defaultCodeRepository">defaultCodeRepository</a></code> | <code>java.lang.String</code> | The Git repository associated with the notebook instance as its default code repository. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.directInternetAccess">directInternetAccess</a></code> | <code>java.lang.String</code> | Sets whether SageMaker AI provides internet access to the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.instanceMetadataServiceConfiguration">instanceMetadataServiceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a></code> | Information on the IMDS configuration of the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of a AWS Key Management Service key that SageMaker AI uses to encrypt data on the storage volume attached to your notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.lifecycleConfigName">lifecycleConfigName</a></code> | <code>java.lang.String</code> | The name of a lifecycle configuration to associate with the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.notebookInstanceName">notebookInstanceName</a></code> | <code>java.lang.String</code> | The name of the new notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.platformIdentifier">platformIdentifier</a></code> | <code>java.lang.String</code> | The platform identifier of the notebook instance runtime environment. The default value is notebook-al2023-v1. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.rootAccess">rootAccess</a></code> | <code>java.lang.String</code> | Whether root access is enabled or disabled for users of the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The VPC security group IDs, in the form sg-xxxxxxxx. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | The ID of the subnet in a VPC to which you would like to have a connectivity from your ML compute instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>></code> | A list of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>java.lang.Number</code> | The size, in GB, of the ML storage volume to attach to the notebook instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

The type of ML compute instance to launch for the notebook instance.

Expect some interruption of service if this parameter is changed as CloudFormation stops a notebook instance and starts it up again to update it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#instance_type SagemakerNotebookInstance#instance_type}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

When you send any requests to AWS resources from the notebook instance, SageMaker AI assumes this role to perform tasks on your behalf.

You must grant this role necessary permissions so SageMaker AI can perform these tasks. The policy must allow the SageMaker AI service principal (sagemaker.amazonaws.com) permissions to assume this role. To be able to pass this role to SageMaker AI, the caller of this API must have the iam:PassRole permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#role_arn SagemakerNotebookInstance#role_arn}

---

##### `acceleratorTypes`<sup>Optional</sup> <a name="acceleratorTypes" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.acceleratorTypes"></a>

```java
public java.util.List<java.lang.String> getAcceleratorTypes();
```

- *Type:* java.util.List<java.lang.String>

A list of Amazon Elastic Inference (EI) instance types to associate with the notebook instance.

Currently, only one instance type can be associated with a notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#accelerator_types SagemakerNotebookInstance#accelerator_types}

---

##### `additionalCodeRepositories`<sup>Optional</sup> <a name="additionalCodeRepositories" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.additionalCodeRepositories"></a>

```java
public java.util.List<java.lang.String> getAdditionalCodeRepositories();
```

- *Type:* java.util.List<java.lang.String>

An array of up to three Git repositories associated with the notebook instance.

These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in AWS CodeCommit or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#additional_code_repositories SagemakerNotebookInstance#additional_code_repositories}

---

##### `defaultCodeRepository`<sup>Optional</sup> <a name="defaultCodeRepository" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.defaultCodeRepository"></a>

```java
public java.lang.String getDefaultCodeRepository();
```

- *Type:* java.lang.String

The Git repository associated with the notebook instance as its default code repository.

This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in AWS CodeCommit or in any other Git repository. When you open a notebook instance, it opens in the directory that contains this repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#default_code_repository SagemakerNotebookInstance#default_code_repository}

---

##### `directInternetAccess`<sup>Optional</sup> <a name="directInternetAccess" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.directInternetAccess"></a>

```java
public java.lang.String getDirectInternetAccess();
```

- *Type:* java.lang.String

Sets whether SageMaker AI provides internet access to the notebook instance.

If you set this to Disabled this notebook instance is able to access resources only in your VPC, and is not be able to connect to SageMaker AI training and endpoint services unless you configure a NAT Gateway in your VPC. You can set the value of this parameter to Disabled only if you set a value for the SubnetId parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#direct_internet_access SagemakerNotebookInstance#direct_internet_access}

---

##### `instanceMetadataServiceConfiguration`<sup>Optional</sup> <a name="instanceMetadataServiceConfiguration" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.instanceMetadataServiceConfiguration"></a>

```java
public SagemakerNotebookInstanceInstanceMetadataServiceConfiguration getInstanceMetadataServiceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a>

Information on the IMDS configuration of the notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#instance_metadata_service_configuration SagemakerNotebookInstance#instance_metadata_service_configuration}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of a AWS Key Management Service key that SageMaker AI uses to encrypt data on the storage volume attached to your notebook instance.

The KMS key you provide must be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#kms_key_id SagemakerNotebookInstance#kms_key_id}

---

##### `lifecycleConfigName`<sup>Optional</sup> <a name="lifecycleConfigName" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.lifecycleConfigName"></a>

```java
public java.lang.String getLifecycleConfigName();
```

- *Type:* java.lang.String

The name of a lifecycle configuration to associate with the notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#lifecycle_config_name SagemakerNotebookInstance#lifecycle_config_name}

---

##### `notebookInstanceName`<sup>Optional</sup> <a name="notebookInstanceName" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.notebookInstanceName"></a>

```java
public java.lang.String getNotebookInstanceName();
```

- *Type:* java.lang.String

The name of the new notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#notebook_instance_name SagemakerNotebookInstance#notebook_instance_name}

---

##### `platformIdentifier`<sup>Optional</sup> <a name="platformIdentifier" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.platformIdentifier"></a>

```java
public java.lang.String getPlatformIdentifier();
```

- *Type:* java.lang.String

The platform identifier of the notebook instance runtime environment. The default value is notebook-al2023-v1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#platform_identifier SagemakerNotebookInstance#platform_identifier}

---

##### `rootAccess`<sup>Optional</sup> <a name="rootAccess" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.rootAccess"></a>

```java
public java.lang.String getRootAccess();
```

- *Type:* java.lang.String

Whether root access is enabled or disabled for users of the notebook instance.

The default value is Enabled. Lifecycle configurations need root access to be able to set up a notebook instance. Because of this, lifecycle configurations associated with a notebook instance always run with root access even if you disable root access for users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#root_access SagemakerNotebookInstance#root_access}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

The VPC security group IDs, in the form sg-xxxxxxxx.

The security groups must be for the same VPC as specified in the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#security_group_ids SagemakerNotebookInstance#security_group_ids}

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

The ID of the subnet in a VPC to which you would like to have a connectivity from your ML compute instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#subnet_id SagemakerNotebookInstance#subnet_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SagemakerNotebookInstanceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>>

A list of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#tags SagemakerNotebookInstance#tags}

---

##### `volumeSizeInGb`<sup>Optional</sup> <a name="volumeSizeInGb" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.volumeSizeInGb"></a>

```java
public java.lang.Number getVolumeSizeInGb();
```

- *Type:* java.lang.Number

The size, in GB, of the ML storage volume to attach to the notebook instance.

The default value is 5 GB. Expect some interruption of service if this parameter is changed as CloudFormation stops a notebook instance and starts it up again to update it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#volume_size_in_gb SagemakerNotebookInstance#volume_size_in_gb}

---

### SagemakerNotebookInstanceInstanceMetadataServiceConfiguration <a name="SagemakerNotebookInstanceInstanceMetadataServiceConfiguration" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_notebook_instance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration;

SagemakerNotebookInstanceInstanceMetadataServiceConfiguration.builder()
//  .minimumInstanceMetadataServiceVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration.property.minimumInstanceMetadataServiceVersion">minimumInstanceMetadataServiceVersion</a></code> | <code>java.lang.String</code> | Indicates the minimum IMDS version that the notebook instance supports. |

---

##### `minimumInstanceMetadataServiceVersion`<sup>Optional</sup> <a name="minimumInstanceMetadataServiceVersion" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration.property.minimumInstanceMetadataServiceVersion"></a>

```java
public java.lang.String getMinimumInstanceMetadataServiceVersion();
```

- *Type:* java.lang.String

Indicates the minimum IMDS version that the notebook instance supports.

When passed as part of CreateNotebookInstance, if no value is selected, then it defaults to IMDSv1. This means that both IMDSv1 and IMDSv2 are supported. If passed as part of UpdateNotebookInstance, there is no default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#minimum_instance_metadata_service_version SagemakerNotebookInstance#minimum_instance_metadata_service_version}

---

### SagemakerNotebookInstanceTags <a name="SagemakerNotebookInstanceTags" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_notebook_instance.SagemakerNotebookInstanceTags;

SagemakerNotebookInstanceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag key. Tag keys must be unique per resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag key. Tag keys must be unique per resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#key SagemakerNotebookInstance#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#value SagemakerNotebookInstance#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference <a name="SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_notebook_instance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference;

new SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resetMinimumInstanceMetadataServiceVersion">resetMinimumInstanceMetadataServiceVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinimumInstanceMetadataServiceVersion` <a name="resetMinimumInstanceMetadataServiceVersion" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resetMinimumInstanceMetadataServiceVersion"></a>

```java
public void resetMinimumInstanceMetadataServiceVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.minimumInstanceMetadataServiceVersionInput">minimumInstanceMetadataServiceVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.minimumInstanceMetadataServiceVersion">minimumInstanceMetadataServiceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `minimumInstanceMetadataServiceVersionInput`<sup>Optional</sup> <a name="minimumInstanceMetadataServiceVersionInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.minimumInstanceMetadataServiceVersionInput"></a>

```java
public java.lang.String getMinimumInstanceMetadataServiceVersionInput();
```

- *Type:* java.lang.String

---

##### `minimumInstanceMetadataServiceVersion`<sup>Required</sup> <a name="minimumInstanceMetadataServiceVersion" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.minimumInstanceMetadataServiceVersion"></a>

```java
public java.lang.String getMinimumInstanceMetadataServiceVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerNotebookInstanceInstanceMetadataServiceConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a>

---


### SagemakerNotebookInstanceTagsList <a name="SagemakerNotebookInstanceTagsList" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_notebook_instance.SagemakerNotebookInstanceTagsList;

new SagemakerNotebookInstanceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.get"></a>

```java
public SagemakerNotebookInstanceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerNotebookInstanceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>>

---


### SagemakerNotebookInstanceTagsOutputReference <a name="SagemakerNotebookInstanceTagsOutputReference" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_notebook_instance.SagemakerNotebookInstanceTagsOutputReference;

new SagemakerNotebookInstanceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerNotebookInstanceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>

---



