# `eksCluster` Submodule <a name="`eksCluster` Submodule" id="@cdktn/provider-awscc.eksCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksCluster <a name="EksCluster" id="@cdktn/provider-awscc.eksCluster.EksCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster awscc_eks_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksCluster;

EksCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .resourcesVpcConfig(EksClusterResourcesVpcConfig)
    .roleArn(java.lang.String)
//  .accessConfig(EksClusterAccessConfig)
//  .bootstrapSelfManagedAddons(java.lang.Boolean|IResolvable)
//  .computeConfig(EksClusterComputeConfig)
//  .controlPlaneScalingConfig(EksClusterControlPlaneScalingConfig)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .encryptionConfig(IResolvable|java.util.List<EksClusterEncryptionConfig>)
//  .force(java.lang.Boolean|IResolvable)
//  .kubeApiServerConfig(EksClusterKubeApiServerConfig)
//  .kubeControllerManagerConfig(EksClusterKubeControllerManagerConfig)
//  .kubernetesNetworkConfig(EksClusterKubernetesNetworkConfig)
//  .kubeSchedulerConfig(EksClusterKubeSchedulerConfig)
//  .logging(EksClusterLogging)
//  .name(java.lang.String)
//  .outpostConfig(EksClusterOutpostConfig)
//  .remoteNetworkConfig(EksClusterRemoteNetworkConfig)
//  .rollbackConfig(EksClusterRollbackConfig)
//  .storageConfig(EksClusterStorageConfig)
//  .tags(IResolvable|java.util.List<EksClusterTags>)
//  .upgradePolicy(EksClusterUpgradePolicy)
//  .version(java.lang.String)
//  .zonalShiftConfig(EksClusterZonalShiftConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.resourcesVpcConfig">resourcesVpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig">EksClusterResourcesVpcConfig</a></code> | An object representing the VPC configuration to use for an Amazon EKS cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.accessConfig">accessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a></code> | An object representing the Access Config to use for the cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.bootstrapSelfManagedAddons">bootstrapSelfManagedAddons</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set this value to false to avoid creating the default networking add-ons when the cluster is created. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.computeConfig">computeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a></code> | Todo: add description. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.controlPlaneScalingConfig">controlPlaneScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfig">EksClusterControlPlaneScalingConfig</a></code> | Configuration for provisioned control plane scaling. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set this value to true to enable deletion protection for the cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.encryptionConfig">encryptionConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#encryption_config EksCluster#encryption_config}. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.force">force</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Force cluster version update. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.kubeApiServerConfig">kubeApiServerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig">EksClusterKubeApiServerConfig</a></code> | The configuration for the Kubernetes API server on an Amazon EKS cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.kubeControllerManagerConfig">kubeControllerManagerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfig">EksClusterKubeControllerManagerConfig</a></code> | The configuration for the Kubernetes controller manager on an Amazon EKS cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.kubernetesNetworkConfig">kubernetesNetworkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a></code> | The Kubernetes network configuration for the cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.kubeSchedulerConfig">kubeSchedulerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfig">EksClusterKubeSchedulerConfig</a></code> | The configuration for the Kubernetes scheduler on an Amazon EKS cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.logging">logging</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLogging">EksClusterLogging</a></code> | Enable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs based on log types. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The unique name to give to your cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.outpostConfig">outpostConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a></code> | An object representing the Outpost configuration to use for AWS EKS outpost cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.remoteNetworkConfig">remoteNetworkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a></code> | Configuration fields for specifying on-premises node and pod CIDRs that are external to the VPC passed during cluster creation. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.rollbackConfig">rollbackConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfig">EksClusterRollbackConfig</a></code> | The rollback configuration to use for the cluster version rollback. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.storageConfig">storageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a></code> | Todo: add description. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterTags">EksClusterTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.upgradePolicy">upgradePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a></code> | An object representing the Upgrade Policy to use for the cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | The desired Kubernetes version for your cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.zonalShiftConfig">zonalShiftConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a></code> | The current zonal shift configuration to use for the cluster. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `resourcesVpcConfig`<sup>Required</sup> <a name="resourcesVpcConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.resourcesVpcConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig">EksClusterResourcesVpcConfig</a>

An object representing the VPC configuration to use for an Amazon EKS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#resources_vpc_config EksCluster#resources_vpc_config}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#role_arn EksCluster#role_arn}

---

##### `accessConfig`<sup>Optional</sup> <a name="accessConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.accessConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a>

An object representing the Access Config to use for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#access_config EksCluster#access_config}

---

##### `bootstrapSelfManagedAddons`<sup>Optional</sup> <a name="bootstrapSelfManagedAddons" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.bootstrapSelfManagedAddons"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set this value to false to avoid creating the default networking add-ons when the cluster is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#bootstrap_self_managed_addons EksCluster#bootstrap_self_managed_addons}

---

##### `computeConfig`<sup>Optional</sup> <a name="computeConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.computeConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a>

Todo: add description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#compute_config EksCluster#compute_config}

---

##### `controlPlaneScalingConfig`<sup>Optional</sup> <a name="controlPlaneScalingConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.controlPlaneScalingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfig">EksClusterControlPlaneScalingConfig</a>

Configuration for provisioned control plane scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#control_plane_scaling_config EksCluster#control_plane_scaling_config}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set this value to true to enable deletion protection for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#deletion_protection EksCluster#deletion_protection}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.encryptionConfig"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#encryption_config EksCluster#encryption_config}.

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.force"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Force cluster version update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#force EksCluster#force}

---

##### `kubeApiServerConfig`<sup>Optional</sup> <a name="kubeApiServerConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.kubeApiServerConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig">EksClusterKubeApiServerConfig</a>

The configuration for the Kubernetes API server on an Amazon EKS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#kube_api_server_config EksCluster#kube_api_server_config}

---

##### `kubeControllerManagerConfig`<sup>Optional</sup> <a name="kubeControllerManagerConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.kubeControllerManagerConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfig">EksClusterKubeControllerManagerConfig</a>

The configuration for the Kubernetes controller manager on an Amazon EKS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#kube_controller_manager_config EksCluster#kube_controller_manager_config}

---

##### `kubernetesNetworkConfig`<sup>Optional</sup> <a name="kubernetesNetworkConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.kubernetesNetworkConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a>

The Kubernetes network configuration for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#kubernetes_network_config EksCluster#kubernetes_network_config}

---

##### `kubeSchedulerConfig`<sup>Optional</sup> <a name="kubeSchedulerConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.kubeSchedulerConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfig">EksClusterKubeSchedulerConfig</a>

The configuration for the Kubernetes scheduler on an Amazon EKS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#kube_scheduler_config EksCluster#kube_scheduler_config}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.logging"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterLogging">EksClusterLogging</a>

Enable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs based on log types.

By default, cluster control plane logs aren't exported to CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#logging EksCluster#logging}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The unique name to give to your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#name EksCluster#name}

---

##### `outpostConfig`<sup>Optional</sup> <a name="outpostConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.outpostConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a>

An object representing the Outpost configuration to use for AWS EKS outpost cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#outpost_config EksCluster#outpost_config}

---

##### `remoteNetworkConfig`<sup>Optional</sup> <a name="remoteNetworkConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.remoteNetworkConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a>

Configuration fields for specifying on-premises node and pod CIDRs that are external to the VPC passed during cluster creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#remote_network_config EksCluster#remote_network_config}

---

##### `rollbackConfig`<sup>Optional</sup> <a name="rollbackConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.rollbackConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfig">EksClusterRollbackConfig</a>

The rollback configuration to use for the cluster version rollback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#rollback_config EksCluster#rollback_config}

---

##### `storageConfig`<sup>Optional</sup> <a name="storageConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.storageConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a>

Todo: add description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#storage_config EksCluster#storage_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterTags">EksClusterTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#tags EksCluster#tags}

---

##### `upgradePolicy`<sup>Optional</sup> <a name="upgradePolicy" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.upgradePolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a>

An object representing the Upgrade Policy to use for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#upgrade_policy EksCluster#upgrade_policy}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.version"></a>

- *Type:* java.lang.String

The desired Kubernetes version for your cluster.

If you don't specify a value here, the latest version available in Amazon EKS is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#version EksCluster#version}

---

##### `zonalShiftConfig`<sup>Optional</sup> <a name="zonalShiftConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.zonalShiftConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a>

The current zonal shift configuration to use for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#zonal_shift_config EksCluster#zonal_shift_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putAccessConfig">putAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putComputeConfig">putComputeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putControlPlaneScalingConfig">putControlPlaneScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putKubeApiServerConfig">putKubeApiServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putKubeControllerManagerConfig">putKubeControllerManagerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putKubernetesNetworkConfig">putKubernetesNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putKubeSchedulerConfig">putKubeSchedulerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putLogging">putLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putOutpostConfig">putOutpostConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putRemoteNetworkConfig">putRemoteNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putResourcesVpcConfig">putResourcesVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putRollbackConfig">putRollbackConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putStorageConfig">putStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putUpgradePolicy">putUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putZonalShiftConfig">putZonalShiftConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetAccessConfig">resetAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetBootstrapSelfManagedAddons">resetBootstrapSelfManagedAddons</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetComputeConfig">resetComputeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetControlPlaneScalingConfig">resetControlPlaneScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetForce">resetForce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetKubeApiServerConfig">resetKubeApiServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetKubeControllerManagerConfig">resetKubeControllerManagerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetKubernetesNetworkConfig">resetKubernetesNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetKubeSchedulerConfig">resetKubeSchedulerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetLogging">resetLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetOutpostConfig">resetOutpostConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetRemoteNetworkConfig">resetRemoteNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetRollbackConfig">resetRollbackConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetStorageConfig">resetStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetUpgradePolicy">resetUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetZonalShiftConfig">resetZonalShiftConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.eksCluster.EksCluster.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.eksCluster.EksCluster.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.eksCluster.EksCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.eksCluster.EksCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.eksCluster.EksCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.eksCluster.EksCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.eksCluster.EksCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.eksCluster.EksCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.eksCluster.EksCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.eksCluster.EksCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eksCluster.EksCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.eksCluster.EksCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.eksCluster.EksCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksCluster.EksCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksCluster.EksCluster.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.eksCluster.EksCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksCluster.EksCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.eksCluster.EksCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eksCluster.EksCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.eksCluster.EksCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.eksCluster.EksCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksCluster.EksCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessConfig` <a name="putAccessConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putAccessConfig"></a>

