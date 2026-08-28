# `sagemakerCluster` Submodule <a name="`sagemakerCluster` Submodule" id="@cdktn/provider-awscc.sagemakerCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerCluster <a name="SagemakerCluster" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster awscc_sagemaker_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerCluster;

SagemakerCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .autoScaling(SagemakerClusterAutoScaling)
//  .clusterName(java.lang.String)
//  .clusterRole(java.lang.String)
//  .instanceGroups(IResolvable|java.util.List<SagemakerClusterInstanceGroups>)
//  .nodeProvisioningMode(java.lang.String)
//  .nodeRecovery(java.lang.String)
//  .orchestrator(SagemakerClusterOrchestrator)
//  .restrictedInstanceGroups(IResolvable|java.util.List<SagemakerClusterRestrictedInstanceGroups>)
//  .tags(IResolvable|java.util.List<SagemakerClusterTags>)
//  .tieredStorageConfig(SagemakerClusterTieredStorageConfig)
//  .vpcConfig(SagemakerClusterVpcConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.autoScaling">autoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling">SagemakerClusterAutoScaling</a></code> | Configuration for cluster auto-scaling. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | The name of the HyperPod Cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.clusterRole">clusterRole</a></code> | <code>java.lang.String</code> | The cluster role for the autoscaler to assume. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.instanceGroups">instanceGroups</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>></code> | The instance groups of the SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.nodeProvisioningMode">nodeProvisioningMode</a></code> | <code>java.lang.String</code> | Determines the scaling strategy for the SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.nodeRecovery">nodeRecovery</a></code> | <code>java.lang.String</code> | If node auto-recovery is set to true, faulty nodes will be replaced or rebooted when a failure is detected. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.orchestrator">orchestrator</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator">SagemakerClusterOrchestrator</a></code> | Specifies parameter(s) specific to the orchestrator, e.g. specify the EKS cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.restrictedInstanceGroups">restrictedInstanceGroups</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>></code> | The restricted instance groups of the SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>></code> | Custom tags for managing the SageMaker HyperPod cluster as an AWS resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.tieredStorageConfig">tieredStorageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig">SagemakerClusterTieredStorageConfig</a></code> | Configuration for tiered storage in the SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig">SagemakerClusterVpcConfig</a></code> | Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoScaling`<sup>Optional</sup> <a name="autoScaling" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.autoScaling"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling">SagemakerClusterAutoScaling</a>

Configuration for cluster auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#auto_scaling SagemakerCluster#auto_scaling}

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

The name of the HyperPod Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#cluster_name SagemakerCluster#cluster_name}

---

##### `clusterRole`<sup>Optional</sup> <a name="clusterRole" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.clusterRole"></a>

- *Type:* java.lang.String

The cluster role for the autoscaler to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#cluster_role SagemakerCluster#cluster_role}

---

##### `instanceGroups`<sup>Optional</sup> <a name="instanceGroups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.instanceGroups"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>>

The instance groups of the SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#instance_groups SagemakerCluster#instance_groups}

---

##### `nodeProvisioningMode`<sup>Optional</sup> <a name="nodeProvisioningMode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.nodeProvisioningMode"></a>

- *Type:* java.lang.String

Determines the scaling strategy for the SageMaker HyperPod cluster.

When set to 'Continuous', enables continuous scaling which dynamically manages node provisioning. If the parameter is omitted, uses the standard scaling approach in previous release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#node_provisioning_mode SagemakerCluster#node_provisioning_mode}

---

##### `nodeRecovery`<sup>Optional</sup> <a name="nodeRecovery" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.nodeRecovery"></a>

- *Type:* java.lang.String

If node auto-recovery is set to true, faulty nodes will be replaced or rebooted when a failure is detected.

If set to false, nodes will be labelled when a fault is detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#node_recovery SagemakerCluster#node_recovery}

---

##### `orchestrator`<sup>Optional</sup> <a name="orchestrator" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.orchestrator"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator">SagemakerClusterOrchestrator</a>

Specifies parameter(s) specific to the orchestrator, e.g. specify the EKS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#orchestrator SagemakerCluster#orchestrator}

---

##### `restrictedInstanceGroups`<sup>Optional</sup> <a name="restrictedInstanceGroups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.restrictedInstanceGroups"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>>

The restricted instance groups of the SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#restricted_instance_groups SagemakerCluster#restricted_instance_groups}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>>

Custom tags for managing the SageMaker HyperPod cluster as an AWS resource.

You can add tags to your cluster in the same way you add them in other AWS services that support tagging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#tags SagemakerCluster#tags}

---

##### `tieredStorageConfig`<sup>Optional</sup> <a name="tieredStorageConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.tieredStorageConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig">SagemakerClusterTieredStorageConfig</a>

Configuration for tiered storage in the SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#tiered_storage_config SagemakerCluster#tiered_storage_config}

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.vpcConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig">SagemakerClusterVpcConfig</a>

Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.

You can control access to and from your resources by configuring a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#vpc_config SagemakerCluster#vpc_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putAutoScaling">putAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putInstanceGroups">putInstanceGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putOrchestrator">putOrchestrator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putRestrictedInstanceGroups">putRestrictedInstanceGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putTieredStorageConfig">putTieredStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetAutoScaling">resetAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetClusterName">resetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetClusterRole">resetClusterRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetInstanceGroups">resetInstanceGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetNodeProvisioningMode">resetNodeProvisioningMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetNodeRecovery">resetNodeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetOrchestrator">resetOrchestrator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetRestrictedInstanceGroups">resetRestrictedInstanceGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetTieredStorageConfig">resetTieredStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoScaling` <a name="putAutoScaling" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putAutoScaling"></a>

