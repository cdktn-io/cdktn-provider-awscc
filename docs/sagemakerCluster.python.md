# `sagemakerCluster` Submodule <a name="`sagemakerCluster` Submodule" id="@cdktn/provider-awscc.sagemakerCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerCluster <a name="SagemakerCluster" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster awscc_sagemaker_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerCluster(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auto_scaling: SagemakerClusterAutoScaling = None,
  cluster_name: str = None,
  cluster_role: str = None,
  instance_groups: IResolvable | typing.List[SagemakerClusterInstanceGroups] = None,
  node_provisioning_mode: str = None,
  node_recovery: str = None,
  orchestrator: SagemakerClusterOrchestrator = None,
  restricted_instance_groups: IResolvable | typing.List[SagemakerClusterRestrictedInstanceGroups] = None,
  tags: IResolvable | typing.List[SagemakerClusterTags] = None,
  tiered_storage_config: SagemakerClusterTieredStorageConfig = None,
  vpc_config: SagemakerClusterVpcConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.autoScaling">auto_scaling</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling">SagemakerClusterAutoScaling</a></code> | Configuration for cluster auto-scaling. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | The name of the HyperPod Cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.clusterRole">cluster_role</a></code> | <code>str</code> | The cluster role for the autoscaler to assume. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.instanceGroups">instance_groups</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>]</code> | The instance groups of the SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.nodeProvisioningMode">node_provisioning_mode</a></code> | <code>str</code> | Determines the scaling strategy for the SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.nodeRecovery">node_recovery</a></code> | <code>str</code> | If node auto-recovery is set to true, faulty nodes will be replaced or rebooted when a failure is detected. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.orchestrator">orchestrator</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator">SagemakerClusterOrchestrator</a></code> | Specifies parameter(s) specific to the orchestrator, e.g. specify the EKS cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.restrictedInstanceGroups">restricted_instance_groups</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>]</code> | The restricted instance groups of the SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>]</code> | Custom tags for managing the SageMaker HyperPod cluster as an AWS resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.tieredStorageConfig">tiered_storage_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig">SagemakerClusterTieredStorageConfig</a></code> | Configuration for tiered storage in the SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig">SagemakerClusterVpcConfig</a></code> | Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_scaling`<sup>Optional</sup> <a name="auto_scaling" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.autoScaling"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling">SagemakerClusterAutoScaling</a>

Configuration for cluster auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#auto_scaling SagemakerCluster#auto_scaling}

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.clusterName"></a>

- *Type:* str

The name of the HyperPod Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#cluster_name SagemakerCluster#cluster_name}

---

##### `cluster_role`<sup>Optional</sup> <a name="cluster_role" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.clusterRole"></a>

- *Type:* str

The cluster role for the autoscaler to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#cluster_role SagemakerCluster#cluster_role}

---

##### `instance_groups`<sup>Optional</sup> <a name="instance_groups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.instanceGroups"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>]

The instance groups of the SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#instance_groups SagemakerCluster#instance_groups}

---

##### `node_provisioning_mode`<sup>Optional</sup> <a name="node_provisioning_mode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.nodeProvisioningMode"></a>

- *Type:* str

Determines the scaling strategy for the SageMaker HyperPod cluster.

When set to 'Continuous', enables continuous scaling which dynamically manages node provisioning. If the parameter is omitted, uses the standard scaling approach in previous release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#node_provisioning_mode SagemakerCluster#node_provisioning_mode}

---

##### `node_recovery`<sup>Optional</sup> <a name="node_recovery" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.nodeRecovery"></a>

- *Type:* str

If node auto-recovery is set to true, faulty nodes will be replaced or rebooted when a failure is detected.

If set to false, nodes will be labelled when a fault is detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#node_recovery SagemakerCluster#node_recovery}

---

##### `orchestrator`<sup>Optional</sup> <a name="orchestrator" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.orchestrator"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator">SagemakerClusterOrchestrator</a>

Specifies parameter(s) specific to the orchestrator, e.g. specify the EKS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#orchestrator SagemakerCluster#orchestrator}

---

##### `restricted_instance_groups`<sup>Optional</sup> <a name="restricted_instance_groups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.restrictedInstanceGroups"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>]

The restricted instance groups of the SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#restricted_instance_groups SagemakerCluster#restricted_instance_groups}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>]

Custom tags for managing the SageMaker HyperPod cluster as an AWS resource.

You can add tags to your cluster in the same way you add them in other AWS services that support tagging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#tags SagemakerCluster#tags}

---

##### `tiered_storage_config`<sup>Optional</sup> <a name="tiered_storage_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.tieredStorageConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig">SagemakerClusterTieredStorageConfig</a>

Configuration for tiered storage in the SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#tiered_storage_config SagemakerCluster#tiered_storage_config}

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.vpcConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig">SagemakerClusterVpcConfig</a>

Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.

You can control access to and from your resources by configuring a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#vpc_config SagemakerCluster#vpc_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putAutoScaling">put_auto_scaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putInstanceGroups">put_instance_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putOrchestrator">put_orchestrator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putRestrictedInstanceGroups">put_restricted_instance_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putTieredStorageConfig">put_tiered_storage_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putVpcConfig">put_vpc_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetAutoScaling">reset_auto_scaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetClusterName">reset_cluster_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetClusterRole">reset_cluster_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetInstanceGroups">reset_instance_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetNodeProvisioningMode">reset_node_provisioning_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetNodeRecovery">reset_node_recovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetOrchestrator">reset_orchestrator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetRestrictedInstanceGroups">reset_restricted_instance_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetTieredStorageConfig">reset_tiered_storage_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetVpcConfig">reset_vpc_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auto_scaling` <a name="put_auto_scaling" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putAutoScaling"></a>

```python
def put_auto_scaling(
  auto_scaler_type: str = None,
  mode: str = None
) -> None
```

###### `auto_scaler_type`<sup>Optional</sup> <a name="auto_scaler_type" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putAutoScaling.parameter.autoScalerType"></a>

- *Type:* str

The type of auto-scaler to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#auto_scaler_type SagemakerCluster#auto_scaler_type}

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putAutoScaling.parameter.mode"></a>

- *Type:* str

The auto-scaling mode for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#mode SagemakerCluster#mode}

---

##### `put_instance_groups` <a name="put_instance_groups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putInstanceGroups"></a>

```python
def put_instance_groups(
  value: IResolvable | typing.List[SagemakerClusterInstanceGroups]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putInstanceGroups.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>]

---

##### `put_orchestrator` <a name="put_orchestrator" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putOrchestrator"></a>

```python
def put_orchestrator(
  eks: SagemakerClusterOrchestratorEks = None
) -> None
```

###### `eks`<sup>Optional</sup> <a name="eks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putOrchestrator.parameter.eks"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks">SagemakerClusterOrchestratorEks</a>

Specifies parameter(s) related to EKS as orchestrator, e.g. the EKS cluster nodes will attach to,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#eks SagemakerCluster#eks}

---

##### `put_restricted_instance_groups` <a name="put_restricted_instance_groups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putRestrictedInstanceGroups"></a>

```python
def put_restricted_instance_groups(
  value: IResolvable | typing.List[SagemakerClusterRestrictedInstanceGroups]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putRestrictedInstanceGroups.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SagemakerClusterTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>]

---

##### `put_tiered_storage_config` <a name="put_tiered_storage_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putTieredStorageConfig"></a>

```python
def put_tiered_storage_config(
  instance_memory_allocation_percentage: typing.Union[int, float] = None,
  mode: str = None
) -> None
```

###### `instance_memory_allocation_percentage`<sup>Optional</sup> <a name="instance_memory_allocation_percentage" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putTieredStorageConfig.parameter.instanceMemoryAllocationPercentage"></a>

- *Type:* typing.Union[int, float]

The percentage of instance memory to allocate for tiered storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#instance_memory_allocation_percentage SagemakerCluster#instance_memory_allocation_percentage}

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putTieredStorageConfig.parameter.mode"></a>

- *Type:* str

The mode of tiered storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#mode SagemakerCluster#mode}

---

##### `put_vpc_config` <a name="put_vpc_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putVpcConfig"></a>

```python
def put_vpc_config(
  security_group_ids: typing.List[str] = None,
  subnets: typing.List[str] = None
) -> None
```

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putVpcConfig.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

The VPC security group IDs, in the form sg-xxxxxxxx.

Specify the security groups for the VPC that is specified in the Subnets field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#security_group_ids SagemakerCluster#security_group_ids}

---

###### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putVpcConfig.parameter.subnets"></a>

- *Type:* typing.List[str]

The ID of the subnets in the VPC to which you want to connect your training job or model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#subnets SagemakerCluster#subnets}

---

##### `reset_auto_scaling` <a name="reset_auto_scaling" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetAutoScaling"></a>

```python
def reset_auto_scaling() -> None
```

##### `reset_cluster_name` <a name="reset_cluster_name" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetClusterName"></a>

```python
def reset_cluster_name() -> None
```

##### `reset_cluster_role` <a name="reset_cluster_role" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetClusterRole"></a>

```python
def reset_cluster_role() -> None
```

##### `reset_instance_groups` <a name="reset_instance_groups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetInstanceGroups"></a>

```python
def reset_instance_groups() -> None
```

##### `reset_node_provisioning_mode` <a name="reset_node_provisioning_mode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetNodeProvisioningMode"></a>

```python
def reset_node_provisioning_mode() -> None
```

##### `reset_node_recovery` <a name="reset_node_recovery" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetNodeRecovery"></a>

```python
def reset_node_recovery() -> None
```

##### `reset_orchestrator` <a name="reset_orchestrator" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetOrchestrator"></a>

```python
def reset_orchestrator() -> None
```

##### `reset_restricted_instance_groups` <a name="reset_restricted_instance_groups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetRestrictedInstanceGroups"></a>

```python
def reset_restricted_instance_groups() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tiered_storage_config` <a name="reset_tiered_storage_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetTieredStorageConfig"></a>

```python
def reset_tiered_storage_config() -> None
```

##### `reset_vpc_config` <a name="reset_vpc_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetVpcConfig"></a>

```python
def reset_vpc_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerCluster resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.isConstruct"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.autoScaling">auto_scaling</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference">SagemakerClusterAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterArn">cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterStatus">cluster_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.failureMessage">failure_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.instanceGroups">instance_groups</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList">SagemakerClusterInstanceGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.orchestrator">orchestrator</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference">SagemakerClusterOrchestratorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.restrictedInstanceGroups">restricted_instance_groups</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList">SagemakerClusterRestrictedInstanceGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList">SagemakerClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tieredStorageConfig">tiered_storage_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference">SagemakerClusterTieredStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference">SagemakerClusterVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.autoScalingInput">auto_scaling_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling">SagemakerClusterAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterRoleInput">cluster_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.instanceGroupsInput">instance_groups_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.nodeProvisioningModeInput">node_provisioning_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.nodeRecoveryInput">node_recovery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.orchestratorInput">orchestrator_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator">SagemakerClusterOrchestrator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.restrictedInstanceGroupsInput">restricted_instance_groups_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tieredStorageConfigInput">tiered_storage_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig">SagemakerClusterTieredStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.vpcConfigInput">vpc_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig">SagemakerClusterVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterRole">cluster_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.nodeProvisioningMode">node_provisioning_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.nodeRecovery">node_recovery</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_scaling`<sup>Required</sup> <a name="auto_scaling" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.autoScaling"></a>

```python
auto_scaling: SagemakerClusterAutoScalingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference">SagemakerClusterAutoScalingOutputReference</a>

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

---

##### `cluster_status`<sup>Required</sup> <a name="cluster_status" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterStatus"></a>

```python
cluster_status: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `failure_message`<sup>Required</sup> <a name="failure_message" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.failureMessage"></a>

```python
failure_message: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_groups`<sup>Required</sup> <a name="instance_groups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.instanceGroups"></a>

```python
instance_groups: SagemakerClusterInstanceGroupsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList">SagemakerClusterInstanceGroupsList</a>

---

##### `orchestrator`<sup>Required</sup> <a name="orchestrator" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.orchestrator"></a>

```python
orchestrator: SagemakerClusterOrchestratorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference">SagemakerClusterOrchestratorOutputReference</a>

---

##### `restricted_instance_groups`<sup>Required</sup> <a name="restricted_instance_groups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.restrictedInstanceGroups"></a>

```python
restricted_instance_groups: SagemakerClusterRestrictedInstanceGroupsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList">SagemakerClusterRestrictedInstanceGroupsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tags"></a>

```python
tags: SagemakerClusterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList">SagemakerClusterTagsList</a>

---

##### `tiered_storage_config`<sup>Required</sup> <a name="tiered_storage_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tieredStorageConfig"></a>