```java
public void putAccessConfig(EksClusterAccessConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a>

---

##### `putComputeConfig` <a name="putComputeConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putComputeConfig"></a>

```java
public void putComputeConfig(EksClusterComputeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putComputeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a>

---

##### `putControlPlaneScalingConfig` <a name="putControlPlaneScalingConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putControlPlaneScalingConfig"></a>

```java
public void putControlPlaneScalingConfig(EksClusterControlPlaneScalingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putControlPlaneScalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfig">EksClusterControlPlaneScalingConfig</a>

---

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putEncryptionConfig"></a>

```java
public void putEncryptionConfig(IResolvable|java.util.List<EksClusterEncryptionConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putEncryptionConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>>

---

##### `putKubeApiServerConfig` <a name="putKubeApiServerConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putKubeApiServerConfig"></a>

```java
public void putKubeApiServerConfig(EksClusterKubeApiServerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putKubeApiServerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig">EksClusterKubeApiServerConfig</a>

---

##### `putKubeControllerManagerConfig` <a name="putKubeControllerManagerConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putKubeControllerManagerConfig"></a>

```java
public void putKubeControllerManagerConfig(EksClusterKubeControllerManagerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putKubeControllerManagerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfig">EksClusterKubeControllerManagerConfig</a>

---

##### `putKubernetesNetworkConfig` <a name="putKubernetesNetworkConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putKubernetesNetworkConfig"></a>

```java
public void putKubernetesNetworkConfig(EksClusterKubernetesNetworkConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putKubernetesNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a>

---

##### `putKubeSchedulerConfig` <a name="putKubeSchedulerConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putKubeSchedulerConfig"></a>

```java
public void putKubeSchedulerConfig(EksClusterKubeSchedulerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putKubeSchedulerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfig">EksClusterKubeSchedulerConfig</a>

---

##### `putLogging` <a name="putLogging" id="@cdktn/provider-awscc.eksCluster.EksCluster.putLogging"></a>

```java
public void putLogging(EksClusterLogging value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterLogging">EksClusterLogging</a>

---

##### `putOutpostConfig` <a name="putOutpostConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putOutpostConfig"></a>

```java
public void putOutpostConfig(EksClusterOutpostConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putOutpostConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a>

---

##### `putRemoteNetworkConfig` <a name="putRemoteNetworkConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putRemoteNetworkConfig"></a>

```java
public void putRemoteNetworkConfig(EksClusterRemoteNetworkConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putRemoteNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a>

---

##### `putResourcesVpcConfig` <a name="putResourcesVpcConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putResourcesVpcConfig"></a>

```java
public void putResourcesVpcConfig(EksClusterResourcesVpcConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putResourcesVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig">EksClusterResourcesVpcConfig</a>

---

##### `putRollbackConfig` <a name="putRollbackConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putRollbackConfig"></a>

```java
public void putRollbackConfig(EksClusterRollbackConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putRollbackConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfig">EksClusterRollbackConfig</a>

---

##### `putStorageConfig` <a name="putStorageConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putStorageConfig"></a>

```java
public void putStorageConfig(EksClusterStorageConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.eksCluster.EksCluster.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<EksClusterTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterTags">EksClusterTags</a>>

---

##### `putUpgradePolicy` <a name="putUpgradePolicy" id="@cdktn/provider-awscc.eksCluster.EksCluster.putUpgradePolicy"></a>

```java
public void putUpgradePolicy(EksClusterUpgradePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putUpgradePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a>

---

##### `putZonalShiftConfig` <a name="putZonalShiftConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putZonalShiftConfig"></a>

```java
public void putZonalShiftConfig(EksClusterZonalShiftConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putZonalShiftConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a>

---

##### `resetAccessConfig` <a name="resetAccessConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetAccessConfig"></a>

```java
public void resetAccessConfig()
```

##### `resetBootstrapSelfManagedAddons` <a name="resetBootstrapSelfManagedAddons" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetBootstrapSelfManagedAddons"></a>

```java
public void resetBootstrapSelfManagedAddons()
```

##### `resetComputeConfig` <a name="resetComputeConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetComputeConfig"></a>

```java
public void resetComputeConfig()
```

##### `resetControlPlaneScalingConfig` <a name="resetControlPlaneScalingConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetControlPlaneScalingConfig"></a>

```java
public void resetControlPlaneScalingConfig()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetEncryptionConfig"></a>

```java
public void resetEncryptionConfig()
```

##### `resetForce` <a name="resetForce" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetForce"></a>

```java
public void resetForce()
```

##### `resetKubeApiServerConfig` <a name="resetKubeApiServerConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetKubeApiServerConfig"></a>

```java
public void resetKubeApiServerConfig()
```

##### `resetKubeControllerManagerConfig` <a name="resetKubeControllerManagerConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetKubeControllerManagerConfig"></a>

```java
public void resetKubeControllerManagerConfig()
```

##### `resetKubernetesNetworkConfig` <a name="resetKubernetesNetworkConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetKubernetesNetworkConfig"></a>

```java
public void resetKubernetesNetworkConfig()
```

##### `resetKubeSchedulerConfig` <a name="resetKubeSchedulerConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetKubeSchedulerConfig"></a>

```java
public void resetKubeSchedulerConfig()
```

##### `resetLogging` <a name="resetLogging" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetLogging"></a>

```java
public void resetLogging()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetName"></a>

```java
public void resetName()
```

##### `resetOutpostConfig` <a name="resetOutpostConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetOutpostConfig"></a>

```java
public void resetOutpostConfig()
```

##### `resetRemoteNetworkConfig` <a name="resetRemoteNetworkConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetRemoteNetworkConfig"></a>

```java
public void resetRemoteNetworkConfig()
```

##### `resetRollbackConfig` <a name="resetRollbackConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetRollbackConfig"></a>

```java
public void resetRollbackConfig()
```

##### `resetStorageConfig` <a name="resetStorageConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetStorageConfig"></a>

```java
public void resetStorageConfig()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetUpgradePolicy` <a name="resetUpgradePolicy" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetUpgradePolicy"></a>

```java
public void resetUpgradePolicy()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetVersion"></a>

```java
public void resetVersion()
```

##### `resetZonalShiftConfig` <a name="resetZonalShiftConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetZonalShiftConfig"></a>

```java
public void resetZonalShiftConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EksCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.eksCluster.EksCluster.isConstruct"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksCluster;

EksCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eksCluster.EksCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.eksCluster.EksCluster.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksCluster;

EksCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eksCluster.EksCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.eksCluster.EksCluster.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksCluster;

EksCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eksCluster.EksCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.eksCluster.EksCluster.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksCluster;

EksCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EksCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EksCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eksCluster.EksCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.eksCluster.EksCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EksCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.eksCluster.EksCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EksCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksCluster.EksCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EksCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference">EksClusterAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.certificateAuthorityData">certificateAuthorityData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.clusterSecurityGroupId">clusterSecurityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.computeConfig">computeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference">EksClusterComputeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.controlPlaneScalingConfig">controlPlaneScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference">EksClusterControlPlaneScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList">EksClusterEncryptionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.encryptionConfigKeyArn">encryptionConfigKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.kubeApiServerConfig">kubeApiServerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference">EksClusterKubeApiServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.kubeControllerManagerConfig">kubeControllerManagerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference">EksClusterKubeControllerManagerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.kubernetesNetworkConfig">kubernetesNetworkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference">EksClusterKubernetesNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.kubeSchedulerConfig">kubeSchedulerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference">EksClusterKubeSchedulerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference">EksClusterLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.openIdConnectIssuerUrl">openIdConnectIssuerUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.outpostConfig">outpostConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference">EksClusterOutpostConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.remoteNetworkConfig">remoteNetworkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference">EksClusterRemoteNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.resourcesVpcConfig">resourcesVpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference">EksClusterResourcesVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.rollbackConfig">rollbackConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference">EksClusterRollbackConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.storageConfig">storageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference">EksClusterStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsList">EksClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.upgradePolicy">upgradePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference">EksClusterUpgradePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.zonalShiftConfig">zonalShiftConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference">EksClusterZonalShiftConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.accessConfigInput">accessConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.bootstrapSelfManagedAddonsInput">bootstrapSelfManagedAddonsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.computeConfigInput">computeConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.controlPlaneScalingConfigInput">controlPlaneScalingConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfig">EksClusterControlPlaneScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.forceInput">forceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.kubeApiServerConfigInput">kubeApiServerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig">EksClusterKubeApiServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.kubeControllerManagerConfigInput">kubeControllerManagerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfig">EksClusterKubeControllerManagerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.kubernetesNetworkConfigInput">kubernetesNetworkConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.kubeSchedulerConfigInput">kubeSchedulerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfig">EksClusterKubeSchedulerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.loggingInput">loggingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLogging">EksClusterLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.outpostConfigInput">outpostConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.remoteNetworkConfigInput">remoteNetworkConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.resourcesVpcConfigInput">resourcesVpcConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig">EksClusterResourcesVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.rollbackConfigInput">rollbackConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfig">EksClusterRollbackConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.storageConfigInput">storageConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterTags">EksClusterTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.upgradePolicyInput">upgradePolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.zonalShiftConfigInput">zonalShiftConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.bootstrapSelfManagedAddons">bootstrapSelfManagedAddons</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.force">force</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessConfig`<sup>Required</sup> <a name="accessConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.accessConfig"></a>

```java
public EksClusterAccessConfigOutputReference getAccessConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference">EksClusterAccessConfigOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `certificateAuthorityData`<sup>Required</sup> <a name="certificateAuthorityData" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.certificateAuthorityData"></a>

```java
public java.lang.String getCertificateAuthorityData();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `clusterSecurityGroupId`<sup>Required</sup> <a name="clusterSecurityGroupId" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.clusterSecurityGroupId"></a>

```java
public java.lang.String getClusterSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `computeConfig`<sup>Required</sup> <a name="computeConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.computeConfig"></a>

```java
public EksClusterComputeConfigOutputReference getComputeConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference">EksClusterComputeConfigOutputReference</a>

---

##### `controlPlaneScalingConfig`<sup>Required</sup> <a name="controlPlaneScalingConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.controlPlaneScalingConfig"></a>

```java
public EksClusterControlPlaneScalingConfigOutputReference getControlPlaneScalingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference">EksClusterControlPlaneScalingConfigOutputReference</a>

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.encryptionConfig"></a>

```java
public EksClusterEncryptionConfigList getEncryptionConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList">EksClusterEncryptionConfigList</a>

---

##### `encryptionConfigKeyArn`<sup>Required</sup> <a name="encryptionConfigKeyArn" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.encryptionConfigKeyArn"></a>

```java
public java.lang.String getEncryptionConfigKeyArn();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kubeApiServerConfig`<sup>Required</sup> <a name="kubeApiServerConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.kubeApiServerConfig"></a>

```java
public EksClusterKubeApiServerConfigOutputReference getKubeApiServerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference">EksClusterKubeApiServerConfigOutputReference</a>

---

##### `kubeControllerManagerConfig`<sup>Required</sup> <a name="kubeControllerManagerConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.kubeControllerManagerConfig"></a>

```java
public EksClusterKubeControllerManagerConfigOutputReference getKubeControllerManagerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference">EksClusterKubeControllerManagerConfigOutputReference</a>

---

##### `kubernetesNetworkConfig`<sup>Required</sup> <a name="kubernetesNetworkConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.kubernetesNetworkConfig"></a>

```java
public EksClusterKubernetesNetworkConfigOutputReference getKubernetesNetworkConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference">EksClusterKubernetesNetworkConfigOutputReference</a>

---

##### `kubeSchedulerConfig`<sup>Required</sup> <a name="kubeSchedulerConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.kubeSchedulerConfig"></a>

```java
public EksClusterKubeSchedulerConfigOutputReference getKubeSchedulerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference">EksClusterKubeSchedulerConfigOutputReference</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.logging"></a>

```java
public EksClusterLoggingOutputReference getLogging();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference">EksClusterLoggingOutputReference</a>

---

##### `openIdConnectIssuerUrl`<sup>Required</sup> <a name="openIdConnectIssuerUrl" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.openIdConnectIssuerUrl"></a>

```java
public java.lang.String getOpenIdConnectIssuerUrl();
```

- *Type:* java.lang.String

---

##### `outpostConfig`<sup>Required</sup> <a name="outpostConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.outpostConfig"></a>

```java
public EksClusterOutpostConfigOutputReference getOutpostConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference">EksClusterOutpostConfigOutputReference</a>

---

##### `remoteNetworkConfig`<sup>Required</sup> <a name="remoteNetworkConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.remoteNetworkConfig"></a>

```java
public EksClusterRemoteNetworkConfigOutputReference getRemoteNetworkConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference">EksClusterRemoteNetworkConfigOutputReference</a>

---

##### `resourcesVpcConfig`<sup>Required</sup> <a name="resourcesVpcConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.resourcesVpcConfig"></a>

```java
public EksClusterResourcesVpcConfigOutputReference getResourcesVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference">EksClusterResourcesVpcConfigOutputReference</a>

---

##### `rollbackConfig`<sup>Required</sup> <a name="rollbackConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.rollbackConfig"></a>

```java
public EksClusterRollbackConfigOutputReference getRollbackConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference">EksClusterRollbackConfigOutputReference</a>

---

##### `storageConfig`<sup>Required</sup> <a name="storageConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.storageConfig"></a>

```java
public EksClusterStorageConfigOutputReference getStorageConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference">EksClusterStorageConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.tags"></a>

```java
public EksClusterTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsList">EksClusterTagsList</a>

---

##### `upgradePolicy`<sup>Required</sup> <a name="upgradePolicy" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.upgradePolicy"></a>

```java
public EksClusterUpgradePolicyOutputReference getUpgradePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference">EksClusterUpgradePolicyOutputReference</a>

---

##### `zonalShiftConfig`<sup>Required</sup> <a name="zonalShiftConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.zonalShiftConfig"></a>

```java
public EksClusterZonalShiftConfigOutputReference getZonalShiftConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference">EksClusterZonalShiftConfigOutputReference</a>

---

##### `accessConfigInput`<sup>Optional</sup> <a name="accessConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.accessConfigInput"></a>

```java
public IResolvable|EksClusterAccessConfig getAccessConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a>

---

##### `bootstrapSelfManagedAddonsInput`<sup>Optional</sup> <a name="bootstrapSelfManagedAddonsInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.bootstrapSelfManagedAddonsInput"></a>

```java
public java.lang.Boolean|IResolvable getBootstrapSelfManagedAddonsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `computeConfigInput`<sup>Optional</sup> <a name="computeConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.computeConfigInput"></a>

```java
public IResolvable|EksClusterComputeConfig getComputeConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a>

---

##### `controlPlaneScalingConfigInput`<sup>Optional</sup> <a name="controlPlaneScalingConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.controlPlaneScalingConfigInput"></a>

```java
public IResolvable|EksClusterControlPlaneScalingConfig getControlPlaneScalingConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfig">EksClusterControlPlaneScalingConfig</a>

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.deletionProtectionInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.encryptionConfigInput"></a>

```java
public IResolvable|java.util.List<EksClusterEncryptionConfig> getEncryptionConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>>

---

##### `forceInput`<sup>Optional</sup> <a name="forceInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.forceInput"></a>

```java
public java.lang.Boolean|IResolvable getForceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kubeApiServerConfigInput`<sup>Optional</sup> <a name="kubeApiServerConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.kubeApiServerConfigInput"></a>

```java
public IResolvable|EksClusterKubeApiServerConfig getKubeApiServerConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig">EksClusterKubeApiServerConfig</a>

---

##### `kubeControllerManagerConfigInput`<sup>Optional</sup> <a name="kubeControllerManagerConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.kubeControllerManagerConfigInput"></a>

```java
public IResolvable|EksClusterKubeControllerManagerConfig getKubeControllerManagerConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfig">EksClusterKubeControllerManagerConfig</a>

---

##### `kubernetesNetworkConfigInput`<sup>Optional</sup> <a name="kubernetesNetworkConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.kubernetesNetworkConfigInput"></a>

```java
public IResolvable|EksClusterKubernetesNetworkConfig getKubernetesNetworkConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a>

---

##### `kubeSchedulerConfigInput`<sup>Optional</sup> <a name="kubeSchedulerConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.kubeSchedulerConfigInput"></a>

```java
public IResolvable|EksClusterKubeSchedulerConfig getKubeSchedulerConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfig">EksClusterKubeSchedulerConfig</a>

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.loggingInput"></a>

```java
public IResolvable|EksClusterLogging getLoggingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLogging">EksClusterLogging</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `outpostConfigInput`<sup>Optional</sup> <a name="outpostConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.outpostConfigInput"></a>

```java
public IResolvable|EksClusterOutpostConfig getOutpostConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a>

---

##### `remoteNetworkConfigInput`<sup>Optional</sup> <a name="remoteNetworkConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.remoteNetworkConfigInput"></a>

```java
public IResolvable|EksClusterRemoteNetworkConfig getRemoteNetworkConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a>

---

##### `resourcesVpcConfigInput`<sup>Optional</sup> <a name="resourcesVpcConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.resourcesVpcConfigInput"></a>

```java
public IResolvable|EksClusterResourcesVpcConfig getResourcesVpcConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig">EksClusterResourcesVpcConfig</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `rollbackConfigInput`<sup>Optional</sup> <a name="rollbackConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.rollbackConfigInput"></a>

```java
public IResolvable|EksClusterRollbackConfig getRollbackConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfig">EksClusterRollbackConfig</a>

---

##### `storageConfigInput`<sup>Optional</sup> <a name="storageConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.storageConfigInput"></a>

```java
public IResolvable|EksClusterStorageConfig getStorageConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.tagsInput"></a>

```java
public IResolvable|java.util.List<EksClusterTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterTags">EksClusterTags</a>>

---

##### `upgradePolicyInput`<sup>Optional</sup> <a name="upgradePolicyInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.upgradePolicyInput"></a>

```java
public IResolvable|EksClusterUpgradePolicy getUpgradePolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `zonalShiftConfigInput`<sup>Optional</sup> <a name="zonalShiftConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.zonalShiftConfigInput"></a>

```java
public IResolvable|EksClusterZonalShiftConfig getZonalShiftConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a>

---

##### `bootstrapSelfManagedAddons`<sup>Required</sup> <a name="bootstrapSelfManagedAddons" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.bootstrapSelfManagedAddons"></a>

```java
public java.lang.Boolean|IResolvable getBootstrapSelfManagedAddons();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `force`<sup>Required</sup> <a name="force" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.force"></a>

```java
public java.lang.Boolean|IResolvable getForce();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EksClusterAccessConfig <a name="EksClusterAccessConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterAccessConfig;

EksClusterAccessConfig.builder()
//  .authenticationMode(java.lang.String)
//  .bootstrapClusterCreatorAdminPermissions(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig.property.authenticationMode">authenticationMode</a></code> | <code>java.lang.String</code> | Specify the authentication mode that should be used to create your cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig.property.bootstrapClusterCreatorAdminPermissions">bootstrapClusterCreatorAdminPermissions</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set this value to false to avoid creating a default cluster admin Access Entry using the IAM principal used to create the cluster. |

---

##### `authenticationMode`<sup>Optional</sup> <a name="authenticationMode" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig.property.authenticationMode"></a>

```java
public java.lang.String getAuthenticationMode();
```

- *Type:* java.lang.String

Specify the authentication mode that should be used to create your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#authentication_mode EksCluster#authentication_mode}

---

##### `bootstrapClusterCreatorAdminPermissions`<sup>Optional</sup> <a name="bootstrapClusterCreatorAdminPermissions" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig.property.bootstrapClusterCreatorAdminPermissions"></a>

```java
public java.lang.Boolean|IResolvable getBootstrapClusterCreatorAdminPermissions();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set this value to false to avoid creating a default cluster admin Access Entry using the IAM principal used to create the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#bootstrap_cluster_creator_admin_permissions EksCluster#bootstrap_cluster_creator_admin_permissions}

---

### EksClusterComputeConfig <a name="EksClusterComputeConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterComputeConfig;

EksClusterComputeConfig.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .nodePools(java.util.List<java.lang.String>)
//  .nodeRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Todo: add description. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig.property.nodePools">nodePools</a></code> | <code>java.util.List<java.lang.String></code> | Todo: add description. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig.property.nodeRoleArn">nodeRoleArn</a></code> | <code>java.lang.String</code> | Todo: add description. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Todo: add description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#enabled EksCluster#enabled}

---

##### `nodePools`<sup>Optional</sup> <a name="nodePools" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig.property.nodePools"></a>

```java
public java.util.List<java.lang.String> getNodePools();
```

- *Type:* java.util.List<java.lang.String>

Todo: add description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#node_pools EksCluster#node_pools}

---

##### `nodeRoleArn`<sup>Optional</sup> <a name="nodeRoleArn" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig.property.nodeRoleArn"></a>

```java
public java.lang.String getNodeRoleArn();
```

- *Type:* java.lang.String

Todo: add description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#node_role_arn EksCluster#node_role_arn}

---

### EksClusterConfig <a name="EksClusterConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterConfig;

EksClusterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .resourcesVpcConfig(EksClusterResourcesVpcConfig)
    .roleArn(java.lang.String)
//  .accessConfig(EksClusterAccessConfig)
//  .bootstrapSelfManagedAddons(java.lang.Boolean|IResolvable)
//  .computeConfig(EksClusterComputeConfig)
//  .controlPlaneScalingConfig(EksClusterControlPlaneScalingConfig)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .encryptionConfig(IResolvable|java.util.List<EksClusterEncryptionConfig>)
//  .force(java.lang.Boolean|IResolvable)
//  .kubeApiServerConfig(EksClusterKubeApiServerConfig)
//  .kubeControllerManagerConfig(EksClusterKubeControllerManagerConfig)
//  .kubernetesNetworkConfig(EksClusterKubernetesNetworkConfig)
//  .kubeSchedulerConfig(EksClusterKubeSchedulerConfig)
//  .logging(EksClusterLogging)
//  .name(java.lang.String)
//  .outpostConfig(EksClusterOutpostConfig)
//  .remoteNetworkConfig(EksClusterRemoteNetworkConfig)
//  .rollbackConfig(EksClusterRollbackConfig)
//  .storageConfig(EksClusterStorageConfig)
//  .tags(IResolvable|java.util.List<EksClusterTags>)
//  .upgradePolicy(EksClusterUpgradePolicy)
//  .version(java.lang.String)
//  .zonalShiftConfig(EksClusterZonalShiftConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.resourcesVpcConfig">resourcesVpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig">EksClusterResourcesVpcConfig</a></code> | An object representing the VPC configuration to use for an Amazon EKS cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a></code> | An object representing the Access Config to use for the cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.bootstrapSelfManagedAddons">bootstrapSelfManagedAddons</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set this value to false to avoid creating the default networking add-ons when the cluster is created. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.computeConfig">computeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a></code> | Todo: add description. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.controlPlaneScalingConfig">controlPlaneScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfig">EksClusterControlPlaneScalingConfig</a></code> | Configuration for provisioned control plane scaling. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set this value to true to enable deletion protection for the cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.encryptionConfig">encryptionConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#encryption_config EksCluster#encryption_config}. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.force">force</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Force cluster version update. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.kubeApiServerConfig">kubeApiServerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig">EksClusterKubeApiServerConfig</a></code> | The configuration for the Kubernetes API server on an Amazon EKS cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.kubeControllerManagerConfig">kubeControllerManagerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfig">EksClusterKubeControllerManagerConfig</a></code> | The configuration for the Kubernetes controller manager on an Amazon EKS cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.kubernetesNetworkConfig">kubernetesNetworkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a></code> | The Kubernetes network configuration for the cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.kubeSchedulerConfig">kubeSchedulerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfig">EksClusterKubeSchedulerConfig</a></code> | The configuration for the Kubernetes scheduler on an Amazon EKS cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLogging">EksClusterLogging</a></code> | Enable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs based on log types. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | The unique name to give to your cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.outpostConfig">outpostConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a></code> | An object representing the Outpost configuration to use for AWS EKS outpost cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.remoteNetworkConfig">remoteNetworkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a></code> | Configuration fields for specifying on-premises node and pod CIDRs that are external to the VPC passed during cluster creation. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.rollbackConfig">rollbackConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfig">EksClusterRollbackConfig</a></code> | The rollback configuration to use for the cluster version rollback. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.storageConfig">storageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a></code> | Todo: add description. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterTags">EksClusterTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.upgradePolicy">upgradePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a></code> | An object representing the Upgrade Policy to use for the cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.version">version</a></code> | <code>java.lang.String</code> | The desired Kubernetes version for your cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.zonalShiftConfig">zonalShiftConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a></code> | The current zonal shift configuration to use for the cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `resourcesVpcConfig`<sup>Required</sup> <a name="resourcesVpcConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.resourcesVpcConfig"></a>

```java
public EksClusterResourcesVpcConfig getResourcesVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig">EksClusterResourcesVpcConfig</a>

An object representing the VPC configuration to use for an Amazon EKS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#resources_vpc_config EksCluster#resources_vpc_config}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#role_arn EksCluster#role_arn}

---

##### `accessConfig`<sup>Optional</sup> <a name="accessConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.accessConfig"></a>

```java
public EksClusterAccessConfig getAccessConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a>

An object representing the Access Config to use for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#access_config EksCluster#access_config}

---

##### `bootstrapSelfManagedAddons`<sup>Optional</sup> <a name="bootstrapSelfManagedAddons" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.bootstrapSelfManagedAddons"></a>

```java
public java.lang.Boolean|IResolvable getBootstrapSelfManagedAddons();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set this value to false to avoid creating the default networking add-ons when the cluster is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#bootstrap_self_managed_addons EksCluster#bootstrap_self_managed_addons}

---

##### `computeConfig`<sup>Optional</sup> <a name="computeConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.computeConfig"></a>

```java
public EksClusterComputeConfig getComputeConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a>

Todo: add description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#compute_config EksCluster#compute_config}

---

##### `controlPlaneScalingConfig`<sup>Optional</sup> <a name="controlPlaneScalingConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.controlPlaneScalingConfig"></a>

```java
public EksClusterControlPlaneScalingConfig getControlPlaneScalingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfig">EksClusterControlPlaneScalingConfig</a>

Configuration for provisioned control plane scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#control_plane_scaling_config EksCluster#control_plane_scaling_config}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set this value to true to enable deletion protection for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#deletion_protection EksCluster#deletion_protection}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.encryptionConfig"></a>

```java
public IResolvable|java.util.List<EksClusterEncryptionConfig> getEncryptionConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#encryption_config EksCluster#encryption_config}.

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.force"></a>

```java
public java.lang.Boolean|IResolvable getForce();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Force cluster version update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#force EksCluster#force}

---

##### `kubeApiServerConfig`<sup>Optional</sup> <a name="kubeApiServerConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.kubeApiServerConfig"></a>

```java
public EksClusterKubeApiServerConfig getKubeApiServerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig">EksClusterKubeApiServerConfig</a>

The configuration for the Kubernetes API server on an Amazon EKS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#kube_api_server_config EksCluster#kube_api_server_config}

---

##### `kubeControllerManagerConfig`<sup>Optional</sup> <a name="kubeControllerManagerConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.kubeControllerManagerConfig"></a>

```java
public EksClusterKubeControllerManagerConfig getKubeControllerManagerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfig">EksClusterKubeControllerManagerConfig</a>

The configuration for the Kubernetes controller manager on an Amazon EKS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#kube_controller_manager_config EksCluster#kube_controller_manager_config}

---

##### `kubernetesNetworkConfig`<sup>Optional</sup> <a name="kubernetesNetworkConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.kubernetesNetworkConfig"></a>

```java
public EksClusterKubernetesNetworkConfig getKubernetesNetworkConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a>

The Kubernetes network configuration for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#kubernetes_network_config EksCluster#kubernetes_network_config}

---

##### `kubeSchedulerConfig`<sup>Optional</sup> <a name="kubeSchedulerConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.kubeSchedulerConfig"></a>

```java
public EksClusterKubeSchedulerConfig getKubeSchedulerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfig">EksClusterKubeSchedulerConfig</a>

The configuration for the Kubernetes scheduler on an Amazon EKS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#kube_scheduler_config EksCluster#kube_scheduler_config}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.logging"></a>

```java
public EksClusterLogging getLogging();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterLogging">EksClusterLogging</a>

Enable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs based on log types.

By default, cluster control plane logs aren't exported to CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#logging EksCluster#logging}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The unique name to give to your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#name EksCluster#name}

---

##### `outpostConfig`<sup>Optional</sup> <a name="outpostConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.outpostConfig"></a>

```java
public EksClusterOutpostConfig getOutpostConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a>

An object representing the Outpost configuration to use for AWS EKS outpost cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#outpost_config EksCluster#outpost_config}

---

##### `remoteNetworkConfig`<sup>Optional</sup> <a name="remoteNetworkConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.remoteNetworkConfig"></a>

```java
public EksClusterRemoteNetworkConfig getRemoteNetworkConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a>

Configuration fields for specifying on-premises node and pod CIDRs that are external to the VPC passed during cluster creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#remote_network_config EksCluster#remote_network_config}

---

##### `rollbackConfig`<sup>Optional</sup> <a name="rollbackConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.rollbackConfig"></a>

```java
public EksClusterRollbackConfig getRollbackConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfig">EksClusterRollbackConfig</a>

The rollback configuration to use for the cluster version rollback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#rollback_config EksCluster#rollback_config}

---

##### `storageConfig`<sup>Optional</sup> <a name="storageConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.storageConfig"></a>

```java
public EksClusterStorageConfig getStorageConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a>

Todo: add description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#storage_config EksCluster#storage_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.tags"></a>

```java
public IResolvable|java.util.List<EksClusterTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterTags">EksClusterTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#tags EksCluster#tags}

---

##### `upgradePolicy`<sup>Optional</sup> <a name="upgradePolicy" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.upgradePolicy"></a>

```java
public EksClusterUpgradePolicy getUpgradePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a>

An object representing the Upgrade Policy to use for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#upgrade_policy EksCluster#upgrade_policy}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The desired Kubernetes version for your cluster.

If you don't specify a value here, the latest version available in Amazon EKS is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#version EksCluster#version}

---

##### `zonalShiftConfig`<sup>Optional</sup> <a name="zonalShiftConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.zonalShiftConfig"></a>

```java
public EksClusterZonalShiftConfig getZonalShiftConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a>

The current zonal shift configuration to use for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#zonal_shift_config EksCluster#zonal_shift_config}

---

### EksClusterControlPlaneScalingConfig <a name="EksClusterControlPlaneScalingConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterControlPlaneScalingConfig;

EksClusterControlPlaneScalingConfig.builder()
//  .tier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfig.property.tier">tier</a></code> | <code>java.lang.String</code> | The scaling tier for the provisioned control plane. |

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfig.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

The scaling tier for the provisioned control plane.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#tier EksCluster#tier}

---

### EksClusterEncryptionConfig <a name="EksClusterEncryptionConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterEncryptionConfig;

EksClusterEncryptionConfig.builder()
//  .provider(EksClusterEncryptionConfigProvider)
//  .resources(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig.property.provider">provider</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a></code> | The encryption provider for the cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the resources to be encrypted. The only supported value is "secrets". |

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig.property.provider"></a>

```java
public EksClusterEncryptionConfigProvider getProvider();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a>

The encryption provider for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#provider EksCluster#provider}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

Specifies the resources to be encrypted. The only supported value is "secrets".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#resources EksCluster#resources}

---

### EksClusterEncryptionConfigProvider <a name="EksClusterEncryptionConfigProvider" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProvider.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterEncryptionConfigProvider;

EksClusterEncryptionConfigProvider.builder()
//  .keyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProvider.property.keyArn">keyArn</a></code> | <code>java.lang.String</code> | Amazon Resource Name (ARN) or alias of the KMS key. |

---

##### `keyArn`<sup>Optional</sup> <a name="keyArn" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProvider.property.keyArn"></a>

```java
public java.lang.String getKeyArn();
```

- *Type:* java.lang.String

Amazon Resource Name (ARN) or alias of the KMS key.

The KMS key must be symmetric, created in the same region as the cluster, and if the KMS key was created in a different account, the user must have access to the KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#key_arn EksCluster#key_arn}

---

### EksClusterKubeApiServerConfig <a name="EksClusterKubeApiServerConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterKubeApiServerConfig;

EksClusterKubeApiServerConfig.builder()
//  .eventTtl(java.lang.String)
//  .serviceNodePortRange(EksClusterKubeApiServerConfigServiceNodePortRange)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig.property.eventTtl">eventTtl</a></code> | <code>java.lang.String</code> | The duration that Kubernetes events are retained (e.g., 30m, 1h). |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig.property.serviceNodePortRange">serviceNodePortRange</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange">EksClusterKubeApiServerConfigServiceNodePortRange</a></code> | The port range for Kubernetes NodePort services. |

---

##### `eventTtl`<sup>Optional</sup> <a name="eventTtl" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig.property.eventTtl"></a>

```java
public java.lang.String getEventTtl();
```

- *Type:* java.lang.String

The duration that Kubernetes events are retained (e.g., 30m, 1h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#event_ttl EksCluster#event_ttl}

---

##### `serviceNodePortRange`<sup>Optional</sup> <a name="serviceNodePortRange" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig.property.serviceNodePortRange"></a>

```java
public EksClusterKubeApiServerConfigServiceNodePortRange getServiceNodePortRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange">EksClusterKubeApiServerConfigServiceNodePortRange</a>

The port range for Kubernetes NodePort services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#service_node_port_range EksCluster#service_node_port_range}

---

### EksClusterKubeApiServerConfigServiceNodePortRange <a name="EksClusterKubeApiServerConfigServiceNodePortRange" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterKubeApiServerConfigServiceNodePortRange;

EksClusterKubeApiServerConfigServiceNodePortRange.builder()
//  .maxPort(java.lang.Number)
//  .minPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange.property.maxPort">maxPort</a></code> | <code>java.lang.Number</code> | The maximum port number in the range. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange.property.minPort">minPort</a></code> | <code>java.lang.Number</code> | The minimum port number in the range. |

---

##### `maxPort`<sup>Optional</sup> <a name="maxPort" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange.property.maxPort"></a>

```java
public java.lang.Number getMaxPort();
```

- *Type:* java.lang.Number

The maximum port number in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#max_port EksCluster#max_port}

---

##### `minPort`<sup>Optional</sup> <a name="minPort" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange.property.minPort"></a>

```java
public java.lang.Number getMinPort();
```

- *Type:* java.lang.Number

The minimum port number in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#min_port EksCluster#min_port}

---

### EksClusterKubeControllerManagerConfig <a name="EksClusterKubeControllerManagerConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterKubeControllerManagerConfig;

EksClusterKubeControllerManagerConfig.builder()
//  .horizontalPodAutoscalerControllerConfig(EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfig.property.horizontalPodAutoscalerControllerConfig">horizontalPodAutoscalerControllerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig">EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig</a></code> | The horizontal pod autoscaler controller configuration. |

---

##### `horizontalPodAutoscalerControllerConfig`<sup>Optional</sup> <a name="horizontalPodAutoscalerControllerConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfig.property.horizontalPodAutoscalerControllerConfig"></a>

```java
public EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig getHorizontalPodAutoscalerControllerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig">EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig</a>

The horizontal pod autoscaler controller configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#horizontal_pod_autoscaler_controller_config EksCluster#horizontal_pod_autoscaler_controller_config}

---

### EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig <a name="EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig;

EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig.builder()
//  .horizontalPodAutoscalerSyncPeriod(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig.property.horizontalPodAutoscalerSyncPeriod">horizontalPodAutoscalerSyncPeriod</a></code> | <code>java.lang.String</code> | The interval between each sync of the horizontal pod autoscaler (e.g., 15s, 1m). |

---

##### `horizontalPodAutoscalerSyncPeriod`<sup>Optional</sup> <a name="horizontalPodAutoscalerSyncPeriod" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig.property.horizontalPodAutoscalerSyncPeriod"></a>

```java
public java.lang.String getHorizontalPodAutoscalerSyncPeriod();
```

- *Type:* java.lang.String

The interval between each sync of the horizontal pod autoscaler (e.g., 15s, 1m).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#horizontal_pod_autoscaler_sync_period EksCluster#horizontal_pod_autoscaler_sync_period}

---

### EksClusterKubernetesNetworkConfig <a name="EksClusterKubernetesNetworkConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterKubernetesNetworkConfig;

EksClusterKubernetesNetworkConfig.builder()
//  .elasticLoadBalancing(EksClusterKubernetesNetworkConfigElasticLoadBalancing)
//  .ipFamily(java.lang.String)
//  .serviceIpv4Cidr(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig.property.elasticLoadBalancing">elasticLoadBalancing</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a></code> | Todo: add description. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig.property.ipFamily">ipFamily</a></code> | <code>java.lang.String</code> | Ipv4 or Ipv6. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig.property.serviceIpv4Cidr">serviceIpv4Cidr</a></code> | <code>java.lang.String</code> | The CIDR block to assign Kubernetes service IP addresses from. |

---

##### `elasticLoadBalancing`<sup>Optional</sup> <a name="elasticLoadBalancing" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig.property.elasticLoadBalancing"></a>

```java
public EksClusterKubernetesNetworkConfigElasticLoadBalancing getElasticLoadBalancing();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a>

Todo: add description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#elastic_load_balancing EksCluster#elastic_load_balancing}

---

##### `ipFamily`<sup>Optional</sup> <a name="ipFamily" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig.property.ipFamily"></a>

```java
public java.lang.String getIpFamily();
```

- *Type:* java.lang.String

Ipv4 or Ipv6.

You can only specify ipv6 for 1.21 and later clusters that use version 1.10.1 or later of the Amazon VPC CNI add-on

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#ip_family EksCluster#ip_family}

---

##### `serviceIpv4Cidr`<sup>Optional</sup> <a name="serviceIpv4Cidr" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig.property.serviceIpv4Cidr"></a>

```java
public java.lang.String getServiceIpv4Cidr();
```

- *Type:* java.lang.String

The CIDR block to assign Kubernetes service IP addresses from.

If you don't specify a block, Kubernetes assigns addresses from either the 10.100.0.0/16 or 172.20.0.0/16 CIDR blocks. We recommend that you specify a block that does not overlap with resources in other networks that are peered or connected to your VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#service_ipv_4_cidr EksCluster#service_ipv_4_cidr}

---

### EksClusterKubernetesNetworkConfigElasticLoadBalancing <a name="EksClusterKubernetesNetworkConfigElasticLoadBalancing" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing;

EksClusterKubernetesNetworkConfigElasticLoadBalancing.builder()
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Todo: add description. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Todo: add description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#enabled EksCluster#enabled}

---

### EksClusterKubeSchedulerConfig <a name="EksClusterKubeSchedulerConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterKubeSchedulerConfig;

EksClusterKubeSchedulerConfig.builder()
//  .nodeResourcesFit(EksClusterKubeSchedulerConfigNodeResourcesFit)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfig.property.nodeResourcesFit">nodeResourcesFit</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit">EksClusterKubeSchedulerConfigNodeResourcesFit</a></code> | The NodeResourcesFit plugin configuration for the Kubernetes scheduler. |

---

##### `nodeResourcesFit`<sup>Optional</sup> <a name="nodeResourcesFit" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfig.property.nodeResourcesFit"></a>

```java
public EksClusterKubeSchedulerConfigNodeResourcesFit getNodeResourcesFit();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit">EksClusterKubeSchedulerConfigNodeResourcesFit</a>

The NodeResourcesFit plugin configuration for the Kubernetes scheduler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#node_resources_fit EksCluster#node_resources_fit}

---

### EksClusterKubeSchedulerConfigNodeResourcesFit <a name="EksClusterKubeSchedulerConfigNodeResourcesFit" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterKubeSchedulerConfigNodeResourcesFit;

EksClusterKubeSchedulerConfigNodeResourcesFit.builder()
//  .scoringStrategy(EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit.property.scoringStrategy">scoringStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy</a></code> | The scoring strategy configuration for the NodeResourcesFit scheduler plugin. |

---

##### `scoringStrategy`<sup>Optional</sup> <a name="scoringStrategy" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit.property.scoringStrategy"></a>

```java
public EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy getScoringStrategy();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy</a>

The scoring strategy configuration for the NodeResourcesFit scheduler plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#scoring_strategy EksCluster#scoring_strategy}

---

### EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy <a name="EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy;

EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy.builder()
//  .resources(IResolvable|java.util.List<EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources>)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy.property.resources">resources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources</a>></code> | The resource weights used for scoring nodes. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy.property.type">type</a></code> | <code>java.lang.String</code> | The scoring strategy type (LeastAllocated or MostAllocated). |

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy.property.resources"></a>

```java
public IResolvable|java.util.List<EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources> getResources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources</a>>

The resource weights used for scoring nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#resources EksCluster#resources}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The scoring strategy type (LeastAllocated or MostAllocated).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#type EksCluster#type}

---

### EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources <a name="EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources;

EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources.builder()
//  .name(java.lang.String)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources.property.name">name</a></code> | <code>java.lang.String</code> | The name of the resource (for example, cpu or memory). |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources.property.weight">weight</a></code> | <code>java.lang.Number</code> | The weight assigned to the resource for scoring. Must be between 1 and 100. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the resource (for example, cpu or memory).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#name EksCluster#name}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

The weight assigned to the resource for scoring. Must be between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#weight EksCluster#weight}

---

### EksClusterLogging <a name="EksClusterLogging" id="@cdktn/provider-awscc.eksCluster.EksClusterLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterLogging.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterLogging;

EksClusterLogging.builder()
//  .clusterLogging(EksClusterLoggingClusterLogging)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLogging.property.clusterLogging">clusterLogging</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLogging">EksClusterLoggingClusterLogging</a></code> | The cluster control plane logging configuration for your cluster. |

---

##### `clusterLogging`<sup>Optional</sup> <a name="clusterLogging" id="@cdktn/provider-awscc.eksCluster.EksClusterLogging.property.clusterLogging"></a>

```java
public EksClusterLoggingClusterLogging getClusterLogging();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLogging">EksClusterLoggingClusterLogging</a>

The cluster control plane logging configuration for your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#cluster_logging EksCluster#cluster_logging}

---

### EksClusterLoggingClusterLogging <a name="EksClusterLoggingClusterLogging" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLogging.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterLoggingClusterLogging;

EksClusterLoggingClusterLogging.builder()
//  .enabledTypes(IResolvable|java.util.List<EksClusterLoggingClusterLoggingEnabledTypes>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLogging.property.enabledTypes">enabledTypes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypes">EksClusterLoggingClusterLoggingEnabledTypes</a>></code> | Enable control plane logs for your cluster, all log types will be disabled if the array is empty. |

---

##### `enabledTypes`<sup>Optional</sup> <a name="enabledTypes" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLogging.property.enabledTypes"></a>

```java
public IResolvable|java.util.List<EksClusterLoggingClusterLoggingEnabledTypes> getEnabledTypes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypes">EksClusterLoggingClusterLoggingEnabledTypes</a>>

Enable control plane logs for your cluster, all log types will be disabled if the array is empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#enabled_types EksCluster#enabled_types}

---

### EksClusterLoggingClusterLoggingEnabledTypes <a name="EksClusterLoggingClusterLoggingEnabledTypes" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypes.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterLoggingClusterLoggingEnabledTypes;

EksClusterLoggingClusterLoggingEnabledTypes.builder()
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypes.property.type">type</a></code> | <code>java.lang.String</code> | name of the log type. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypes.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

name of the log type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#type EksCluster#type}

---

### EksClusterOutpostConfig <a name="EksClusterOutpostConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterOutpostConfig;

EksClusterOutpostConfig.builder()
//  .controlPlaneInstanceType(java.lang.String)
//  .controlPlanePlacement(EksClusterOutpostConfigControlPlanePlacement)
//  .etcdInstanceType(java.lang.String)
//  .etcdPlacement(EksClusterOutpostConfigEtcdPlacement)
//  .outpostArns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig.property.controlPlaneInstanceType">controlPlaneInstanceType</a></code> | <code>java.lang.String</code> | The EC2 instance type for the Kubernetes control plane instances of your local Amazon EKS cluster on AWS Outposts. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig.property.controlPlanePlacement">controlPlanePlacement</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a></code> | An object representing the placement configuration for all the control plane instances of your local Amazon EKS cluster on an AWS Outpost. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig.property.etcdInstanceType">etcdInstanceType</a></code> | <code>java.lang.String</code> | The EC2 instance type for etcd instances of your local Amazon EKS cluster on AWS Outposts. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig.property.etcdPlacement">etcdPlacement</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacement">EksClusterOutpostConfigEtcdPlacement</a></code> | An object representing the placement configuration for the etcd instances of your local Amazon EKS cluster on an AWS Outpost. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig.property.outpostArns">outpostArns</a></code> | <code>java.util.List<java.lang.String></code> | The ARN of the Outpost that you want to use for your local Amazon EKS cluster on Outposts. |

---

##### `controlPlaneInstanceType`<sup>Optional</sup> <a name="controlPlaneInstanceType" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig.property.controlPlaneInstanceType"></a>

```java
public java.lang.String getControlPlaneInstanceType();
```

- *Type:* java.lang.String

The EC2 instance type for the Kubernetes control plane instances of your local Amazon EKS cluster on AWS Outposts.

This instance type applies to all control plane instances and cannot be changed after cluster creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#control_plane_instance_type EksCluster#control_plane_instance_type}

---

##### `controlPlanePlacement`<sup>Optional</sup> <a name="controlPlanePlacement" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig.property.controlPlanePlacement"></a>

```java
public EksClusterOutpostConfigControlPlanePlacement getControlPlanePlacement();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a>

An object representing the placement configuration for all the control plane instances of your local Amazon EKS cluster on an AWS Outpost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#control_plane_placement EksCluster#control_plane_placement}

---

##### `etcdInstanceType`<sup>Optional</sup> <a name="etcdInstanceType" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig.property.etcdInstanceType"></a>

```java
public java.lang.String getEtcdInstanceType();
```

- *Type:* java.lang.String

The EC2 instance type for etcd instances of your local Amazon EKS cluster on AWS Outposts.

This instance type applies to all etcd instances and cannot be changed after cluster creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#etcd_instance_type EksCluster#etcd_instance_type}

---

##### `etcdPlacement`<sup>Optional</sup> <a name="etcdPlacement" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig.property.etcdPlacement"></a>

```java
public EksClusterOutpostConfigEtcdPlacement getEtcdPlacement();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacement">EksClusterOutpostConfigEtcdPlacement</a>

An object representing the placement configuration for the etcd instances of your local Amazon EKS cluster on an AWS Outpost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#etcd_placement EksCluster#etcd_placement}

---

##### `outpostArns`<sup>Optional</sup> <a name="outpostArns" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig.property.outpostArns"></a>

```java
public java.util.List<java.lang.String> getOutpostArns();
```

- *Type:* java.util.List<java.lang.String>

The ARN of the Outpost that you want to use for your local Amazon EKS cluster on Outposts.

Only a single Outpost ARN is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#outpost_arns EksCluster#outpost_arns}

---

### EksClusterOutpostConfigControlPlanePlacement <a name="EksClusterOutpostConfigControlPlanePlacement" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacement.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterOutpostConfigControlPlanePlacement;

EksClusterOutpostConfigControlPlanePlacement.builder()
//  .groupName(java.lang.String)
//  .spreadLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacement.property.groupName">groupName</a></code> | <code>java.lang.String</code> | The name of the placement group for the Kubernetes control plane instances. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacement.property.spreadLevel">spreadLevel</a></code> | <code>java.lang.String</code> | Optional parameter to specify the placement group spread level for control plane instances. |

---

##### `groupName`<sup>Optional</sup> <a name="groupName" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacement.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

The name of the placement group for the Kubernetes control plane instances.

This setting can't be changed after cluster creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#group_name EksCluster#group_name}

---

##### `spreadLevel`<sup>Optional</sup> <a name="spreadLevel" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacement.property.spreadLevel"></a>

```java
public java.lang.String getSpreadLevel();
```

- *Type:* java.lang.String

Optional parameter to specify the placement group spread level for control plane instances.

If not provided, EKS will deploy control plane instances without a placement group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#spread_level EksCluster#spread_level}

---

### EksClusterOutpostConfigEtcdPlacement <a name="EksClusterOutpostConfigEtcdPlacement" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacement.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterOutpostConfigEtcdPlacement;

EksClusterOutpostConfigEtcdPlacement.builder()
//  .spreadLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacement.property.spreadLevel">spreadLevel</a></code> | <code>java.lang.String</code> | Optional parameter to specify the placement group spread level for etcd instances. |

---

##### `spreadLevel`<sup>Optional</sup> <a name="spreadLevel" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacement.property.spreadLevel"></a>

```java
public java.lang.String getSpreadLevel();
```

- *Type:* java.lang.String

Optional parameter to specify the placement group spread level for etcd instances.

If not provided, EKS will deploy etcd instances without a placement group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#spread_level EksCluster#spread_level}

---

### EksClusterRemoteNetworkConfig <a name="EksClusterRemoteNetworkConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterRemoteNetworkConfig;

EksClusterRemoteNetworkConfig.builder()
//  .remoteNodeNetworks(IResolvable|java.util.List<EksClusterRemoteNetworkConfigRemoteNodeNetworks>)
//  .remotePodNetworks(IResolvable|java.util.List<EksClusterRemoteNetworkConfigRemotePodNetworks>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig.property.remoteNodeNetworks">remoteNodeNetworks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>></code> | Network configuration of nodes run on-premises with EKS Hybrid Nodes. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig.property.remotePodNetworks">remotePodNetworks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>></code> | Network configuration of pods run on-premises with EKS Hybrid Nodes. |

---

##### `remoteNodeNetworks`<sup>Optional</sup> <a name="remoteNodeNetworks" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig.property.remoteNodeNetworks"></a>

```java
public IResolvable|java.util.List<EksClusterRemoteNetworkConfigRemoteNodeNetworks> getRemoteNodeNetworks();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>>

Network configuration of nodes run on-premises with EKS Hybrid Nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#remote_node_networks EksCluster#remote_node_networks}

---

##### `remotePodNetworks`<sup>Optional</sup> <a name="remotePodNetworks" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig.property.remotePodNetworks"></a>

```java
public IResolvable|java.util.List<EksClusterRemoteNetworkConfigRemotePodNetworks> getRemotePodNetworks();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>>

Network configuration of pods run on-premises with EKS Hybrid Nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#remote_pod_networks EksCluster#remote_pod_networks}

---

### EksClusterRemoteNetworkConfigRemoteNodeNetworks <a name="EksClusterRemoteNetworkConfigRemoteNodeNetworks" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks;

EksClusterRemoteNetworkConfigRemoteNodeNetworks.builder()
//  .cidrs(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks.property.cidrs">cidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of remote node CIDRs. |

---

##### `cidrs`<sup>Optional</sup> <a name="cidrs" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks.property.cidrs"></a>

```java
public java.util.List<java.lang.String> getCidrs();
```

- *Type:* java.util.List<java.lang.String>

Specifies the list of remote node CIDRs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#cidrs EksCluster#cidrs}

---

### EksClusterRemoteNetworkConfigRemotePodNetworks <a name="EksClusterRemoteNetworkConfigRemotePodNetworks" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterRemoteNetworkConfigRemotePodNetworks;

EksClusterRemoteNetworkConfigRemotePodNetworks.builder()
//  .cidrs(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks.property.cidrs">cidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of remote pod CIDRs. |

---

##### `cidrs`<sup>Optional</sup> <a name="cidrs" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks.property.cidrs"></a>

```java
public java.util.List<java.lang.String> getCidrs();
```

- *Type:* java.util.List<java.lang.String>

Specifies the list of remote pod CIDRs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#cidrs EksCluster#cidrs}

---

### EksClusterResourcesVpcConfig <a name="EksClusterResourcesVpcConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterResourcesVpcConfig;

EksClusterResourcesVpcConfig.builder()
    .subnetIds(java.util.List<java.lang.String>)
//  .controlPlaneEgressMode(java.lang.String)
//  .endpointPrivateAccess(java.lang.Boolean|IResolvable)
//  .endpointPublicAccess(java.lang.Boolean|IResolvable)
//  .publicAccessCidrs(java.util.List<java.lang.String>)
//  .securityGroupIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Specify subnets for your Amazon EKS nodes. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig.property.controlPlaneEgressMode">controlPlaneEgressMode</a></code> | <code>java.lang.String</code> | Specify the egress mode for the cluster control plane. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig.property.endpointPrivateAccess">endpointPrivateAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set this value to true to enable private access for your cluster's Kubernetes API server endpoint. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig.property.endpointPublicAccess">endpointPublicAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set this value to false to disable public access to your cluster's Kubernetes API server endpoint. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig.property.publicAccessCidrs">publicAccessCidrs</a></code> | <code>java.util.List<java.lang.String></code> | The CIDR blocks that are allowed access to your cluster's public Kubernetes API server endpoint. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Specify one or more security groups for the cross-account elastic network interfaces that Amazon EKS creates to use to allow communication between your worker nodes and the Kubernetes control plane. |

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Specify subnets for your Amazon EKS nodes.

Amazon EKS creates cross-account elastic network interfaces in these subnets to allow communication between your nodes and the Kubernetes control plane.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#subnet_ids EksCluster#subnet_ids}

---

##### `controlPlaneEgressMode`<sup>Optional</sup> <a name="controlPlaneEgressMode" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig.property.controlPlaneEgressMode"></a>

```java
public java.lang.String getControlPlaneEgressMode();
```

- *Type:* java.lang.String

Specify the egress mode for the cluster control plane.

If you set this to CUSTOMER_ROUTED, the control plane routes traffic through your VPC subnets instead of using AWS managed networking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#control_plane_egress_mode EksCluster#control_plane_egress_mode}

---

##### `endpointPrivateAccess`<sup>Optional</sup> <a name="endpointPrivateAccess" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig.property.endpointPrivateAccess"></a>

```java
public java.lang.Boolean|IResolvable getEndpointPrivateAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set this value to true to enable private access for your cluster's Kubernetes API server endpoint.

If you enable private access, Kubernetes API requests from within your cluster's VPC use the private VPC endpoint. The default value for this parameter is false, which disables private access for your Kubernetes API server. If you disable private access and you have nodes or AWS Fargate pods in the cluster, then ensure that publicAccessCidrs includes the necessary CIDR blocks for communication with the nodes or Fargate pods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#endpoint_private_access EksCluster#endpoint_private_access}

---

##### `endpointPublicAccess`<sup>Optional</sup> <a name="endpointPublicAccess" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig.property.endpointPublicAccess"></a>

```java
public java.lang.Boolean|IResolvable getEndpointPublicAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set this value to false to disable public access to your cluster's Kubernetes API server endpoint.

If you disable public access, your cluster's Kubernetes API server can only receive requests from within the cluster VPC. The default value for this parameter is true, which enables public access for your Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#endpoint_public_access EksCluster#endpoint_public_access}

---

##### `publicAccessCidrs`<sup>Optional</sup> <a name="publicAccessCidrs" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig.property.publicAccessCidrs"></a>

```java
public java.util.List<java.lang.String> getPublicAccessCidrs();
```

- *Type:* java.util.List<java.lang.String>

The CIDR blocks that are allowed access to your cluster's public Kubernetes API server endpoint.

Communication to the endpoint from addresses outside of the CIDR blocks that you specify is denied. The default value is 0.0.0.0/0. If you've disabled private endpoint access and you have nodes or AWS Fargate pods in the cluster, then ensure that you specify the necessary CIDR blocks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#public_access_cidrs EksCluster#public_access_cidrs}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Specify one or more security groups for the cross-account elastic network interfaces that Amazon EKS creates to use to allow communication between your worker nodes and the Kubernetes control plane.

If you don't specify a security group, the default security group for your VPC is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#security_group_ids EksCluster#security_group_ids}

---

### EksClusterRollbackConfig <a name="EksClusterRollbackConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterRollbackConfig;

EksClusterRollbackConfig.builder()
//  .timeoutMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfig.property.timeoutMinutes">timeoutMinutes</a></code> | <code>java.lang.Number</code> | The timeout in minutes for the version rollback operation. If not specified, defaults to 720 minutes (12 hours). |

---

##### `timeoutMinutes`<sup>Optional</sup> <a name="timeoutMinutes" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfig.property.timeoutMinutes"></a>

```java
public java.lang.Number getTimeoutMinutes();
```

- *Type:* java.lang.Number

The timeout in minutes for the version rollback operation. If not specified, defaults to 720 minutes (12 hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#timeout_minutes EksCluster#timeout_minutes}

---

### EksClusterStorageConfig <a name="EksClusterStorageConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterStorageConfig;

EksClusterStorageConfig.builder()
//  .blockStorage(EksClusterStorageConfigBlockStorage)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfig.property.blockStorage">blockStorage</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a></code> | Todo: add description. |

---

##### `blockStorage`<sup>Optional</sup> <a name="blockStorage" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfig.property.blockStorage"></a>

```java
public EksClusterStorageConfigBlockStorage getBlockStorage();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a>

Todo: add description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#block_storage EksCluster#block_storage}

---

### EksClusterStorageConfigBlockStorage <a name="EksClusterStorageConfigBlockStorage" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorage.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterStorageConfigBlockStorage;

EksClusterStorageConfigBlockStorage.builder()
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorage.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Todo: add description. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorage.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Todo: add description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#enabled EksCluster#enabled}

---

### EksClusterTags <a name="EksClusterTags" id="@cdktn/provider-awscc.eksCluster.EksClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterTags;

EksClusterTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eksCluster.EksClusterTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#key EksCluster#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksClusterTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#value EksCluster#value}

---

### EksClusterUpgradePolicy <a name="EksClusterUpgradePolicy" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterUpgradePolicy;

EksClusterUpgradePolicy.builder()
//  .supportType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicy.property.supportType">supportType</a></code> | <code>java.lang.String</code> | Specify the support type for your cluster. |

---

##### `supportType`<sup>Optional</sup> <a name="supportType" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicy.property.supportType"></a>

```java
public java.lang.String getSupportType();
```

- *Type:* java.lang.String

Specify the support type for your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#support_type EksCluster#support_type}

---

### EksClusterZonalShiftConfig <a name="EksClusterZonalShiftConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterZonalShiftConfig;

EksClusterZonalShiftConfig.builder()
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set this value to true to enable zonal shift for the cluster. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set this value to true to enable zonal shift for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_cluster#enabled EksCluster#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### EksClusterAccessConfigOutputReference <a name="EksClusterAccessConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterAccessConfigOutputReference;

new EksClusterAccessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.resetAuthenticationMode">resetAuthenticationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.resetBootstrapClusterCreatorAdminPermissions">resetBootstrapClusterCreatorAdminPermissions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationMode` <a name="resetAuthenticationMode" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.resetAuthenticationMode"></a>

```java
public void resetAuthenticationMode()
```

##### `resetBootstrapClusterCreatorAdminPermissions` <a name="resetBootstrapClusterCreatorAdminPermissions" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.resetBootstrapClusterCreatorAdminPermissions"></a>

```java
public void resetBootstrapClusterCreatorAdminPermissions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.authenticationModeInput">authenticationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.bootstrapClusterCreatorAdminPermissionsInput">bootstrapClusterCreatorAdminPermissionsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.authenticationMode">authenticationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.bootstrapClusterCreatorAdminPermissions">bootstrapClusterCreatorAdminPermissions</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationModeInput`<sup>Optional</sup> <a name="authenticationModeInput" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.authenticationModeInput"></a>

```java
public java.lang.String getAuthenticationModeInput();
```

- *Type:* java.lang.String

---

##### `bootstrapClusterCreatorAdminPermissionsInput`<sup>Optional</sup> <a name="bootstrapClusterCreatorAdminPermissionsInput" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.bootstrapClusterCreatorAdminPermissionsInput"></a>

```java
public java.lang.Boolean|IResolvable getBootstrapClusterCreatorAdminPermissionsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `authenticationMode`<sup>Required</sup> <a name="authenticationMode" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.authenticationMode"></a>

```java
public java.lang.String getAuthenticationMode();
```

- *Type:* java.lang.String

---

##### `bootstrapClusterCreatorAdminPermissions`<sup>Required</sup> <a name="bootstrapClusterCreatorAdminPermissions" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.bootstrapClusterCreatorAdminPermissions"></a>

```java
public java.lang.Boolean|IResolvable getBootstrapClusterCreatorAdminPermissions();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterAccessConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a>

---


### EksClusterComputeConfigOutputReference <a name="EksClusterComputeConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterComputeConfigOutputReference;

new EksClusterComputeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.resetNodePools">resetNodePools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.resetNodeRoleArn">resetNodeRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetNodePools` <a name="resetNodePools" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.resetNodePools"></a>

```java
public void resetNodePools()
```

##### `resetNodeRoleArn` <a name="resetNodeRoleArn" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.resetNodeRoleArn"></a>

```java
public void resetNodeRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.nodePoolsInput">nodePoolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.nodeRoleArnInput">nodeRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.nodePools">nodePools</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.nodeRoleArn">nodeRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nodePoolsInput`<sup>Optional</sup> <a name="nodePoolsInput" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.nodePoolsInput"></a>

```java
public java.util.List<java.lang.String> getNodePoolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nodeRoleArnInput`<sup>Optional</sup> <a name="nodeRoleArnInput" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.nodeRoleArnInput"></a>

```java
public java.lang.String getNodeRoleArnInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nodePools`<sup>Required</sup> <a name="nodePools" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.nodePools"></a>

```java
public java.util.List<java.lang.String> getNodePools();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nodeRoleArn`<sup>Required</sup> <a name="nodeRoleArn" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.nodeRoleArn"></a>

```java
public java.lang.String getNodeRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterComputeConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a>

---


### EksClusterControlPlaneScalingConfigOutputReference <a name="EksClusterControlPlaneScalingConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterControlPlaneScalingConfigOutputReference;

new EksClusterControlPlaneScalingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.resetTier">resetTier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTier` <a name="resetTier" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.resetTier"></a>

```java
public void resetTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.tierInput">tierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfig">EksClusterControlPlaneScalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.tierInput"></a>

```java
public java.lang.String getTierInput();
```

- *Type:* java.lang.String

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterControlPlaneScalingConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfig">EksClusterControlPlaneScalingConfig</a>

---


### EksClusterEncryptionConfigList <a name="EksClusterEncryptionConfigList" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterEncryptionConfigList;

new EksClusterEncryptionConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.get"></a>

```java
public EksClusterEncryptionConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EksClusterEncryptionConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>>

---


### EksClusterEncryptionConfigOutputReference <a name="EksClusterEncryptionConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterEncryptionConfigOutputReference;

new EksClusterEncryptionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.putProvider">putProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.resetProvider">resetProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.resetResources">resetResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProvider` <a name="putProvider" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.putProvider"></a>

```java
public void putProvider(EksClusterEncryptionConfigProvider value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.putProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a>

---

##### `resetProvider` <a name="resetProvider" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.resetProvider"></a>

```java
public void resetProvider()
```

##### `resetResources` <a name="resetResources" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.resetResources"></a>

```java
public void resetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.provider">provider</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference">EksClusterEncryptionConfigProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.providerInput">providerInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.provider"></a>

```java
public EksClusterEncryptionConfigProviderOutputReference getProvider();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference">EksClusterEncryptionConfigProviderOutputReference</a>

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.providerInput"></a>

```java
public IResolvable|EksClusterEncryptionConfigProvider getProviderInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterEncryptionConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>

---


### EksClusterEncryptionConfigProviderOutputReference <a name="EksClusterEncryptionConfigProviderOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterEncryptionConfigProviderOutputReference;

new EksClusterEncryptionConfigProviderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.resetKeyArn">resetKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyArn` <a name="resetKeyArn" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.resetKeyArn"></a>

```java
public void resetKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.keyArnInput">keyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.keyArn">keyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyArnInput`<sup>Optional</sup> <a name="keyArnInput" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.keyArnInput"></a>

```java
public java.lang.String getKeyArnInput();
```

- *Type:* java.lang.String

---

##### `keyArn`<sup>Required</sup> <a name="keyArn" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.keyArn"></a>

```java
public java.lang.String getKeyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterEncryptionConfigProvider getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a>

---


### EksClusterKubeApiServerConfigOutputReference <a name="EksClusterKubeApiServerConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterKubeApiServerConfigOutputReference;

new EksClusterKubeApiServerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.putServiceNodePortRange">putServiceNodePortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.resetEventTtl">resetEventTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.resetServiceNodePortRange">resetServiceNodePortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServiceNodePortRange` <a name="putServiceNodePortRange" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.putServiceNodePortRange"></a>

```java
public void putServiceNodePortRange(EksClusterKubeApiServerConfigServiceNodePortRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.putServiceNodePortRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange">EksClusterKubeApiServerConfigServiceNodePortRange</a>

---

##### `resetEventTtl` <a name="resetEventTtl" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.resetEventTtl"></a>

```java
public void resetEventTtl()
```

##### `resetServiceNodePortRange` <a name="resetServiceNodePortRange" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.resetServiceNodePortRange"></a>

```java
public void resetServiceNodePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.serviceNodePortRange">serviceNodePortRange</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference">EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.eventTtlInput">eventTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.serviceNodePortRangeInput">serviceNodePortRangeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange">EksClusterKubeApiServerConfigServiceNodePortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.eventTtl">eventTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig">EksClusterKubeApiServerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceNodePortRange`<sup>Required</sup> <a name="serviceNodePortRange" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.serviceNodePortRange"></a>

```java
public EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference getServiceNodePortRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference">EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference</a>

---

##### `eventTtlInput`<sup>Optional</sup> <a name="eventTtlInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.eventTtlInput"></a>

```java
public java.lang.String getEventTtlInput();
```

- *Type:* java.lang.String

---

##### `serviceNodePortRangeInput`<sup>Optional</sup> <a name="serviceNodePortRangeInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.serviceNodePortRangeInput"></a>

```java
public IResolvable|EksClusterKubeApiServerConfigServiceNodePortRange getServiceNodePortRangeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange">EksClusterKubeApiServerConfigServiceNodePortRange</a>

---

##### `eventTtl`<sup>Required</sup> <a name="eventTtl" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.eventTtl"></a>

```java
public java.lang.String getEventTtl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterKubeApiServerConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig">EksClusterKubeApiServerConfig</a>

---


### EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference <a name="EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference;

new EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.resetMaxPort">resetMaxPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.resetMinPort">resetMinPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxPort` <a name="resetMaxPort" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.resetMaxPort"></a>

```java
public void resetMaxPort()
```

##### `resetMinPort` <a name="resetMinPort" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.resetMinPort"></a>

```java
public void resetMinPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.maxPortInput">maxPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.minPortInput">minPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.maxPort">maxPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.minPort">minPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange">EksClusterKubeApiServerConfigServiceNodePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxPortInput`<sup>Optional</sup> <a name="maxPortInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.maxPortInput"></a>

```java
public java.lang.Number getMaxPortInput();
```

- *Type:* java.lang.Number

---

##### `minPortInput`<sup>Optional</sup> <a name="minPortInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.minPortInput"></a>

```java
public java.lang.Number getMinPortInput();
```

- *Type:* java.lang.Number

---

##### `maxPort`<sup>Required</sup> <a name="maxPort" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.maxPort"></a>

```java
public java.lang.Number getMaxPort();
```

- *Type:* java.lang.Number

---

##### `minPort`<sup>Required</sup> <a name="minPort" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.minPort"></a>

```java
public java.lang.Number getMinPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterKubeApiServerConfigServiceNodePortRange getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange">EksClusterKubeApiServerConfigServiceNodePortRange</a>

---


### EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference <a name="EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference;

new EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.resetHorizontalPodAutoscalerSyncPeriod">resetHorizontalPodAutoscalerSyncPeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHorizontalPodAutoscalerSyncPeriod` <a name="resetHorizontalPodAutoscalerSyncPeriod" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.resetHorizontalPodAutoscalerSyncPeriod"></a>

```java
public void resetHorizontalPodAutoscalerSyncPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.horizontalPodAutoscalerSyncPeriodInput">horizontalPodAutoscalerSyncPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.horizontalPodAutoscalerSyncPeriod">horizontalPodAutoscalerSyncPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig">EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `horizontalPodAutoscalerSyncPeriodInput`<sup>Optional</sup> <a name="horizontalPodAutoscalerSyncPeriodInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.horizontalPodAutoscalerSyncPeriodInput"></a>

```java
public java.lang.String getHorizontalPodAutoscalerSyncPeriodInput();
```

- *Type:* java.lang.String

---

##### `horizontalPodAutoscalerSyncPeriod`<sup>Required</sup> <a name="horizontalPodAutoscalerSyncPeriod" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.horizontalPodAutoscalerSyncPeriod"></a>

```java
public java.lang.String getHorizontalPodAutoscalerSyncPeriod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig">EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig</a>

---


### EksClusterKubeControllerManagerConfigOutputReference <a name="EksClusterKubeControllerManagerConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterKubeControllerManagerConfigOutputReference;

new EksClusterKubeControllerManagerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.putHorizontalPodAutoscalerControllerConfig">putHorizontalPodAutoscalerControllerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.resetHorizontalPodAutoscalerControllerConfig">resetHorizontalPodAutoscalerControllerConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHorizontalPodAutoscalerControllerConfig` <a name="putHorizontalPodAutoscalerControllerConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.putHorizontalPodAutoscalerControllerConfig"></a>

```java
public void putHorizontalPodAutoscalerControllerConfig(EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.putHorizontalPodAutoscalerControllerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig">EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig</a>

---

##### `resetHorizontalPodAutoscalerControllerConfig` <a name="resetHorizontalPodAutoscalerControllerConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.resetHorizontalPodAutoscalerControllerConfig"></a>

```java
public void resetHorizontalPodAutoscalerControllerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.horizontalPodAutoscalerControllerConfig">horizontalPodAutoscalerControllerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference">EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.horizontalPodAutoscalerControllerConfigInput">horizontalPodAutoscalerControllerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig">EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfig">EksClusterKubeControllerManagerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `horizontalPodAutoscalerControllerConfig`<sup>Required</sup> <a name="horizontalPodAutoscalerControllerConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.horizontalPodAutoscalerControllerConfig"></a>

```java
public EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference getHorizontalPodAutoscalerControllerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference">EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference</a>

---

##### `horizontalPodAutoscalerControllerConfigInput`<sup>Optional</sup> <a name="horizontalPodAutoscalerControllerConfigInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.horizontalPodAutoscalerControllerConfigInput"></a>

```java
public IResolvable|EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig getHorizontalPodAutoscalerControllerConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig">EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterKubeControllerManagerConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfig">EksClusterKubeControllerManagerConfig</a>

---


### EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference <a name="EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference;

new EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterKubernetesNetworkConfigElasticLoadBalancing getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a>

---


### EksClusterKubernetesNetworkConfigOutputReference <a name="EksClusterKubernetesNetworkConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterKubernetesNetworkConfigOutputReference;

new EksClusterKubernetesNetworkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.putElasticLoadBalancing">putElasticLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetElasticLoadBalancing">resetElasticLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetIpFamily">resetIpFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetServiceIpv4Cidr">resetServiceIpv4Cidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putElasticLoadBalancing` <a name="putElasticLoadBalancing" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.putElasticLoadBalancing"></a>

```java
public void putElasticLoadBalancing(EksClusterKubernetesNetworkConfigElasticLoadBalancing value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.putElasticLoadBalancing.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a>

---

##### `resetElasticLoadBalancing` <a name="resetElasticLoadBalancing" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetElasticLoadBalancing"></a>

```java
public void resetElasticLoadBalancing()
```

##### `resetIpFamily` <a name="resetIpFamily" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetIpFamily"></a>

```java
public void resetIpFamily()
```

##### `resetServiceIpv4Cidr` <a name="resetServiceIpv4Cidr" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetServiceIpv4Cidr"></a>

```java
public void resetServiceIpv4Cidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.elasticLoadBalancing">elasticLoadBalancing</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference">EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv6Cidr">serviceIpv6Cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.elasticLoadBalancingInput">elasticLoadBalancingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.ipFamilyInput">ipFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv4CidrInput">serviceIpv4CidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.ipFamily">ipFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv4Cidr">serviceIpv4Cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `elasticLoadBalancing`<sup>Required</sup> <a name="elasticLoadBalancing" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.elasticLoadBalancing"></a>

```java
public EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference getElasticLoadBalancing();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference">EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference</a>

---

##### `serviceIpv6Cidr`<sup>Required</sup> <a name="serviceIpv6Cidr" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv6Cidr"></a>

```java
public java.lang.String getServiceIpv6Cidr();
```

- *Type:* java.lang.String

---

##### `elasticLoadBalancingInput`<sup>Optional</sup> <a name="elasticLoadBalancingInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.elasticLoadBalancingInput"></a>

```java
public IResolvable|EksClusterKubernetesNetworkConfigElasticLoadBalancing getElasticLoadBalancingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a>

---

##### `ipFamilyInput`<sup>Optional</sup> <a name="ipFamilyInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.ipFamilyInput"></a>

```java
public java.lang.String getIpFamilyInput();
```

- *Type:* java.lang.String

---

##### `serviceIpv4CidrInput`<sup>Optional</sup> <a name="serviceIpv4CidrInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv4CidrInput"></a>

```java
public java.lang.String getServiceIpv4CidrInput();
```

- *Type:* java.lang.String

---

##### `ipFamily`<sup>Required</sup> <a name="ipFamily" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.ipFamily"></a>

```java
public java.lang.String getIpFamily();
```

- *Type:* java.lang.String

---

##### `serviceIpv4Cidr`<sup>Required</sup> <a name="serviceIpv4Cidr" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv4Cidr"></a>

```java
public java.lang.String getServiceIpv4Cidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterKubernetesNetworkConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a>

---


### EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference <a name="EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference;

new EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.putScoringStrategy">putScoringStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.resetScoringStrategy">resetScoringStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScoringStrategy` <a name="putScoringStrategy" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.putScoringStrategy"></a>

```java
public void putScoringStrategy(EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.putScoringStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy</a>

---

##### `resetScoringStrategy` <a name="resetScoringStrategy" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.resetScoringStrategy"></a>

```java
public void resetScoringStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.scoringStrategy">scoringStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.scoringStrategyInput">scoringStrategyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit">EksClusterKubeSchedulerConfigNodeResourcesFit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scoringStrategy`<sup>Required</sup> <a name="scoringStrategy" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.scoringStrategy"></a>

```java
public EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference getScoringStrategy();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference</a>

---

##### `scoringStrategyInput`<sup>Optional</sup> <a name="scoringStrategyInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.scoringStrategyInput"></a>

```java
public IResolvable|EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy getScoringStrategyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterKubeSchedulerConfigNodeResourcesFit getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit">EksClusterKubeSchedulerConfigNodeResourcesFit</a>

---


### EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference <a name="EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference;

new EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResources` <a name="putResources" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.putResources"></a>

```java
public void putResources(IResolvable|java.util.List<EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.putResources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources</a>>

---

##### `resetResources` <a name="resetResources" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.resetResources"></a>

```java
public void resetResources()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.resources"></a>

```java
public EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList getResources();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList</a>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.resourcesInput"></a>

```java
public IResolvable|java.util.List<EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources> getResourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy</a>

---


### EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList <a name="EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList;

new EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.get"></a>

```java
public EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources</a>>

---


### EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference <a name="EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference;

new EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources</a>

---


### EksClusterKubeSchedulerConfigOutputReference <a name="EksClusterKubeSchedulerConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterKubeSchedulerConfigOutputReference;

new EksClusterKubeSchedulerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.putNodeResourcesFit">putNodeResourcesFit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.resetNodeResourcesFit">resetNodeResourcesFit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodeResourcesFit` <a name="putNodeResourcesFit" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.putNodeResourcesFit"></a>

```java
public void putNodeResourcesFit(EksClusterKubeSchedulerConfigNodeResourcesFit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.putNodeResourcesFit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit">EksClusterKubeSchedulerConfigNodeResourcesFit</a>

---

##### `resetNodeResourcesFit` <a name="resetNodeResourcesFit" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.resetNodeResourcesFit"></a>

```java
public void resetNodeResourcesFit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.nodeResourcesFit">nodeResourcesFit</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference">EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.nodeResourcesFitInput">nodeResourcesFitInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit">EksClusterKubeSchedulerConfigNodeResourcesFit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfig">EksClusterKubeSchedulerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodeResourcesFit`<sup>Required</sup> <a name="nodeResourcesFit" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.nodeResourcesFit"></a>

```java
public EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference getNodeResourcesFit();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference">EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference</a>

---

##### `nodeResourcesFitInput`<sup>Optional</sup> <a name="nodeResourcesFitInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.nodeResourcesFitInput"></a>

```java
public IResolvable|EksClusterKubeSchedulerConfigNodeResourcesFit getNodeResourcesFitInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit">EksClusterKubeSchedulerConfigNodeResourcesFit</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterKubeSchedulerConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfig">EksClusterKubeSchedulerConfig</a>

---


### EksClusterLoggingClusterLoggingEnabledTypesList <a name="EksClusterLoggingClusterLoggingEnabledTypesList" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterLoggingClusterLoggingEnabledTypesList;

new EksClusterLoggingClusterLoggingEnabledTypesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.get"></a>

```java
public EksClusterLoggingClusterLoggingEnabledTypesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypes">EksClusterLoggingClusterLoggingEnabledTypes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EksClusterLoggingClusterLoggingEnabledTypes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypes">EksClusterLoggingClusterLoggingEnabledTypes</a>>

---


### EksClusterLoggingClusterLoggingEnabledTypesOutputReference <a name="EksClusterLoggingClusterLoggingEnabledTypesOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference;

new EksClusterLoggingClusterLoggingEnabledTypesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypes">EksClusterLoggingClusterLoggingEnabledTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterLoggingClusterLoggingEnabledTypes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypes">EksClusterLoggingClusterLoggingEnabledTypes</a>

---


### EksClusterLoggingClusterLoggingOutputReference <a name="EksClusterLoggingClusterLoggingOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterLoggingClusterLoggingOutputReference;

new EksClusterLoggingClusterLoggingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.putEnabledTypes">putEnabledTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.resetEnabledTypes">resetEnabledTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnabledTypes` <a name="putEnabledTypes" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.putEnabledTypes"></a>

```java
public void putEnabledTypes(IResolvable|java.util.List<EksClusterLoggingClusterLoggingEnabledTypes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.putEnabledTypes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypes">EksClusterLoggingClusterLoggingEnabledTypes</a>>

---

##### `resetEnabledTypes` <a name="resetEnabledTypes" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.resetEnabledTypes"></a>

```java
public void resetEnabledTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.property.enabledTypes">enabledTypes</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList">EksClusterLoggingClusterLoggingEnabledTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.property.enabledTypesInput">enabledTypesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypes">EksClusterLoggingClusterLoggingEnabledTypes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLogging">EksClusterLoggingClusterLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledTypes`<sup>Required</sup> <a name="enabledTypes" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.property.enabledTypes"></a>

```java
public EksClusterLoggingClusterLoggingEnabledTypesList getEnabledTypes();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList">EksClusterLoggingClusterLoggingEnabledTypesList</a>

---

##### `enabledTypesInput`<sup>Optional</sup> <a name="enabledTypesInput" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.property.enabledTypesInput"></a>

```java
public IResolvable|java.util.List<EksClusterLoggingClusterLoggingEnabledTypes> getEnabledTypesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypes">EksClusterLoggingClusterLoggingEnabledTypes</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterLoggingClusterLogging getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLogging">EksClusterLoggingClusterLogging</a>

---


### EksClusterLoggingOutputReference <a name="EksClusterLoggingOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterLoggingOutputReference;

new EksClusterLoggingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.putClusterLogging">putClusterLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.resetClusterLogging">resetClusterLogging</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClusterLogging` <a name="putClusterLogging" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.putClusterLogging"></a>

```java
public void putClusterLogging(EksClusterLoggingClusterLogging value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.putClusterLogging.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLogging">EksClusterLoggingClusterLogging</a>

---

##### `resetClusterLogging` <a name="resetClusterLogging" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.resetClusterLogging"></a>

```java
public void resetClusterLogging()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.property.clusterLogging">clusterLogging</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference">EksClusterLoggingClusterLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.property.clusterLoggingInput">clusterLoggingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLogging">EksClusterLoggingClusterLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLogging">EksClusterLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterLogging`<sup>Required</sup> <a name="clusterLogging" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.property.clusterLogging"></a>

```java
public EksClusterLoggingClusterLoggingOutputReference getClusterLogging();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference">EksClusterLoggingClusterLoggingOutputReference</a>

---

##### `clusterLoggingInput`<sup>Optional</sup> <a name="clusterLoggingInput" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.property.clusterLoggingInput"></a>

```java
public IResolvable|EksClusterLoggingClusterLogging getClusterLoggingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLogging">EksClusterLoggingClusterLogging</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterLogging getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLogging">EksClusterLogging</a>

---


### EksClusterOutpostConfigControlPlanePlacementOutputReference <a name="EksClusterOutpostConfigControlPlanePlacementOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterOutpostConfigControlPlanePlacementOutputReference;

new EksClusterOutpostConfigControlPlanePlacementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.resetGroupName">resetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.resetSpreadLevel">resetSpreadLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupName` <a name="resetGroupName" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.resetGroupName"></a>

```java
public void resetGroupName()
```

##### `resetSpreadLevel` <a name="resetSpreadLevel" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.resetSpreadLevel"></a>

```java
public void resetSpreadLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.groupNameInput">groupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.spreadLevelInput">spreadLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.groupName">groupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.spreadLevel">spreadLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.groupNameInput"></a>

```java
public java.lang.String getGroupNameInput();
```

- *Type:* java.lang.String

---

##### `spreadLevelInput`<sup>Optional</sup> <a name="spreadLevelInput" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.spreadLevelInput"></a>

```java
public java.lang.String getSpreadLevelInput();
```

- *Type:* java.lang.String

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

---

##### `spreadLevel`<sup>Required</sup> <a name="spreadLevel" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.spreadLevel"></a>

```java
public java.lang.String getSpreadLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterOutpostConfigControlPlanePlacement getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a>

---


### EksClusterOutpostConfigEtcdPlacementOutputReference <a name="EksClusterOutpostConfigEtcdPlacementOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterOutpostConfigEtcdPlacementOutputReference;

new EksClusterOutpostConfigEtcdPlacementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.resetSpreadLevel">resetSpreadLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSpreadLevel` <a name="resetSpreadLevel" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.resetSpreadLevel"></a>

```java
public void resetSpreadLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.spreadLevelInput">spreadLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.spreadLevel">spreadLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacement">EksClusterOutpostConfigEtcdPlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `spreadLevelInput`<sup>Optional</sup> <a name="spreadLevelInput" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.spreadLevelInput"></a>

```java
public java.lang.String getSpreadLevelInput();
```

- *Type:* java.lang.String

---

##### `spreadLevel`<sup>Required</sup> <a name="spreadLevel" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.spreadLevel"></a>

```java
public java.lang.String getSpreadLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterOutpostConfigEtcdPlacement getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacement">EksClusterOutpostConfigEtcdPlacement</a>

---


### EksClusterOutpostConfigOutputReference <a name="EksClusterOutpostConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterOutpostConfigOutputReference;

new EksClusterOutpostConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.putControlPlanePlacement">putControlPlanePlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.putEtcdPlacement">putEtcdPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.resetControlPlaneInstanceType">resetControlPlaneInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.resetControlPlanePlacement">resetControlPlanePlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.resetEtcdInstanceType">resetEtcdInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.resetEtcdPlacement">resetEtcdPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.resetOutpostArns">resetOutpostArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putControlPlanePlacement` <a name="putControlPlanePlacement" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.putControlPlanePlacement"></a>

```java
public void putControlPlanePlacement(EksClusterOutpostConfigControlPlanePlacement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.putControlPlanePlacement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a>

---

##### `putEtcdPlacement` <a name="putEtcdPlacement" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.putEtcdPlacement"></a>

```java
public void putEtcdPlacement(EksClusterOutpostConfigEtcdPlacement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.putEtcdPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacement">EksClusterOutpostConfigEtcdPlacement</a>

---

##### `resetControlPlaneInstanceType` <a name="resetControlPlaneInstanceType" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.resetControlPlaneInstanceType"></a>

```java
public void resetControlPlaneInstanceType()
```

##### `resetControlPlanePlacement` <a name="resetControlPlanePlacement" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.resetControlPlanePlacement"></a>

```java
public void resetControlPlanePlacement()
```

##### `resetEtcdInstanceType` <a name="resetEtcdInstanceType" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.resetEtcdInstanceType"></a>

```java
public void resetEtcdInstanceType()
```

##### `resetEtcdPlacement` <a name="resetEtcdPlacement" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.resetEtcdPlacement"></a>

```java
public void resetEtcdPlacement()
```

##### `resetOutpostArns` <a name="resetOutpostArns" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.resetOutpostArns"></a>

```java
public void resetOutpostArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlanePlacement">controlPlanePlacement</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference">EksClusterOutpostConfigControlPlanePlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.etcdPlacement">etcdPlacement</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference">EksClusterOutpostConfigEtcdPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlaneInstanceTypeInput">controlPlaneInstanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlanePlacementInput">controlPlanePlacementInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.etcdInstanceTypeInput">etcdInstanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.etcdPlacementInput">etcdPlacementInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacement">EksClusterOutpostConfigEtcdPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.outpostArnsInput">outpostArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlaneInstanceType">controlPlaneInstanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.etcdInstanceType">etcdInstanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.outpostArns">outpostArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `controlPlanePlacement`<sup>Required</sup> <a name="controlPlanePlacement" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlanePlacement"></a>

```java
public EksClusterOutpostConfigControlPlanePlacementOutputReference getControlPlanePlacement();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference">EksClusterOutpostConfigControlPlanePlacementOutputReference</a>

---

##### `etcdPlacement`<sup>Required</sup> <a name="etcdPlacement" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.etcdPlacement"></a>

```java
public EksClusterOutpostConfigEtcdPlacementOutputReference getEtcdPlacement();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference">EksClusterOutpostConfigEtcdPlacementOutputReference</a>

---

##### `controlPlaneInstanceTypeInput`<sup>Optional</sup> <a name="controlPlaneInstanceTypeInput" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlaneInstanceTypeInput"></a>

```java
public java.lang.String getControlPlaneInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `controlPlanePlacementInput`<sup>Optional</sup> <a name="controlPlanePlacementInput" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlanePlacementInput"></a>

```java
public IResolvable|EksClusterOutpostConfigControlPlanePlacement getControlPlanePlacementInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a>

---

##### `etcdInstanceTypeInput`<sup>Optional</sup> <a name="etcdInstanceTypeInput" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.etcdInstanceTypeInput"></a>

```java
public java.lang.String getEtcdInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `etcdPlacementInput`<sup>Optional</sup> <a name="etcdPlacementInput" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.etcdPlacementInput"></a>

```java
public IResolvable|EksClusterOutpostConfigEtcdPlacement getEtcdPlacementInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacement">EksClusterOutpostConfigEtcdPlacement</a>

---

##### `outpostArnsInput`<sup>Optional</sup> <a name="outpostArnsInput" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.outpostArnsInput"></a>

```java
public java.util.List<java.lang.String> getOutpostArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `controlPlaneInstanceType`<sup>Required</sup> <a name="controlPlaneInstanceType" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlaneInstanceType"></a>

```java
public java.lang.String getControlPlaneInstanceType();
```

- *Type:* java.lang.String

---

##### `etcdInstanceType`<sup>Required</sup> <a name="etcdInstanceType" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.etcdInstanceType"></a>

```java
public java.lang.String getEtcdInstanceType();
```

- *Type:* java.lang.String

---

##### `outpostArns`<sup>Required</sup> <a name="outpostArns" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.outpostArns"></a>

```java
public java.util.List<java.lang.String> getOutpostArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterOutpostConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a>

---


### EksClusterRemoteNetworkConfigOutputReference <a name="EksClusterRemoteNetworkConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterRemoteNetworkConfigOutputReference;

new EksClusterRemoteNetworkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemoteNodeNetworks">putRemoteNodeNetworks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemotePodNetworks">putRemotePodNetworks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resetRemoteNodeNetworks">resetRemoteNodeNetworks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resetRemotePodNetworks">resetRemotePodNetworks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRemoteNodeNetworks` <a name="putRemoteNodeNetworks" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemoteNodeNetworks"></a>

```java
public void putRemoteNodeNetworks(IResolvable|java.util.List<EksClusterRemoteNetworkConfigRemoteNodeNetworks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemoteNodeNetworks.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>>

---

##### `putRemotePodNetworks` <a name="putRemotePodNetworks" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemotePodNetworks"></a>

```java
public void putRemotePodNetworks(IResolvable|java.util.List<EksClusterRemoteNetworkConfigRemotePodNetworks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemotePodNetworks.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>>

---

##### `resetRemoteNodeNetworks` <a name="resetRemoteNodeNetworks" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resetRemoteNodeNetworks"></a>

```java
public void resetRemoteNodeNetworks()
```

##### `resetRemotePodNetworks` <a name="resetRemotePodNetworks" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resetRemotePodNetworks"></a>

```java
public void resetRemotePodNetworks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remoteNodeNetworks">remoteNodeNetworks</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList">EksClusterRemoteNetworkConfigRemoteNodeNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remotePodNetworks">remotePodNetworks</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList">EksClusterRemoteNetworkConfigRemotePodNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remoteNodeNetworksInput">remoteNodeNetworksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remotePodNetworksInput">remotePodNetworksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `remoteNodeNetworks`<sup>Required</sup> <a name="remoteNodeNetworks" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remoteNodeNetworks"></a>

```java
public EksClusterRemoteNetworkConfigRemoteNodeNetworksList getRemoteNodeNetworks();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList">EksClusterRemoteNetworkConfigRemoteNodeNetworksList</a>

---

##### `remotePodNetworks`<sup>Required</sup> <a name="remotePodNetworks" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remotePodNetworks"></a>

```java
public EksClusterRemoteNetworkConfigRemotePodNetworksList getRemotePodNetworks();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList">EksClusterRemoteNetworkConfigRemotePodNetworksList</a>

---

##### `remoteNodeNetworksInput`<sup>Optional</sup> <a name="remoteNodeNetworksInput" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remoteNodeNetworksInput"></a>

```java
public IResolvable|java.util.List<EksClusterRemoteNetworkConfigRemoteNodeNetworks> getRemoteNodeNetworksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>>

---

##### `remotePodNetworksInput`<sup>Optional</sup> <a name="remotePodNetworksInput" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remotePodNetworksInput"></a>

```java
public IResolvable|java.util.List<EksClusterRemoteNetworkConfigRemotePodNetworks> getRemotePodNetworksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterRemoteNetworkConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a>

---


### EksClusterRemoteNetworkConfigRemoteNodeNetworksList <a name="EksClusterRemoteNetworkConfigRemoteNodeNetworksList" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList;

new EksClusterRemoteNetworkConfigRemoteNodeNetworksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.get"></a>

```java
public EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EksClusterRemoteNetworkConfigRemoteNodeNetworks> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>>

---


### EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference <a name="EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference;

new EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resetCidrs">resetCidrs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrs` <a name="resetCidrs" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resetCidrs"></a>

```java
public void resetCidrs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.cidrsInput">cidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.cidrs">cidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrsInput`<sup>Optional</sup> <a name="cidrsInput" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.cidrsInput"></a>

```java
public java.util.List<java.lang.String> getCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cidrs`<sup>Required</sup> <a name="cidrs" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.cidrs"></a>

```java
public java.util.List<java.lang.String> getCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterRemoteNetworkConfigRemoteNodeNetworks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>

---


### EksClusterRemoteNetworkConfigRemotePodNetworksList <a name="EksClusterRemoteNetworkConfigRemotePodNetworksList" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterRemoteNetworkConfigRemotePodNetworksList;

new EksClusterRemoteNetworkConfigRemotePodNetworksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.get"></a>

```java
public EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EksClusterRemoteNetworkConfigRemotePodNetworks> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>>

---


### EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference <a name="EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference;

new EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resetCidrs">resetCidrs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrs` <a name="resetCidrs" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resetCidrs"></a>

```java
public void resetCidrs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.cidrsInput">cidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.cidrs">cidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrsInput`<sup>Optional</sup> <a name="cidrsInput" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.cidrsInput"></a>

```java
public java.util.List<java.lang.String> getCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cidrs`<sup>Required</sup> <a name="cidrs" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.cidrs"></a>

```java
public java.util.List<java.lang.String> getCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterRemoteNetworkConfigRemotePodNetworks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>

---


### EksClusterResourcesVpcConfigOutputReference <a name="EksClusterResourcesVpcConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterResourcesVpcConfigOutputReference;

new EksClusterResourcesVpcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.resetControlPlaneEgressMode">resetControlPlaneEgressMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.resetEndpointPrivateAccess">resetEndpointPrivateAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.resetEndpointPublicAccess">resetEndpointPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.resetPublicAccessCidrs">resetPublicAccessCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetControlPlaneEgressMode` <a name="resetControlPlaneEgressMode" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.resetControlPlaneEgressMode"></a>

```java
public void resetControlPlaneEgressMode()
```

##### `resetEndpointPrivateAccess` <a name="resetEndpointPrivateAccess" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.resetEndpointPrivateAccess"></a>

```java
public void resetEndpointPrivateAccess()
```

##### `resetEndpointPublicAccess` <a name="resetEndpointPublicAccess" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.resetEndpointPublicAccess"></a>

```java
public void resetEndpointPublicAccess()
```

##### `resetPublicAccessCidrs` <a name="resetPublicAccessCidrs" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.resetPublicAccessCidrs"></a>

```java
public void resetPublicAccessCidrs()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.controlPlaneEgressModeInput">controlPlaneEgressModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.endpointPrivateAccessInput">endpointPrivateAccessInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.endpointPublicAccessInput">endpointPublicAccessInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.publicAccessCidrsInput">publicAccessCidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.controlPlaneEgressMode">controlPlaneEgressMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.endpointPrivateAccess">endpointPrivateAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.endpointPublicAccess">endpointPublicAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.publicAccessCidrs">publicAccessCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig">EksClusterResourcesVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `controlPlaneEgressModeInput`<sup>Optional</sup> <a name="controlPlaneEgressModeInput" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.controlPlaneEgressModeInput"></a>

```java
public java.lang.String getControlPlaneEgressModeInput();
```

- *Type:* java.lang.String

---

##### `endpointPrivateAccessInput`<sup>Optional</sup> <a name="endpointPrivateAccessInput" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.endpointPrivateAccessInput"></a>

```java
public java.lang.Boolean|IResolvable getEndpointPrivateAccessInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endpointPublicAccessInput`<sup>Optional</sup> <a name="endpointPublicAccessInput" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.endpointPublicAccessInput"></a>

```java
public java.lang.Boolean|IResolvable getEndpointPublicAccessInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `publicAccessCidrsInput`<sup>Optional</sup> <a name="publicAccessCidrsInput" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.publicAccessCidrsInput"></a>

```java
public java.util.List<java.lang.String> getPublicAccessCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `controlPlaneEgressMode`<sup>Required</sup> <a name="controlPlaneEgressMode" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.controlPlaneEgressMode"></a>

```java
public java.lang.String getControlPlaneEgressMode();
```

- *Type:* java.lang.String

---

##### `endpointPrivateAccess`<sup>Required</sup> <a name="endpointPrivateAccess" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.endpointPrivateAccess"></a>

```java
public java.lang.Boolean|IResolvable getEndpointPrivateAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endpointPublicAccess`<sup>Required</sup> <a name="endpointPublicAccess" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.endpointPublicAccess"></a>

```java
public java.lang.Boolean|IResolvable getEndpointPublicAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `publicAccessCidrs`<sup>Required</sup> <a name="publicAccessCidrs" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.publicAccessCidrs"></a>

```java
public java.util.List<java.lang.String> getPublicAccessCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterResourcesVpcConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig">EksClusterResourcesVpcConfig</a>

---


### EksClusterRollbackConfigOutputReference <a name="EksClusterRollbackConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterRollbackConfigOutputReference;

new EksClusterRollbackConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.resetTimeoutMinutes">resetTimeoutMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeoutMinutes` <a name="resetTimeoutMinutes" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.resetTimeoutMinutes"></a>

```java
public void resetTimeoutMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.property.timeoutMinutesInput">timeoutMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.property.timeoutMinutes">timeoutMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfig">EksClusterRollbackConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeoutMinutesInput`<sup>Optional</sup> <a name="timeoutMinutesInput" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.property.timeoutMinutesInput"></a>

```java
public java.lang.Number getTimeoutMinutesInput();
```

- *Type:* java.lang.Number

---

##### `timeoutMinutes`<sup>Required</sup> <a name="timeoutMinutes" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.property.timeoutMinutes"></a>

```java
public java.lang.Number getTimeoutMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterRollbackConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfig">EksClusterRollbackConfig</a>

---


### EksClusterStorageConfigBlockStorageOutputReference <a name="EksClusterStorageConfigBlockStorageOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterStorageConfigBlockStorageOutputReference;

new EksClusterStorageConfigBlockStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterStorageConfigBlockStorage getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a>

---


### EksClusterStorageConfigOutputReference <a name="EksClusterStorageConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterStorageConfigOutputReference;

new EksClusterStorageConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.putBlockStorage">putBlockStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.resetBlockStorage">resetBlockStorage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBlockStorage` <a name="putBlockStorage" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.putBlockStorage"></a>

```java
public void putBlockStorage(EksClusterStorageConfigBlockStorage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.putBlockStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a>

---

##### `resetBlockStorage` <a name="resetBlockStorage" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.resetBlockStorage"></a>

```java
public void resetBlockStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.property.blockStorage">blockStorage</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference">EksClusterStorageConfigBlockStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.property.blockStorageInput">blockStorageInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `blockStorage`<sup>Required</sup> <a name="blockStorage" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.property.blockStorage"></a>

```java
public EksClusterStorageConfigBlockStorageOutputReference getBlockStorage();
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference">EksClusterStorageConfigBlockStorageOutputReference</a>

---

##### `blockStorageInput`<sup>Optional</sup> <a name="blockStorageInput" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.property.blockStorageInput"></a>

```java
public IResolvable|EksClusterStorageConfigBlockStorage getBlockStorageInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterStorageConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a>

---


### EksClusterTagsList <a name="EksClusterTagsList" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterTagsList;

new EksClusterTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.get"></a>

```java
public EksClusterTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterTags">EksClusterTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EksClusterTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eksCluster.EksClusterTags">EksClusterTags</a>>

---


### EksClusterTagsOutputReference <a name="EksClusterTagsOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterTagsOutputReference;

new EksClusterTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterTags">EksClusterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterTags">EksClusterTags</a>

---


### EksClusterUpgradePolicyOutputReference <a name="EksClusterUpgradePolicyOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterUpgradePolicyOutputReference;

new EksClusterUpgradePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.resetSupportType">resetSupportType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSupportType` <a name="resetSupportType" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.resetSupportType"></a>

```java
public void resetSupportType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.property.supportTypeInput">supportTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.property.supportType">supportType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `supportTypeInput`<sup>Optional</sup> <a name="supportTypeInput" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.property.supportTypeInput"></a>

```java
public java.lang.String getSupportTypeInput();
```

- *Type:* java.lang.String

---

##### `supportType`<sup>Required</sup> <a name="supportType" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.property.supportType"></a>

```java
public java.lang.String getSupportType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterUpgradePolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a>

---


### EksClusterZonalShiftConfigOutputReference <a name="EksClusterZonalShiftConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eks_cluster.EksClusterZonalShiftConfigOutputReference;

new EksClusterZonalShiftConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|EksClusterZonalShiftConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a>

---