```java
public void putAutoScaling(SagemakerClusterAutoScaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling">SagemakerClusterAutoScaling</a>

---

##### `putInstanceGroups` <a name="putInstanceGroups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putInstanceGroups"></a>

```java
public void putInstanceGroups(IResolvable|java.util.List<SagemakerClusterInstanceGroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putInstanceGroups.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>>

---

##### `putOrchestrator` <a name="putOrchestrator" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putOrchestrator"></a>

```java
public void putOrchestrator(SagemakerClusterOrchestrator value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putOrchestrator.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator">SagemakerClusterOrchestrator</a>

---

##### `putRestrictedInstanceGroups` <a name="putRestrictedInstanceGroups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putRestrictedInstanceGroups"></a>

```java
public void putRestrictedInstanceGroups(IResolvable|java.util.List<SagemakerClusterRestrictedInstanceGroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putRestrictedInstanceGroups.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SagemakerClusterTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>>

---

##### `putTieredStorageConfig` <a name="putTieredStorageConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putTieredStorageConfig"></a>

```java
public void putTieredStorageConfig(SagemakerClusterTieredStorageConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putTieredStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig">SagemakerClusterTieredStorageConfig</a>

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putVpcConfig"></a>

```java
public void putVpcConfig(SagemakerClusterVpcConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig">SagemakerClusterVpcConfig</a>

---

##### `resetAutoScaling` <a name="resetAutoScaling" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetAutoScaling"></a>

```java
public void resetAutoScaling()
```

##### `resetClusterName` <a name="resetClusterName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetClusterName"></a>

```java
public void resetClusterName()
```

##### `resetClusterRole` <a name="resetClusterRole" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetClusterRole"></a>

```java
public void resetClusterRole()
```

##### `resetInstanceGroups` <a name="resetInstanceGroups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetInstanceGroups"></a>

```java
public void resetInstanceGroups()
```

##### `resetNodeProvisioningMode` <a name="resetNodeProvisioningMode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetNodeProvisioningMode"></a>

```java
public void resetNodeProvisioningMode()
```

##### `resetNodeRecovery` <a name="resetNodeRecovery" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetNodeRecovery"></a>

```java
public void resetNodeRecovery()
```

##### `resetOrchestrator` <a name="resetOrchestrator" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetOrchestrator"></a>

```java
public void resetOrchestrator()
```

##### `resetRestrictedInstanceGroups` <a name="resetRestrictedInstanceGroups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetRestrictedInstanceGroups"></a>

```java
public void resetRestrictedInstanceGroups()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTieredStorageConfig` <a name="resetTieredStorageConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetTieredStorageConfig"></a>

```java
public void resetTieredStorageConfig()
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetVpcConfig"></a>

```java
public void resetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.isConstruct"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerCluster;

SagemakerCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerCluster;

SagemakerCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerCluster;

SagemakerCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerCluster;

SagemakerCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SagemakerCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SagemakerCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SagemakerCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SagemakerCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.autoScaling">autoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference">SagemakerClusterAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterStatus">clusterStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.failureMessage">failureMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.instanceGroups">instanceGroups</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList">SagemakerClusterInstanceGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.orchestrator">orchestrator</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference">SagemakerClusterOrchestratorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.restrictedInstanceGroups">restrictedInstanceGroups</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList">SagemakerClusterRestrictedInstanceGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList">SagemakerClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tieredStorageConfig">tieredStorageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference">SagemakerClusterTieredStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference">SagemakerClusterVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.autoScalingInput">autoScalingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling">SagemakerClusterAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterRoleInput">clusterRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.instanceGroupsInput">instanceGroupsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.nodeProvisioningModeInput">nodeProvisioningModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.nodeRecoveryInput">nodeRecoveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.orchestratorInput">orchestratorInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator">SagemakerClusterOrchestrator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.restrictedInstanceGroupsInput">restrictedInstanceGroupsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tieredStorageConfigInput">tieredStorageConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig">SagemakerClusterTieredStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.vpcConfigInput">vpcConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig">SagemakerClusterVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterRole">clusterRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.nodeProvisioningMode">nodeProvisioningMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.nodeRecovery">nodeRecovery</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoScaling`<sup>Required</sup> <a name="autoScaling" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.autoScaling"></a>

```java
public SagemakerClusterAutoScalingOutputReference getAutoScaling();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference">SagemakerClusterAutoScalingOutputReference</a>

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

---

##### `clusterStatus`<sup>Required</sup> <a name="clusterStatus" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterStatus"></a>

```java
public java.lang.String getClusterStatus();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `failureMessage`<sup>Required</sup> <a name="failureMessage" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.failureMessage"></a>

```java
public java.lang.String getFailureMessage();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceGroups`<sup>Required</sup> <a name="instanceGroups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.instanceGroups"></a>

```java
public SagemakerClusterInstanceGroupsList getInstanceGroups();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList">SagemakerClusterInstanceGroupsList</a>

---

##### `orchestrator`<sup>Required</sup> <a name="orchestrator" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.orchestrator"></a>

```java
public SagemakerClusterOrchestratorOutputReference getOrchestrator();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference">SagemakerClusterOrchestratorOutputReference</a>

---

##### `restrictedInstanceGroups`<sup>Required</sup> <a name="restrictedInstanceGroups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.restrictedInstanceGroups"></a>

```java
public SagemakerClusterRestrictedInstanceGroupsList getRestrictedInstanceGroups();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList">SagemakerClusterRestrictedInstanceGroupsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tags"></a>

```java
public SagemakerClusterTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList">SagemakerClusterTagsList</a>

---

##### `tieredStorageConfig`<sup>Required</sup> <a name="tieredStorageConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tieredStorageConfig"></a>

```java
public SagemakerClusterTieredStorageConfigOutputReference getTieredStorageConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference">SagemakerClusterTieredStorageConfigOutputReference</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.vpcConfig"></a>

```java
public SagemakerClusterVpcConfigOutputReference getVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference">SagemakerClusterVpcConfigOutputReference</a>

---

##### `autoScalingInput`<sup>Optional</sup> <a name="autoScalingInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.autoScalingInput"></a>

```java
public IResolvable|SagemakerClusterAutoScaling getAutoScalingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling">SagemakerClusterAutoScaling</a>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `clusterRoleInput`<sup>Optional</sup> <a name="clusterRoleInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterRoleInput"></a>

```java
public java.lang.String getClusterRoleInput();
```

- *Type:* java.lang.String

---

##### `instanceGroupsInput`<sup>Optional</sup> <a name="instanceGroupsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.instanceGroupsInput"></a>

```java
public IResolvable|java.util.List<SagemakerClusterInstanceGroups> getInstanceGroupsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>>

---

##### `nodeProvisioningModeInput`<sup>Optional</sup> <a name="nodeProvisioningModeInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.nodeProvisioningModeInput"></a>

```java
public java.lang.String getNodeProvisioningModeInput();
```

- *Type:* java.lang.String

---

##### `nodeRecoveryInput`<sup>Optional</sup> <a name="nodeRecoveryInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.nodeRecoveryInput"></a>

```java
public java.lang.String getNodeRecoveryInput();
```

- *Type:* java.lang.String

---

##### `orchestratorInput`<sup>Optional</sup> <a name="orchestratorInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.orchestratorInput"></a>

```java
public IResolvable|SagemakerClusterOrchestrator getOrchestratorInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator">SagemakerClusterOrchestrator</a>

---

##### `restrictedInstanceGroupsInput`<sup>Optional</sup> <a name="restrictedInstanceGroupsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.restrictedInstanceGroupsInput"></a>

```java
public IResolvable|java.util.List<SagemakerClusterRestrictedInstanceGroups> getRestrictedInstanceGroupsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SagemakerClusterTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>>

---

##### `tieredStorageConfigInput`<sup>Optional</sup> <a name="tieredStorageConfigInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tieredStorageConfigInput"></a>

```java
public IResolvable|SagemakerClusterTieredStorageConfig getTieredStorageConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig">SagemakerClusterTieredStorageConfig</a>

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.vpcConfigInput"></a>

```java
public IResolvable|SagemakerClusterVpcConfig getVpcConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig">SagemakerClusterVpcConfig</a>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `clusterRole`<sup>Required</sup> <a name="clusterRole" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterRole"></a>

```java
public java.lang.String getClusterRole();
```

- *Type:* java.lang.String

---

##### `nodeProvisioningMode`<sup>Required</sup> <a name="nodeProvisioningMode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.nodeProvisioningMode"></a>

```java
public java.lang.String getNodeProvisioningMode();
```

- *Type:* java.lang.String

---

##### `nodeRecovery`<sup>Required</sup> <a name="nodeRecovery" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.nodeRecovery"></a>

```java
public java.lang.String getNodeRecovery();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerClusterAutoScaling <a name="SagemakerClusterAutoScaling" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterAutoScaling;

SagemakerClusterAutoScaling.builder()
//  .autoScalerType(java.lang.String)
//  .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling.property.autoScalerType">autoScalerType</a></code> | <code>java.lang.String</code> | The type of auto-scaler to use. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling.property.mode">mode</a></code> | <code>java.lang.String</code> | The auto-scaling mode for the cluster. |

---

##### `autoScalerType`<sup>Optional</sup> <a name="autoScalerType" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling.property.autoScalerType"></a>

```java
public java.lang.String getAutoScalerType();
```

- *Type:* java.lang.String

The type of auto-scaler to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#auto_scaler_type SagemakerCluster#auto_scaler_type}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

The auto-scaling mode for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#mode SagemakerCluster#mode}

---

### SagemakerClusterConfig <a name="SagemakerClusterConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterConfig;

SagemakerClusterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .autoScaling(SagemakerClusterAutoScaling)
//  .clusterName(java.lang.String)
//  .clusterRole(java.lang.String)
//  .instanceGroups(IResolvable|java.util.List<SagemakerClusterInstanceGroups>)
//  .nodeProvisioningMode(java.lang.String)
//  .nodeRecovery(java.lang.String)
//  .orchestrator(SagemakerClusterOrchestrator)
//  .restrictedInstanceGroups(IResolvable|java.util.List<SagemakerClusterRestrictedInstanceGroups>)
//  .tags(IResolvable|java.util.List<SagemakerClusterTags>)
//  .tieredStorageConfig(SagemakerClusterTieredStorageConfig)
//  .vpcConfig(SagemakerClusterVpcConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.autoScaling">autoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling">SagemakerClusterAutoScaling</a></code> | Configuration for cluster auto-scaling. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | The name of the HyperPod Cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.clusterRole">clusterRole</a></code> | <code>java.lang.String</code> | The cluster role for the autoscaler to assume. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.instanceGroups">instanceGroups</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>></code> | The instance groups of the SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.nodeProvisioningMode">nodeProvisioningMode</a></code> | <code>java.lang.String</code> | Determines the scaling strategy for the SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.nodeRecovery">nodeRecovery</a></code> | <code>java.lang.String</code> | If node auto-recovery is set to true, faulty nodes will be replaced or rebooted when a failure is detected. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.orchestrator">orchestrator</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator">SagemakerClusterOrchestrator</a></code> | Specifies parameter(s) specific to the orchestrator, e.g. specify the EKS cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.restrictedInstanceGroups">restrictedInstanceGroups</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>></code> | The restricted instance groups of the SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>></code> | Custom tags for managing the SageMaker HyperPod cluster as an AWS resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.tieredStorageConfig">tieredStorageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig">SagemakerClusterTieredStorageConfig</a></code> | Configuration for tiered storage in the SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig">SagemakerClusterVpcConfig</a></code> | Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoScaling`<sup>Optional</sup> <a name="autoScaling" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.autoScaling"></a>

```java
public SagemakerClusterAutoScaling getAutoScaling();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling">SagemakerClusterAutoScaling</a>

Configuration for cluster auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#auto_scaling SagemakerCluster#auto_scaling}

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

The name of the HyperPod Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#cluster_name SagemakerCluster#cluster_name}

---

##### `clusterRole`<sup>Optional</sup> <a name="clusterRole" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.clusterRole"></a>

```java
public java.lang.String getClusterRole();
```

- *Type:* java.lang.String

The cluster role for the autoscaler to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#cluster_role SagemakerCluster#cluster_role}

---

##### `instanceGroups`<sup>Optional</sup> <a name="instanceGroups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.instanceGroups"></a>

```java
public IResolvable|java.util.List<SagemakerClusterInstanceGroups> getInstanceGroups();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>>

The instance groups of the SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#instance_groups SagemakerCluster#instance_groups}

---

##### `nodeProvisioningMode`<sup>Optional</sup> <a name="nodeProvisioningMode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.nodeProvisioningMode"></a>

```java
public java.lang.String getNodeProvisioningMode();
```

- *Type:* java.lang.String

Determines the scaling strategy for the SageMaker HyperPod cluster.

When set to 'Continuous', enables continuous scaling which dynamically manages node provisioning. If the parameter is omitted, uses the standard scaling approach in previous release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#node_provisioning_mode SagemakerCluster#node_provisioning_mode}

---

##### `nodeRecovery`<sup>Optional</sup> <a name="nodeRecovery" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.nodeRecovery"></a>

```java
public java.lang.String getNodeRecovery();
```

- *Type:* java.lang.String

If node auto-recovery is set to true, faulty nodes will be replaced or rebooted when a failure is detected.

If set to false, nodes will be labelled when a fault is detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#node_recovery SagemakerCluster#node_recovery}

---

##### `orchestrator`<sup>Optional</sup> <a name="orchestrator" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.orchestrator"></a>

```java
public SagemakerClusterOrchestrator getOrchestrator();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator">SagemakerClusterOrchestrator</a>

Specifies parameter(s) specific to the orchestrator, e.g. specify the EKS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#orchestrator SagemakerCluster#orchestrator}

---

##### `restrictedInstanceGroups`<sup>Optional</sup> <a name="restrictedInstanceGroups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.restrictedInstanceGroups"></a>

```java
public IResolvable|java.util.List<SagemakerClusterRestrictedInstanceGroups> getRestrictedInstanceGroups();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>>

The restricted instance groups of the SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#restricted_instance_groups SagemakerCluster#restricted_instance_groups}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SagemakerClusterTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>>

Custom tags for managing the SageMaker HyperPod cluster as an AWS resource.

You can add tags to your cluster in the same way you add them in other AWS services that support tagging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#tags SagemakerCluster#tags}

---

##### `tieredStorageConfig`<sup>Optional</sup> <a name="tieredStorageConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.tieredStorageConfig"></a>

```java
public SagemakerClusterTieredStorageConfig getTieredStorageConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig">SagemakerClusterTieredStorageConfig</a>

Configuration for tiered storage in the SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#tiered_storage_config SagemakerCluster#tiered_storage_config}

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.vpcConfig"></a>

```java
public SagemakerClusterVpcConfig getVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig">SagemakerClusterVpcConfig</a>

Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.

You can control access to and from your resources by configuring a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#vpc_config SagemakerCluster#vpc_config}

---

### SagemakerClusterInstanceGroups <a name="SagemakerClusterInstanceGroups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroups;

SagemakerClusterInstanceGroups.builder()
//  .capacityRequirements(SagemakerClusterInstanceGroupsCapacityRequirements)
//  .currentCount(java.lang.Number)
//  .executionRole(java.lang.String)
//  .imageId(java.lang.String)
//  .instanceCount(java.lang.Number)
//  .instanceGroupName(java.lang.String)
//  .instanceStorageConfigs(IResolvable|java.util.List<SagemakerClusterInstanceGroupsInstanceStorageConfigs>)
//  .instanceType(java.lang.String)
//  .kubernetesConfig(SagemakerClusterInstanceGroupsKubernetesConfig)
//  .lifeCycleConfig(SagemakerClusterInstanceGroupsLifeCycleConfig)
//  .minInstanceCount(java.lang.Number)
//  .onStartDeepHealthChecks(java.util.List<java.lang.String>)
//  .overrideVpcConfig(SagemakerClusterInstanceGroupsOverrideVpcConfig)
//  .scheduledUpdateConfig(SagemakerClusterInstanceGroupsScheduledUpdateConfig)
//  .threadsPerCore(java.lang.Number)
//  .trainingPlanArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.capacityRequirements">capacityRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements">SagemakerClusterInstanceGroupsCapacityRequirements</a></code> | Specifies the capacity requirements configuration for an instance group. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.currentCount">currentCount</a></code> | <code>java.lang.Number</code> | The number of instances that are currently in the instance group of a SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | The execution role for the instance group to assume. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.imageId">imageId</a></code> | <code>java.lang.String</code> | AMI Id to be used for launching EC2 instances - HyperPodPublicAmiId or CustomAmiId. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | The number of instances you specified to add to the instance group of a SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.instanceGroupName">instanceGroupName</a></code> | <code>java.lang.String</code> | The name of the instance group of a SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.instanceStorageConfigs">instanceStorageConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs">SagemakerClusterInstanceGroupsInstanceStorageConfigs</a>></code> | The instance storage configuration for the instance group. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | The instance type of the instance group of a SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.kubernetesConfig">kubernetesConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig">SagemakerClusterInstanceGroupsKubernetesConfig</a></code> | Kubernetes configuration for cluster nodes including labels and taints. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.lifeCycleConfig">lifeCycleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig">SagemakerClusterInstanceGroupsLifeCycleConfig</a></code> | The lifecycle configuration for a SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.minInstanceCount">minInstanceCount</a></code> | <code>java.lang.Number</code> | The minimum number of instances required for the instance group to be InService. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.onStartDeepHealthChecks">onStartDeepHealthChecks</a></code> | <code>java.util.List<java.lang.String></code> | Nodes will undergo advanced stress test to detect and replace faulty instances, based on the type of deep health check(s) passed in. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.overrideVpcConfig">overrideVpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig">SagemakerClusterInstanceGroupsOverrideVpcConfig</a></code> | Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.scheduledUpdateConfig">scheduledUpdateConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfig</a></code> | The configuration object of the schedule that SageMaker follows when updating the AMI. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.threadsPerCore">threadsPerCore</a></code> | <code>java.lang.Number</code> | The number you specified to TreadsPerCore in CreateCluster for enabling or disabling multithreading. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.trainingPlanArn">trainingPlanArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the training plan to use for this cluster instance group. |

---

##### `capacityRequirements`<sup>Optional</sup> <a name="capacityRequirements" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.capacityRequirements"></a>

```java
public SagemakerClusterInstanceGroupsCapacityRequirements getCapacityRequirements();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements">SagemakerClusterInstanceGroupsCapacityRequirements</a>

Specifies the capacity requirements configuration for an instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#capacity_requirements SagemakerCluster#capacity_requirements}

---

##### `currentCount`<sup>Optional</sup> <a name="currentCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.currentCount"></a>

```java
public java.lang.Number getCurrentCount();
```

- *Type:* java.lang.Number

The number of instances that are currently in the instance group of a SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#current_count SagemakerCluster#current_count}

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

The execution role for the instance group to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#execution_role SagemakerCluster#execution_role}

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

AMI Id to be used for launching EC2 instances - HyperPodPublicAmiId or CustomAmiId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#image_id SagemakerCluster#image_id}

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

The number of instances you specified to add to the instance group of a SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#instance_count SagemakerCluster#instance_count}

---

##### `instanceGroupName`<sup>Optional</sup> <a name="instanceGroupName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.instanceGroupName"></a>

```java
public java.lang.String getInstanceGroupName();
```

- *Type:* java.lang.String

The name of the instance group of a SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#instance_group_name SagemakerCluster#instance_group_name}

---

##### `instanceStorageConfigs`<sup>Optional</sup> <a name="instanceStorageConfigs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.instanceStorageConfigs"></a>

```java
public IResolvable|java.util.List<SagemakerClusterInstanceGroupsInstanceStorageConfigs> getInstanceStorageConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs">SagemakerClusterInstanceGroupsInstanceStorageConfigs</a>>

The instance storage configuration for the instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#instance_storage_configs SagemakerCluster#instance_storage_configs}

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

The instance type of the instance group of a SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#instance_type SagemakerCluster#instance_type}

---

##### `kubernetesConfig`<sup>Optional</sup> <a name="kubernetesConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.kubernetesConfig"></a>

```java
public SagemakerClusterInstanceGroupsKubernetesConfig getKubernetesConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig">SagemakerClusterInstanceGroupsKubernetesConfig</a>

Kubernetes configuration for cluster nodes including labels and taints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#kubernetes_config SagemakerCluster#kubernetes_config}

---

##### `lifeCycleConfig`<sup>Optional</sup> <a name="lifeCycleConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.lifeCycleConfig"></a>

```java
public SagemakerClusterInstanceGroupsLifeCycleConfig getLifeCycleConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig">SagemakerClusterInstanceGroupsLifeCycleConfig</a>

The lifecycle configuration for a SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#life_cycle_config SagemakerCluster#life_cycle_config}

---

##### `minInstanceCount`<sup>Optional</sup> <a name="minInstanceCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.minInstanceCount"></a>

```java
public java.lang.Number getMinInstanceCount();
```

- *Type:* java.lang.Number

The minimum number of instances required for the instance group to be InService.

MinInstanceCount must be less than or equal to InstanceCount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#min_instance_count SagemakerCluster#min_instance_count}

---

##### `onStartDeepHealthChecks`<sup>Optional</sup> <a name="onStartDeepHealthChecks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.onStartDeepHealthChecks"></a>

```java
public java.util.List<java.lang.String> getOnStartDeepHealthChecks();
```

- *Type:* java.util.List<java.lang.String>

Nodes will undergo advanced stress test to detect and replace faulty instances, based on the type of deep health check(s) passed in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#on_start_deep_health_checks SagemakerCluster#on_start_deep_health_checks}

---

##### `overrideVpcConfig`<sup>Optional</sup> <a name="overrideVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.overrideVpcConfig"></a>

```java
public SagemakerClusterInstanceGroupsOverrideVpcConfig getOverrideVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig">SagemakerClusterInstanceGroupsOverrideVpcConfig</a>

Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.

You can control access to and from your resources by configuring a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#override_vpc_config SagemakerCluster#override_vpc_config}

---

##### `scheduledUpdateConfig`<sup>Optional</sup> <a name="scheduledUpdateConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.scheduledUpdateConfig"></a>

```java
public SagemakerClusterInstanceGroupsScheduledUpdateConfig getScheduledUpdateConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfig</a>

The configuration object of the schedule that SageMaker follows when updating the AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#scheduled_update_config SagemakerCluster#scheduled_update_config}

---

##### `threadsPerCore`<sup>Optional</sup> <a name="threadsPerCore" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.threadsPerCore"></a>

```java
public java.lang.Number getThreadsPerCore();
```

- *Type:* java.lang.Number

The number you specified to TreadsPerCore in CreateCluster for enabling or disabling multithreading.

For instance types that support multithreading, you can specify 1 for disabling multithreading and 2 for enabling multithreading.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#threads_per_core SagemakerCluster#threads_per_core}

---

##### `trainingPlanArn`<sup>Optional</sup> <a name="trainingPlanArn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.trainingPlanArn"></a>

```java
public java.lang.String getTrainingPlanArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the training plan to use for this cluster instance group.

For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see CreateTrainingPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#training_plan_arn SagemakerCluster#training_plan_arn}

---

### SagemakerClusterInstanceGroupsCapacityRequirements <a name="SagemakerClusterInstanceGroupsCapacityRequirements" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsCapacityRequirements;

SagemakerClusterInstanceGroupsCapacityRequirements.builder()
//  .onDemand(java.lang.String)
//  .spot(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements.property.onDemand">onDemand</a></code> | <code>java.lang.String</code> | Options for OnDemand capacity. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements.property.spot">spot</a></code> | <code>java.lang.String</code> | Options for Spot capacity. |

---

##### `onDemand`<sup>Optional</sup> <a name="onDemand" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements.property.onDemand"></a>

```java
public java.lang.String getOnDemand();
```

- *Type:* java.lang.String

Options for OnDemand capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#on_demand SagemakerCluster#on_demand}

---

##### `spot`<sup>Optional</sup> <a name="spot" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements.property.spot"></a>

```java
public java.lang.String getSpot();
```

- *Type:* java.lang.String

Options for Spot capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#spot SagemakerCluster#spot}

---

### SagemakerClusterInstanceGroupsInstanceStorageConfigs <a name="SagemakerClusterInstanceGroupsInstanceStorageConfigs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs;

SagemakerClusterInstanceGroupsInstanceStorageConfigs.builder()
//  .ebsVolumeConfig(SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs.property.ebsVolumeConfig">ebsVolumeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a></code> | Defines the configuration for attaching additional Amazon Elastic Block Store (EBS) volumes to the instances in the SageMaker HyperPod cluster instance group. |

---

##### `ebsVolumeConfig`<sup>Optional</sup> <a name="ebsVolumeConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs.property.ebsVolumeConfig"></a>

```java
public SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig getEbsVolumeConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a>

Defines the configuration for attaching additional Amazon Elastic Block Store (EBS) volumes to the instances in the SageMaker HyperPod cluster instance group.

The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to /opt/sagemaker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#ebs_volume_config SagemakerCluster#ebs_volume_config}

---

### SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig <a name="SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig;

SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.builder()
//  .rootVolume(java.lang.Boolean|IResolvable)
//  .volumeKmsKeyId(java.lang.String)
//  .volumeSizeInGb(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.rootVolume">rootVolume</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#root_volume SagemakerCluster#root_volume}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#volume_kms_key_id SagemakerCluster#volume_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>java.lang.Number</code> | The size in gigabytes (GB) of the additional EBS volume to be attached to the instances in the SageMaker HyperPod cluster instance group. |

---

##### `rootVolume`<sup>Optional</sup> <a name="rootVolume" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.rootVolume"></a>

```java
public java.lang.Boolean|IResolvable getRootVolume();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#root_volume SagemakerCluster#root_volume}.

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="volumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.volumeKmsKeyId"></a>

```java
public java.lang.String getVolumeKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#volume_kms_key_id SagemakerCluster#volume_kms_key_id}.

---

##### `volumeSizeInGb`<sup>Optional</sup> <a name="volumeSizeInGb" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.volumeSizeInGb"></a>

```java
public java.lang.Number getVolumeSizeInGb();
```

- *Type:* java.lang.Number

The size in gigabytes (GB) of the additional EBS volume to be attached to the instances in the SageMaker HyperPod cluster instance group.

The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to /opt/sagemaker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#volume_size_in_gb SagemakerCluster#volume_size_in_gb}

---

### SagemakerClusterInstanceGroupsKubernetesConfig <a name="SagemakerClusterInstanceGroupsKubernetesConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsKubernetesConfig;

SagemakerClusterInstanceGroupsKubernetesConfig.builder()
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .taints(IResolvable|java.util.List<SagemakerClusterInstanceGroupsKubernetesConfigTaints>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of Kubernetes labels to apply to cluster nodes. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig.property.taints">taints</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a>></code> | A list of Kubernetes taints to apply to cluster nodes. Maximum of 50 taints. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of Kubernetes labels to apply to cluster nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#labels SagemakerCluster#labels}

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig.property.taints"></a>

```java
public IResolvable|java.util.List<SagemakerClusterInstanceGroupsKubernetesConfigTaints> getTaints();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a>>

A list of Kubernetes taints to apply to cluster nodes. Maximum of 50 taints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#taints SagemakerCluster#taints}

---

### SagemakerClusterInstanceGroupsKubernetesConfigTaints <a name="SagemakerClusterInstanceGroupsKubernetesConfigTaints" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints;

SagemakerClusterInstanceGroupsKubernetesConfigTaints.builder()
//  .effect(java.lang.String)
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints.property.effect">effect</a></code> | <code>java.lang.String</code> | The effect of the taint. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints.property.key">key</a></code> | <code>java.lang.String</code> | The key of the taint. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints.property.value">value</a></code> | <code>java.lang.String</code> | The value of the taint. |

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

The effect of the taint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#effect SagemakerCluster#effect}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the taint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#key SagemakerCluster#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the taint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#value SagemakerCluster#value}

---

### SagemakerClusterInstanceGroupsLifeCycleConfig <a name="SagemakerClusterInstanceGroupsLifeCycleConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsLifeCycleConfig;

SagemakerClusterInstanceGroupsLifeCycleConfig.builder()
//  .onCreate(java.lang.String)
//  .sourceS3Uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig.property.onCreate">onCreate</a></code> | <code>java.lang.String</code> | The file name of the entrypoint script of lifecycle scripts under SourceS3Uri. This entrypoint script runs during cluster creation. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig.property.sourceS3Uri">sourceS3Uri</a></code> | <code>java.lang.String</code> | An Amazon S3 bucket path where your lifecycle scripts are stored. |

---

##### `onCreate`<sup>Optional</sup> <a name="onCreate" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig.property.onCreate"></a>

```java
public java.lang.String getOnCreate();
```

- *Type:* java.lang.String

The file name of the entrypoint script of lifecycle scripts under SourceS3Uri. This entrypoint script runs during cluster creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#on_create SagemakerCluster#on_create}

---

##### `sourceS3Uri`<sup>Optional</sup> <a name="sourceS3Uri" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig.property.sourceS3Uri"></a>

```java
public java.lang.String getSourceS3Uri();
```

- *Type:* java.lang.String

An Amazon S3 bucket path where your lifecycle scripts are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#source_s3_uri SagemakerCluster#source_s3_uri}

---

### SagemakerClusterInstanceGroupsOverrideVpcConfig <a name="SagemakerClusterInstanceGroupsOverrideVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsOverrideVpcConfig;

SagemakerClusterInstanceGroupsOverrideVpcConfig.builder()
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnets(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The VPC security group IDs, in the form sg-xxxxxxxx. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | The ID of the subnets in the VPC to which you want to connect your training job or model. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

The VPC security group IDs, in the form sg-xxxxxxxx.

Specify the security groups for the VPC that is specified in the Subnets field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#security_group_ids SagemakerCluster#security_group_ids}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

The ID of the subnets in the VPC to which you want to connect your training job or model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#subnets SagemakerCluster#subnets}

---

### SagemakerClusterInstanceGroupsScheduledUpdateConfig <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig;

SagemakerClusterInstanceGroupsScheduledUpdateConfig.builder()
//  .deploymentConfig(SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig)
//  .scheduleExpression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig.property.deploymentConfig">deploymentConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig</a></code> | The configuration to use when updating the AMI versions. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | A cron expression that specifies the schedule that SageMaker follows when updating the AMI. |

---

##### `deploymentConfig`<sup>Optional</sup> <a name="deploymentConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig.property.deploymentConfig"></a>

```java
public SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig getDeploymentConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig</a>

The configuration to use when updating the AMI versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#deployment_config SagemakerCluster#deployment_config}

---

##### `scheduleExpression`<sup>Optional</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

A cron expression that specifies the schedule that SageMaker follows when updating the AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#schedule_expression SagemakerCluster#schedule_expression}

---

### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig;

SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig.builder()
//  .autoRollbackConfiguration(IResolvable|java.util.List<SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration>)
//  .rollingUpdatePolicy(SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy)
//  .waitIntervalInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig.property.autoRollbackConfiguration">autoRollbackConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a>></code> | An array that contains the alarms that SageMaker monitors to know whether to roll back the AMI update. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig.property.rollingUpdatePolicy">rollingUpdatePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy</a></code> | The policy that SageMaker uses when updating the AMI versions of the cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig.property.waitIntervalInSeconds">waitIntervalInSeconds</a></code> | <code>java.lang.Number</code> | The duration in seconds that SageMaker waits before updating more instances in the cluster. |

---

##### `autoRollbackConfiguration`<sup>Optional</sup> <a name="autoRollbackConfiguration" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig.property.autoRollbackConfiguration"></a>

```java
public IResolvable|java.util.List<SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration> getAutoRollbackConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a>>

An array that contains the alarms that SageMaker monitors to know whether to roll back the AMI update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#auto_rollback_configuration SagemakerCluster#auto_rollback_configuration}

---

##### `rollingUpdatePolicy`<sup>Optional</sup> <a name="rollingUpdatePolicy" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig.property.rollingUpdatePolicy"></a>

```java
public SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy getRollingUpdatePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy</a>

The policy that SageMaker uses when updating the AMI versions of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#rolling_update_policy SagemakerCluster#rolling_update_policy}

---

##### `waitIntervalInSeconds`<sup>Optional</sup> <a name="waitIntervalInSeconds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig.property.waitIntervalInSeconds"></a>

```java
public java.lang.Number getWaitIntervalInSeconds();
```

- *Type:* java.lang.Number

The duration in seconds that SageMaker waits before updating more instances in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#wait_interval_in_seconds SagemakerCluster#wait_interval_in_seconds}

---

### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration;

SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration.builder()
//  .alarmName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration.property.alarmName">alarmName</a></code> | <code>java.lang.String</code> | The name of the alarm. |

---

##### `alarmName`<sup>Optional</sup> <a name="alarmName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration.property.alarmName"></a>

```java
public java.lang.String getAlarmName();
```

- *Type:* java.lang.String

The name of the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#alarm_name SagemakerCluster#alarm_name}

---

### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy;

SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy.builder()
//  .maximumBatchSize(SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize)
//  .rollbackMaximumBatchSize(SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy.property.maximumBatchSize">maximumBatchSize</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a></code> | The configuration of the size measurements of the AMI update. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy.property.rollbackMaximumBatchSize">rollbackMaximumBatchSize</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a></code> | The configuration of the size measurements of the AMI update. |

---

##### `maximumBatchSize`<sup>Optional</sup> <a name="maximumBatchSize" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy.property.maximumBatchSize"></a>

```java
public SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize getMaximumBatchSize();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>

The configuration of the size measurements of the AMI update.

Using this configuration, you can specify whether SageMaker should update your instance group by an amount or percentage of instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#maximum_batch_size SagemakerCluster#maximum_batch_size}

---

##### `rollbackMaximumBatchSize`<sup>Optional</sup> <a name="rollbackMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy.property.rollbackMaximumBatchSize"></a>

```java
public SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize getRollbackMaximumBatchSize();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>

The configuration of the size measurements of the AMI update.

Using this configuration, you can specify whether SageMaker should update your instance group by an amount or percentage of instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#rollback_maximum_batch_size SagemakerCluster#rollback_maximum_batch_size}

---

### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize;

SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize.builder()
//  .type(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.type">type</a></code> | <code>java.lang.String</code> | Specifies whether SageMaker should process the update by amount or percentage of instances. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.value">value</a></code> | <code>java.lang.Number</code> | Specifies the amount or percentage of instances SageMaker updates at a time. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Specifies whether SageMaker should process the update by amount or percentage of instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#type SagemakerCluster#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Specifies the amount or percentage of instances SageMaker updates at a time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#value SagemakerCluster#value}

---

### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize;

SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.builder()
//  .type(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.type">type</a></code> | <code>java.lang.String</code> | Specifies whether SageMaker should process the update by amount or percentage of instances. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.value">value</a></code> | <code>java.lang.Number</code> | Specifies the amount or percentage of instances SageMaker updates at a time. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Specifies whether SageMaker should process the update by amount or percentage of instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#type SagemakerCluster#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Specifies the amount or percentage of instances SageMaker updates at a time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#value SagemakerCluster#value}

---

### SagemakerClusterOrchestrator <a name="SagemakerClusterOrchestrator" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterOrchestrator;

SagemakerClusterOrchestrator.builder()
//  .eks(SagemakerClusterOrchestratorEks)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator.property.eks">eks</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks">SagemakerClusterOrchestratorEks</a></code> | Specifies parameter(s) related to EKS as orchestrator, e.g. the EKS cluster nodes will attach to,. |

---

##### `eks`<sup>Optional</sup> <a name="eks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator.property.eks"></a>

```java
public SagemakerClusterOrchestratorEks getEks();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks">SagemakerClusterOrchestratorEks</a>

Specifies parameter(s) related to EKS as orchestrator, e.g. the EKS cluster nodes will attach to,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#eks SagemakerCluster#eks}

---

### SagemakerClusterOrchestratorEks <a name="SagemakerClusterOrchestratorEks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterOrchestratorEks;

SagemakerClusterOrchestratorEks.builder()
//  .clusterArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | The ARN of the EKS cluster, such as arn:aws:eks:us-west-2:123456789012:cluster/my-eks-cluster. |

---

##### `clusterArn`<sup>Optional</sup> <a name="clusterArn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

The ARN of the EKS cluster, such as arn:aws:eks:us-west-2:123456789012:cluster/my-eks-cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#cluster_arn SagemakerCluster#cluster_arn}

---

### SagemakerClusterRestrictedInstanceGroups <a name="SagemakerClusterRestrictedInstanceGroups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterRestrictedInstanceGroups;

SagemakerClusterRestrictedInstanceGroups.builder()
//  .currentCount(java.lang.Number)
//  .environmentConfig(SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig)
//  .executionRole(java.lang.String)
//  .instanceCount(java.lang.Number)
//  .instanceGroupName(java.lang.String)
//  .instanceStorageConfigs(IResolvable|java.util.List<SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs>)
//  .instanceType(java.lang.String)
//  .onStartDeepHealthChecks(java.util.List<java.lang.String>)
//  .overrideVpcConfig(SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig)
//  .threadsPerCore(java.lang.Number)
//  .trainingPlanArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.currentCount">currentCount</a></code> | <code>java.lang.Number</code> | The number of instances that are currently in the restricted instance group of a SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.environmentConfig">environmentConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig</a></code> | The configuration for the restricted instance groups (RIG) environment. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | The execution role for the instance group to assume. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | The number of instances you specified to add to the restricted instance group of a SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.instanceGroupName">instanceGroupName</a></code> | <code>java.lang.String</code> | The name of the instance group of a SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.instanceStorageConfigs">instanceStorageConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a>></code> | The instance storage configuration for the instance group. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | The instance type of the instance group of a SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.onStartDeepHealthChecks">onStartDeepHealthChecks</a></code> | <code>java.util.List<java.lang.String></code> | Nodes will undergo advanced stress test to detect and replace faulty instances, based on the type of deep health check(s) passed in. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.overrideVpcConfig">overrideVpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig">SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig</a></code> | Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.threadsPerCore">threadsPerCore</a></code> | <code>java.lang.Number</code> | The number you specified to TreadsPerCore in CreateCluster for enabling or disabling multithreading. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.trainingPlanArn">trainingPlanArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the training plan to use for this cluster restricted instance group. |

---

##### `currentCount`<sup>Optional</sup> <a name="currentCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.currentCount"></a>

```java
public java.lang.Number getCurrentCount();
```

- *Type:* java.lang.Number

The number of instances that are currently in the restricted instance group of a SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#current_count SagemakerCluster#current_count}

---

##### `environmentConfig`<sup>Optional</sup> <a name="environmentConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.environmentConfig"></a>

```java
public SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig getEnvironmentConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig</a>

The configuration for the restricted instance groups (RIG) environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#environment_config SagemakerCluster#environment_config}

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

The execution role for the instance group to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#execution_role SagemakerCluster#execution_role}

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

The number of instances you specified to add to the restricted instance group of a SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#instance_count SagemakerCluster#instance_count}

---

##### `instanceGroupName`<sup>Optional</sup> <a name="instanceGroupName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.instanceGroupName"></a>

```java
public java.lang.String getInstanceGroupName();
```

- *Type:* java.lang.String

The name of the instance group of a SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#instance_group_name SagemakerCluster#instance_group_name}

---

##### `instanceStorageConfigs`<sup>Optional</sup> <a name="instanceStorageConfigs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.instanceStorageConfigs"></a>

```java
public IResolvable|java.util.List<SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs> getInstanceStorageConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a>>

The instance storage configuration for the instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#instance_storage_configs SagemakerCluster#instance_storage_configs}

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

The instance type of the instance group of a SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#instance_type SagemakerCluster#instance_type}

---

##### `onStartDeepHealthChecks`<sup>Optional</sup> <a name="onStartDeepHealthChecks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.onStartDeepHealthChecks"></a>

```java
public java.util.List<java.lang.String> getOnStartDeepHealthChecks();
```

- *Type:* java.util.List<java.lang.String>

Nodes will undergo advanced stress test to detect and replace faulty instances, based on the type of deep health check(s) passed in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#on_start_deep_health_checks SagemakerCluster#on_start_deep_health_checks}

---

##### `overrideVpcConfig`<sup>Optional</sup> <a name="overrideVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.overrideVpcConfig"></a>

```java
public SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig getOverrideVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig">SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig</a>

Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.

You can control access to and from your resources by configuring a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#override_vpc_config SagemakerCluster#override_vpc_config}

---

##### `threadsPerCore`<sup>Optional</sup> <a name="threadsPerCore" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.threadsPerCore"></a>

```java
public java.lang.Number getThreadsPerCore();
```

- *Type:* java.lang.Number

The number you specified to TreadsPerCore in CreateCluster for enabling or disabling multithreading.

For instance types that support multithreading, you can specify 1 for disabling multithreading and 2 for enabling multithreading.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#threads_per_core SagemakerCluster#threads_per_core}

---

##### `trainingPlanArn`<sup>Optional</sup> <a name="trainingPlanArn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.trainingPlanArn"></a>

```java
public java.lang.String getTrainingPlanArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the training plan to use for this cluster restricted instance group.

For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see CreateTrainingPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#training_plan_arn SagemakerCluster#training_plan_arn}

---

### SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig <a name="SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig;

SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig.builder()
//  .fsxLustreConfig(SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig.property.fsxLustreConfig">fsxLustreConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig</a></code> | Configuration settings for an Amazon FSx for Lustre file system to be used with the cluster. |

---

##### `fsxLustreConfig`<sup>Optional</sup> <a name="fsxLustreConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig.property.fsxLustreConfig"></a>

```java
public SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig getFsxLustreConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig</a>

Configuration settings for an Amazon FSx for Lustre file system to be used with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#fsx_lustre_config SagemakerCluster#fsx_lustre_config}

---

### SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig <a name="SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig;

SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig.builder()
//  .perUnitStorageThroughput(java.lang.Number)
//  .sizeInGiB(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig.property.perUnitStorageThroughput">perUnitStorageThroughput</a></code> | <code>java.lang.Number</code> | The throughput capacity of the FSx for Lustre file system, measured in MB/s per TiB of storage. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig.property.sizeInGiB">sizeInGiB</a></code> | <code>java.lang.Number</code> | The storage capacity of the FSx for Lustre file system, specified in gibibytes (GiB). |

---

##### `perUnitStorageThroughput`<sup>Optional</sup> <a name="perUnitStorageThroughput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig.property.perUnitStorageThroughput"></a>

```java
public java.lang.Number getPerUnitStorageThroughput();
```

- *Type:* java.lang.Number

The throughput capacity of the FSx for Lustre file system, measured in MB/s per TiB of storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#per_unit_storage_throughput SagemakerCluster#per_unit_storage_throughput}

---

##### `sizeInGiB`<sup>Optional</sup> <a name="sizeInGiB" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig.property.sizeInGiB"></a>

```java
public java.lang.Number getSizeInGiB();
```

- *Type:* java.lang.Number

The storage capacity of the FSx for Lustre file system, specified in gibibytes (GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#size_in_gi_b SagemakerCluster#size_in_gi_b}

---

### SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs <a name="SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs;

SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs.builder()
//  .ebsVolumeConfig(SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs.property.ebsVolumeConfig">ebsVolumeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a></code> | Defines the configuration for attaching additional Amazon Elastic Block Store (EBS) volumes to the instances in the SageMaker HyperPod cluster instance group. |

---

##### `ebsVolumeConfig`<sup>Optional</sup> <a name="ebsVolumeConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs.property.ebsVolumeConfig"></a>

```java
public SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig getEbsVolumeConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a>

Defines the configuration for attaching additional Amazon Elastic Block Store (EBS) volumes to the instances in the SageMaker HyperPod cluster instance group.

The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to /opt/sagemaker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#ebs_volume_config SagemakerCluster#ebs_volume_config}

---

### SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig <a name="SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig;

SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.builder()
//  .rootVolume(java.lang.Boolean|IResolvable)
//  .volumeKmsKeyId(java.lang.String)
//  .volumeSizeInGb(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.rootVolume">rootVolume</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#root_volume SagemakerCluster#root_volume}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#volume_kms_key_id SagemakerCluster#volume_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>java.lang.Number</code> | The size in gigabytes (GB) of the additional EBS volume to be attached to the instances in the SageMaker HyperPod cluster instance group. |

---

##### `rootVolume`<sup>Optional</sup> <a name="rootVolume" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.rootVolume"></a>

```java
public java.lang.Boolean|IResolvable getRootVolume();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#root_volume SagemakerCluster#root_volume}.

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="volumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.volumeKmsKeyId"></a>

```java
public java.lang.String getVolumeKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#volume_kms_key_id SagemakerCluster#volume_kms_key_id}.

---

##### `volumeSizeInGb`<sup>Optional</sup> <a name="volumeSizeInGb" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.volumeSizeInGb"></a>

```java
public java.lang.Number getVolumeSizeInGb();
```

- *Type:* java.lang.Number

The size in gigabytes (GB) of the additional EBS volume to be attached to the instances in the SageMaker HyperPod cluster instance group.

The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to /opt/sagemaker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#volume_size_in_gb SagemakerCluster#volume_size_in_gb}

---

### SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig <a name="SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig;

SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig.builder()
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnets(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The VPC security group IDs, in the form sg-xxxxxxxx. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | The ID of the subnets in the VPC to which you want to connect your training job or model. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

The VPC security group IDs, in the form sg-xxxxxxxx.

Specify the security groups for the VPC that is specified in the Subnets field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#security_group_ids SagemakerCluster#security_group_ids}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

The ID of the subnets in the VPC to which you want to connect your training job or model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#subnets SagemakerCluster#subnets}

---

### SagemakerClusterTags <a name="SagemakerClusterTags" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterTags;

SagemakerClusterTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#key SagemakerCluster#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#value SagemakerCluster#value}

---

### SagemakerClusterTieredStorageConfig <a name="SagemakerClusterTieredStorageConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterTieredStorageConfig;

SagemakerClusterTieredStorageConfig.builder()
//  .instanceMemoryAllocationPercentage(java.lang.Number)
//  .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig.property.instanceMemoryAllocationPercentage">instanceMemoryAllocationPercentage</a></code> | <code>java.lang.Number</code> | The percentage of instance memory to allocate for tiered storage. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | The mode of tiered storage. |

---

##### `instanceMemoryAllocationPercentage`<sup>Optional</sup> <a name="instanceMemoryAllocationPercentage" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig.property.instanceMemoryAllocationPercentage"></a>

```java
public java.lang.Number getInstanceMemoryAllocationPercentage();
```

- *Type:* java.lang.Number

The percentage of instance memory to allocate for tiered storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#instance_memory_allocation_percentage SagemakerCluster#instance_memory_allocation_percentage}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

The mode of tiered storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#mode SagemakerCluster#mode}

---

### SagemakerClusterVpcConfig <a name="SagemakerClusterVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterVpcConfig;

SagemakerClusterVpcConfig.builder()
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnets(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The VPC security group IDs, in the form sg-xxxxxxxx. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | The ID of the subnets in the VPC to which you want to connect your training job or model. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

The VPC security group IDs, in the form sg-xxxxxxxx.

Specify the security groups for the VPC that is specified in the Subnets field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#security_group_ids SagemakerCluster#security_group_ids}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

The ID of the subnets in the VPC to which you want to connect your training job or model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#subnets SagemakerCluster#subnets}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerClusterAutoScalingOutputReference <a name="SagemakerClusterAutoScalingOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterAutoScalingOutputReference;

new SagemakerClusterAutoScalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.resetAutoScalerType">resetAutoScalerType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoScalerType` <a name="resetAutoScalerType" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.resetAutoScalerType"></a>

```java
public void resetAutoScalerType()
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.resetMode"></a>

```java
public void resetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.autoScalerTypeInput">autoScalerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.autoScalerType">autoScalerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling">SagemakerClusterAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoScalerTypeInput`<sup>Optional</sup> <a name="autoScalerTypeInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.autoScalerTypeInput"></a>

```java
public java.lang.String getAutoScalerTypeInput();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `autoScalerType`<sup>Required</sup> <a name="autoScalerType" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.autoScalerType"></a>

```java
public java.lang.String getAutoScalerType();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterAutoScaling getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling">SagemakerClusterAutoScaling</a>

---


### SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference <a name="SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference;

new SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.resetOnDemand">resetOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.resetSpot">resetSpot</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOnDemand` <a name="resetOnDemand" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.resetOnDemand"></a>

```java
public void resetOnDemand()
```

##### `resetSpot` <a name="resetSpot" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.resetSpot"></a>

```java
public void resetSpot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.onDemandInput">onDemandInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.spotInput">spotInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.onDemand">onDemand</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.spot">spot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements">SagemakerClusterInstanceGroupsCapacityRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `onDemandInput`<sup>Optional</sup> <a name="onDemandInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.onDemandInput"></a>

```java
public java.lang.String getOnDemandInput();
```

- *Type:* java.lang.String

---

##### `spotInput`<sup>Optional</sup> <a name="spotInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.spotInput"></a>

```java
public java.lang.String getSpotInput();
```

- *Type:* java.lang.String

---

##### `onDemand`<sup>Required</sup> <a name="onDemand" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.onDemand"></a>

```java
public java.lang.String getOnDemand();
```

- *Type:* java.lang.String

---

##### `spot`<sup>Required</sup> <a name="spot" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.spot"></a>

```java
public java.lang.String getSpot();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterInstanceGroupsCapacityRequirements getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements">SagemakerClusterInstanceGroupsCapacityRequirements</a>

---


### SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference <a name="SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference;

new SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetRootVolume">resetRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetVolumeKmsKeyId">resetVolumeKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetVolumeSizeInGb">resetVolumeSizeInGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRootVolume` <a name="resetRootVolume" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetRootVolume"></a>

```java
public void resetRootVolume()
```

##### `resetVolumeKmsKeyId` <a name="resetVolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetVolumeKmsKeyId"></a>

```java
public void resetVolumeKmsKeyId()
```

##### `resetVolumeSizeInGb` <a name="resetVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetVolumeSizeInGb"></a>

```java
public void resetVolumeSizeInGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolumeInput">rootVolumeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyIdInput">volumeKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGbInput">volumeSizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolume">rootVolume</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rootVolumeInput`<sup>Optional</sup> <a name="rootVolumeInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolumeInput"></a>

```java
public java.lang.Boolean|IResolvable getRootVolumeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `volumeKmsKeyIdInput`<sup>Optional</sup> <a name="volumeKmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```java
public java.lang.String getVolumeKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `volumeSizeInGbInput`<sup>Optional</sup> <a name="volumeSizeInGbInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGbInput"></a>

```java
public java.lang.Number getVolumeSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `rootVolume`<sup>Required</sup> <a name="rootVolume" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolume"></a>

```java
public java.lang.Boolean|IResolvable getRootVolume();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `volumeKmsKeyId`<sup>Required</sup> <a name="volumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyId"></a>

```java
public java.lang.String getVolumeKmsKeyId();
```

- *Type:* java.lang.String

---

##### `volumeSizeInGb`<sup>Required</sup> <a name="volumeSizeInGb" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGb"></a>

```java
public java.lang.Number getVolumeSizeInGb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a>

---


### SagemakerClusterInstanceGroupsInstanceStorageConfigsList <a name="SagemakerClusterInstanceGroupsInstanceStorageConfigsList" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList;

new SagemakerClusterInstanceGroupsInstanceStorageConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.get"></a>

```java
public SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs">SagemakerClusterInstanceGroupsInstanceStorageConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerClusterInstanceGroupsInstanceStorageConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs">SagemakerClusterInstanceGroupsInstanceStorageConfigs</a>>

---


### SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference <a name="SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference;

new SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.putEbsVolumeConfig">putEbsVolumeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.resetEbsVolumeConfig">resetEbsVolumeConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbsVolumeConfig` <a name="putEbsVolumeConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.putEbsVolumeConfig"></a>

```java
public void putEbsVolumeConfig(SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.putEbsVolumeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a>

---

##### `resetEbsVolumeConfig` <a name="resetEbsVolumeConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.resetEbsVolumeConfig"></a>

```java
public void resetEbsVolumeConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfig">ebsVolumeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference">SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfigInput">ebsVolumeConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs">SagemakerClusterInstanceGroupsInstanceStorageConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ebsVolumeConfig`<sup>Required</sup> <a name="ebsVolumeConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfig"></a>

```java
public SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference getEbsVolumeConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference">SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference</a>

---

##### `ebsVolumeConfigInput`<sup>Optional</sup> <a name="ebsVolumeConfigInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfigInput"></a>

```java
public IResolvable|SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig getEbsVolumeConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterInstanceGroupsInstanceStorageConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs">SagemakerClusterInstanceGroupsInstanceStorageConfigs</a>

---


### SagemakerClusterInstanceGroupsKubernetesConfigOutputReference <a name="SagemakerClusterInstanceGroupsKubernetesConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference;

new SagemakerClusterInstanceGroupsKubernetesConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.putTaints">putTaints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.resetTaints">resetTaints</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTaints` <a name="putTaints" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.putTaints"></a>

```java
public void putTaints(IResolvable|java.util.List<SagemakerClusterInstanceGroupsKubernetesConfigTaints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.putTaints.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a>>

---

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetTaints` <a name="resetTaints" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.resetTaints"></a>

```java
public void resetTaints()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.taints">taints</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList">SagemakerClusterInstanceGroupsKubernetesConfigTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.taintsInput">taintsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig">SagemakerClusterInstanceGroupsKubernetesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.taints"></a>

```java
public SagemakerClusterInstanceGroupsKubernetesConfigTaintsList getTaints();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList">SagemakerClusterInstanceGroupsKubernetesConfigTaintsList</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `taintsInput`<sup>Optional</sup> <a name="taintsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.taintsInput"></a>

```java
public IResolvable|java.util.List<SagemakerClusterInstanceGroupsKubernetesConfigTaints> getTaintsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a>>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterInstanceGroupsKubernetesConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig">SagemakerClusterInstanceGroupsKubernetesConfig</a>

---


### SagemakerClusterInstanceGroupsKubernetesConfigTaintsList <a name="SagemakerClusterInstanceGroupsKubernetesConfigTaintsList" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList;

new SagemakerClusterInstanceGroupsKubernetesConfigTaintsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.get"></a>

```java
public SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerClusterInstanceGroupsKubernetesConfigTaints> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a>>

---


### SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference <a name="SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference;

new SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resetEffect">resetEffect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEffect` <a name="resetEffect" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resetEffect"></a>

```java
public void resetEffect()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.effectInput">effectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.effect">effect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.effectInput"></a>

```java
public java.lang.String getEffectInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterInstanceGroupsKubernetesConfigTaints getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a>

---


### SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference <a name="SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference;

new SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.resetOnCreate">resetOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.resetSourceS3Uri">resetSourceS3Uri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOnCreate` <a name="resetOnCreate" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.resetOnCreate"></a>

```java
public void resetOnCreate()
```

##### `resetSourceS3Uri` <a name="resetSourceS3Uri" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.resetSourceS3Uri"></a>

```java
public void resetSourceS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.onCreateInput">onCreateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.sourceS3UriInput">sourceS3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.onCreate">onCreate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.sourceS3Uri">sourceS3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig">SagemakerClusterInstanceGroupsLifeCycleConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `onCreateInput`<sup>Optional</sup> <a name="onCreateInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.onCreateInput"></a>

```java
public java.lang.String getOnCreateInput();
```

- *Type:* java.lang.String

---

##### `sourceS3UriInput`<sup>Optional</sup> <a name="sourceS3UriInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.sourceS3UriInput"></a>

```java
public java.lang.String getSourceS3UriInput();
```

- *Type:* java.lang.String

---

##### `onCreate`<sup>Required</sup> <a name="onCreate" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.onCreate"></a>

```java
public java.lang.String getOnCreate();
```

- *Type:* java.lang.String

---

##### `sourceS3Uri`<sup>Required</sup> <a name="sourceS3Uri" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.sourceS3Uri"></a>

```java
public java.lang.String getSourceS3Uri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterInstanceGroupsLifeCycleConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig">SagemakerClusterInstanceGroupsLifeCycleConfig</a>

---


### SagemakerClusterInstanceGroupsList <a name="SagemakerClusterInstanceGroupsList" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsList;

new SagemakerClusterInstanceGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.get"></a>

```java
public SagemakerClusterInstanceGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerClusterInstanceGroups> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>>

---


### SagemakerClusterInstanceGroupsOutputReference <a name="SagemakerClusterInstanceGroupsOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsOutputReference;

new SagemakerClusterInstanceGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putCapacityRequirements">putCapacityRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putInstanceStorageConfigs">putInstanceStorageConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putKubernetesConfig">putKubernetesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putLifeCycleConfig">putLifeCycleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putOverrideVpcConfig">putOverrideVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putScheduledUpdateConfig">putScheduledUpdateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetCapacityRequirements">resetCapacityRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetCurrentCount">resetCurrentCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetExecutionRole">resetExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetImageId">resetImageId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetInstanceGroupName">resetInstanceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetInstanceStorageConfigs">resetInstanceStorageConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetKubernetesConfig">resetKubernetesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetLifeCycleConfig">resetLifeCycleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetMinInstanceCount">resetMinInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetOnStartDeepHealthChecks">resetOnStartDeepHealthChecks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetOverrideVpcConfig">resetOverrideVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetScheduledUpdateConfig">resetScheduledUpdateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetThreadsPerCore">resetThreadsPerCore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetTrainingPlanArn">resetTrainingPlanArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCapacityRequirements` <a name="putCapacityRequirements" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putCapacityRequirements"></a>

```java
public void putCapacityRequirements(SagemakerClusterInstanceGroupsCapacityRequirements value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putCapacityRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements">SagemakerClusterInstanceGroupsCapacityRequirements</a>

---

##### `putInstanceStorageConfigs` <a name="putInstanceStorageConfigs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putInstanceStorageConfigs"></a>

```java
public void putInstanceStorageConfigs(IResolvable|java.util.List<SagemakerClusterInstanceGroupsInstanceStorageConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putInstanceStorageConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs">SagemakerClusterInstanceGroupsInstanceStorageConfigs</a>>

---

##### `putKubernetesConfig` <a name="putKubernetesConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putKubernetesConfig"></a>

```java
public void putKubernetesConfig(SagemakerClusterInstanceGroupsKubernetesConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putKubernetesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig">SagemakerClusterInstanceGroupsKubernetesConfig</a>

---

##### `putLifeCycleConfig` <a name="putLifeCycleConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putLifeCycleConfig"></a>

```java
public void putLifeCycleConfig(SagemakerClusterInstanceGroupsLifeCycleConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putLifeCycleConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig">SagemakerClusterInstanceGroupsLifeCycleConfig</a>

---

##### `putOverrideVpcConfig` <a name="putOverrideVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putOverrideVpcConfig"></a>

```java
public void putOverrideVpcConfig(SagemakerClusterInstanceGroupsOverrideVpcConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putOverrideVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig">SagemakerClusterInstanceGroupsOverrideVpcConfig</a>

---

##### `putScheduledUpdateConfig` <a name="putScheduledUpdateConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putScheduledUpdateConfig"></a>

```java
public void putScheduledUpdateConfig(SagemakerClusterInstanceGroupsScheduledUpdateConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putScheduledUpdateConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfig</a>

---

##### `resetCapacityRequirements` <a name="resetCapacityRequirements" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetCapacityRequirements"></a>

```java
public void resetCapacityRequirements()
```

##### `resetCurrentCount` <a name="resetCurrentCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetCurrentCount"></a>

```java
public void resetCurrentCount()
```

##### `resetExecutionRole` <a name="resetExecutionRole" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetExecutionRole"></a>

```java
public void resetExecutionRole()
```

##### `resetImageId` <a name="resetImageId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetImageId"></a>

```java
public void resetImageId()
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetInstanceCount"></a>

```java
public void resetInstanceCount()
```

##### `resetInstanceGroupName` <a name="resetInstanceGroupName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetInstanceGroupName"></a>

```java
public void resetInstanceGroupName()
```

##### `resetInstanceStorageConfigs` <a name="resetInstanceStorageConfigs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetInstanceStorageConfigs"></a>

```java
public void resetInstanceStorageConfigs()
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetKubernetesConfig` <a name="resetKubernetesConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetKubernetesConfig"></a>

```java
public void resetKubernetesConfig()
```

##### `resetLifeCycleConfig` <a name="resetLifeCycleConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetLifeCycleConfig"></a>

```java
public void resetLifeCycleConfig()
```

##### `resetMinInstanceCount` <a name="resetMinInstanceCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetMinInstanceCount"></a>

```java
public void resetMinInstanceCount()
```

##### `resetOnStartDeepHealthChecks` <a name="resetOnStartDeepHealthChecks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetOnStartDeepHealthChecks"></a>

```java
public void resetOnStartDeepHealthChecks()
```

##### `resetOverrideVpcConfig` <a name="resetOverrideVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetOverrideVpcConfig"></a>

```java
public void resetOverrideVpcConfig()
```

##### `resetScheduledUpdateConfig` <a name="resetScheduledUpdateConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetScheduledUpdateConfig"></a>

```java
public void resetScheduledUpdateConfig()
```

##### `resetThreadsPerCore` <a name="resetThreadsPerCore" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetThreadsPerCore"></a>

```java
public void resetThreadsPerCore()
```

##### `resetTrainingPlanArn` <a name="resetTrainingPlanArn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetTrainingPlanArn"></a>

```java
public void resetTrainingPlanArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.capacityRequirements">capacityRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference">SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceStorageConfigs">instanceStorageConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList">SagemakerClusterInstanceGroupsInstanceStorageConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.kubernetesConfig">kubernetesConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference">SagemakerClusterInstanceGroupsKubernetesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.lifeCycleConfig">lifeCycleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference">SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.overrideVpcConfig">overrideVpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference">SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.scheduledUpdateConfig">scheduledUpdateConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.capacityRequirementsInput">capacityRequirementsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements">SagemakerClusterInstanceGroupsCapacityRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.currentCountInput">currentCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.executionRoleInput">executionRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.imageIdInput">imageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceGroupNameInput">instanceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceStorageConfigsInput">instanceStorageConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs">SagemakerClusterInstanceGroupsInstanceStorageConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.kubernetesConfigInput">kubernetesConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig">SagemakerClusterInstanceGroupsKubernetesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.lifeCycleConfigInput">lifeCycleConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig">SagemakerClusterInstanceGroupsLifeCycleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.minInstanceCountInput">minInstanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.onStartDeepHealthChecksInput">onStartDeepHealthChecksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.overrideVpcConfigInput">overrideVpcConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig">SagemakerClusterInstanceGroupsOverrideVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.scheduledUpdateConfigInput">scheduledUpdateConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.threadsPerCoreInput">threadsPerCoreInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.trainingPlanArnInput">trainingPlanArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.currentCount">currentCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceGroupName">instanceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.minInstanceCount">minInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.onStartDeepHealthChecks">onStartDeepHealthChecks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.threadsPerCore">threadsPerCore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.trainingPlanArn">trainingPlanArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityRequirements`<sup>Required</sup> <a name="capacityRequirements" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.capacityRequirements"></a>

```java
public SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference getCapacityRequirements();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference">SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference</a>

---

##### `instanceStorageConfigs`<sup>Required</sup> <a name="instanceStorageConfigs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceStorageConfigs"></a>

```java
public SagemakerClusterInstanceGroupsInstanceStorageConfigsList getInstanceStorageConfigs();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList">SagemakerClusterInstanceGroupsInstanceStorageConfigsList</a>

---

##### `kubernetesConfig`<sup>Required</sup> <a name="kubernetesConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.kubernetesConfig"></a>

```java
public SagemakerClusterInstanceGroupsKubernetesConfigOutputReference getKubernetesConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference">SagemakerClusterInstanceGroupsKubernetesConfigOutputReference</a>

---

##### `lifeCycleConfig`<sup>Required</sup> <a name="lifeCycleConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.lifeCycleConfig"></a>

```java
public SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference getLifeCycleConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference">SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference</a>

---

##### `overrideVpcConfig`<sup>Required</sup> <a name="overrideVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.overrideVpcConfig"></a>

```java
public SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference getOverrideVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference">SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference</a>

---

##### `scheduledUpdateConfig`<sup>Required</sup> <a name="scheduledUpdateConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.scheduledUpdateConfig"></a>

```java
public SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference getScheduledUpdateConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference</a>

---

##### `capacityRequirementsInput`<sup>Optional</sup> <a name="capacityRequirementsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.capacityRequirementsInput"></a>

```java
public IResolvable|SagemakerClusterInstanceGroupsCapacityRequirements getCapacityRequirementsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements">SagemakerClusterInstanceGroupsCapacityRequirements</a>

---

##### `currentCountInput`<sup>Optional</sup> <a name="currentCountInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.currentCountInput"></a>

```java
public java.lang.Number getCurrentCountInput();
```

- *Type:* java.lang.Number

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.executionRoleInput"></a>

```java
public java.lang.String getExecutionRoleInput();
```

- *Type:* java.lang.String

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.imageIdInput"></a>

```java
public java.lang.String getImageIdInput();
```

- *Type:* java.lang.String

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceCountInput"></a>

```java
public java.lang.Number getInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `instanceGroupNameInput`<sup>Optional</sup> <a name="instanceGroupNameInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceGroupNameInput"></a>

```java
public java.lang.String getInstanceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `instanceStorageConfigsInput`<sup>Optional</sup> <a name="instanceStorageConfigsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceStorageConfigsInput"></a>

```java
public IResolvable|java.util.List<SagemakerClusterInstanceGroupsInstanceStorageConfigs> getInstanceStorageConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs">SagemakerClusterInstanceGroupsInstanceStorageConfigs</a>>

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `kubernetesConfigInput`<sup>Optional</sup> <a name="kubernetesConfigInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.kubernetesConfigInput"></a>

```java
public IResolvable|SagemakerClusterInstanceGroupsKubernetesConfig getKubernetesConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig">SagemakerClusterInstanceGroupsKubernetesConfig</a>

---

##### `lifeCycleConfigInput`<sup>Optional</sup> <a name="lifeCycleConfigInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.lifeCycleConfigInput"></a>

```java
public IResolvable|SagemakerClusterInstanceGroupsLifeCycleConfig getLifeCycleConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig">SagemakerClusterInstanceGroupsLifeCycleConfig</a>

---

##### `minInstanceCountInput`<sup>Optional</sup> <a name="minInstanceCountInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.minInstanceCountInput"></a>

```java
public java.lang.Number getMinInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `onStartDeepHealthChecksInput`<sup>Optional</sup> <a name="onStartDeepHealthChecksInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.onStartDeepHealthChecksInput"></a>

```java
public java.util.List<java.lang.String> getOnStartDeepHealthChecksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `overrideVpcConfigInput`<sup>Optional</sup> <a name="overrideVpcConfigInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.overrideVpcConfigInput"></a>

```java
public IResolvable|SagemakerClusterInstanceGroupsOverrideVpcConfig getOverrideVpcConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig">SagemakerClusterInstanceGroupsOverrideVpcConfig</a>

---

##### `scheduledUpdateConfigInput`<sup>Optional</sup> <a name="scheduledUpdateConfigInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.scheduledUpdateConfigInput"></a>

```java
public IResolvable|SagemakerClusterInstanceGroupsScheduledUpdateConfig getScheduledUpdateConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfig</a>

---

##### `threadsPerCoreInput`<sup>Optional</sup> <a name="threadsPerCoreInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.threadsPerCoreInput"></a>

```java
public java.lang.Number getThreadsPerCoreInput();
```

- *Type:* java.lang.Number

---

##### `trainingPlanArnInput`<sup>Optional</sup> <a name="trainingPlanArnInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.trainingPlanArnInput"></a>

```java
public java.lang.String getTrainingPlanArnInput();
```

- *Type:* java.lang.String

---

##### `currentCount`<sup>Required</sup> <a name="currentCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.currentCount"></a>

```java
public java.lang.Number getCurrentCount();
```

- *Type:* java.lang.Number

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `instanceGroupName`<sup>Required</sup> <a name="instanceGroupName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceGroupName"></a>

```java
public java.lang.String getInstanceGroupName();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.minInstanceCount"></a>

```java
public java.lang.Number getMinInstanceCount();
```

- *Type:* java.lang.Number

---

##### `onStartDeepHealthChecks`<sup>Required</sup> <a name="onStartDeepHealthChecks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.onStartDeepHealthChecks"></a>

```java
public java.util.List<java.lang.String> getOnStartDeepHealthChecks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `threadsPerCore`<sup>Required</sup> <a name="threadsPerCore" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.threadsPerCore"></a>

```java
public java.lang.Number getThreadsPerCore();
```

- *Type:* java.lang.Number

---

##### `trainingPlanArn`<sup>Required</sup> <a name="trainingPlanArn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.trainingPlanArn"></a>

```java
public java.lang.String getTrainingPlanArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterInstanceGroups getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>

---


### SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference <a name="SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference;

new SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.resetSubnets"></a>

```java
public void resetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig">SagemakerClusterInstanceGroupsOverrideVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterInstanceGroupsOverrideVpcConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig">SagemakerClusterInstanceGroupsOverrideVpcConfig</a>

---


### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList;

new SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.get"></a>

```java
public SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a>>

---


### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference;

new SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.resetAlarmName">resetAlarmName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarmName` <a name="resetAlarmName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.resetAlarmName"></a>

```java
public void resetAlarmName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmNameInput">alarmNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmName">alarmName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarmNameInput`<sup>Optional</sup> <a name="alarmNameInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmNameInput"></a>

```java
public java.lang.String getAlarmNameInput();
```

- *Type:* java.lang.String

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmName"></a>

```java
public java.lang.String getAlarmName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a>

---


### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference;

new SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.putAutoRollbackConfiguration">putAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.putRollingUpdatePolicy">putRollingUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resetAutoRollbackConfiguration">resetAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resetRollingUpdatePolicy">resetRollingUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resetWaitIntervalInSeconds">resetWaitIntervalInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoRollbackConfiguration` <a name="putAutoRollbackConfiguration" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.putAutoRollbackConfiguration"></a>

```java
public void putAutoRollbackConfiguration(IResolvable|java.util.List<SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.putAutoRollbackConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a>>

---

##### `putRollingUpdatePolicy` <a name="putRollingUpdatePolicy" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.putRollingUpdatePolicy"></a>

```java
public void putRollingUpdatePolicy(SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.putRollingUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy</a>

---

##### `resetAutoRollbackConfiguration` <a name="resetAutoRollbackConfiguration" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resetAutoRollbackConfiguration"></a>

```java
public void resetAutoRollbackConfiguration()
```

##### `resetRollingUpdatePolicy` <a name="resetRollingUpdatePolicy" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resetRollingUpdatePolicy"></a>

```java
public void resetRollingUpdatePolicy()
```

##### `resetWaitIntervalInSeconds` <a name="resetWaitIntervalInSeconds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resetWaitIntervalInSeconds"></a>

```java
public void resetWaitIntervalInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.autoRollbackConfiguration">autoRollbackConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.rollingUpdatePolicy">rollingUpdatePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.autoRollbackConfigurationInput">autoRollbackConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.rollingUpdatePolicyInput">rollingUpdatePolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.waitIntervalInSecondsInput">waitIntervalInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.waitIntervalInSeconds">waitIntervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoRollbackConfiguration`<sup>Required</sup> <a name="autoRollbackConfiguration" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.autoRollbackConfiguration"></a>

```java
public SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList getAutoRollbackConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList</a>

---

##### `rollingUpdatePolicy`<sup>Required</sup> <a name="rollingUpdatePolicy" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.rollingUpdatePolicy"></a>

```java
public SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference getRollingUpdatePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference</a>

---

##### `autoRollbackConfigurationInput`<sup>Optional</sup> <a name="autoRollbackConfigurationInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.autoRollbackConfigurationInput"></a>

```java
public IResolvable|java.util.List<SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration> getAutoRollbackConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a>>

---

##### `rollingUpdatePolicyInput`<sup>Optional</sup> <a name="rollingUpdatePolicyInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.rollingUpdatePolicyInput"></a>

```java
public IResolvable|SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy getRollingUpdatePolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy</a>

---

##### `waitIntervalInSecondsInput`<sup>Optional</sup> <a name="waitIntervalInSecondsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.waitIntervalInSecondsInput"></a>

```java
public java.lang.Number getWaitIntervalInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `waitIntervalInSeconds`<sup>Required</sup> <a name="waitIntervalInSeconds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.waitIntervalInSeconds"></a>

```java
public java.lang.Number getWaitIntervalInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig</a>

---


### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference;

new SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>

---


### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference;

new SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize">putMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize">putRollbackMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumBatchSize">resetMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.resetRollbackMaximumBatchSize">resetRollbackMaximumBatchSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaximumBatchSize` <a name="putMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize"></a>

```java
public void putMaximumBatchSize(SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>

---

##### `putRollbackMaximumBatchSize` <a name="putRollbackMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize"></a>

```java
public void putRollbackMaximumBatchSize(SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>

---

##### `resetMaximumBatchSize` <a name="resetMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumBatchSize"></a>

```java
public void resetMaximumBatchSize()
```

##### `resetRollbackMaximumBatchSize` <a name="resetRollbackMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.resetRollbackMaximumBatchSize"></a>

```java
public void resetRollbackMaximumBatchSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize">maximumBatchSize</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize">rollbackMaximumBatchSize</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSizeInput">maximumBatchSizeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSizeInput">rollbackMaximumBatchSizeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumBatchSize`<sup>Required</sup> <a name="maximumBatchSize" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize"></a>

```java
public SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference getMaximumBatchSize();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference</a>

---

##### `rollbackMaximumBatchSize`<sup>Required</sup> <a name="rollbackMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize"></a>

```java
public SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference getRollbackMaximumBatchSize();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference</a>

---

##### `maximumBatchSizeInput`<sup>Optional</sup> <a name="maximumBatchSizeInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSizeInput"></a>

```java
public IResolvable|SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize getMaximumBatchSizeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>

---

##### `rollbackMaximumBatchSizeInput`<sup>Optional</sup> <a name="rollbackMaximumBatchSizeInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSizeInput"></a>

```java
public IResolvable|SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize getRollbackMaximumBatchSizeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy</a>

---


### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference;

new SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>

---


### SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference;

new SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.putDeploymentConfig">putDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.resetDeploymentConfig">resetDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.resetScheduleExpression">resetScheduleExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeploymentConfig` <a name="putDeploymentConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.putDeploymentConfig"></a>

```java
public void putDeploymentConfig(SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.putDeploymentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig</a>

---

##### `resetDeploymentConfig` <a name="resetDeploymentConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.resetDeploymentConfig"></a>

```java
public void resetDeploymentConfig()
```

##### `resetScheduleExpression` <a name="resetScheduleExpression" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.resetScheduleExpression"></a>

```java
public void resetScheduleExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.deploymentConfig">deploymentConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.deploymentConfigInput">deploymentConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deploymentConfig`<sup>Required</sup> <a name="deploymentConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.deploymentConfig"></a>

```java
public SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference getDeploymentConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference</a>

---

##### `deploymentConfigInput`<sup>Optional</sup> <a name="deploymentConfigInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.deploymentConfigInput"></a>

```java
public IResolvable|SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig getDeploymentConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig</a>

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.scheduleExpressionInput"></a>

```java
public java.lang.String getScheduleExpressionInput();
```

- *Type:* java.lang.String

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterInstanceGroupsScheduledUpdateConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfig</a>

---


### SagemakerClusterOrchestratorEksOutputReference <a name="SagemakerClusterOrchestratorEksOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterOrchestratorEksOutputReference;

new SagemakerClusterOrchestratorEksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.resetClusterArn">resetClusterArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterArn` <a name="resetClusterArn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.resetClusterArn"></a>

```java
public void resetClusterArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.clusterArnInput">clusterArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks">SagemakerClusterOrchestratorEks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.clusterArnInput"></a>

```java
public java.lang.String getClusterArnInput();
```

- *Type:* java.lang.String

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterOrchestratorEks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks">SagemakerClusterOrchestratorEks</a>

---


### SagemakerClusterOrchestratorOutputReference <a name="SagemakerClusterOrchestratorOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterOrchestratorOutputReference;

new SagemakerClusterOrchestratorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.putEks">putEks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.resetEks">resetEks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEks` <a name="putEks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.putEks"></a>

```java
public void putEks(SagemakerClusterOrchestratorEks value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.putEks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks">SagemakerClusterOrchestratorEks</a>

---

##### `resetEks` <a name="resetEks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.resetEks"></a>

```java
public void resetEks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.eks">eks</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference">SagemakerClusterOrchestratorEksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.eksInput">eksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks">SagemakerClusterOrchestratorEks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator">SagemakerClusterOrchestrator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eks`<sup>Required</sup> <a name="eks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.eks"></a>

```java
public SagemakerClusterOrchestratorEksOutputReference getEks();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference">SagemakerClusterOrchestratorEksOutputReference</a>

---

##### `eksInput`<sup>Optional</sup> <a name="eksInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.eksInput"></a>

```java
public IResolvable|SagemakerClusterOrchestratorEks getEksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks">SagemakerClusterOrchestratorEks</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterOrchestrator getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator">SagemakerClusterOrchestrator</a>

---


### SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference <a name="SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference;

new SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.resetPerUnitStorageThroughput">resetPerUnitStorageThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.resetSizeInGiB">resetSizeInGiB</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPerUnitStorageThroughput` <a name="resetPerUnitStorageThroughput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.resetPerUnitStorageThroughput"></a>

```java
public void resetPerUnitStorageThroughput()
```

##### `resetSizeInGiB` <a name="resetSizeInGiB" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.resetSizeInGiB"></a>

```java
public void resetSizeInGiB()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.perUnitStorageThroughputInput">perUnitStorageThroughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.sizeInGiBInput">sizeInGiBInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.perUnitStorageThroughput">perUnitStorageThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.sizeInGiB">sizeInGiB</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `perUnitStorageThroughputInput`<sup>Optional</sup> <a name="perUnitStorageThroughputInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.perUnitStorageThroughputInput"></a>

```java
public java.lang.Number getPerUnitStorageThroughputInput();
```

- *Type:* java.lang.Number

---

##### `sizeInGiBInput`<sup>Optional</sup> <a name="sizeInGiBInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.sizeInGiBInput"></a>

```java
public java.lang.Number getSizeInGiBInput();
```

- *Type:* java.lang.Number

---

##### `perUnitStorageThroughput`<sup>Required</sup> <a name="perUnitStorageThroughput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.perUnitStorageThroughput"></a>

```java
public java.lang.Number getPerUnitStorageThroughput();
```

- *Type:* java.lang.Number

---

##### `sizeInGiB`<sup>Required</sup> <a name="sizeInGiB" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.sizeInGiB"></a>

```java
public java.lang.Number getSizeInGiB();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig</a>

---


### SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference <a name="SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference;

new SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.putFsxLustreConfig">putFsxLustreConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.resetFsxLustreConfig">resetFsxLustreConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFsxLustreConfig` <a name="putFsxLustreConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.putFsxLustreConfig"></a>

```java
public void putFsxLustreConfig(SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.putFsxLustreConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig</a>

---

##### `resetFsxLustreConfig` <a name="resetFsxLustreConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.resetFsxLustreConfig"></a>

```java
public void resetFsxLustreConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.fsxLustreConfig">fsxLustreConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.fsxLustreConfigInput">fsxLustreConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fsxLustreConfig`<sup>Required</sup> <a name="fsxLustreConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.fsxLustreConfig"></a>

```java
public SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference getFsxLustreConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference</a>

---

##### `fsxLustreConfigInput`<sup>Optional</sup> <a name="fsxLustreConfigInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.fsxLustreConfigInput"></a>

```java
public IResolvable|SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig getFsxLustreConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig</a>

---


### SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference <a name="SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference;

new SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetRootVolume">resetRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetVolumeKmsKeyId">resetVolumeKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetVolumeSizeInGb">resetVolumeSizeInGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRootVolume` <a name="resetRootVolume" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetRootVolume"></a>

```java
public void resetRootVolume()
```

##### `resetVolumeKmsKeyId` <a name="resetVolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetVolumeKmsKeyId"></a>

```java
public void resetVolumeKmsKeyId()
```

##### `resetVolumeSizeInGb` <a name="resetVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetVolumeSizeInGb"></a>

```java
public void resetVolumeSizeInGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolumeInput">rootVolumeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyIdInput">volumeKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGbInput">volumeSizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolume">rootVolume</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rootVolumeInput`<sup>Optional</sup> <a name="rootVolumeInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolumeInput"></a>

```java
public java.lang.Boolean|IResolvable getRootVolumeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `volumeKmsKeyIdInput`<sup>Optional</sup> <a name="volumeKmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```java
public java.lang.String getVolumeKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `volumeSizeInGbInput`<sup>Optional</sup> <a name="volumeSizeInGbInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGbInput"></a>

```java
public java.lang.Number getVolumeSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `rootVolume`<sup>Required</sup> <a name="rootVolume" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolume"></a>

```java
public java.lang.Boolean|IResolvable getRootVolume();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `volumeKmsKeyId`<sup>Required</sup> <a name="volumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyId"></a>

```java
public java.lang.String getVolumeKmsKeyId();
```

- *Type:* java.lang.String

---

##### `volumeSizeInGb`<sup>Required</sup> <a name="volumeSizeInGb" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGb"></a>

```java
public java.lang.Number getVolumeSizeInGb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a>

---


### SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList <a name="SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList;

new SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.get"></a>

```java
public SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a>>

---


### SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference <a name="SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference;

new SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.putEbsVolumeConfig">putEbsVolumeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.resetEbsVolumeConfig">resetEbsVolumeConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbsVolumeConfig` <a name="putEbsVolumeConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.putEbsVolumeConfig"></a>

```java
public void putEbsVolumeConfig(SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.putEbsVolumeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a>

---

##### `resetEbsVolumeConfig` <a name="resetEbsVolumeConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.resetEbsVolumeConfig"></a>

```java
public void resetEbsVolumeConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfig">ebsVolumeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfigInput">ebsVolumeConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ebsVolumeConfig`<sup>Required</sup> <a name="ebsVolumeConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfig"></a>

```java
public SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference getEbsVolumeConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference</a>

---

##### `ebsVolumeConfigInput`<sup>Optional</sup> <a name="ebsVolumeConfigInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfigInput"></a>

```java
public IResolvable|SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig getEbsVolumeConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a>

---


### SagemakerClusterRestrictedInstanceGroupsList <a name="SagemakerClusterRestrictedInstanceGroupsList" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterRestrictedInstanceGroupsList;

new SagemakerClusterRestrictedInstanceGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.get"></a>

```java
public SagemakerClusterRestrictedInstanceGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerClusterRestrictedInstanceGroups> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>>

---


### SagemakerClusterRestrictedInstanceGroupsOutputReference <a name="SagemakerClusterRestrictedInstanceGroupsOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterRestrictedInstanceGroupsOutputReference;

new SagemakerClusterRestrictedInstanceGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putEnvironmentConfig">putEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putInstanceStorageConfigs">putInstanceStorageConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putOverrideVpcConfig">putOverrideVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetCurrentCount">resetCurrentCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetEnvironmentConfig">resetEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetExecutionRole">resetExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetInstanceGroupName">resetInstanceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetInstanceStorageConfigs">resetInstanceStorageConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetOnStartDeepHealthChecks">resetOnStartDeepHealthChecks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetOverrideVpcConfig">resetOverrideVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetThreadsPerCore">resetThreadsPerCore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetTrainingPlanArn">resetTrainingPlanArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnvironmentConfig` <a name="putEnvironmentConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putEnvironmentConfig"></a>

```java
public void putEnvironmentConfig(SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putEnvironmentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig</a>

---

##### `putInstanceStorageConfigs` <a name="putInstanceStorageConfigs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putInstanceStorageConfigs"></a>

```java
public void putInstanceStorageConfigs(IResolvable|java.util.List<SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putInstanceStorageConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a>>

---

##### `putOverrideVpcConfig` <a name="putOverrideVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putOverrideVpcConfig"></a>

```java
public void putOverrideVpcConfig(SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putOverrideVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig">SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig</a>

---

##### `resetCurrentCount` <a name="resetCurrentCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetCurrentCount"></a>

```java
public void resetCurrentCount()
```

##### `resetEnvironmentConfig` <a name="resetEnvironmentConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetEnvironmentConfig"></a>

```java
public void resetEnvironmentConfig()
```

##### `resetExecutionRole` <a name="resetExecutionRole" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetExecutionRole"></a>

```java
public void resetExecutionRole()
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetInstanceCount"></a>

```java
public void resetInstanceCount()
```

##### `resetInstanceGroupName` <a name="resetInstanceGroupName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetInstanceGroupName"></a>

```java
public void resetInstanceGroupName()
```

##### `resetInstanceStorageConfigs` <a name="resetInstanceStorageConfigs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetInstanceStorageConfigs"></a>

```java
public void resetInstanceStorageConfigs()
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetOnStartDeepHealthChecks` <a name="resetOnStartDeepHealthChecks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetOnStartDeepHealthChecks"></a>

```java
public void resetOnStartDeepHealthChecks()
```

##### `resetOverrideVpcConfig` <a name="resetOverrideVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetOverrideVpcConfig"></a>

```java
public void resetOverrideVpcConfig()
```

##### `resetThreadsPerCore` <a name="resetThreadsPerCore" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetThreadsPerCore"></a>

```java
public void resetThreadsPerCore()
```

##### `resetTrainingPlanArn` <a name="resetTrainingPlanArn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetTrainingPlanArn"></a>

```java
public void resetTrainingPlanArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.environmentConfig">environmentConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceStorageConfigs">instanceStorageConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.overrideVpcConfig">overrideVpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference">SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.currentCountInput">currentCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.environmentConfigInput">environmentConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.executionRoleInput">executionRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceGroupNameInput">instanceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceStorageConfigsInput">instanceStorageConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.onStartDeepHealthChecksInput">onStartDeepHealthChecksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.overrideVpcConfigInput">overrideVpcConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig">SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.threadsPerCoreInput">threadsPerCoreInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.trainingPlanArnInput">trainingPlanArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.currentCount">currentCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceGroupName">instanceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.onStartDeepHealthChecks">onStartDeepHealthChecks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.threadsPerCore">threadsPerCore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.trainingPlanArn">trainingPlanArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `environmentConfig`<sup>Required</sup> <a name="environmentConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.environmentConfig"></a>

```java
public SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference getEnvironmentConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference</a>

---

##### `instanceStorageConfigs`<sup>Required</sup> <a name="instanceStorageConfigs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceStorageConfigs"></a>

```java
public SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList getInstanceStorageConfigs();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList</a>

---

##### `overrideVpcConfig`<sup>Required</sup> <a name="overrideVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.overrideVpcConfig"></a>

```java
public SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference getOverrideVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference">SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference</a>

---

##### `currentCountInput`<sup>Optional</sup> <a name="currentCountInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.currentCountInput"></a>

```java
public java.lang.Number getCurrentCountInput();
```

- *Type:* java.lang.Number

---

##### `environmentConfigInput`<sup>Optional</sup> <a name="environmentConfigInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.environmentConfigInput"></a>

```java
public IResolvable|SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig getEnvironmentConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig</a>

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.executionRoleInput"></a>

```java
public java.lang.String getExecutionRoleInput();
```

- *Type:* java.lang.String

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceCountInput"></a>

```java
public java.lang.Number getInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `instanceGroupNameInput`<sup>Optional</sup> <a name="instanceGroupNameInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceGroupNameInput"></a>

```java
public java.lang.String getInstanceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `instanceStorageConfigsInput`<sup>Optional</sup> <a name="instanceStorageConfigsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceStorageConfigsInput"></a>

```java
public IResolvable|java.util.List<SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs> getInstanceStorageConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a>>

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `onStartDeepHealthChecksInput`<sup>Optional</sup> <a name="onStartDeepHealthChecksInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.onStartDeepHealthChecksInput"></a>

```java
public java.util.List<java.lang.String> getOnStartDeepHealthChecksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `overrideVpcConfigInput`<sup>Optional</sup> <a name="overrideVpcConfigInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.overrideVpcConfigInput"></a>

```java
public IResolvable|SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig getOverrideVpcConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig">SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig</a>

---

##### `threadsPerCoreInput`<sup>Optional</sup> <a name="threadsPerCoreInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.threadsPerCoreInput"></a>

```java
public java.lang.Number getThreadsPerCoreInput();
```

- *Type:* java.lang.Number

---

##### `trainingPlanArnInput`<sup>Optional</sup> <a name="trainingPlanArnInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.trainingPlanArnInput"></a>

```java
public java.lang.String getTrainingPlanArnInput();
```

- *Type:* java.lang.String

---

##### `currentCount`<sup>Required</sup> <a name="currentCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.currentCount"></a>

```java
public java.lang.Number getCurrentCount();
```

- *Type:* java.lang.Number

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `instanceGroupName`<sup>Required</sup> <a name="instanceGroupName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceGroupName"></a>

```java
public java.lang.String getInstanceGroupName();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `onStartDeepHealthChecks`<sup>Required</sup> <a name="onStartDeepHealthChecks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.onStartDeepHealthChecks"></a>

```java
public java.util.List<java.lang.String> getOnStartDeepHealthChecks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `threadsPerCore`<sup>Required</sup> <a name="threadsPerCore" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.threadsPerCore"></a>

```java
public java.lang.Number getThreadsPerCore();
```

- *Type:* java.lang.Number

---

##### `trainingPlanArn`<sup>Required</sup> <a name="trainingPlanArn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.trainingPlanArn"></a>

```java
public java.lang.String getTrainingPlanArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterRestrictedInstanceGroups getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>

---


### SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference <a name="SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference;

new SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.resetSubnets"></a>

```java
public void resetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig">SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig">SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig</a>

---


### SagemakerClusterTagsList <a name="SagemakerClusterTagsList" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterTagsList;

new SagemakerClusterTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.get"></a>

```java
public SagemakerClusterTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerClusterTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>>

---


### SagemakerClusterTagsOutputReference <a name="SagemakerClusterTagsOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterTagsOutputReference;

new SagemakerClusterTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>

---


### SagemakerClusterTieredStorageConfigOutputReference <a name="SagemakerClusterTieredStorageConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterTieredStorageConfigOutputReference;

new SagemakerClusterTieredStorageConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.resetInstanceMemoryAllocationPercentage">resetInstanceMemoryAllocationPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceMemoryAllocationPercentage` <a name="resetInstanceMemoryAllocationPercentage" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.resetInstanceMemoryAllocationPercentage"></a>

```java
public void resetInstanceMemoryAllocationPercentage()
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.resetMode"></a>

```java
public void resetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.instanceMemoryAllocationPercentageInput">instanceMemoryAllocationPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.instanceMemoryAllocationPercentage">instanceMemoryAllocationPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig">SagemakerClusterTieredStorageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceMemoryAllocationPercentageInput`<sup>Optional</sup> <a name="instanceMemoryAllocationPercentageInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.instanceMemoryAllocationPercentageInput"></a>

```java
public java.lang.Number getInstanceMemoryAllocationPercentageInput();
```

- *Type:* java.lang.Number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `instanceMemoryAllocationPercentage`<sup>Required</sup> <a name="instanceMemoryAllocationPercentage" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.instanceMemoryAllocationPercentage"></a>

```java
public java.lang.Number getInstanceMemoryAllocationPercentage();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterTieredStorageConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig">SagemakerClusterTieredStorageConfig</a>

---


### SagemakerClusterVpcConfigOutputReference <a name="SagemakerClusterVpcConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster.SagemakerClusterVpcConfigOutputReference;

new SagemakerClusterVpcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.resetSubnets"></a>

```java
public void resetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig">SagemakerClusterVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterVpcConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig">SagemakerClusterVpcConfig</a>

---