```python
tiered_storage_config: SagemakerClusterTieredStorageConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference">SagemakerClusterTieredStorageConfigOutputReference</a>

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.vpcConfig"></a>

```python
vpc_config: SagemakerClusterVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference">SagemakerClusterVpcConfigOutputReference</a>

---

##### `auto_scaling_input`<sup>Optional</sup> <a name="auto_scaling_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.autoScalingInput"></a>

```python
auto_scaling_input: IResolvable | SagemakerClusterAutoScaling
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling">SagemakerClusterAutoScaling</a>

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `cluster_role_input`<sup>Optional</sup> <a name="cluster_role_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterRoleInput"></a>

```python
cluster_role_input: str
```

- *Type:* str

---

##### `instance_groups_input`<sup>Optional</sup> <a name="instance_groups_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.instanceGroupsInput"></a>

```python
instance_groups_input: IResolvable | typing.List[SagemakerClusterInstanceGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>]

---

##### `node_provisioning_mode_input`<sup>Optional</sup> <a name="node_provisioning_mode_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.nodeProvisioningModeInput"></a>

```python
node_provisioning_mode_input: str
```

- *Type:* str

---

##### `node_recovery_input`<sup>Optional</sup> <a name="node_recovery_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.nodeRecoveryInput"></a>

```python
node_recovery_input: str
```

- *Type:* str

---

##### `orchestrator_input`<sup>Optional</sup> <a name="orchestrator_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.orchestratorInput"></a>

```python
orchestrator_input: IResolvable | SagemakerClusterOrchestrator
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator">SagemakerClusterOrchestrator</a>

---

##### `restricted_instance_groups_input`<sup>Optional</sup> <a name="restricted_instance_groups_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.restrictedInstanceGroupsInput"></a>

```python
restricted_instance_groups_input: IResolvable | typing.List[SagemakerClusterRestrictedInstanceGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SagemakerClusterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>]

---

##### `tiered_storage_config_input`<sup>Optional</sup> <a name="tiered_storage_config_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tieredStorageConfigInput"></a>

```python
tiered_storage_config_input: IResolvable | SagemakerClusterTieredStorageConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig">SagemakerClusterTieredStorageConfig</a>

---

##### `vpc_config_input`<sup>Optional</sup> <a name="vpc_config_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.vpcConfigInput"></a>

```python
vpc_config_input: IResolvable | SagemakerClusterVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig">SagemakerClusterVpcConfig</a>

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `cluster_role`<sup>Required</sup> <a name="cluster_role" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterRole"></a>

```python
cluster_role: str
```

- *Type:* str

---

##### `node_provisioning_mode`<sup>Required</sup> <a name="node_provisioning_mode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.nodeProvisioningMode"></a>

```python
node_provisioning_mode: str
```

- *Type:* str

---

##### `node_recovery`<sup>Required</sup> <a name="node_recovery" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.nodeRecovery"></a>

```python
node_recovery: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerClusterAutoScaling <a name="SagemakerClusterAutoScaling" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterAutoScaling(
  auto_scaler_type: str = None,
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling.property.autoScalerType">auto_scaler_type</a></code> | <code>str</code> | The type of auto-scaler to use. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling.property.mode">mode</a></code> | <code>str</code> | The auto-scaling mode for the cluster. |

---

##### `auto_scaler_type`<sup>Optional</sup> <a name="auto_scaler_type" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling.property.autoScalerType"></a>

```python
auto_scaler_type: str
```

- *Type:* str

The type of auto-scaler to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#auto_scaler_type SagemakerCluster#auto_scaler_type}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling.property.mode"></a>

```python
mode: str
```

- *Type:* str

The auto-scaling mode for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#mode SagemakerCluster#mode}

---

### SagemakerClusterConfig <a name="SagemakerClusterConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auto_scaling: SagemakerClusterAutoScaling = None,
  cluster_name: str = None,
  cluster_role: str = None,
  instance_groups: IResolvable | typing.List[SagemakerClusterInstanceGroups] = None,
  node_provisioning_mode: str = None,
  node_recovery: str = None,
  orchestrator: SagemakerClusterOrchestrator = None,
  restricted_instance_groups: IResolvable | typing.List[SagemakerClusterRestrictedInstanceGroups] = None,
  tags: IResolvable | typing.List[SagemakerClusterTags] = None,
  tiered_storage_config: SagemakerClusterTieredStorageConfig = None,
  vpc_config: SagemakerClusterVpcConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.autoScaling">auto_scaling</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling">SagemakerClusterAutoScaling</a></code> | Configuration for cluster auto-scaling. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | The name of the HyperPod Cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.clusterRole">cluster_role</a></code> | <code>str</code> | The cluster role for the autoscaler to assume. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.instanceGroups">instance_groups</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>]</code> | The instance groups of the SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.nodeProvisioningMode">node_provisioning_mode</a></code> | <code>str</code> | Determines the scaling strategy for the SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.nodeRecovery">node_recovery</a></code> | <code>str</code> | If node auto-recovery is set to true, faulty nodes will be replaced or rebooted when a failure is detected. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.orchestrator">orchestrator</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator">SagemakerClusterOrchestrator</a></code> | Specifies parameter(s) specific to the orchestrator, e.g. specify the EKS cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.restrictedInstanceGroups">restricted_instance_groups</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>]</code> | The restricted instance groups of the SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>]</code> | Custom tags for managing the SageMaker HyperPod cluster as an AWS resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.tieredStorageConfig">tiered_storage_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig">SagemakerClusterTieredStorageConfig</a></code> | Configuration for tiered storage in the SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig">SagemakerClusterVpcConfig</a></code> | Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_scaling`<sup>Optional</sup> <a name="auto_scaling" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.autoScaling"></a>

```python
auto_scaling: SagemakerClusterAutoScaling
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling">SagemakerClusterAutoScaling</a>

Configuration for cluster auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#auto_scaling SagemakerCluster#auto_scaling}

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

The name of the HyperPod Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#cluster_name SagemakerCluster#cluster_name}

---

##### `cluster_role`<sup>Optional</sup> <a name="cluster_role" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.clusterRole"></a>

```python
cluster_role: str
```

- *Type:* str

The cluster role for the autoscaler to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#cluster_role SagemakerCluster#cluster_role}

---

##### `instance_groups`<sup>Optional</sup> <a name="instance_groups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.instanceGroups"></a>

```python
instance_groups: IResolvable | typing.List[SagemakerClusterInstanceGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>]

The instance groups of the SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#instance_groups SagemakerCluster#instance_groups}

---

##### `node_provisioning_mode`<sup>Optional</sup> <a name="node_provisioning_mode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.nodeProvisioningMode"></a>

```python
node_provisioning_mode: str
```

- *Type:* str

Determines the scaling strategy for the SageMaker HyperPod cluster.

When set to 'Continuous', enables continuous scaling which dynamically manages node provisioning. If the parameter is omitted, uses the standard scaling approach in previous release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#node_provisioning_mode SagemakerCluster#node_provisioning_mode}

---

##### `node_recovery`<sup>Optional</sup> <a name="node_recovery" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.nodeRecovery"></a>

```python
node_recovery: str
```

- *Type:* str

If node auto-recovery is set to true, faulty nodes will be replaced or rebooted when a failure is detected.

If set to false, nodes will be labelled when a fault is detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#node_recovery SagemakerCluster#node_recovery}

---

##### `orchestrator`<sup>Optional</sup> <a name="orchestrator" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.orchestrator"></a>

```python
orchestrator: SagemakerClusterOrchestrator
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator">SagemakerClusterOrchestrator</a>

Specifies parameter(s) specific to the orchestrator, e.g. specify the EKS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#orchestrator SagemakerCluster#orchestrator}

---

##### `restricted_instance_groups`<sup>Optional</sup> <a name="restricted_instance_groups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.restrictedInstanceGroups"></a>

```python
restricted_instance_groups: IResolvable | typing.List[SagemakerClusterRestrictedInstanceGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>]

The restricted instance groups of the SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#restricted_instance_groups SagemakerCluster#restricted_instance_groups}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SagemakerClusterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>]

Custom tags for managing the SageMaker HyperPod cluster as an AWS resource.

You can add tags to your cluster in the same way you add them in other AWS services that support tagging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#tags SagemakerCluster#tags}

---

##### `tiered_storage_config`<sup>Optional</sup> <a name="tiered_storage_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.tieredStorageConfig"></a>

```python
tiered_storage_config: SagemakerClusterTieredStorageConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig">SagemakerClusterTieredStorageConfig</a>

Configuration for tiered storage in the SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#tiered_storage_config SagemakerCluster#tiered_storage_config}

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.vpcConfig"></a>

```python
vpc_config: SagemakerClusterVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig">SagemakerClusterVpcConfig</a>

Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.

You can control access to and from your resources by configuring a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#vpc_config SagemakerCluster#vpc_config}

---

### SagemakerClusterInstanceGroups <a name="SagemakerClusterInstanceGroups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroups(
  capacity_requirements: SagemakerClusterInstanceGroupsCapacityRequirements = None,
  current_count: typing.Union[int, float] = None,
  execution_role: str = None,
  image_id: str = None,
  instance_count: typing.Union[int, float] = None,
  instance_group_name: str = None,
  instance_storage_configs: IResolvable | typing.List[SagemakerClusterInstanceGroupsInstanceStorageConfigs] = None,
  instance_type: str = None,
  kubernetes_config: SagemakerClusterInstanceGroupsKubernetesConfig = None,
  life_cycle_config: SagemakerClusterInstanceGroupsLifeCycleConfig = None,
  min_instance_count: typing.Union[int, float] = None,
  on_start_deep_health_checks: typing.List[str] = None,
  override_vpc_config: SagemakerClusterInstanceGroupsOverrideVpcConfig = None,
  scheduled_update_config: SagemakerClusterInstanceGroupsScheduledUpdateConfig = None,
  threads_per_core: typing.Union[int, float] = None,
  training_plan_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.capacityRequirements">capacity_requirements</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements">SagemakerClusterInstanceGroupsCapacityRequirements</a></code> | Specifies the capacity requirements configuration for an instance group. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.currentCount">current_count</a></code> | <code>typing.Union[int, float]</code> | The number of instances that are currently in the instance group of a SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.executionRole">execution_role</a></code> | <code>str</code> | The execution role for the instance group to assume. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.imageId">image_id</a></code> | <code>str</code> | AMI Id to be used for launching EC2 instances - HyperPodPublicAmiId or CustomAmiId. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | The number of instances you specified to add to the instance group of a SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.instanceGroupName">instance_group_name</a></code> | <code>str</code> | The name of the instance group of a SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.instanceStorageConfigs">instance_storage_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs">SagemakerClusterInstanceGroupsInstanceStorageConfigs</a>]</code> | The instance storage configuration for the instance group. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.instanceType">instance_type</a></code> | <code>str</code> | The instance type of the instance group of a SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.kubernetesConfig">kubernetes_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig">SagemakerClusterInstanceGroupsKubernetesConfig</a></code> | Kubernetes configuration for cluster nodes including labels and taints. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.lifeCycleConfig">life_cycle_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig">SagemakerClusterInstanceGroupsLifeCycleConfig</a></code> | The lifecycle configuration for a SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | The minimum number of instances required for the instance group to be InService. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.onStartDeepHealthChecks">on_start_deep_health_checks</a></code> | <code>typing.List[str]</code> | Nodes will undergo advanced stress test to detect and replace faulty instances, based on the type of deep health check(s) passed in. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.overrideVpcConfig">override_vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig">SagemakerClusterInstanceGroupsOverrideVpcConfig</a></code> | Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.scheduledUpdateConfig">scheduled_update_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfig</a></code> | The configuration object of the schedule that SageMaker follows when updating the AMI. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.threadsPerCore">threads_per_core</a></code> | <code>typing.Union[int, float]</code> | The number you specified to TreadsPerCore in CreateCluster for enabling or disabling multithreading. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.trainingPlanArn">training_plan_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the training plan to use for this cluster instance group. |

---

##### `capacity_requirements`<sup>Optional</sup> <a name="capacity_requirements" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.capacityRequirements"></a>

```python
capacity_requirements: SagemakerClusterInstanceGroupsCapacityRequirements
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements">SagemakerClusterInstanceGroupsCapacityRequirements</a>

Specifies the capacity requirements configuration for an instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#capacity_requirements SagemakerCluster#capacity_requirements}

---

##### `current_count`<sup>Optional</sup> <a name="current_count" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.currentCount"></a>

```python
current_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of instances that are currently in the instance group of a SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#current_count SagemakerCluster#current_count}

---

##### `execution_role`<sup>Optional</sup> <a name="execution_role" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

The execution role for the instance group to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#execution_role SagemakerCluster#execution_role}

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

AMI Id to be used for launching EC2 instances - HyperPodPublicAmiId or CustomAmiId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#image_id SagemakerCluster#image_id}

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of instances you specified to add to the instance group of a SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#instance_count SagemakerCluster#instance_count}

---

##### `instance_group_name`<sup>Optional</sup> <a name="instance_group_name" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.instanceGroupName"></a>

```python
instance_group_name: str
```

- *Type:* str

The name of the instance group of a SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#instance_group_name SagemakerCluster#instance_group_name}

---

##### `instance_storage_configs`<sup>Optional</sup> <a name="instance_storage_configs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.instanceStorageConfigs"></a>

```python
instance_storage_configs: IResolvable | typing.List[SagemakerClusterInstanceGroupsInstanceStorageConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs">SagemakerClusterInstanceGroupsInstanceStorageConfigs</a>]

The instance storage configuration for the instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#instance_storage_configs SagemakerCluster#instance_storage_configs}

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

The instance type of the instance group of a SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#instance_type SagemakerCluster#instance_type}

---

##### `kubernetes_config`<sup>Optional</sup> <a name="kubernetes_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.kubernetesConfig"></a>

```python
kubernetes_config: SagemakerClusterInstanceGroupsKubernetesConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig">SagemakerClusterInstanceGroupsKubernetesConfig</a>

Kubernetes configuration for cluster nodes including labels and taints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#kubernetes_config SagemakerCluster#kubernetes_config}

---

##### `life_cycle_config`<sup>Optional</sup> <a name="life_cycle_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.lifeCycleConfig"></a>

```python
life_cycle_config: SagemakerClusterInstanceGroupsLifeCycleConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig">SagemakerClusterInstanceGroupsLifeCycleConfig</a>

The lifecycle configuration for a SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#life_cycle_config SagemakerCluster#life_cycle_config}

---

##### `min_instance_count`<sup>Optional</sup> <a name="min_instance_count" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.minInstanceCount"></a>

```python
min_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of instances required for the instance group to be InService.

MinInstanceCount must be less than or equal to InstanceCount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#min_instance_count SagemakerCluster#min_instance_count}

---

##### `on_start_deep_health_checks`<sup>Optional</sup> <a name="on_start_deep_health_checks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.onStartDeepHealthChecks"></a>

```python
on_start_deep_health_checks: typing.List[str]
```

- *Type:* typing.List[str]

Nodes will undergo advanced stress test to detect and replace faulty instances, based on the type of deep health check(s) passed in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#on_start_deep_health_checks SagemakerCluster#on_start_deep_health_checks}

---

##### `override_vpc_config`<sup>Optional</sup> <a name="override_vpc_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.overrideVpcConfig"></a>

```python
override_vpc_config: SagemakerClusterInstanceGroupsOverrideVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig">SagemakerClusterInstanceGroupsOverrideVpcConfig</a>

Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.

You can control access to and from your resources by configuring a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#override_vpc_config SagemakerCluster#override_vpc_config}

---

##### `scheduled_update_config`<sup>Optional</sup> <a name="scheduled_update_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.scheduledUpdateConfig"></a>

```python
scheduled_update_config: SagemakerClusterInstanceGroupsScheduledUpdateConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfig</a>

The configuration object of the schedule that SageMaker follows when updating the AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#scheduled_update_config SagemakerCluster#scheduled_update_config}

---

##### `threads_per_core`<sup>Optional</sup> <a name="threads_per_core" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.threadsPerCore"></a>

```python
threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number you specified to TreadsPerCore in CreateCluster for enabling or disabling multithreading.

For instance types that support multithreading, you can specify 1 for disabling multithreading and 2 for enabling multithreading.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#threads_per_core SagemakerCluster#threads_per_core}

---

##### `training_plan_arn`<sup>Optional</sup> <a name="training_plan_arn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.trainingPlanArn"></a>

```python
training_plan_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the training plan to use for this cluster instance group.

For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see CreateTrainingPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#training_plan_arn SagemakerCluster#training_plan_arn}

---

### SagemakerClusterInstanceGroupsCapacityRequirements <a name="SagemakerClusterInstanceGroupsCapacityRequirements" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements(
  on_demand: str = None,
  spot: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements.property.onDemand">on_demand</a></code> | <code>str</code> | Options for OnDemand capacity. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements.property.spot">spot</a></code> | <code>str</code> | Options for Spot capacity. |

---

##### `on_demand`<sup>Optional</sup> <a name="on_demand" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements.property.onDemand"></a>

```python
on_demand: str
```

- *Type:* str

Options for OnDemand capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#on_demand SagemakerCluster#on_demand}

---

##### `spot`<sup>Optional</sup> <a name="spot" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements.property.spot"></a>

```python
spot: str
```

- *Type:* str

Options for Spot capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#spot SagemakerCluster#spot}

---

### SagemakerClusterInstanceGroupsInstanceStorageConfigs <a name="SagemakerClusterInstanceGroupsInstanceStorageConfigs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs(
  ebs_volume_config: SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs.property.ebsVolumeConfig">ebs_volume_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a></code> | Defines the configuration for attaching additional Amazon Elastic Block Store (EBS) volumes to the instances in the SageMaker HyperPod cluster instance group. |

---

##### `ebs_volume_config`<sup>Optional</sup> <a name="ebs_volume_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs.property.ebsVolumeConfig"></a>

```python
ebs_volume_config: SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a>

Defines the configuration for attaching additional Amazon Elastic Block Store (EBS) volumes to the instances in the SageMaker HyperPod cluster instance group.

The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to /opt/sagemaker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#ebs_volume_config SagemakerCluster#ebs_volume_config}

---

### SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig <a name="SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig(
  root_volume: bool | IResolvable = None,
  volume_kms_key_id: str = None,
  volume_size_in_gb: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.rootVolume">root_volume</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#root_volume SagemakerCluster#root_volume}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.volumeKmsKeyId">volume_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#volume_kms_key_id SagemakerCluster#volume_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.volumeSizeInGb">volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | The size in gigabytes (GB) of the additional EBS volume to be attached to the instances in the SageMaker HyperPod cluster instance group. |

---

##### `root_volume`<sup>Optional</sup> <a name="root_volume" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.rootVolume"></a>

```python
root_volume: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#root_volume SagemakerCluster#root_volume}.

---

##### `volume_kms_key_id`<sup>Optional</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.volumeKmsKeyId"></a>

```python
volume_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#volume_kms_key_id SagemakerCluster#volume_kms_key_id}.

---

##### `volume_size_in_gb`<sup>Optional</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.volumeSizeInGb"></a>

```python
volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size in gigabytes (GB) of the additional EBS volume to be attached to the instances in the SageMaker HyperPod cluster instance group.

The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to /opt/sagemaker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#volume_size_in_gb SagemakerCluster#volume_size_in_gb}

---

### SagemakerClusterInstanceGroupsKubernetesConfig <a name="SagemakerClusterInstanceGroupsKubernetesConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig(
  labels: typing.Mapping[str] = None,
  taints: IResolvable | typing.List[SagemakerClusterInstanceGroupsKubernetesConfigTaints] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A map of Kubernetes labels to apply to cluster nodes. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig.property.taints">taints</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a>]</code> | A list of Kubernetes taints to apply to cluster nodes. Maximum of 50 taints. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of Kubernetes labels to apply to cluster nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#labels SagemakerCluster#labels}

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig.property.taints"></a>

```python
taints: IResolvable | typing.List[SagemakerClusterInstanceGroupsKubernetesConfigTaints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a>]

A list of Kubernetes taints to apply to cluster nodes. Maximum of 50 taints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#taints SagemakerCluster#taints}

---

### SagemakerClusterInstanceGroupsKubernetesConfigTaints <a name="SagemakerClusterInstanceGroupsKubernetesConfigTaints" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints(
  effect: str = None,
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints.property.effect">effect</a></code> | <code>str</code> | The effect of the taint. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints.property.key">key</a></code> | <code>str</code> | The key of the taint. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints.property.value">value</a></code> | <code>str</code> | The value of the taint. |

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints.property.effect"></a>

```python
effect: str
```

- *Type:* str

The effect of the taint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#effect SagemakerCluster#effect}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the taint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#key SagemakerCluster#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the taint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#value SagemakerCluster#value}

---

### SagemakerClusterInstanceGroupsLifeCycleConfig <a name="SagemakerClusterInstanceGroupsLifeCycleConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig(
  on_create: str = None,
  source_s3_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig.property.onCreate">on_create</a></code> | <code>str</code> | The file name of the entrypoint script of lifecycle scripts under SourceS3Uri. This entrypoint script runs during cluster creation. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig.property.sourceS3Uri">source_s3_uri</a></code> | <code>str</code> | An Amazon S3 bucket path where your lifecycle scripts are stored. |

---

##### `on_create`<sup>Optional</sup> <a name="on_create" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig.property.onCreate"></a>

```python
on_create: str
```

- *Type:* str

The file name of the entrypoint script of lifecycle scripts under SourceS3Uri. This entrypoint script runs during cluster creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#on_create SagemakerCluster#on_create}

---

##### `source_s3_uri`<sup>Optional</sup> <a name="source_s3_uri" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig.property.sourceS3Uri"></a>

```python
source_s3_uri: str
```

- *Type:* str

An Amazon S3 bucket path where your lifecycle scripts are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#source_s3_uri SagemakerCluster#source_s3_uri}

---

### SagemakerClusterInstanceGroupsOverrideVpcConfig <a name="SagemakerClusterInstanceGroupsOverrideVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig(
  security_group_ids: typing.List[str] = None,
  subnets: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The VPC security group IDs, in the form sg-xxxxxxxx. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | The ID of the subnets in the VPC to which you want to connect your training job or model. |

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

The VPC security group IDs, in the form sg-xxxxxxxx.

Specify the security groups for the VPC that is specified in the Subnets field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#security_group_ids SagemakerCluster#security_group_ids}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

The ID of the subnets in the VPC to which you want to connect your training job or model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#subnets SagemakerCluster#subnets}

---

### SagemakerClusterInstanceGroupsScheduledUpdateConfig <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig(
  deployment_config: SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig = None,
  schedule_expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig.property.deploymentConfig">deployment_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig</a></code> | The configuration to use when updating the AMI versions. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | A cron expression that specifies the schedule that SageMaker follows when updating the AMI. |

---

##### `deployment_config`<sup>Optional</sup> <a name="deployment_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig.property.deploymentConfig"></a>

```python
deployment_config: SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig</a>

The configuration to use when updating the AMI versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#deployment_config SagemakerCluster#deployment_config}

---

##### `schedule_expression`<sup>Optional</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

A cron expression that specifies the schedule that SageMaker follows when updating the AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#schedule_expression SagemakerCluster#schedule_expression}

---

### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig(
  auto_rollback_configuration: IResolvable | typing.List[SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration] = None,
  rolling_update_policy: SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy = None,
  wait_interval_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig.property.autoRollbackConfiguration">auto_rollback_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a>]</code> | An array that contains the alarms that SageMaker monitors to know whether to roll back the AMI update. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig.property.rollingUpdatePolicy">rolling_update_policy</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy</a></code> | The policy that SageMaker uses when updating the AMI versions of the cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig.property.waitIntervalInSeconds">wait_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | The duration in seconds that SageMaker waits before updating more instances in the cluster. |

---

##### `auto_rollback_configuration`<sup>Optional</sup> <a name="auto_rollback_configuration" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig.property.autoRollbackConfiguration"></a>

```python
auto_rollback_configuration: IResolvable | typing.List[SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a>]

An array that contains the alarms that SageMaker monitors to know whether to roll back the AMI update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#auto_rollback_configuration SagemakerCluster#auto_rollback_configuration}

---

##### `rolling_update_policy`<sup>Optional</sup> <a name="rolling_update_policy" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig.property.rollingUpdatePolicy"></a>

```python
rolling_update_policy: SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy</a>

The policy that SageMaker uses when updating the AMI versions of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#rolling_update_policy SagemakerCluster#rolling_update_policy}

---

##### `wait_interval_in_seconds`<sup>Optional</sup> <a name="wait_interval_in_seconds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig.property.waitIntervalInSeconds"></a>

```python
wait_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration in seconds that SageMaker waits before updating more instances in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#wait_interval_in_seconds SagemakerCluster#wait_interval_in_seconds}

---

### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration(
  alarm_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration.property.alarmName">alarm_name</a></code> | <code>str</code> | The name of the alarm. |

---

##### `alarm_name`<sup>Optional</sup> <a name="alarm_name" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration.property.alarmName"></a>

```python
alarm_name: str
```

- *Type:* str

The name of the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#alarm_name SagemakerCluster#alarm_name}

---

### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy(
  maximum_batch_size: SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize = None,
  rollback_maximum_batch_size: SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy.property.maximumBatchSize">maximum_batch_size</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a></code> | The configuration of the size measurements of the AMI update. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy.property.rollbackMaximumBatchSize">rollback_maximum_batch_size</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a></code> | The configuration of the size measurements of the AMI update. |

---

##### `maximum_batch_size`<sup>Optional</sup> <a name="maximum_batch_size" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy.property.maximumBatchSize"></a>

```python
maximum_batch_size: SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>

The configuration of the size measurements of the AMI update.

Using this configuration, you can specify whether SageMaker should update your instance group by an amount or percentage of instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#maximum_batch_size SagemakerCluster#maximum_batch_size}

---

##### `rollback_maximum_batch_size`<sup>Optional</sup> <a name="rollback_maximum_batch_size" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy.property.rollbackMaximumBatchSize"></a>

```python
rollback_maximum_batch_size: SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>

The configuration of the size measurements of the AMI update.

Using this configuration, you can specify whether SageMaker should update your instance group by an amount or percentage of instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#rollback_maximum_batch_size SagemakerCluster#rollback_maximum_batch_size}

---

### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize(
  type: str = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.type">type</a></code> | <code>str</code> | Specifies whether SageMaker should process the update by amount or percentage of instances. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Specifies the amount or percentage of instances SageMaker updates at a time. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.type"></a>

```python
type: str
```

- *Type:* str

Specifies whether SageMaker should process the update by amount or percentage of instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#type SagemakerCluster#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the amount or percentage of instances SageMaker updates at a time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#value SagemakerCluster#value}

---

### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize(
  type: str = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.type">type</a></code> | <code>str</code> | Specifies whether SageMaker should process the update by amount or percentage of instances. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Specifies the amount or percentage of instances SageMaker updates at a time. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.type"></a>

```python
type: str
```

- *Type:* str

Specifies whether SageMaker should process the update by amount or percentage of instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#type SagemakerCluster#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the amount or percentage of instances SageMaker updates at a time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#value SagemakerCluster#value}

---

### SagemakerClusterOrchestrator <a name="SagemakerClusterOrchestrator" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterOrchestrator(
  eks: SagemakerClusterOrchestratorEks = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator.property.eks">eks</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks">SagemakerClusterOrchestratorEks</a></code> | Specifies parameter(s) related to EKS as orchestrator, e.g. the EKS cluster nodes will attach to,. |

---

##### `eks`<sup>Optional</sup> <a name="eks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator.property.eks"></a>

```python
eks: SagemakerClusterOrchestratorEks
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks">SagemakerClusterOrchestratorEks</a>

Specifies parameter(s) related to EKS as orchestrator, e.g. the EKS cluster nodes will attach to,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#eks SagemakerCluster#eks}

---

### SagemakerClusterOrchestratorEks <a name="SagemakerClusterOrchestratorEks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterOrchestratorEks(
  cluster_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks.property.clusterArn">cluster_arn</a></code> | <code>str</code> | The ARN of the EKS cluster, such as arn:aws:eks:us-west-2:123456789012:cluster/my-eks-cluster. |

---

##### `cluster_arn`<sup>Optional</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

The ARN of the EKS cluster, such as arn:aws:eks:us-west-2:123456789012:cluster/my-eks-cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#cluster_arn SagemakerCluster#cluster_arn}

---

### SagemakerClusterRestrictedInstanceGroups <a name="SagemakerClusterRestrictedInstanceGroups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterRestrictedInstanceGroups(
  current_count: typing.Union[int, float] = None,
  environment_config: SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig = None,
  execution_role: str = None,
  instance_count: typing.Union[int, float] = None,
  instance_group_name: str = None,
  instance_storage_configs: IResolvable | typing.List[SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs] = None,
  instance_type: str = None,
  on_start_deep_health_checks: typing.List[str] = None,
  override_vpc_config: SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig = None,
  threads_per_core: typing.Union[int, float] = None,
  training_plan_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.currentCount">current_count</a></code> | <code>typing.Union[int, float]</code> | The number of instances that are currently in the restricted instance group of a SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.environmentConfig">environment_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig</a></code> | The configuration for the restricted instance groups (RIG) environment. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.executionRole">execution_role</a></code> | <code>str</code> | The execution role for the instance group to assume. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | The number of instances you specified to add to the restricted instance group of a SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.instanceGroupName">instance_group_name</a></code> | <code>str</code> | The name of the instance group of a SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.instanceStorageConfigs">instance_storage_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a>]</code> | The instance storage configuration for the instance group. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.instanceType">instance_type</a></code> | <code>str</code> | The instance type of the instance group of a SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.onStartDeepHealthChecks">on_start_deep_health_checks</a></code> | <code>typing.List[str]</code> | Nodes will undergo advanced stress test to detect and replace faulty instances, based on the type of deep health check(s) passed in. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.overrideVpcConfig">override_vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig">SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig</a></code> | Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.threadsPerCore">threads_per_core</a></code> | <code>typing.Union[int, float]</code> | The number you specified to TreadsPerCore in CreateCluster for enabling or disabling multithreading. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.trainingPlanArn">training_plan_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the training plan to use for this cluster restricted instance group. |

---

##### `current_count`<sup>Optional</sup> <a name="current_count" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.currentCount"></a>

```python
current_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of instances that are currently in the restricted instance group of a SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#current_count SagemakerCluster#current_count}

---

##### `environment_config`<sup>Optional</sup> <a name="environment_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.environmentConfig"></a>

```python
environment_config: SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig</a>

The configuration for the restricted instance groups (RIG) environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#environment_config SagemakerCluster#environment_config}

---

##### `execution_role`<sup>Optional</sup> <a name="execution_role" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

The execution role for the instance group to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#execution_role SagemakerCluster#execution_role}

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of instances you specified to add to the restricted instance group of a SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#instance_count SagemakerCluster#instance_count}

---

##### `instance_group_name`<sup>Optional</sup> <a name="instance_group_name" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.instanceGroupName"></a>

```python
instance_group_name: str
```

- *Type:* str

The name of the instance group of a SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#instance_group_name SagemakerCluster#instance_group_name}

---

##### `instance_storage_configs`<sup>Optional</sup> <a name="instance_storage_configs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.instanceStorageConfigs"></a>

```python
instance_storage_configs: IResolvable | typing.List[SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a>]

The instance storage configuration for the instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#instance_storage_configs SagemakerCluster#instance_storage_configs}

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

The instance type of the instance group of a SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#instance_type SagemakerCluster#instance_type}

---

##### `on_start_deep_health_checks`<sup>Optional</sup> <a name="on_start_deep_health_checks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.onStartDeepHealthChecks"></a>

```python
on_start_deep_health_checks: typing.List[str]
```

- *Type:* typing.List[str]

Nodes will undergo advanced stress test to detect and replace faulty instances, based on the type of deep health check(s) passed in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#on_start_deep_health_checks SagemakerCluster#on_start_deep_health_checks}

---

##### `override_vpc_config`<sup>Optional</sup> <a name="override_vpc_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.overrideVpcConfig"></a>

```python
override_vpc_config: SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig">SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig</a>

Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.

You can control access to and from your resources by configuring a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#override_vpc_config SagemakerCluster#override_vpc_config}

---

##### `threads_per_core`<sup>Optional</sup> <a name="threads_per_core" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.threadsPerCore"></a>

```python
threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number you specified to TreadsPerCore in CreateCluster for enabling or disabling multithreading.

For instance types that support multithreading, you can specify 1 for disabling multithreading and 2 for enabling multithreading.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#threads_per_core SagemakerCluster#threads_per_core}

---

##### `training_plan_arn`<sup>Optional</sup> <a name="training_plan_arn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.trainingPlanArn"></a>

```python
training_plan_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the training plan to use for this cluster restricted instance group.

For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see CreateTrainingPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#training_plan_arn SagemakerCluster#training_plan_arn}

---

### SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig <a name="SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig(
  fsx_lustre_config: SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig.property.fsxLustreConfig">fsx_lustre_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig</a></code> | Configuration settings for an Amazon FSx for Lustre file system to be used with the cluster. |

---

##### `fsx_lustre_config`<sup>Optional</sup> <a name="fsx_lustre_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig.property.fsxLustreConfig"></a>

```python
fsx_lustre_config: SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig</a>

Configuration settings for an Amazon FSx for Lustre file system to be used with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#fsx_lustre_config SagemakerCluster#fsx_lustre_config}

---

### SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig <a name="SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig(
  per_unit_storage_throughput: typing.Union[int, float] = None,
  size_in_gi_b: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig.property.perUnitStorageThroughput">per_unit_storage_throughput</a></code> | <code>typing.Union[int, float]</code> | The throughput capacity of the FSx for Lustre file system, measured in MB/s per TiB of storage. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig.property.sizeInGiB">size_in_gi_b</a></code> | <code>typing.Union[int, float]</code> | The storage capacity of the FSx for Lustre file system, specified in gibibytes (GiB). |

---

##### `per_unit_storage_throughput`<sup>Optional</sup> <a name="per_unit_storage_throughput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig.property.perUnitStorageThroughput"></a>

```python
per_unit_storage_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The throughput capacity of the FSx for Lustre file system, measured in MB/s per TiB of storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#per_unit_storage_throughput SagemakerCluster#per_unit_storage_throughput}

---

##### `size_in_gi_b`<sup>Optional</sup> <a name="size_in_gi_b" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig.property.sizeInGiB"></a>

```python
size_in_gi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The storage capacity of the FSx for Lustre file system, specified in gibibytes (GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#size_in_gi_b SagemakerCluster#size_in_gi_b}

---

### SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs <a name="SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs(
  ebs_volume_config: SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs.property.ebsVolumeConfig">ebs_volume_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a></code> | Defines the configuration for attaching additional Amazon Elastic Block Store (EBS) volumes to the instances in the SageMaker HyperPod cluster instance group. |

---

##### `ebs_volume_config`<sup>Optional</sup> <a name="ebs_volume_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs.property.ebsVolumeConfig"></a>

```python
ebs_volume_config: SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a>

Defines the configuration for attaching additional Amazon Elastic Block Store (EBS) volumes to the instances in the SageMaker HyperPod cluster instance group.

The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to /opt/sagemaker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#ebs_volume_config SagemakerCluster#ebs_volume_config}

---

### SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig <a name="SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig(
  root_volume: bool | IResolvable = None,
  volume_kms_key_id: str = None,
  volume_size_in_gb: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.rootVolume">root_volume</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#root_volume SagemakerCluster#root_volume}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.volumeKmsKeyId">volume_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#volume_kms_key_id SagemakerCluster#volume_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.volumeSizeInGb">volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | The size in gigabytes (GB) of the additional EBS volume to be attached to the instances in the SageMaker HyperPod cluster instance group. |

---

##### `root_volume`<sup>Optional</sup> <a name="root_volume" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.rootVolume"></a>

```python
root_volume: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#root_volume SagemakerCluster#root_volume}.

---

##### `volume_kms_key_id`<sup>Optional</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.volumeKmsKeyId"></a>

```python
volume_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#volume_kms_key_id SagemakerCluster#volume_kms_key_id}.

---

##### `volume_size_in_gb`<sup>Optional</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.volumeSizeInGb"></a>

```python
volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size in gigabytes (GB) of the additional EBS volume to be attached to the instances in the SageMaker HyperPod cluster instance group.

The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to /opt/sagemaker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#volume_size_in_gb SagemakerCluster#volume_size_in_gb}

---

### SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig <a name="SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig(
  security_group_ids: typing.List[str] = None,
  subnets: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The VPC security group IDs, in the form sg-xxxxxxxx. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | The ID of the subnets in the VPC to which you want to connect your training job or model. |

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

The VPC security group IDs, in the form sg-xxxxxxxx.

Specify the security groups for the VPC that is specified in the Subnets field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#security_group_ids SagemakerCluster#security_group_ids}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

The ID of the subnets in the VPC to which you want to connect your training job or model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#subnets SagemakerCluster#subnets}

---

### SagemakerClusterTags <a name="SagemakerClusterTags" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#key SagemakerCluster#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#value SagemakerCluster#value}

---

### SagemakerClusterTieredStorageConfig <a name="SagemakerClusterTieredStorageConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterTieredStorageConfig(
  instance_memory_allocation_percentage: typing.Union[int, float] = None,
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig.property.instanceMemoryAllocationPercentage">instance_memory_allocation_percentage</a></code> | <code>typing.Union[int, float]</code> | The percentage of instance memory to allocate for tiered storage. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig.property.mode">mode</a></code> | <code>str</code> | The mode of tiered storage. |

---

##### `instance_memory_allocation_percentage`<sup>Optional</sup> <a name="instance_memory_allocation_percentage" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig.property.instanceMemoryAllocationPercentage"></a>

```python
instance_memory_allocation_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of instance memory to allocate for tiered storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#instance_memory_allocation_percentage SagemakerCluster#instance_memory_allocation_percentage}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

The mode of tiered storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#mode SagemakerCluster#mode}

---

### SagemakerClusterVpcConfig <a name="SagemakerClusterVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterVpcConfig(
  security_group_ids: typing.List[str] = None,
  subnets: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The VPC security group IDs, in the form sg-xxxxxxxx. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | The ID of the subnets in the VPC to which you want to connect your training job or model. |

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

The VPC security group IDs, in the form sg-xxxxxxxx.

Specify the security groups for the VPC that is specified in the Subnets field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#security_group_ids SagemakerCluster#security_group_ids}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

The ID of the subnets in the VPC to which you want to connect your training job or model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#subnets SagemakerCluster#subnets}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerClusterAutoScalingOutputReference <a name="SagemakerClusterAutoScalingOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterAutoScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.resetAutoScalerType">reset_auto_scaler_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_scaler_type` <a name="reset_auto_scaler_type" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.resetAutoScalerType"></a>

```python
def reset_auto_scaler_type() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.autoScalerTypeInput">auto_scaler_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.autoScalerType">auto_scaler_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling">SagemakerClusterAutoScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_scaler_type_input`<sup>Optional</sup> <a name="auto_scaler_type_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.autoScalerTypeInput"></a>

```python
auto_scaler_type_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `auto_scaler_type`<sup>Required</sup> <a name="auto_scaler_type" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.autoScalerType"></a>

```python
auto_scaler_type: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterAutoScaling
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling">SagemakerClusterAutoScaling</a>

---


### SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference <a name="SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.resetOnDemand">reset_on_demand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.resetSpot">reset_spot</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_on_demand` <a name="reset_on_demand" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.resetOnDemand"></a>

```python
def reset_on_demand() -> None
```

##### `reset_spot` <a name="reset_spot" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.resetSpot"></a>

```python
def reset_spot() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.onDemandInput">on_demand_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.spotInput">spot_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.onDemand">on_demand</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.spot">spot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements">SagemakerClusterInstanceGroupsCapacityRequirements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_demand_input`<sup>Optional</sup> <a name="on_demand_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.onDemandInput"></a>

```python
on_demand_input: str
```

- *Type:* str

---

##### `spot_input`<sup>Optional</sup> <a name="spot_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.spotInput"></a>

```python
spot_input: str
```

- *Type:* str

---

##### `on_demand`<sup>Required</sup> <a name="on_demand" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.onDemand"></a>

```python
on_demand: str
```

- *Type:* str

---

##### `spot`<sup>Required</sup> <a name="spot" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.spot"></a>

```python
spot: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterInstanceGroupsCapacityRequirements
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements">SagemakerClusterInstanceGroupsCapacityRequirements</a>

---


### SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference <a name="SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetRootVolume">reset_root_volume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetVolumeKmsKeyId">reset_volume_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetVolumeSizeInGb">reset_volume_size_in_gb</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_root_volume` <a name="reset_root_volume" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetRootVolume"></a>

```python
def reset_root_volume() -> None
```

##### `reset_volume_kms_key_id` <a name="reset_volume_kms_key_id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetVolumeKmsKeyId"></a>

```python
def reset_volume_kms_key_id() -> None
```

##### `reset_volume_size_in_gb` <a name="reset_volume_size_in_gb" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetVolumeSizeInGb"></a>

```python
def reset_volume_size_in_gb() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolumeInput">root_volume_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyIdInput">volume_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGbInput">volume_size_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolume">root_volume</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyId">volume_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGb">volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `root_volume_input`<sup>Optional</sup> <a name="root_volume_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolumeInput"></a>

```python
root_volume_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `volume_kms_key_id_input`<sup>Optional</sup> <a name="volume_kms_key_id_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```python
volume_kms_key_id_input: str
```

- *Type:* str

---

##### `volume_size_in_gb_input`<sup>Optional</sup> <a name="volume_size_in_gb_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGbInput"></a>

```python
volume_size_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `root_volume`<sup>Required</sup> <a name="root_volume" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolume"></a>

```python
root_volume: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `volume_kms_key_id`<sup>Required</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyId"></a>

```python
volume_kms_key_id: str
```

- *Type:* str

---

##### `volume_size_in_gb`<sup>Required</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGb"></a>

```python
volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a>

---


### SagemakerClusterInstanceGroupsInstanceStorageConfigsList <a name="SagemakerClusterInstanceGroupsInstanceStorageConfigsList" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs">SagemakerClusterInstanceGroupsInstanceStorageConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerClusterInstanceGroupsInstanceStorageConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs">SagemakerClusterInstanceGroupsInstanceStorageConfigs</a>]

---


### SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference <a name="SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.putEbsVolumeConfig">put_ebs_volume_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.resetEbsVolumeConfig">reset_ebs_volume_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ebs_volume_config` <a name="put_ebs_volume_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.putEbsVolumeConfig"></a>

```python
def put_ebs_volume_config(
  root_volume: bool | IResolvable = None,
  volume_kms_key_id: str = None,
  volume_size_in_gb: typing.Union[int, float] = None
) -> None
```

###### `root_volume`<sup>Optional</sup> <a name="root_volume" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.putEbsVolumeConfig.parameter.rootVolume"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#root_volume SagemakerCluster#root_volume}.

---

###### `volume_kms_key_id`<sup>Optional</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.putEbsVolumeConfig.parameter.volumeKmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#volume_kms_key_id SagemakerCluster#volume_kms_key_id}.

---

###### `volume_size_in_gb`<sup>Optional</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.putEbsVolumeConfig.parameter.volumeSizeInGb"></a>

- *Type:* typing.Union[int, float]

The size in gigabytes (GB) of the additional EBS volume to be attached to the instances in the SageMaker HyperPod cluster instance group.

The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to /opt/sagemaker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#volume_size_in_gb SagemakerCluster#volume_size_in_gb}

---

##### `reset_ebs_volume_config` <a name="reset_ebs_volume_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.resetEbsVolumeConfig"></a>

```python
def reset_ebs_volume_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfig">ebs_volume_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference">SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfigInput">ebs_volume_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs">SagemakerClusterInstanceGroupsInstanceStorageConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ebs_volume_config`<sup>Required</sup> <a name="ebs_volume_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfig"></a>

```python
ebs_volume_config: SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference">SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference</a>

---

##### `ebs_volume_config_input`<sup>Optional</sup> <a name="ebs_volume_config_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfigInput"></a>

```python
ebs_volume_config_input: IResolvable | SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterInstanceGroupsInstanceStorageConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs">SagemakerClusterInstanceGroupsInstanceStorageConfigs</a>

---


### SagemakerClusterInstanceGroupsKubernetesConfigOutputReference <a name="SagemakerClusterInstanceGroupsKubernetesConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.putTaints">put_taints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.resetTaints">reset_taints</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_taints` <a name="put_taints" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.putTaints"></a>

```python
def put_taints(
  value: IResolvable | typing.List[SagemakerClusterInstanceGroupsKubernetesConfigTaints]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.putTaints.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a>]

---

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_taints` <a name="reset_taints" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.resetTaints"></a>

```python
def reset_taints() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.taints">taints</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList">SagemakerClusterInstanceGroupsKubernetesConfigTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.taintsInput">taints_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig">SagemakerClusterInstanceGroupsKubernetesConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.taints"></a>

```python
taints: SagemakerClusterInstanceGroupsKubernetesConfigTaintsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList">SagemakerClusterInstanceGroupsKubernetesConfigTaintsList</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `taints_input`<sup>Optional</sup> <a name="taints_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.taintsInput"></a>

```python
taints_input: IResolvable | typing.List[SagemakerClusterInstanceGroupsKubernetesConfigTaints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a>]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterInstanceGroupsKubernetesConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig">SagemakerClusterInstanceGroupsKubernetesConfig</a>

---


### SagemakerClusterInstanceGroupsKubernetesConfigTaintsList <a name="SagemakerClusterInstanceGroupsKubernetesConfigTaintsList" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerClusterInstanceGroupsKubernetesConfigTaints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a>]

---


### SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference <a name="SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resetEffect">reset_effect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_effect` <a name="reset_effect" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resetEffect"></a>

```python
def reset_effect() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterInstanceGroupsKubernetesConfigTaints
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a>

---


### SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference <a name="SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.resetOnCreate">reset_on_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.resetSourceS3Uri">reset_source_s3_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_on_create` <a name="reset_on_create" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.resetOnCreate"></a>

```python
def reset_on_create() -> None
```

##### `reset_source_s3_uri` <a name="reset_source_s3_uri" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.resetSourceS3Uri"></a>

```python
def reset_source_s3_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.onCreateInput">on_create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.sourceS3UriInput">source_s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.onCreate">on_create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.sourceS3Uri">source_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig">SagemakerClusterInstanceGroupsLifeCycleConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_create_input`<sup>Optional</sup> <a name="on_create_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.onCreateInput"></a>

```python
on_create_input: str
```

- *Type:* str

---

##### `source_s3_uri_input`<sup>Optional</sup> <a name="source_s3_uri_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.sourceS3UriInput"></a>

```python
source_s3_uri_input: str
```

- *Type:* str

---

##### `on_create`<sup>Required</sup> <a name="on_create" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.onCreate"></a>

```python
on_create: str
```

- *Type:* str

---

##### `source_s3_uri`<sup>Required</sup> <a name="source_s3_uri" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.sourceS3Uri"></a>

```python
source_s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterInstanceGroupsLifeCycleConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig">SagemakerClusterInstanceGroupsLifeCycleConfig</a>

---


### SagemakerClusterInstanceGroupsList <a name="SagemakerClusterInstanceGroupsList" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerClusterInstanceGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerClusterInstanceGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>]

---


### SagemakerClusterInstanceGroupsOutputReference <a name="SagemakerClusterInstanceGroupsOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putCapacityRequirements">put_capacity_requirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putInstanceStorageConfigs">put_instance_storage_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putKubernetesConfig">put_kubernetes_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putLifeCycleConfig">put_life_cycle_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putOverrideVpcConfig">put_override_vpc_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putScheduledUpdateConfig">put_scheduled_update_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetCapacityRequirements">reset_capacity_requirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetCurrentCount">reset_current_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetExecutionRole">reset_execution_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetImageId">reset_image_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetInstanceCount">reset_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetInstanceGroupName">reset_instance_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetInstanceStorageConfigs">reset_instance_storage_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetKubernetesConfig">reset_kubernetes_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetLifeCycleConfig">reset_life_cycle_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetMinInstanceCount">reset_min_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetOnStartDeepHealthChecks">reset_on_start_deep_health_checks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetOverrideVpcConfig">reset_override_vpc_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetScheduledUpdateConfig">reset_scheduled_update_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetThreadsPerCore">reset_threads_per_core</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetTrainingPlanArn">reset_training_plan_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_capacity_requirements` <a name="put_capacity_requirements" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putCapacityRequirements"></a>

```python
def put_capacity_requirements(
  on_demand: str = None,
  spot: str = None
) -> None
```

###### `on_demand`<sup>Optional</sup> <a name="on_demand" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putCapacityRequirements.parameter.onDemand"></a>

- *Type:* str

Options for OnDemand capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#on_demand SagemakerCluster#on_demand}

---

###### `spot`<sup>Optional</sup> <a name="spot" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putCapacityRequirements.parameter.spot"></a>

- *Type:* str

Options for Spot capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#spot SagemakerCluster#spot}

---

##### `put_instance_storage_configs` <a name="put_instance_storage_configs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putInstanceStorageConfigs"></a>

```python
def put_instance_storage_configs(
  value: IResolvable | typing.List[SagemakerClusterInstanceGroupsInstanceStorageConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putInstanceStorageConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs">SagemakerClusterInstanceGroupsInstanceStorageConfigs</a>]

---

##### `put_kubernetes_config` <a name="put_kubernetes_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putKubernetesConfig"></a>

```python
def put_kubernetes_config(
  labels: typing.Mapping[str] = None,
  taints: IResolvable | typing.List[SagemakerClusterInstanceGroupsKubernetesConfigTaints] = None
) -> None
```

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putKubernetesConfig.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A map of Kubernetes labels to apply to cluster nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#labels SagemakerCluster#labels}

---

###### `taints`<sup>Optional</sup> <a name="taints" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putKubernetesConfig.parameter.taints"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a>]

A list of Kubernetes taints to apply to cluster nodes. Maximum of 50 taints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#taints SagemakerCluster#taints}

---

##### `put_life_cycle_config` <a name="put_life_cycle_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putLifeCycleConfig"></a>

```python
def put_life_cycle_config(
  on_create: str = None,
  source_s3_uri: str = None
) -> None
```

###### `on_create`<sup>Optional</sup> <a name="on_create" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putLifeCycleConfig.parameter.onCreate"></a>

- *Type:* str

The file name of the entrypoint script of lifecycle scripts under SourceS3Uri. This entrypoint script runs during cluster creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#on_create SagemakerCluster#on_create}

---

###### `source_s3_uri`<sup>Optional</sup> <a name="source_s3_uri" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putLifeCycleConfig.parameter.sourceS3Uri"></a>

- *Type:* str

An Amazon S3 bucket path where your lifecycle scripts are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#source_s3_uri SagemakerCluster#source_s3_uri}

---

##### `put_override_vpc_config` <a name="put_override_vpc_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putOverrideVpcConfig"></a>

```python
def put_override_vpc_config(
  security_group_ids: typing.List[str] = None,
  subnets: typing.List[str] = None
) -> None
```

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putOverrideVpcConfig.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

The VPC security group IDs, in the form sg-xxxxxxxx.

Specify the security groups for the VPC that is specified in the Subnets field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#security_group_ids SagemakerCluster#security_group_ids}

---

###### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putOverrideVpcConfig.parameter.subnets"></a>

- *Type:* typing.List[str]

The ID of the subnets in the VPC to which you want to connect your training job or model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#subnets SagemakerCluster#subnets}

---

##### `put_scheduled_update_config` <a name="put_scheduled_update_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putScheduledUpdateConfig"></a>

```python
def put_scheduled_update_config(
  deployment_config: SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig = None,
  schedule_expression: str = None
) -> None
```

###### `deployment_config`<sup>Optional</sup> <a name="deployment_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putScheduledUpdateConfig.parameter.deploymentConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig</a>

The configuration to use when updating the AMI versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#deployment_config SagemakerCluster#deployment_config}

---

###### `schedule_expression`<sup>Optional</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putScheduledUpdateConfig.parameter.scheduleExpression"></a>

- *Type:* str

A cron expression that specifies the schedule that SageMaker follows when updating the AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#schedule_expression SagemakerCluster#schedule_expression}

---

##### `reset_capacity_requirements` <a name="reset_capacity_requirements" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetCapacityRequirements"></a>

```python
def reset_capacity_requirements() -> None
```

##### `reset_current_count` <a name="reset_current_count" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetCurrentCount"></a>

```python
def reset_current_count() -> None
```

##### `reset_execution_role` <a name="reset_execution_role" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetExecutionRole"></a>

```python
def reset_execution_role() -> None
```

##### `reset_image_id` <a name="reset_image_id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetImageId"></a>

```python
def reset_image_id() -> None
```

##### `reset_instance_count` <a name="reset_instance_count" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetInstanceCount"></a>

```python
def reset_instance_count() -> None
```

##### `reset_instance_group_name` <a name="reset_instance_group_name" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetInstanceGroupName"></a>

```python
def reset_instance_group_name() -> None
```

##### `reset_instance_storage_configs` <a name="reset_instance_storage_configs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetInstanceStorageConfigs"></a>

```python
def reset_instance_storage_configs() -> None
```

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_kubernetes_config` <a name="reset_kubernetes_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetKubernetesConfig"></a>

```python
def reset_kubernetes_config() -> None
```

##### `reset_life_cycle_config` <a name="reset_life_cycle_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetLifeCycleConfig"></a>

```python
def reset_life_cycle_config() -> None
```

##### `reset_min_instance_count` <a name="reset_min_instance_count" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetMinInstanceCount"></a>

```python
def reset_min_instance_count() -> None
```

##### `reset_on_start_deep_health_checks` <a name="reset_on_start_deep_health_checks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetOnStartDeepHealthChecks"></a>

```python
def reset_on_start_deep_health_checks() -> None
```

##### `reset_override_vpc_config` <a name="reset_override_vpc_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetOverrideVpcConfig"></a>

```python
def reset_override_vpc_config() -> None
```

##### `reset_scheduled_update_config` <a name="reset_scheduled_update_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetScheduledUpdateConfig"></a>

```python
def reset_scheduled_update_config() -> None
```

##### `reset_threads_per_core` <a name="reset_threads_per_core" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetThreadsPerCore"></a>

```python
def reset_threads_per_core() -> None
```

##### `reset_training_plan_arn` <a name="reset_training_plan_arn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetTrainingPlanArn"></a>

```python
def reset_training_plan_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.capacityRequirements">capacity_requirements</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference">SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceStorageConfigs">instance_storage_configs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList">SagemakerClusterInstanceGroupsInstanceStorageConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.kubernetesConfig">kubernetes_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference">SagemakerClusterInstanceGroupsKubernetesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.lifeCycleConfig">life_cycle_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference">SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.overrideVpcConfig">override_vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference">SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.scheduledUpdateConfig">scheduled_update_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.capacityRequirementsInput">capacity_requirements_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements">SagemakerClusterInstanceGroupsCapacityRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.currentCountInput">current_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.executionRoleInput">execution_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.imageIdInput">image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceGroupNameInput">instance_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceStorageConfigsInput">instance_storage_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs">SagemakerClusterInstanceGroupsInstanceStorageConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.kubernetesConfigInput">kubernetes_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig">SagemakerClusterInstanceGroupsKubernetesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.lifeCycleConfigInput">life_cycle_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig">SagemakerClusterInstanceGroupsLifeCycleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.minInstanceCountInput">min_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.onStartDeepHealthChecksInput">on_start_deep_health_checks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.overrideVpcConfigInput">override_vpc_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig">SagemakerClusterInstanceGroupsOverrideVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.scheduledUpdateConfigInput">scheduled_update_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.threadsPerCoreInput">threads_per_core_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.trainingPlanArnInput">training_plan_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.currentCount">current_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.executionRole">execution_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceGroupName">instance_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.onStartDeepHealthChecks">on_start_deep_health_checks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.threadsPerCore">threads_per_core</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.trainingPlanArn">training_plan_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_requirements`<sup>Required</sup> <a name="capacity_requirements" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.capacityRequirements"></a>

```python
capacity_requirements: SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference">SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference</a>

---

##### `instance_storage_configs`<sup>Required</sup> <a name="instance_storage_configs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceStorageConfigs"></a>

```python
instance_storage_configs: SagemakerClusterInstanceGroupsInstanceStorageConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList">SagemakerClusterInstanceGroupsInstanceStorageConfigsList</a>

---

##### `kubernetes_config`<sup>Required</sup> <a name="kubernetes_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.kubernetesConfig"></a>

```python
kubernetes_config: SagemakerClusterInstanceGroupsKubernetesConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference">SagemakerClusterInstanceGroupsKubernetesConfigOutputReference</a>

---

##### `life_cycle_config`<sup>Required</sup> <a name="life_cycle_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.lifeCycleConfig"></a>

```python
life_cycle_config: SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference">SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference</a>

---

##### `override_vpc_config`<sup>Required</sup> <a name="override_vpc_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.overrideVpcConfig"></a>

```python
override_vpc_config: SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference">SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference</a>

---

##### `scheduled_update_config`<sup>Required</sup> <a name="scheduled_update_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.scheduledUpdateConfig"></a>

```python
scheduled_update_config: SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference</a>

---

##### `capacity_requirements_input`<sup>Optional</sup> <a name="capacity_requirements_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.capacityRequirementsInput"></a>

```python
capacity_requirements_input: IResolvable | SagemakerClusterInstanceGroupsCapacityRequirements
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements">SagemakerClusterInstanceGroupsCapacityRequirements</a>

---

##### `current_count_input`<sup>Optional</sup> <a name="current_count_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.currentCountInput"></a>

```python
current_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `execution_role_input`<sup>Optional</sup> <a name="execution_role_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.executionRoleInput"></a>

```python
execution_role_input: str
```

- *Type:* str

---

##### `image_id_input`<sup>Optional</sup> <a name="image_id_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.imageIdInput"></a>

```python
image_id_input: str
```

- *Type:* str

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_group_name_input`<sup>Optional</sup> <a name="instance_group_name_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceGroupNameInput"></a>

```python
instance_group_name_input: str
```

- *Type:* str

---

##### `instance_storage_configs_input`<sup>Optional</sup> <a name="instance_storage_configs_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceStorageConfigsInput"></a>

```python
instance_storage_configs_input: IResolvable | typing.List[SagemakerClusterInstanceGroupsInstanceStorageConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs">SagemakerClusterInstanceGroupsInstanceStorageConfigs</a>]

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `kubernetes_config_input`<sup>Optional</sup> <a name="kubernetes_config_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.kubernetesConfigInput"></a>

```python
kubernetes_config_input: IResolvable | SagemakerClusterInstanceGroupsKubernetesConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig">SagemakerClusterInstanceGroupsKubernetesConfig</a>

---

##### `life_cycle_config_input`<sup>Optional</sup> <a name="life_cycle_config_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.lifeCycleConfigInput"></a>

```python
life_cycle_config_input: IResolvable | SagemakerClusterInstanceGroupsLifeCycleConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig">SagemakerClusterInstanceGroupsLifeCycleConfig</a>

---

##### `min_instance_count_input`<sup>Optional</sup> <a name="min_instance_count_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.minInstanceCountInput"></a>

```python
min_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `on_start_deep_health_checks_input`<sup>Optional</sup> <a name="on_start_deep_health_checks_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.onStartDeepHealthChecksInput"></a>

```python
on_start_deep_health_checks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `override_vpc_config_input`<sup>Optional</sup> <a name="override_vpc_config_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.overrideVpcConfigInput"></a>

```python
override_vpc_config_input: IResolvable | SagemakerClusterInstanceGroupsOverrideVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig">SagemakerClusterInstanceGroupsOverrideVpcConfig</a>

---

##### `scheduled_update_config_input`<sup>Optional</sup> <a name="scheduled_update_config_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.scheduledUpdateConfigInput"></a>

```python
scheduled_update_config_input: IResolvable | SagemakerClusterInstanceGroupsScheduledUpdateConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfig</a>

---

##### `threads_per_core_input`<sup>Optional</sup> <a name="threads_per_core_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.threadsPerCoreInput"></a>

```python
threads_per_core_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `training_plan_arn_input`<sup>Optional</sup> <a name="training_plan_arn_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.trainingPlanArnInput"></a>

```python
training_plan_arn_input: str
```

- *Type:* str

---

##### `current_count`<sup>Required</sup> <a name="current_count" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.currentCount"></a>

```python
current_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_group_name`<sup>Required</sup> <a name="instance_group_name" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceGroupName"></a>

```python
instance_group_name: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.minInstanceCount"></a>

```python
min_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `on_start_deep_health_checks`<sup>Required</sup> <a name="on_start_deep_health_checks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.onStartDeepHealthChecks"></a>

```python
on_start_deep_health_checks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `threads_per_core`<sup>Required</sup> <a name="threads_per_core" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.threadsPerCore"></a>

```python
threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `training_plan_arn`<sup>Required</sup> <a name="training_plan_arn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.trainingPlanArn"></a>

```python
training_plan_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterInstanceGroups
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>

---


### SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference <a name="SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.resetSubnets">reset_subnets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnets` <a name="reset_subnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.resetSubnets"></a>

```python
def reset_subnets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig">SagemakerClusterInstanceGroupsOverrideVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterInstanceGroupsOverrideVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig">SagemakerClusterInstanceGroupsOverrideVpcConfig</a>

---


### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a>]

---


### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.resetAlarmName">reset_alarm_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alarm_name` <a name="reset_alarm_name" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.resetAlarmName"></a>

```python
def reset_alarm_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmNameInput">alarm_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmName">alarm_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarm_name_input`<sup>Optional</sup> <a name="alarm_name_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmNameInput"></a>

```python
alarm_name_input: str
```

- *Type:* str

---

##### `alarm_name`<sup>Required</sup> <a name="alarm_name" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmName"></a>

```python
alarm_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a>

---


### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.putAutoRollbackConfiguration">put_auto_rollback_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.putRollingUpdatePolicy">put_rolling_update_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resetAutoRollbackConfiguration">reset_auto_rollback_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resetRollingUpdatePolicy">reset_rolling_update_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resetWaitIntervalInSeconds">reset_wait_interval_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auto_rollback_configuration` <a name="put_auto_rollback_configuration" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.putAutoRollbackConfiguration"></a>

```python
def put_auto_rollback_configuration(
  value: IResolvable | typing.List[SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.putAutoRollbackConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a>]

---

##### `put_rolling_update_policy` <a name="put_rolling_update_policy" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.putRollingUpdatePolicy"></a>

```python
def put_rolling_update_policy(
  maximum_batch_size: SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize = None,
  rollback_maximum_batch_size: SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize = None
) -> None
```

###### `maximum_batch_size`<sup>Optional</sup> <a name="maximum_batch_size" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.putRollingUpdatePolicy.parameter.maximumBatchSize"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>

The configuration of the size measurements of the AMI update.

Using this configuration, you can specify whether SageMaker should update your instance group by an amount or percentage of instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#maximum_batch_size SagemakerCluster#maximum_batch_size}

---

###### `rollback_maximum_batch_size`<sup>Optional</sup> <a name="rollback_maximum_batch_size" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.putRollingUpdatePolicy.parameter.rollbackMaximumBatchSize"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>

The configuration of the size measurements of the AMI update.

Using this configuration, you can specify whether SageMaker should update your instance group by an amount or percentage of instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#rollback_maximum_batch_size SagemakerCluster#rollback_maximum_batch_size}

---

##### `reset_auto_rollback_configuration` <a name="reset_auto_rollback_configuration" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resetAutoRollbackConfiguration"></a>

```python
def reset_auto_rollback_configuration() -> None
```

##### `reset_rolling_update_policy` <a name="reset_rolling_update_policy" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resetRollingUpdatePolicy"></a>

```python
def reset_rolling_update_policy() -> None
```

##### `reset_wait_interval_in_seconds` <a name="reset_wait_interval_in_seconds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resetWaitIntervalInSeconds"></a>

```python
def reset_wait_interval_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.autoRollbackConfiguration">auto_rollback_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.rollingUpdatePolicy">rolling_update_policy</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.autoRollbackConfigurationInput">auto_rollback_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.rollingUpdatePolicyInput">rolling_update_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.waitIntervalInSecondsInput">wait_interval_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.waitIntervalInSeconds">wait_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_rollback_configuration`<sup>Required</sup> <a name="auto_rollback_configuration" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.autoRollbackConfiguration"></a>

```python
auto_rollback_configuration: SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList</a>

---

##### `rolling_update_policy`<sup>Required</sup> <a name="rolling_update_policy" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.rollingUpdatePolicy"></a>

```python
rolling_update_policy: SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference</a>

---

##### `auto_rollback_configuration_input`<sup>Optional</sup> <a name="auto_rollback_configuration_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.autoRollbackConfigurationInput"></a>

```python
auto_rollback_configuration_input: IResolvable | typing.List[SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a>]

---

##### `rolling_update_policy_input`<sup>Optional</sup> <a name="rolling_update_policy_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.rollingUpdatePolicyInput"></a>

```python
rolling_update_policy_input: IResolvable | SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy</a>

---

##### `wait_interval_in_seconds_input`<sup>Optional</sup> <a name="wait_interval_in_seconds_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.waitIntervalInSecondsInput"></a>

```python
wait_interval_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_interval_in_seconds`<sup>Required</sup> <a name="wait_interval_in_seconds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.waitIntervalInSeconds"></a>

```python
wait_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig</a>

---


### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>

---


### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize">put_maximum_batch_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize">put_rollback_maximum_batch_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumBatchSize">reset_maximum_batch_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.resetRollbackMaximumBatchSize">reset_rollback_maximum_batch_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_maximum_batch_size` <a name="put_maximum_batch_size" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize"></a>

```python
def put_maximum_batch_size(
  type: str = None,
  value: typing.Union[int, float] = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize.parameter.type"></a>

- *Type:* str

Specifies whether SageMaker should process the update by amount or percentage of instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#type SagemakerCluster#type}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize.parameter.value"></a>

- *Type:* typing.Union[int, float]

Specifies the amount or percentage of instances SageMaker updates at a time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#value SagemakerCluster#value}

---

##### `put_rollback_maximum_batch_size` <a name="put_rollback_maximum_batch_size" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize"></a>

```python
def put_rollback_maximum_batch_size(
  type: str = None,
  value: typing.Union[int, float] = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize.parameter.type"></a>

- *Type:* str

Specifies whether SageMaker should process the update by amount or percentage of instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#type SagemakerCluster#type}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize.parameter.value"></a>

- *Type:* typing.Union[int, float]

Specifies the amount or percentage of instances SageMaker updates at a time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#value SagemakerCluster#value}

---

##### `reset_maximum_batch_size` <a name="reset_maximum_batch_size" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumBatchSize"></a>

```python
def reset_maximum_batch_size() -> None
```

##### `reset_rollback_maximum_batch_size` <a name="reset_rollback_maximum_batch_size" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.resetRollbackMaximumBatchSize"></a>

```python
def reset_rollback_maximum_batch_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize">maximum_batch_size</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize">rollback_maximum_batch_size</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSizeInput">maximum_batch_size_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSizeInput">rollback_maximum_batch_size_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_batch_size`<sup>Required</sup> <a name="maximum_batch_size" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize"></a>

```python
maximum_batch_size: SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference</a>

---

##### `rollback_maximum_batch_size`<sup>Required</sup> <a name="rollback_maximum_batch_size" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize"></a>

```python
rollback_maximum_batch_size: SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference</a>

---

##### `maximum_batch_size_input`<sup>Optional</sup> <a name="maximum_batch_size_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSizeInput"></a>

```python
maximum_batch_size_input: IResolvable | SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>

---

##### `rollback_maximum_batch_size_input`<sup>Optional</sup> <a name="rollback_maximum_batch_size_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSizeInput"></a>

```python
rollback_maximum_batch_size_input: IResolvable | SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy</a>

---


### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>

---


### SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.putDeploymentConfig">put_deployment_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.resetDeploymentConfig">reset_deployment_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.resetScheduleExpression">reset_schedule_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_deployment_config` <a name="put_deployment_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.putDeploymentConfig"></a>

```python
def put_deployment_config(
  auto_rollback_configuration: IResolvable | typing.List[SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration] = None,
  rolling_update_policy: SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy = None,
  wait_interval_in_seconds: typing.Union[int, float] = None
) -> None
```

###### `auto_rollback_configuration`<sup>Optional</sup> <a name="auto_rollback_configuration" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.putDeploymentConfig.parameter.autoRollbackConfiguration"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a>]

An array that contains the alarms that SageMaker monitors to know whether to roll back the AMI update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#auto_rollback_configuration SagemakerCluster#auto_rollback_configuration}

---

###### `rolling_update_policy`<sup>Optional</sup> <a name="rolling_update_policy" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.putDeploymentConfig.parameter.rollingUpdatePolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy</a>

The policy that SageMaker uses when updating the AMI versions of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#rolling_update_policy SagemakerCluster#rolling_update_policy}

---

###### `wait_interval_in_seconds`<sup>Optional</sup> <a name="wait_interval_in_seconds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.putDeploymentConfig.parameter.waitIntervalInSeconds"></a>

- *Type:* typing.Union[int, float]

The duration in seconds that SageMaker waits before updating more instances in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#wait_interval_in_seconds SagemakerCluster#wait_interval_in_seconds}

---

##### `reset_deployment_config` <a name="reset_deployment_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.resetDeploymentConfig"></a>

```python
def reset_deployment_config() -> None
```

##### `reset_schedule_expression` <a name="reset_schedule_expression" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.resetScheduleExpression"></a>

```python
def reset_schedule_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.deploymentConfig">deployment_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.deploymentConfigInput">deployment_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.scheduleExpressionInput">schedule_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deployment_config`<sup>Required</sup> <a name="deployment_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.deploymentConfig"></a>

```python
deployment_config: SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference</a>

---

##### `deployment_config_input`<sup>Optional</sup> <a name="deployment_config_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.deploymentConfigInput"></a>

```python
deployment_config_input: IResolvable | SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig</a>

---

##### `schedule_expression_input`<sup>Optional</sup> <a name="schedule_expression_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.scheduleExpressionInput"></a>

```python
schedule_expression_input: str
```

- *Type:* str

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterInstanceGroupsScheduledUpdateConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfig</a>

---


### SagemakerClusterOrchestratorEksOutputReference <a name="SagemakerClusterOrchestratorEksOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.resetClusterArn">reset_cluster_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cluster_arn` <a name="reset_cluster_arn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.resetClusterArn"></a>

```python
def reset_cluster_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.clusterArnInput">cluster_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.clusterArn">cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks">SagemakerClusterOrchestratorEks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_arn_input`<sup>Optional</sup> <a name="cluster_arn_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.clusterArnInput"></a>

```python
cluster_arn_input: str
```

- *Type:* str

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterOrchestratorEks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks">SagemakerClusterOrchestratorEks</a>

---


### SagemakerClusterOrchestratorOutputReference <a name="SagemakerClusterOrchestratorOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterOrchestratorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.putEks">put_eks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.resetEks">reset_eks</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_eks` <a name="put_eks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.putEks"></a>

```python
def put_eks(
  cluster_arn: str = None
) -> None
```

###### `cluster_arn`<sup>Optional</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.putEks.parameter.clusterArn"></a>

- *Type:* str

The ARN of the EKS cluster, such as arn:aws:eks:us-west-2:123456789012:cluster/my-eks-cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#cluster_arn SagemakerCluster#cluster_arn}

---

##### `reset_eks` <a name="reset_eks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.resetEks"></a>

```python
def reset_eks() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.eks">eks</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference">SagemakerClusterOrchestratorEksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.eksInput">eks_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks">SagemakerClusterOrchestratorEks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator">SagemakerClusterOrchestrator</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `eks`<sup>Required</sup> <a name="eks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.eks"></a>

```python
eks: SagemakerClusterOrchestratorEksOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference">SagemakerClusterOrchestratorEksOutputReference</a>

---

##### `eks_input`<sup>Optional</sup> <a name="eks_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.eksInput"></a>

```python
eks_input: IResolvable | SagemakerClusterOrchestratorEks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks">SagemakerClusterOrchestratorEks</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterOrchestrator
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator">SagemakerClusterOrchestrator</a>

---


### SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference <a name="SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.resetPerUnitStorageThroughput">reset_per_unit_storage_throughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.resetSizeInGiB">reset_size_in_gi_b</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_per_unit_storage_throughput` <a name="reset_per_unit_storage_throughput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.resetPerUnitStorageThroughput"></a>

```python
def reset_per_unit_storage_throughput() -> None
```

##### `reset_size_in_gi_b` <a name="reset_size_in_gi_b" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.resetSizeInGiB"></a>

```python
def reset_size_in_gi_b() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.perUnitStorageThroughputInput">per_unit_storage_throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.sizeInGiBInput">size_in_gi_b_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.perUnitStorageThroughput">per_unit_storage_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.sizeInGiB">size_in_gi_b</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `per_unit_storage_throughput_input`<sup>Optional</sup> <a name="per_unit_storage_throughput_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.perUnitStorageThroughputInput"></a>

```python
per_unit_storage_throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_in_gi_b_input`<sup>Optional</sup> <a name="size_in_gi_b_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.sizeInGiBInput"></a>

```python
size_in_gi_b_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `per_unit_storage_throughput`<sup>Required</sup> <a name="per_unit_storage_throughput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.perUnitStorageThroughput"></a>

```python
per_unit_storage_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_in_gi_b`<sup>Required</sup> <a name="size_in_gi_b" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.sizeInGiB"></a>

```python
size_in_gi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig</a>

---


### SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference <a name="SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.putFsxLustreConfig">put_fsx_lustre_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.resetFsxLustreConfig">reset_fsx_lustre_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fsx_lustre_config` <a name="put_fsx_lustre_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.putFsxLustreConfig"></a>

```python
def put_fsx_lustre_config(
  per_unit_storage_throughput: typing.Union[int, float] = None,
  size_in_gi_b: typing.Union[int, float] = None
) -> None
```

###### `per_unit_storage_throughput`<sup>Optional</sup> <a name="per_unit_storage_throughput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.putFsxLustreConfig.parameter.perUnitStorageThroughput"></a>

- *Type:* typing.Union[int, float]

The throughput capacity of the FSx for Lustre file system, measured in MB/s per TiB of storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#per_unit_storage_throughput SagemakerCluster#per_unit_storage_throughput}

---

###### `size_in_gi_b`<sup>Optional</sup> <a name="size_in_gi_b" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.putFsxLustreConfig.parameter.sizeInGiB"></a>

- *Type:* typing.Union[int, float]

The storage capacity of the FSx for Lustre file system, specified in gibibytes (GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#size_in_gi_b SagemakerCluster#size_in_gi_b}

---

##### `reset_fsx_lustre_config` <a name="reset_fsx_lustre_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.resetFsxLustreConfig"></a>

```python
def reset_fsx_lustre_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.fsxLustreConfig">fsx_lustre_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.fsxLustreConfigInput">fsx_lustre_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fsx_lustre_config`<sup>Required</sup> <a name="fsx_lustre_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.fsxLustreConfig"></a>

```python
fsx_lustre_config: SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference</a>

---

##### `fsx_lustre_config_input`<sup>Optional</sup> <a name="fsx_lustre_config_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.fsxLustreConfigInput"></a>

```python
fsx_lustre_config_input: IResolvable | SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig</a>

---


### SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference <a name="SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetRootVolume">reset_root_volume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetVolumeKmsKeyId">reset_volume_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetVolumeSizeInGb">reset_volume_size_in_gb</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_root_volume` <a name="reset_root_volume" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetRootVolume"></a>

```python
def reset_root_volume() -> None
```

##### `reset_volume_kms_key_id` <a name="reset_volume_kms_key_id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetVolumeKmsKeyId"></a>

```python
def reset_volume_kms_key_id() -> None
```

##### `reset_volume_size_in_gb` <a name="reset_volume_size_in_gb" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetVolumeSizeInGb"></a>

```python
def reset_volume_size_in_gb() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolumeInput">root_volume_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyIdInput">volume_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGbInput">volume_size_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolume">root_volume</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyId">volume_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGb">volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `root_volume_input`<sup>Optional</sup> <a name="root_volume_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolumeInput"></a>

```python
root_volume_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `volume_kms_key_id_input`<sup>Optional</sup> <a name="volume_kms_key_id_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```python
volume_kms_key_id_input: str
```

- *Type:* str

---

##### `volume_size_in_gb_input`<sup>Optional</sup> <a name="volume_size_in_gb_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGbInput"></a>

```python
volume_size_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `root_volume`<sup>Required</sup> <a name="root_volume" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolume"></a>

```python
root_volume: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `volume_kms_key_id`<sup>Required</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyId"></a>

```python
volume_kms_key_id: str
```

- *Type:* str

---

##### `volume_size_in_gb`<sup>Required</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGb"></a>

```python
volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a>

---


### SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList <a name="SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a>]

---


### SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference <a name="SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.putEbsVolumeConfig">put_ebs_volume_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.resetEbsVolumeConfig">reset_ebs_volume_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ebs_volume_config` <a name="put_ebs_volume_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.putEbsVolumeConfig"></a>

```python
def put_ebs_volume_config(
  root_volume: bool | IResolvable = None,
  volume_kms_key_id: str = None,
  volume_size_in_gb: typing.Union[int, float] = None
) -> None
```

###### `root_volume`<sup>Optional</sup> <a name="root_volume" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.putEbsVolumeConfig.parameter.rootVolume"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#root_volume SagemakerCluster#root_volume}.

---

###### `volume_kms_key_id`<sup>Optional</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.putEbsVolumeConfig.parameter.volumeKmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#volume_kms_key_id SagemakerCluster#volume_kms_key_id}.

---

###### `volume_size_in_gb`<sup>Optional</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.putEbsVolumeConfig.parameter.volumeSizeInGb"></a>

- *Type:* typing.Union[int, float]

The size in gigabytes (GB) of the additional EBS volume to be attached to the instances in the SageMaker HyperPod cluster instance group.

The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to /opt/sagemaker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#volume_size_in_gb SagemakerCluster#volume_size_in_gb}

---

##### `reset_ebs_volume_config` <a name="reset_ebs_volume_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.resetEbsVolumeConfig"></a>

```python
def reset_ebs_volume_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfig">ebs_volume_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfigInput">ebs_volume_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ebs_volume_config`<sup>Required</sup> <a name="ebs_volume_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfig"></a>

```python
ebs_volume_config: SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference</a>

---

##### `ebs_volume_config_input`<sup>Optional</sup> <a name="ebs_volume_config_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfigInput"></a>

```python
ebs_volume_config_input: IResolvable | SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a>

---


### SagemakerClusterRestrictedInstanceGroupsList <a name="SagemakerClusterRestrictedInstanceGroupsList" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerClusterRestrictedInstanceGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerClusterRestrictedInstanceGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>]

---


### SagemakerClusterRestrictedInstanceGroupsOutputReference <a name="SagemakerClusterRestrictedInstanceGroupsOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putEnvironmentConfig">put_environment_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putInstanceStorageConfigs">put_instance_storage_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putOverrideVpcConfig">put_override_vpc_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetCurrentCount">reset_current_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetEnvironmentConfig">reset_environment_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetExecutionRole">reset_execution_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetInstanceCount">reset_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetInstanceGroupName">reset_instance_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetInstanceStorageConfigs">reset_instance_storage_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetOnStartDeepHealthChecks">reset_on_start_deep_health_checks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetOverrideVpcConfig">reset_override_vpc_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetThreadsPerCore">reset_threads_per_core</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetTrainingPlanArn">reset_training_plan_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_environment_config` <a name="put_environment_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putEnvironmentConfig"></a>

```python
def put_environment_config(
  fsx_lustre_config: SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig = None
) -> None
```

###### `fsx_lustre_config`<sup>Optional</sup> <a name="fsx_lustre_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putEnvironmentConfig.parameter.fsxLustreConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig</a>

Configuration settings for an Amazon FSx for Lustre file system to be used with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#fsx_lustre_config SagemakerCluster#fsx_lustre_config}

---

##### `put_instance_storage_configs` <a name="put_instance_storage_configs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putInstanceStorageConfigs"></a>

```python
def put_instance_storage_configs(
  value: IResolvable | typing.List[SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putInstanceStorageConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a>]

---

##### `put_override_vpc_config` <a name="put_override_vpc_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putOverrideVpcConfig"></a>

```python
def put_override_vpc_config(
  security_group_ids: typing.List[str] = None,
  subnets: typing.List[str] = None
) -> None
```

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putOverrideVpcConfig.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

The VPC security group IDs, in the form sg-xxxxxxxx.

Specify the security groups for the VPC that is specified in the Subnets field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#security_group_ids SagemakerCluster#security_group_ids}

---

###### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putOverrideVpcConfig.parameter.subnets"></a>

- *Type:* typing.List[str]

The ID of the subnets in the VPC to which you want to connect your training job or model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_cluster#subnets SagemakerCluster#subnets}

---

##### `reset_current_count` <a name="reset_current_count" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetCurrentCount"></a>

```python
def reset_current_count() -> None
```

##### `reset_environment_config` <a name="reset_environment_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetEnvironmentConfig"></a>

```python
def reset_environment_config() -> None
```

##### `reset_execution_role` <a name="reset_execution_role" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetExecutionRole"></a>

```python
def reset_execution_role() -> None
```

##### `reset_instance_count` <a name="reset_instance_count" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetInstanceCount"></a>

```python
def reset_instance_count() -> None
```

##### `reset_instance_group_name` <a name="reset_instance_group_name" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetInstanceGroupName"></a>

```python
def reset_instance_group_name() -> None
```

##### `reset_instance_storage_configs` <a name="reset_instance_storage_configs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetInstanceStorageConfigs"></a>

```python
def reset_instance_storage_configs() -> None
```

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_on_start_deep_health_checks` <a name="reset_on_start_deep_health_checks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetOnStartDeepHealthChecks"></a>

```python
def reset_on_start_deep_health_checks() -> None
```

##### `reset_override_vpc_config` <a name="reset_override_vpc_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetOverrideVpcConfig"></a>

```python
def reset_override_vpc_config() -> None
```

##### `reset_threads_per_core` <a name="reset_threads_per_core" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetThreadsPerCore"></a>

```python
def reset_threads_per_core() -> None
```

##### `reset_training_plan_arn` <a name="reset_training_plan_arn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetTrainingPlanArn"></a>

```python
def reset_training_plan_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.environmentConfig">environment_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceStorageConfigs">instance_storage_configs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.overrideVpcConfig">override_vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference">SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.currentCountInput">current_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.environmentConfigInput">environment_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.executionRoleInput">execution_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceGroupNameInput">instance_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceStorageConfigsInput">instance_storage_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.onStartDeepHealthChecksInput">on_start_deep_health_checks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.overrideVpcConfigInput">override_vpc_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig">SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.threadsPerCoreInput">threads_per_core_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.trainingPlanArnInput">training_plan_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.currentCount">current_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.executionRole">execution_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceGroupName">instance_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.onStartDeepHealthChecks">on_start_deep_health_checks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.threadsPerCore">threads_per_core</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.trainingPlanArn">training_plan_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `environment_config`<sup>Required</sup> <a name="environment_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.environmentConfig"></a>

```python
environment_config: SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference</a>

---

##### `instance_storage_configs`<sup>Required</sup> <a name="instance_storage_configs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceStorageConfigs"></a>

```python
instance_storage_configs: SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList</a>

---

##### `override_vpc_config`<sup>Required</sup> <a name="override_vpc_config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.overrideVpcConfig"></a>

```python
override_vpc_config: SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference">SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference</a>

---

##### `current_count_input`<sup>Optional</sup> <a name="current_count_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.currentCountInput"></a>

```python
current_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `environment_config_input`<sup>Optional</sup> <a name="environment_config_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.environmentConfigInput"></a>

```python
environment_config_input: IResolvable | SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig</a>

---

##### `execution_role_input`<sup>Optional</sup> <a name="execution_role_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.executionRoleInput"></a>

```python
execution_role_input: str
```

- *Type:* str

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_group_name_input`<sup>Optional</sup> <a name="instance_group_name_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceGroupNameInput"></a>

```python
instance_group_name_input: str
```

- *Type:* str

---

##### `instance_storage_configs_input`<sup>Optional</sup> <a name="instance_storage_configs_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceStorageConfigsInput"></a>

```python
instance_storage_configs_input: IResolvable | typing.List[SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a>]

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `on_start_deep_health_checks_input`<sup>Optional</sup> <a name="on_start_deep_health_checks_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.onStartDeepHealthChecksInput"></a>

```python
on_start_deep_health_checks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `override_vpc_config_input`<sup>Optional</sup> <a name="override_vpc_config_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.overrideVpcConfigInput"></a>

```python
override_vpc_config_input: IResolvable | SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig">SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig</a>

---

##### `threads_per_core_input`<sup>Optional</sup> <a name="threads_per_core_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.threadsPerCoreInput"></a>

```python
threads_per_core_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `training_plan_arn_input`<sup>Optional</sup> <a name="training_plan_arn_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.trainingPlanArnInput"></a>

```python
training_plan_arn_input: str
```

- *Type:* str

---

##### `current_count`<sup>Required</sup> <a name="current_count" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.currentCount"></a>

```python
current_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_group_name`<sup>Required</sup> <a name="instance_group_name" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceGroupName"></a>

```python
instance_group_name: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `on_start_deep_health_checks`<sup>Required</sup> <a name="on_start_deep_health_checks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.onStartDeepHealthChecks"></a>

```python
on_start_deep_health_checks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `threads_per_core`<sup>Required</sup> <a name="threads_per_core" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.threadsPerCore"></a>

```python
threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `training_plan_arn`<sup>Required</sup> <a name="training_plan_arn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.trainingPlanArn"></a>

```python
training_plan_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterRestrictedInstanceGroups
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>

---


### SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference <a name="SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.resetSubnets">reset_subnets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnets` <a name="reset_subnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.resetSubnets"></a>

```python
def reset_subnets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig">SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig">SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig</a>

---


### SagemakerClusterTagsList <a name="SagemakerClusterTagsList" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerClusterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>]

---


### SagemakerClusterTagsOutputReference <a name="SagemakerClusterTagsOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>

---


### SagemakerClusterTieredStorageConfigOutputReference <a name="SagemakerClusterTieredStorageConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.resetInstanceMemoryAllocationPercentage">reset_instance_memory_allocation_percentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance_memory_allocation_percentage` <a name="reset_instance_memory_allocation_percentage" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.resetInstanceMemoryAllocationPercentage"></a>

```python
def reset_instance_memory_allocation_percentage() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.instanceMemoryAllocationPercentageInput">instance_memory_allocation_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.instanceMemoryAllocationPercentage">instance_memory_allocation_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig">SagemakerClusterTieredStorageConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_memory_allocation_percentage_input`<sup>Optional</sup> <a name="instance_memory_allocation_percentage_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.instanceMemoryAllocationPercentageInput"></a>

```python
instance_memory_allocation_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `instance_memory_allocation_percentage`<sup>Required</sup> <a name="instance_memory_allocation_percentage" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.instanceMemoryAllocationPercentage"></a>

```python
instance_memory_allocation_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterTieredStorageConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig">SagemakerClusterTieredStorageConfig</a>

---


### SagemakerClusterVpcConfigOutputReference <a name="SagemakerClusterVpcConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster

sagemakerCluster.SagemakerClusterVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.resetSubnets">reset_subnets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnets` <a name="reset_subnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.resetSubnets"></a>

```python
def reset_subnets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig">SagemakerClusterVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig">SagemakerClusterVpcConfig</a>

---



