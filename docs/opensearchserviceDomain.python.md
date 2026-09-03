# `opensearchserviceDomain` Submodule <a name="`opensearchserviceDomain` Submodule" id="@cdktn/provider-awscc.opensearchserviceDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserviceDomain <a name="OpensearchserviceDomain" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain awscc_opensearchservice_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomain(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_policies: str = None,
  advanced_options: typing.Mapping[str] = None,
  advanced_security_options: OpensearchserviceDomainAdvancedSecurityOptions = None,
  aiml_options: OpensearchserviceDomainAimlOptions = None,
  automated_snapshot_pause_options: OpensearchserviceDomainAutomatedSnapshotPauseOptions = None,
  cluster_config: OpensearchserviceDomainClusterConfig = None,
  cognito_options: OpensearchserviceDomainCognitoOptions = None,
  deployment_strategy_options: OpensearchserviceDomainDeploymentStrategyOptions = None,
  domain_endpoint_options: OpensearchserviceDomainDomainEndpointOptions = None,
  domain_name: str = None,
  ebs_options: OpensearchserviceDomainEbsOptions = None,
  encryption_at_rest_options: OpensearchserviceDomainEncryptionAtRestOptions = None,
  engine_mode: str = None,
  engine_version: str = None,
  identity_center_options: OpensearchserviceDomainIdentityCenterOptions = None,
  ip_address_type: str = None,
  log_publishing_options: IResolvable | typing.Mapping[OpensearchserviceDomainLogPublishingOptions] = None,
  node_to_node_encryption_options: OpensearchserviceDomainNodeToNodeEncryptionOptions = None,
  off_peak_window_options: OpensearchserviceDomainOffPeakWindowOptions = None,
  skip_shard_migration_wait: bool | IResolvable = None,
  snapshot_options: OpensearchserviceDomainSnapshotOptions = None,
  software_update_options: OpensearchserviceDomainSoftwareUpdateOptions = None,
  tags: IResolvable | typing.List[OpensearchserviceDomainTags] = None,
  use_case: str = None,
  vpc_options: OpensearchserviceDomainVpcOptions = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.accessPolicies">access_policies</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#access_policies OpensearchserviceDomain#access_policies}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.advancedOptions">advanced_options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#advanced_options OpensearchserviceDomain#advanced_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.advancedSecurityOptions">advanced_security_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions">OpensearchserviceDomainAdvancedSecurityOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#advanced_security_options OpensearchserviceDomain#advanced_security_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.aimlOptions">aiml_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions">OpensearchserviceDomainAimlOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#aiml_options OpensearchserviceDomain#aiml_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.automatedSnapshotPauseOptions">automated_snapshot_pause_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions">OpensearchserviceDomainAutomatedSnapshotPauseOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#automated_snapshot_pause_options OpensearchserviceDomain#automated_snapshot_pause_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.clusterConfig">cluster_config</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig">OpensearchserviceDomainClusterConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#cluster_config OpensearchserviceDomain#cluster_config}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.cognitoOptions">cognito_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions">OpensearchserviceDomainCognitoOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#cognito_options OpensearchserviceDomain#cognito_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.deploymentStrategyOptions">deployment_strategy_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions">OpensearchserviceDomainDeploymentStrategyOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#deployment_strategy_options OpensearchserviceDomain#deployment_strategy_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.domainEndpointOptions">domain_endpoint_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions">OpensearchserviceDomainDomainEndpointOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#domain_endpoint_options OpensearchserviceDomain#domain_endpoint_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#domain_name OpensearchserviceDomain#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.ebsOptions">ebs_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions">OpensearchserviceDomainEbsOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#ebs_options OpensearchserviceDomain#ebs_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.encryptionAtRestOptions">encryption_at_rest_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions">OpensearchserviceDomainEncryptionAtRestOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#encryption_at_rest_options OpensearchserviceDomain#encryption_at_rest_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.engineMode">engine_mode</a></code> | <code>str</code> | The engine mode of the domain. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#engine_version OpensearchserviceDomain#engine_version}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.identityCenterOptions">identity_center_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions">OpensearchserviceDomainIdentityCenterOptions</a></code> | Options for configuring Identity Center. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.ipAddressType">ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#ip_address_type OpensearchserviceDomain#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.logPublishingOptions">log_publishing_options</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#log_publishing_options OpensearchserviceDomain#log_publishing_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.nodeToNodeEncryptionOptions">node_to_node_encryption_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions">OpensearchserviceDomainNodeToNodeEncryptionOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#node_to_node_encryption_options OpensearchserviceDomain#node_to_node_encryption_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.offPeakWindowOptions">off_peak_window_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions">OpensearchserviceDomainOffPeakWindowOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#off_peak_window_options OpensearchserviceDomain#off_peak_window_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.skipShardMigrationWait">skip_shard_migration_wait</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#skip_shard_migration_wait OpensearchserviceDomain#skip_shard_migration_wait}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.snapshotOptions">snapshot_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions">OpensearchserviceDomainSnapshotOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#snapshot_options OpensearchserviceDomain#snapshot_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.softwareUpdateOptions">software_update_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions">OpensearchserviceDomainSoftwareUpdateOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#software_update_options OpensearchserviceDomain#software_update_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this Domain. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.useCase">use_case</a></code> | <code>str</code> | The primary use case of the domain. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.vpcOptions">vpc_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions">OpensearchserviceDomainVpcOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#vpc_options OpensearchserviceDomain#vpc_options}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_policies`<sup>Optional</sup> <a name="access_policies" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.accessPolicies"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#access_policies OpensearchserviceDomain#access_policies}.

---

##### `advanced_options`<sup>Optional</sup> <a name="advanced_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.advancedOptions"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#advanced_options OpensearchserviceDomain#advanced_options}.

---

##### `advanced_security_options`<sup>Optional</sup> <a name="advanced_security_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.advancedSecurityOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions">OpensearchserviceDomainAdvancedSecurityOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#advanced_security_options OpensearchserviceDomain#advanced_security_options}.

---

##### `aiml_options`<sup>Optional</sup> <a name="aiml_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.aimlOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions">OpensearchserviceDomainAimlOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#aiml_options OpensearchserviceDomain#aiml_options}.

---

##### `automated_snapshot_pause_options`<sup>Optional</sup> <a name="automated_snapshot_pause_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.automatedSnapshotPauseOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions">OpensearchserviceDomainAutomatedSnapshotPauseOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#automated_snapshot_pause_options OpensearchserviceDomain#automated_snapshot_pause_options}.

---

##### `cluster_config`<sup>Optional</sup> <a name="cluster_config" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.clusterConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig">OpensearchserviceDomainClusterConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#cluster_config OpensearchserviceDomain#cluster_config}.

---

##### `cognito_options`<sup>Optional</sup> <a name="cognito_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.cognitoOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions">OpensearchserviceDomainCognitoOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#cognito_options OpensearchserviceDomain#cognito_options}.

---

##### `deployment_strategy_options`<sup>Optional</sup> <a name="deployment_strategy_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.deploymentStrategyOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions">OpensearchserviceDomainDeploymentStrategyOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#deployment_strategy_options OpensearchserviceDomain#deployment_strategy_options}.

---

##### `domain_endpoint_options`<sup>Optional</sup> <a name="domain_endpoint_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.domainEndpointOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions">OpensearchserviceDomainDomainEndpointOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#domain_endpoint_options OpensearchserviceDomain#domain_endpoint_options}.

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#domain_name OpensearchserviceDomain#domain_name}.

---

##### `ebs_options`<sup>Optional</sup> <a name="ebs_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.ebsOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions">OpensearchserviceDomainEbsOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#ebs_options OpensearchserviceDomain#ebs_options}.

---

##### `encryption_at_rest_options`<sup>Optional</sup> <a name="encryption_at_rest_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.encryptionAtRestOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions">OpensearchserviceDomainEncryptionAtRestOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#encryption_at_rest_options OpensearchserviceDomain#encryption_at_rest_options}.

---

##### `engine_mode`<sup>Optional</sup> <a name="engine_mode" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.engineMode"></a>

- *Type:* str

The engine mode of the domain.

Determines whether the domain runs the standard (GENERAL) engine or the optimized multi-engine (OPTIMIZED) engine. This value cannot be changed after the domain is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#engine_mode OpensearchserviceDomain#engine_mode}

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.engineVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#engine_version OpensearchserviceDomain#engine_version}.

---

##### `identity_center_options`<sup>Optional</sup> <a name="identity_center_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.identityCenterOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions">OpensearchserviceDomainIdentityCenterOptions</a>

Options for configuring Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#identity_center_options OpensearchserviceDomain#identity_center_options}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.ipAddressType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#ip_address_type OpensearchserviceDomain#ip_address_type}.

---

##### `log_publishing_options`<sup>Optional</sup> <a name="log_publishing_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.logPublishingOptions"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#log_publishing_options OpensearchserviceDomain#log_publishing_options}.

---

##### `node_to_node_encryption_options`<sup>Optional</sup> <a name="node_to_node_encryption_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.nodeToNodeEncryptionOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions">OpensearchserviceDomainNodeToNodeEncryptionOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#node_to_node_encryption_options OpensearchserviceDomain#node_to_node_encryption_options}.

---

##### `off_peak_window_options`<sup>Optional</sup> <a name="off_peak_window_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.offPeakWindowOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions">OpensearchserviceDomainOffPeakWindowOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#off_peak_window_options OpensearchserviceDomain#off_peak_window_options}.

---

##### `skip_shard_migration_wait`<sup>Optional</sup> <a name="skip_shard_migration_wait" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.skipShardMigrationWait"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#skip_shard_migration_wait OpensearchserviceDomain#skip_shard_migration_wait}.

---

##### `snapshot_options`<sup>Optional</sup> <a name="snapshot_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.snapshotOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions">OpensearchserviceDomainSnapshotOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#snapshot_options OpensearchserviceDomain#snapshot_options}.

---

##### `software_update_options`<sup>Optional</sup> <a name="software_update_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.softwareUpdateOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions">OpensearchserviceDomainSoftwareUpdateOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#software_update_options OpensearchserviceDomain#software_update_options}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>]

An arbitrary set of tags (key-value pairs) for this Domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#tags OpensearchserviceDomain#tags}

---

##### `use_case`<sup>Optional</sup> <a name="use_case" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.useCase"></a>

- *Type:* str

The primary use case of the domain.

Determines the default configuration tuned for the workload. For GENERAL engine-mode domains, this value can be changed after creation. For OPTIMIZED engine-mode domains, this value cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#use_case OpensearchserviceDomain#use_case}

---

##### `vpc_options`<sup>Optional</sup> <a name="vpc_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.vpcOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions">OpensearchserviceDomainVpcOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#vpc_options OpensearchserviceDomain#vpc_options}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAdvancedSecurityOptions">put_advanced_security_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAimlOptions">put_aiml_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAutomatedSnapshotPauseOptions">put_automated_snapshot_pause_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putClusterConfig">put_cluster_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putCognitoOptions">put_cognito_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDeploymentStrategyOptions">put_deployment_strategy_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDomainEndpointOptions">put_domain_endpoint_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEbsOptions">put_ebs_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEncryptionAtRestOptions">put_encryption_at_rest_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putIdentityCenterOptions">put_identity_center_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putLogPublishingOptions">put_log_publishing_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putNodeToNodeEncryptionOptions">put_node_to_node_encryption_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putOffPeakWindowOptions">put_off_peak_window_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putSnapshotOptions">put_snapshot_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putSoftwareUpdateOptions">put_software_update_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putVpcOptions">put_vpc_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAccessPolicies">reset_access_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAdvancedOptions">reset_advanced_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAdvancedSecurityOptions">reset_advanced_security_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAimlOptions">reset_aiml_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAutomatedSnapshotPauseOptions">reset_automated_snapshot_pause_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetClusterConfig">reset_cluster_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetCognitoOptions">reset_cognito_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetDeploymentStrategyOptions">reset_deployment_strategy_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetDomainEndpointOptions">reset_domain_endpoint_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetDomainName">reset_domain_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEbsOptions">reset_ebs_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEncryptionAtRestOptions">reset_encryption_at_rest_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEngineMode">reset_engine_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEngineVersion">reset_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetIdentityCenterOptions">reset_identity_center_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetLogPublishingOptions">reset_log_publishing_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetNodeToNodeEncryptionOptions">reset_node_to_node_encryption_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetOffPeakWindowOptions">reset_off_peak_window_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetSkipShardMigrationWait">reset_skip_shard_migration_wait</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetSnapshotOptions">reset_snapshot_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetSoftwareUpdateOptions">reset_software_update_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetUseCase">reset_use_case</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetVpcOptions">reset_vpc_options</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_advanced_security_options` <a name="put_advanced_security_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAdvancedSecurityOptions"></a>

```python
def put_advanced_security_options(
  anonymous_auth_enabled: bool | IResolvable = None,
  enabled: bool | IResolvable = None,
  iam_federation_options: OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions = None,
  internal_user_database_enabled: bool | IResolvable = None,
  jwt_options: OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions = None,
  master_user_options: OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions = None,
  saml_options: OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions = None
) -> None
```

###### `anonymous_auth_enabled`<sup>Optional</sup> <a name="anonymous_auth_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAdvancedSecurityOptions.parameter.anonymousAuthEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#anonymous_auth_enabled OpensearchserviceDomain#anonymous_auth_enabled}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAdvancedSecurityOptions.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

###### `iam_federation_options`<sup>Optional</sup> <a name="iam_federation_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAdvancedSecurityOptions.parameter.iamFederationOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#iam_federation_options OpensearchserviceDomain#iam_federation_options}.

---

###### `internal_user_database_enabled`<sup>Optional</sup> <a name="internal_user_database_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAdvancedSecurityOptions.parameter.internalUserDatabaseEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#internal_user_database_enabled OpensearchserviceDomain#internal_user_database_enabled}.

---

###### `jwt_options`<sup>Optional</sup> <a name="jwt_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAdvancedSecurityOptions.parameter.jwtOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#jwt_options OpensearchserviceDomain#jwt_options}.

---

###### `master_user_options`<sup>Optional</sup> <a name="master_user_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAdvancedSecurityOptions.parameter.masterUserOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_user_options OpensearchserviceDomain#master_user_options}.

---

###### `saml_options`<sup>Optional</sup> <a name="saml_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAdvancedSecurityOptions.parameter.samlOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#saml_options OpensearchserviceDomain#saml_options}.

---

##### `put_aiml_options` <a name="put_aiml_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAimlOptions"></a>

```python
def put_aiml_options(
  s3_vectors_engine: OpensearchserviceDomainAimlOptionsS3VectorsEngine = None,
  serverless_vector_acceleration: OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration = None
) -> None
```

###### `s3_vectors_engine`<sup>Optional</sup> <a name="s3_vectors_engine" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAimlOptions.parameter.s3VectorsEngine"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine">OpensearchserviceDomainAimlOptionsS3VectorsEngine</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#s3_vectors_engine OpensearchserviceDomain#s3_vectors_engine}.

---

###### `serverless_vector_acceleration`<sup>Optional</sup> <a name="serverless_vector_acceleration" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAimlOptions.parameter.serverlessVectorAcceleration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#serverless_vector_acceleration OpensearchserviceDomain#serverless_vector_acceleration}.

---

##### `put_automated_snapshot_pause_options` <a name="put_automated_snapshot_pause_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAutomatedSnapshotPauseOptions"></a>

```python
def put_automated_snapshot_pause_options(
  enabled: bool | IResolvable = None,
  end_time: str = None,
  start_time: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAutomatedSnapshotPauseOptions.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

###### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAutomatedSnapshotPauseOptions.parameter.endTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#end_time OpensearchserviceDomain#end_time}.

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAutomatedSnapshotPauseOptions.parameter.startTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#start_time OpensearchserviceDomain#start_time}.

---

##### `put_cluster_config` <a name="put_cluster_config" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putClusterConfig"></a>

```python
def put_cluster_config(
  cold_storage_options: OpensearchserviceDomainClusterConfigColdStorageOptions = None,
  dedicated_master_count: typing.Union[int, float] = None,
  dedicated_master_enabled: bool | IResolvable = None,
  dedicated_master_type: str = None,
  instance_count: typing.Union[int, float] = None,
  instance_type: str = None,
  multi_az_with_standby_enabled: bool | IResolvable = None,
  node_options: IResolvable | typing.List[OpensearchserviceDomainClusterConfigNodeOptions] = None,
  warm_count: typing.Union[int, float] = None,
  warm_enabled: bool | IResolvable = None,
  warm_type: str = None,
  zone_awareness_config: OpensearchserviceDomainClusterConfigZoneAwarenessConfig = None,
  zone_awareness_enabled: bool | IResolvable = None
) -> None
```

###### `cold_storage_options`<sup>Optional</sup> <a name="cold_storage_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putClusterConfig.parameter.coldStorageOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions">OpensearchserviceDomainClusterConfigColdStorageOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#cold_storage_options OpensearchserviceDomain#cold_storage_options}.

---

###### `dedicated_master_count`<sup>Optional</sup> <a name="dedicated_master_count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putClusterConfig.parameter.dedicatedMasterCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#dedicated_master_count OpensearchserviceDomain#dedicated_master_count}.

---

###### `dedicated_master_enabled`<sup>Optional</sup> <a name="dedicated_master_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putClusterConfig.parameter.dedicatedMasterEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#dedicated_master_enabled OpensearchserviceDomain#dedicated_master_enabled}.

---

###### `dedicated_master_type`<sup>Optional</sup> <a name="dedicated_master_type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putClusterConfig.parameter.dedicatedMasterType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#dedicated_master_type OpensearchserviceDomain#dedicated_master_type}.

---

###### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putClusterConfig.parameter.instanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#instance_count OpensearchserviceDomain#instance_count}.

---

###### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putClusterConfig.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#instance_type OpensearchserviceDomain#instance_type}.

---

###### `multi_az_with_standby_enabled`<sup>Optional</sup> <a name="multi_az_with_standby_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putClusterConfig.parameter.multiAzWithStandbyEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#multi_az_with_standby_enabled OpensearchserviceDomain#multi_az_with_standby_enabled}.

---

###### `node_options`<sup>Optional</sup> <a name="node_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putClusterConfig.parameter.nodeOptions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#node_options OpensearchserviceDomain#node_options}.

---

###### `warm_count`<sup>Optional</sup> <a name="warm_count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putClusterConfig.parameter.warmCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#warm_count OpensearchserviceDomain#warm_count}.

---

###### `warm_enabled`<sup>Optional</sup> <a name="warm_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putClusterConfig.parameter.warmEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#warm_enabled OpensearchserviceDomain#warm_enabled}.

---

###### `warm_type`<sup>Optional</sup> <a name="warm_type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putClusterConfig.parameter.warmType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#warm_type OpensearchserviceDomain#warm_type}.

---

###### `zone_awareness_config`<sup>Optional</sup> <a name="zone_awareness_config" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putClusterConfig.parameter.zoneAwarenessConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig">OpensearchserviceDomainClusterConfigZoneAwarenessConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#zone_awareness_config OpensearchserviceDomain#zone_awareness_config}.

---

###### `zone_awareness_enabled`<sup>Optional</sup> <a name="zone_awareness_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putClusterConfig.parameter.zoneAwarenessEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#zone_awareness_enabled OpensearchserviceDomain#zone_awareness_enabled}.

---

##### `put_cognito_options` <a name="put_cognito_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putCognitoOptions"></a>

```python
def put_cognito_options(
  enabled: bool | IResolvable = None,
  identity_pool_id: str = None,
  role_arn: str = None,
  user_pool_id: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putCognitoOptions.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

###### `identity_pool_id`<sup>Optional</sup> <a name="identity_pool_id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putCognitoOptions.parameter.identityPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#identity_pool_id OpensearchserviceDomain#identity_pool_id}.

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putCognitoOptions.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#role_arn OpensearchserviceDomain#role_arn}.

---

###### `user_pool_id`<sup>Optional</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putCognitoOptions.parameter.userPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#user_pool_id OpensearchserviceDomain#user_pool_id}.

---

##### `put_deployment_strategy_options` <a name="put_deployment_strategy_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDeploymentStrategyOptions"></a>

```python
def put_deployment_strategy_options(
  deployment_strategy: str = None
) -> None
```

###### `deployment_strategy`<sup>Optional</sup> <a name="deployment_strategy" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDeploymentStrategyOptions.parameter.deploymentStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#deployment_strategy OpensearchserviceDomain#deployment_strategy}.

---

##### `put_domain_endpoint_options` <a name="put_domain_endpoint_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDomainEndpointOptions"></a>

```python
def put_domain_endpoint_options(
  custom_endpoint: str = None,
  custom_endpoint_certificate_arn: str = None,
  custom_endpoint_enabled: bool | IResolvable = None,
  enforce_https: bool | IResolvable = None,
  tls_security_policy: str = None
) -> None
```

###### `custom_endpoint`<sup>Optional</sup> <a name="custom_endpoint" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDomainEndpointOptions.parameter.customEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#custom_endpoint OpensearchserviceDomain#custom_endpoint}.

---

###### `custom_endpoint_certificate_arn`<sup>Optional</sup> <a name="custom_endpoint_certificate_arn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDomainEndpointOptions.parameter.customEndpointCertificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#custom_endpoint_certificate_arn OpensearchserviceDomain#custom_endpoint_certificate_arn}.

---

###### `custom_endpoint_enabled`<sup>Optional</sup> <a name="custom_endpoint_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDomainEndpointOptions.parameter.customEndpointEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#custom_endpoint_enabled OpensearchserviceDomain#custom_endpoint_enabled}.

---

###### `enforce_https`<sup>Optional</sup> <a name="enforce_https" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDomainEndpointOptions.parameter.enforceHttps"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enforce_https OpensearchserviceDomain#enforce_https}.

---

###### `tls_security_policy`<sup>Optional</sup> <a name="tls_security_policy" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDomainEndpointOptions.parameter.tlsSecurityPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#tls_security_policy OpensearchserviceDomain#tls_security_policy}.

---

##### `put_ebs_options` <a name="put_ebs_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEbsOptions"></a>

```python
def put_ebs_options(
  ebs_enabled: bool | IResolvable = None,
  iops: typing.Union[int, float] = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
) -> None
```

###### `ebs_enabled`<sup>Optional</sup> <a name="ebs_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEbsOptions.parameter.ebsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#ebs_enabled OpensearchserviceDomain#ebs_enabled}.

---

###### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEbsOptions.parameter.iops"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#iops OpensearchserviceDomain#iops}.

---

###### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEbsOptions.parameter.throughput"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#throughput OpensearchserviceDomain#throughput}.

---

###### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEbsOptions.parameter.volumeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#volume_size OpensearchserviceDomain#volume_size}.

---

###### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEbsOptions.parameter.volumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#volume_type OpensearchserviceDomain#volume_type}.

---

##### `put_encryption_at_rest_options` <a name="put_encryption_at_rest_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEncryptionAtRestOptions"></a>

```python
def put_encryption_at_rest_options(
  enabled: bool | IResolvable = None,
  kms_key_id: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEncryptionAtRestOptions.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEncryptionAtRestOptions.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#kms_key_id OpensearchserviceDomain#kms_key_id}.

---

##### `put_identity_center_options` <a name="put_identity_center_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putIdentityCenterOptions"></a>

```python
def put_identity_center_options(
  enabled_api_access: bool | IResolvable = None,
  identity_center_instance_arn: str = None,
  roles_key: str = None,
  subject_key: str = None
) -> None
```

###### `enabled_api_access`<sup>Optional</sup> <a name="enabled_api_access" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putIdentityCenterOptions.parameter.enabledApiAccess"></a>

- *Type:* bool | cdktn.IResolvable

Whether Identity Center is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled_api_access OpensearchserviceDomain#enabled_api_access}

---

###### `identity_center_instance_arn`<sup>Optional</sup> <a name="identity_center_instance_arn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putIdentityCenterOptions.parameter.identityCenterInstanceArn"></a>

- *Type:* str

The ARN of the Identity Center instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#identity_center_instance_arn OpensearchserviceDomain#identity_center_instance_arn}

---

###### `roles_key`<sup>Optional</sup> <a name="roles_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putIdentityCenterOptions.parameter.rolesKey"></a>

- *Type:* str

The roles key for Identity Center options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}

---

###### `subject_key`<sup>Optional</sup> <a name="subject_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putIdentityCenterOptions.parameter.subjectKey"></a>

- *Type:* str

The subject key for Identity Center options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}

---

##### `put_log_publishing_options` <a name="put_log_publishing_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putLogPublishingOptions"></a>

```python
def put_log_publishing_options(
  value: IResolvable | typing.Mapping[OpensearchserviceDomainLogPublishingOptions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putLogPublishingOptions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>]

---

##### `put_node_to_node_encryption_options` <a name="put_node_to_node_encryption_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putNodeToNodeEncryptionOptions"></a>

```python
def put_node_to_node_encryption_options(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putNodeToNodeEncryptionOptions.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `put_off_peak_window_options` <a name="put_off_peak_window_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putOffPeakWindowOptions"></a>

```python
def put_off_peak_window_options(
  enabled: bool | IResolvable = None,
  off_peak_window: OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putOffPeakWindowOptions.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

###### `off_peak_window`<sup>Optional</sup> <a name="off_peak_window" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putOffPeakWindowOptions.parameter.offPeakWindow"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#off_peak_window OpensearchserviceDomain#off_peak_window}.

---

##### `put_snapshot_options` <a name="put_snapshot_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putSnapshotOptions"></a>

```python
def put_snapshot_options(
  automated_snapshot_start_hour: typing.Union[int, float] = None
) -> None
```

###### `automated_snapshot_start_hour`<sup>Optional</sup> <a name="automated_snapshot_start_hour" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putSnapshotOptions.parameter.automatedSnapshotStartHour"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#automated_snapshot_start_hour OpensearchserviceDomain#automated_snapshot_start_hour}.

---

##### `put_software_update_options` <a name="put_software_update_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putSoftwareUpdateOptions"></a>

```python
def put_software_update_options(
  auto_software_update_enabled: bool | IResolvable = None,
  use_latest_service_software_for_blue_green: bool | IResolvable = None
) -> None
```

###### `auto_software_update_enabled`<sup>Optional</sup> <a name="auto_software_update_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putSoftwareUpdateOptions.parameter.autoSoftwareUpdateEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#auto_software_update_enabled OpensearchserviceDomain#auto_software_update_enabled}.

---

###### `use_latest_service_software_for_blue_green`<sup>Optional</sup> <a name="use_latest_service_software_for_blue_green" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putSoftwareUpdateOptions.parameter.useLatestServiceSoftwareForBlueGreen"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#use_latest_service_software_for_blue_green OpensearchserviceDomain#use_latest_service_software_for_blue_green}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[OpensearchserviceDomainTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>]

---

##### `put_vpc_options` <a name="put_vpc_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putVpcOptions"></a>

```python
def put_vpc_options(
  egress_enabled: bool | IResolvable = None,
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
) -> None
```

###### `egress_enabled`<sup>Optional</sup> <a name="egress_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putVpcOptions.parameter.egressEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Controls whether egress traffic from the domain is routed through the customer VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#egress_enabled OpensearchserviceDomain#egress_enabled}

---

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putVpcOptions.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#security_group_ids OpensearchserviceDomain#security_group_ids}.

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putVpcOptions.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#subnet_ids OpensearchserviceDomain#subnet_ids}.

---

##### `reset_access_policies` <a name="reset_access_policies" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAccessPolicies"></a>

```python
def reset_access_policies() -> None
```

##### `reset_advanced_options` <a name="reset_advanced_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAdvancedOptions"></a>

```python
def reset_advanced_options() -> None
```

##### `reset_advanced_security_options` <a name="reset_advanced_security_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAdvancedSecurityOptions"></a>

```python
def reset_advanced_security_options() -> None
```

##### `reset_aiml_options` <a name="reset_aiml_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAimlOptions"></a>

```python
def reset_aiml_options() -> None
```

##### `reset_automated_snapshot_pause_options` <a name="reset_automated_snapshot_pause_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAutomatedSnapshotPauseOptions"></a>

```python
def reset_automated_snapshot_pause_options() -> None
```

##### `reset_cluster_config` <a name="reset_cluster_config" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetClusterConfig"></a>

```python
def reset_cluster_config() -> None
```

##### `reset_cognito_options` <a name="reset_cognito_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetCognitoOptions"></a>

```python
def reset_cognito_options() -> None
```

##### `reset_deployment_strategy_options` <a name="reset_deployment_strategy_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetDeploymentStrategyOptions"></a>

```python
def reset_deployment_strategy_options() -> None
```

##### `reset_domain_endpoint_options` <a name="reset_domain_endpoint_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetDomainEndpointOptions"></a>

```python
def reset_domain_endpoint_options() -> None
```

##### `reset_domain_name` <a name="reset_domain_name" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetDomainName"></a>

```python
def reset_domain_name() -> None
```

##### `reset_ebs_options` <a name="reset_ebs_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEbsOptions"></a>

```python
def reset_ebs_options() -> None
```

##### `reset_encryption_at_rest_options` <a name="reset_encryption_at_rest_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEncryptionAtRestOptions"></a>

```python
def reset_encryption_at_rest_options() -> None
```

##### `reset_engine_mode` <a name="reset_engine_mode" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEngineMode"></a>

```python
def reset_engine_mode() -> None
```

##### `reset_engine_version` <a name="reset_engine_version" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEngineVersion"></a>

```python
def reset_engine_version() -> None
```

##### `reset_identity_center_options` <a name="reset_identity_center_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetIdentityCenterOptions"></a>

```python
def reset_identity_center_options() -> None
```

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_log_publishing_options` <a name="reset_log_publishing_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetLogPublishingOptions"></a>

```python
def reset_log_publishing_options() -> None
```

##### `reset_node_to_node_encryption_options` <a name="reset_node_to_node_encryption_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetNodeToNodeEncryptionOptions"></a>

```python
def reset_node_to_node_encryption_options() -> None
```

##### `reset_off_peak_window_options` <a name="reset_off_peak_window_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetOffPeakWindowOptions"></a>

```python
def reset_off_peak_window_options() -> None
```

##### `reset_skip_shard_migration_wait` <a name="reset_skip_shard_migration_wait" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetSkipShardMigrationWait"></a>

```python
def reset_skip_shard_migration_wait() -> None
```

##### `reset_snapshot_options` <a name="reset_snapshot_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetSnapshotOptions"></a>

```python
def reset_snapshot_options() -> None
```

##### `reset_software_update_options` <a name="reset_software_update_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetSoftwareUpdateOptions"></a>

```python
def reset_software_update_options() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_use_case` <a name="reset_use_case" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetUseCase"></a>

```python
def reset_use_case() -> None
```

##### `reset_vpc_options` <a name="reset_vpc_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetVpcOptions"></a>

```python
def reset_vpc_options() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OpensearchserviceDomain resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isConstruct"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isTerraformElement"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isTerraformResource"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomain.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomain.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OpensearchserviceDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OpensearchserviceDomain to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OpensearchserviceDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchserviceDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedSecurityOptions">advanced_security_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.aimlOptions">aiml_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference">OpensearchserviceDomainAimlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.automatedSnapshotPauseOptions">automated_snapshot_pause_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference">OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.clusterConfig">cluster_config</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference">OpensearchserviceDomainClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.cognitoOptions">cognito_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference">OpensearchserviceDomainCognitoOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.deploymentStrategyOptions">deployment_strategy_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference">OpensearchserviceDomainDeploymentStrategyOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainArn">domain_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpoint">domain_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpointOptions">domain_endpoint_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference">OpensearchserviceDomainDomainEndpointOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpoints">domain_endpoints</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpointV2">domain_endpoint_v2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ebsOptions">ebs_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference">OpensearchserviceDomainEbsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.encryptionAtRestOptions">encryption_at_rest_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference">OpensearchserviceDomainEncryptionAtRestOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.identityCenterOptions">identity_center_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference">OpensearchserviceDomainIdentityCenterOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.logPublishingOptions">log_publishing_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap">OpensearchserviceDomainLogPublishingOptionsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.nodeToNodeEncryptionOptions">node_to_node_encryption_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference">OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.offPeakWindowOptions">off_peak_window_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference">OpensearchserviceDomainOffPeakWindowOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.serviceSoftwareOptions">service_software_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference">OpensearchserviceDomainServiceSoftwareOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.snapshotOptions">snapshot_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference">OpensearchserviceDomainSnapshotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.softwareUpdateOptions">software_update_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference">OpensearchserviceDomainSoftwareUpdateOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList">OpensearchserviceDomainTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.vpcOptions">vpc_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference">OpensearchserviceDomainVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.accessPoliciesInput">access_policies_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedOptionsInput">advanced_options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedSecurityOptionsInput">advanced_security_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions">OpensearchserviceDomainAdvancedSecurityOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.aimlOptionsInput">aiml_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions">OpensearchserviceDomainAimlOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.automatedSnapshotPauseOptionsInput">automated_snapshot_pause_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions">OpensearchserviceDomainAutomatedSnapshotPauseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.clusterConfigInput">cluster_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig">OpensearchserviceDomainClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.cognitoOptionsInput">cognito_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions">OpensearchserviceDomainCognitoOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.deploymentStrategyOptionsInput">deployment_strategy_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions">OpensearchserviceDomainDeploymentStrategyOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpointOptionsInput">domain_endpoint_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions">OpensearchserviceDomainDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ebsOptionsInput">ebs_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions">OpensearchserviceDomainEbsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.encryptionAtRestOptionsInput">encryption_at_rest_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions">OpensearchserviceDomainEncryptionAtRestOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineModeInput">engine_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.identityCenterOptionsInput">identity_center_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions">OpensearchserviceDomainIdentityCenterOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.logPublishingOptionsInput">log_publishing_options_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.nodeToNodeEncryptionOptionsInput">node_to_node_encryption_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions">OpensearchserviceDomainNodeToNodeEncryptionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.offPeakWindowOptionsInput">off_peak_window_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions">OpensearchserviceDomainOffPeakWindowOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.skipShardMigrationWaitInput">skip_shard_migration_wait_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.snapshotOptionsInput">snapshot_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions">OpensearchserviceDomainSnapshotOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.softwareUpdateOptionsInput">software_update_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions">OpensearchserviceDomainSoftwareUpdateOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.useCaseInput">use_case_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.vpcOptionsInput">vpc_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions">OpensearchserviceDomainVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.accessPolicies">access_policies</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedOptions">advanced_options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineMode">engine_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.skipShardMigrationWait">skip_shard_migration_wait</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.useCase">use_case</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `advanced_security_options`<sup>Required</sup> <a name="advanced_security_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedSecurityOptions"></a>

```python
advanced_security_options: OpensearchserviceDomainAdvancedSecurityOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsOutputReference</a>

---

##### `aiml_options`<sup>Required</sup> <a name="aiml_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.aimlOptions"></a>

```python
aiml_options: OpensearchserviceDomainAimlOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference">OpensearchserviceDomainAimlOptionsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `automated_snapshot_pause_options`<sup>Required</sup> <a name="automated_snapshot_pause_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.automatedSnapshotPauseOptions"></a>

```python
automated_snapshot_pause_options: OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference">OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference</a>

---

##### `cluster_config`<sup>Required</sup> <a name="cluster_config" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.clusterConfig"></a>

```python
cluster_config: OpensearchserviceDomainClusterConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference">OpensearchserviceDomainClusterConfigOutputReference</a>

---

##### `cognito_options`<sup>Required</sup> <a name="cognito_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.cognitoOptions"></a>

```python
cognito_options: OpensearchserviceDomainCognitoOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference">OpensearchserviceDomainCognitoOptionsOutputReference</a>

---

##### `deployment_strategy_options`<sup>Required</sup> <a name="deployment_strategy_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.deploymentStrategyOptions"></a>

```python
deployment_strategy_options: OpensearchserviceDomainDeploymentStrategyOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference">OpensearchserviceDomainDeploymentStrategyOptionsOutputReference</a>

---

##### `domain_arn`<sup>Required</sup> <a name="domain_arn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainArn"></a>

```python
domain_arn: str
```

- *Type:* str

---

##### `domain_endpoint`<sup>Required</sup> <a name="domain_endpoint" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpoint"></a>

```python
domain_endpoint: str
```

- *Type:* str

---

##### `domain_endpoint_options`<sup>Required</sup> <a name="domain_endpoint_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpointOptions"></a>

```python
domain_endpoint_options: OpensearchserviceDomainDomainEndpointOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference">OpensearchserviceDomainDomainEndpointOptionsOutputReference</a>

---

##### `domain_endpoints`<sup>Required</sup> <a name="domain_endpoints" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpoints"></a>

```python
domain_endpoints: StringMap
```

- *Type:* cdktn.StringMap

---

##### `domain_endpoint_v2`<sup>Required</sup> <a name="domain_endpoint_v2" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpointV2"></a>

```python
domain_endpoint_v2: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `ebs_options`<sup>Required</sup> <a name="ebs_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ebsOptions"></a>

```python
ebs_options: OpensearchserviceDomainEbsOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference">OpensearchserviceDomainEbsOptionsOutputReference</a>

---

##### `encryption_at_rest_options`<sup>Required</sup> <a name="encryption_at_rest_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.encryptionAtRestOptions"></a>

```python
encryption_at_rest_options: OpensearchserviceDomainEncryptionAtRestOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference">OpensearchserviceDomainEncryptionAtRestOptionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_center_options`<sup>Required</sup> <a name="identity_center_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.identityCenterOptions"></a>

```python
identity_center_options: OpensearchserviceDomainIdentityCenterOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference">OpensearchserviceDomainIdentityCenterOptionsOutputReference</a>

---

##### `log_publishing_options`<sup>Required</sup> <a name="log_publishing_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.logPublishingOptions"></a>

```python
log_publishing_options: OpensearchserviceDomainLogPublishingOptionsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap">OpensearchserviceDomainLogPublishingOptionsMap</a>

---

##### `node_to_node_encryption_options`<sup>Required</sup> <a name="node_to_node_encryption_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.nodeToNodeEncryptionOptions"></a>

```python
node_to_node_encryption_options: OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference">OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference</a>

---

##### `off_peak_window_options`<sup>Required</sup> <a name="off_peak_window_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.offPeakWindowOptions"></a>

```python
off_peak_window_options: OpensearchserviceDomainOffPeakWindowOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference">OpensearchserviceDomainOffPeakWindowOptionsOutputReference</a>

---

##### `service_software_options`<sup>Required</sup> <a name="service_software_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.serviceSoftwareOptions"></a>

```python
service_software_options: OpensearchserviceDomainServiceSoftwareOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference">OpensearchserviceDomainServiceSoftwareOptionsOutputReference</a>

---

##### `snapshot_options`<sup>Required</sup> <a name="snapshot_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.snapshotOptions"></a>

```python
snapshot_options: OpensearchserviceDomainSnapshotOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference">OpensearchserviceDomainSnapshotOptionsOutputReference</a>

---

##### `software_update_options`<sup>Required</sup> <a name="software_update_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.softwareUpdateOptions"></a>

```python
software_update_options: OpensearchserviceDomainSoftwareUpdateOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference">OpensearchserviceDomainSoftwareUpdateOptionsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.tags"></a>

```python
tags: OpensearchserviceDomainTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList">OpensearchserviceDomainTagsList</a>

---

##### `vpc_options`<sup>Required</sup> <a name="vpc_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.vpcOptions"></a>

```python
vpc_options: OpensearchserviceDomainVpcOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference">OpensearchserviceDomainVpcOptionsOutputReference</a>

---

##### `access_policies_input`<sup>Optional</sup> <a name="access_policies_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.accessPoliciesInput"></a>

```python
access_policies_input: str
```

- *Type:* str

---

##### `advanced_options_input`<sup>Optional</sup> <a name="advanced_options_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedOptionsInput"></a>

```python
advanced_options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `advanced_security_options_input`<sup>Optional</sup> <a name="advanced_security_options_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedSecurityOptionsInput"></a>

```python
advanced_security_options_input: IResolvable | OpensearchserviceDomainAdvancedSecurityOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions">OpensearchserviceDomainAdvancedSecurityOptions</a>

---

##### `aiml_options_input`<sup>Optional</sup> <a name="aiml_options_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.aimlOptionsInput"></a>

```python
aiml_options_input: IResolvable | OpensearchserviceDomainAimlOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions">OpensearchserviceDomainAimlOptions</a>

---

##### `automated_snapshot_pause_options_input`<sup>Optional</sup> <a name="automated_snapshot_pause_options_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.automatedSnapshotPauseOptionsInput"></a>

```python
automated_snapshot_pause_options_input: IResolvable | OpensearchserviceDomainAutomatedSnapshotPauseOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions">OpensearchserviceDomainAutomatedSnapshotPauseOptions</a>

---

##### `cluster_config_input`<sup>Optional</sup> <a name="cluster_config_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.clusterConfigInput"></a>

```python
cluster_config_input: IResolvable | OpensearchserviceDomainClusterConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig">OpensearchserviceDomainClusterConfig</a>

---

##### `cognito_options_input`<sup>Optional</sup> <a name="cognito_options_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.cognitoOptionsInput"></a>

```python
cognito_options_input: IResolvable | OpensearchserviceDomainCognitoOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions">OpensearchserviceDomainCognitoOptions</a>

---

##### `deployment_strategy_options_input`<sup>Optional</sup> <a name="deployment_strategy_options_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.deploymentStrategyOptionsInput"></a>

```python
deployment_strategy_options_input: IResolvable | OpensearchserviceDomainDeploymentStrategyOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions">OpensearchserviceDomainDeploymentStrategyOptions</a>

---

##### `domain_endpoint_options_input`<sup>Optional</sup> <a name="domain_endpoint_options_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpointOptionsInput"></a>

```python
domain_endpoint_options_input: IResolvable | OpensearchserviceDomainDomainEndpointOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions">OpensearchserviceDomainDomainEndpointOptions</a>

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `ebs_options_input`<sup>Optional</sup> <a name="ebs_options_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ebsOptionsInput"></a>

```python
ebs_options_input: IResolvable | OpensearchserviceDomainEbsOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions">OpensearchserviceDomainEbsOptions</a>

---

##### `encryption_at_rest_options_input`<sup>Optional</sup> <a name="encryption_at_rest_options_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.encryptionAtRestOptionsInput"></a>

```python
encryption_at_rest_options_input: IResolvable | OpensearchserviceDomainEncryptionAtRestOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions">OpensearchserviceDomainEncryptionAtRestOptions</a>

---

##### `engine_mode_input`<sup>Optional</sup> <a name="engine_mode_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineModeInput"></a>

```python
engine_mode_input: str
```

- *Type:* str

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `identity_center_options_input`<sup>Optional</sup> <a name="identity_center_options_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.identityCenterOptionsInput"></a>

```python
identity_center_options_input: IResolvable | OpensearchserviceDomainIdentityCenterOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions">OpensearchserviceDomainIdentityCenterOptions</a>

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `log_publishing_options_input`<sup>Optional</sup> <a name="log_publishing_options_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.logPublishingOptionsInput"></a>

```python
log_publishing_options_input: IResolvable | typing.Mapping[OpensearchserviceDomainLogPublishingOptions]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>]

---

##### `node_to_node_encryption_options_input`<sup>Optional</sup> <a name="node_to_node_encryption_options_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.nodeToNodeEncryptionOptionsInput"></a>

```python
node_to_node_encryption_options_input: IResolvable | OpensearchserviceDomainNodeToNodeEncryptionOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions">OpensearchserviceDomainNodeToNodeEncryptionOptions</a>

---

##### `off_peak_window_options_input`<sup>Optional</sup> <a name="off_peak_window_options_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.offPeakWindowOptionsInput"></a>

```python
off_peak_window_options_input: IResolvable | OpensearchserviceDomainOffPeakWindowOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions">OpensearchserviceDomainOffPeakWindowOptions</a>

---

##### `skip_shard_migration_wait_input`<sup>Optional</sup> <a name="skip_shard_migration_wait_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.skipShardMigrationWaitInput"></a>

```python
skip_shard_migration_wait_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `snapshot_options_input`<sup>Optional</sup> <a name="snapshot_options_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.snapshotOptionsInput"></a>

```python
snapshot_options_input: IResolvable | OpensearchserviceDomainSnapshotOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions">OpensearchserviceDomainSnapshotOptions</a>

---

##### `software_update_options_input`<sup>Optional</sup> <a name="software_update_options_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.softwareUpdateOptionsInput"></a>

```python
software_update_options_input: IResolvable | OpensearchserviceDomainSoftwareUpdateOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions">OpensearchserviceDomainSoftwareUpdateOptions</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[OpensearchserviceDomainTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>]

---

##### `use_case_input`<sup>Optional</sup> <a name="use_case_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.useCaseInput"></a>

```python
use_case_input: str
```

- *Type:* str

---

##### `vpc_options_input`<sup>Optional</sup> <a name="vpc_options_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.vpcOptionsInput"></a>

```python
vpc_options_input: IResolvable | OpensearchserviceDomainVpcOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions">OpensearchserviceDomainVpcOptions</a>

---

##### `access_policies`<sup>Required</sup> <a name="access_policies" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.accessPolicies"></a>

```python
access_policies: str
```

- *Type:* str

---

##### `advanced_options`<sup>Required</sup> <a name="advanced_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedOptions"></a>

```python
advanced_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `engine_mode`<sup>Required</sup> <a name="engine_mode" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineMode"></a>

```python
engine_mode: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `skip_shard_migration_wait`<sup>Required</sup> <a name="skip_shard_migration_wait" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.skipShardMigrationWait"></a>

```python
skip_shard_migration_wait: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `use_case`<sup>Required</sup> <a name="use_case" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.useCase"></a>

```python
use_case: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserviceDomainAdvancedSecurityOptions <a name="OpensearchserviceDomainAdvancedSecurityOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions(
  anonymous_auth_enabled: bool | IResolvable = None,
  enabled: bool | IResolvable = None,
  iam_federation_options: OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions = None,
  internal_user_database_enabled: bool | IResolvable = None,
  jwt_options: OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions = None,
  master_user_options: OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions = None,
  saml_options: OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.anonymousAuthEnabled">anonymous_auth_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#anonymous_auth_enabled OpensearchserviceDomain#anonymous_auth_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.iamFederationOptions">iam_federation_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#iam_federation_options OpensearchserviceDomain#iam_federation_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.internalUserDatabaseEnabled">internal_user_database_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#internal_user_database_enabled OpensearchserviceDomain#internal_user_database_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.jwtOptions">jwt_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#jwt_options OpensearchserviceDomain#jwt_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.masterUserOptions">master_user_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_user_options OpensearchserviceDomain#master_user_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.samlOptions">saml_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#saml_options OpensearchserviceDomain#saml_options}. |

---

##### `anonymous_auth_enabled`<sup>Optional</sup> <a name="anonymous_auth_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.anonymousAuthEnabled"></a>

```python
anonymous_auth_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#anonymous_auth_enabled OpensearchserviceDomain#anonymous_auth_enabled}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `iam_federation_options`<sup>Optional</sup> <a name="iam_federation_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.iamFederationOptions"></a>

```python
iam_federation_options: OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#iam_federation_options OpensearchserviceDomain#iam_federation_options}.

---

##### `internal_user_database_enabled`<sup>Optional</sup> <a name="internal_user_database_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.internalUserDatabaseEnabled"></a>

```python
internal_user_database_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#internal_user_database_enabled OpensearchserviceDomain#internal_user_database_enabled}.

---

##### `jwt_options`<sup>Optional</sup> <a name="jwt_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.jwtOptions"></a>

```python
jwt_options: OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#jwt_options OpensearchserviceDomain#jwt_options}.

---

##### `master_user_options`<sup>Optional</sup> <a name="master_user_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.masterUserOptions"></a>

```python
master_user_options: OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_user_options OpensearchserviceDomain#master_user_options}.

---

##### `saml_options`<sup>Optional</sup> <a name="saml_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.samlOptions"></a>

```python
saml_options: OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#saml_options OpensearchserviceDomain#saml_options}.

---

### OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions <a name="OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions(
  enabled: bool | IResolvable = None,
  roles_key: str = None,
  subject_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.property.rolesKey">roles_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.property.subjectKey">subject_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `roles_key`<sup>Optional</sup> <a name="roles_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.property.rolesKey"></a>

```python
roles_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}.

---

##### `subject_key`<sup>Optional</sup> <a name="subject_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.property.subjectKey"></a>

```python
subject_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}.

---

### OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions <a name="OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions(
  enabled: bool | IResolvable = None,
  public_key: str = None,
  roles_key: str = None,
  subject_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.publicKey">public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#public_key OpensearchserviceDomain#public_key}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.rolesKey">roles_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.subjectKey">subject_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `public_key`<sup>Optional</sup> <a name="public_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#public_key OpensearchserviceDomain#public_key}.

---

##### `roles_key`<sup>Optional</sup> <a name="roles_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.rolesKey"></a>

```python
roles_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}.

---

##### `subject_key`<sup>Optional</sup> <a name="subject_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.subjectKey"></a>

```python
subject_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}.

---

### OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions <a name="OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions(
  master_user_arn: str = None,
  master_user_name: str = None,
  master_user_password: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserArn">master_user_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_user_arn OpensearchserviceDomain#master_user_arn}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserName">master_user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_user_name OpensearchserviceDomain#master_user_name}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserPassword">master_user_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_user_password OpensearchserviceDomain#master_user_password}. |

---

##### `master_user_arn`<sup>Optional</sup> <a name="master_user_arn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserArn"></a>

```python
master_user_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_user_arn OpensearchserviceDomain#master_user_arn}.

---

##### `master_user_name`<sup>Optional</sup> <a name="master_user_name" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserName"></a>

```python
master_user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_user_name OpensearchserviceDomain#master_user_name}.

---

##### `master_user_password`<sup>Optional</sup> <a name="master_user_password" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserPassword"></a>

```python
master_user_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_user_password OpensearchserviceDomain#master_user_password}.

---

### OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions <a name="OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions(
  enabled: bool | IResolvable = None,
  idp: OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp = None,
  master_backend_role: str = None,
  master_user_name: str = None,
  roles_key: str = None,
  session_timeout_minutes: typing.Union[int, float] = None,
  subject_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.idp">idp</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#idp OpensearchserviceDomain#idp}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.masterBackendRole">master_backend_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_backend_role OpensearchserviceDomain#master_backend_role}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.masterUserName">master_user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_user_name OpensearchserviceDomain#master_user_name}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.rolesKey">roles_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.sessionTimeoutMinutes">session_timeout_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#session_timeout_minutes OpensearchserviceDomain#session_timeout_minutes}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.subjectKey">subject_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `idp`<sup>Optional</sup> <a name="idp" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.idp"></a>

```python
idp: OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#idp OpensearchserviceDomain#idp}.

---

##### `master_backend_role`<sup>Optional</sup> <a name="master_backend_role" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.masterBackendRole"></a>

```python
master_backend_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_backend_role OpensearchserviceDomain#master_backend_role}.

---

##### `master_user_name`<sup>Optional</sup> <a name="master_user_name" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.masterUserName"></a>

```python
master_user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_user_name OpensearchserviceDomain#master_user_name}.

---

##### `roles_key`<sup>Optional</sup> <a name="roles_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.rolesKey"></a>

```python
roles_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}.

---

##### `session_timeout_minutes`<sup>Optional</sup> <a name="session_timeout_minutes" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.sessionTimeoutMinutes"></a>

```python
session_timeout_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#session_timeout_minutes OpensearchserviceDomain#session_timeout_minutes}.

---

##### `subject_key`<sup>Optional</sup> <a name="subject_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.subjectKey"></a>

```python
subject_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}.

---

### OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp <a name="OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp(
  entity_id: str = None,
  metadata_content: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp.property.entityId">entity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#entity_id OpensearchserviceDomain#entity_id}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp.property.metadataContent">metadata_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#metadata_content OpensearchserviceDomain#metadata_content}. |

---

##### `entity_id`<sup>Optional</sup> <a name="entity_id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#entity_id OpensearchserviceDomain#entity_id}.

---

##### `metadata_content`<sup>Optional</sup> <a name="metadata_content" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp.property.metadataContent"></a>

```python
metadata_content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#metadata_content OpensearchserviceDomain#metadata_content}.

---

### OpensearchserviceDomainAimlOptions <a name="OpensearchserviceDomainAimlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainAimlOptions(
  s3_vectors_engine: OpensearchserviceDomainAimlOptionsS3VectorsEngine = None,
  serverless_vector_acceleration: OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions.property.s3VectorsEngine">s3_vectors_engine</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine">OpensearchserviceDomainAimlOptionsS3VectorsEngine</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#s3_vectors_engine OpensearchserviceDomain#s3_vectors_engine}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions.property.serverlessVectorAcceleration">serverless_vector_acceleration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#serverless_vector_acceleration OpensearchserviceDomain#serverless_vector_acceleration}. |

---

##### `s3_vectors_engine`<sup>Optional</sup> <a name="s3_vectors_engine" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions.property.s3VectorsEngine"></a>

```python
s3_vectors_engine: OpensearchserviceDomainAimlOptionsS3VectorsEngine
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine">OpensearchserviceDomainAimlOptionsS3VectorsEngine</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#s3_vectors_engine OpensearchserviceDomain#s3_vectors_engine}.

---

##### `serverless_vector_acceleration`<sup>Optional</sup> <a name="serverless_vector_acceleration" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions.property.serverlessVectorAcceleration"></a>

```python
serverless_vector_acceleration: OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#serverless_vector_acceleration OpensearchserviceDomain#serverless_vector_acceleration}.

---

### OpensearchserviceDomainAimlOptionsS3VectorsEngine <a name="OpensearchserviceDomainAimlOptionsS3VectorsEngine" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable S3 vectors engine. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable S3 vectors engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}

---

### OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration <a name="OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable serverless vector acceleration. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable serverless vector acceleration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}

---

### OpensearchserviceDomainAutomatedSnapshotPauseOptions <a name="OpensearchserviceDomainAutomatedSnapshotPauseOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions(
  enabled: bool | IResolvable = None,
  end_time: str = None,
  start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.property.endTime">end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#end_time OpensearchserviceDomain#end_time}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.property.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#start_time OpensearchserviceDomain#start_time}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#end_time OpensearchserviceDomain#end_time}.

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#start_time OpensearchserviceDomain#start_time}.

---

### OpensearchserviceDomainClusterConfig <a name="OpensearchserviceDomainClusterConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainClusterConfig(
  cold_storage_options: OpensearchserviceDomainClusterConfigColdStorageOptions = None,
  dedicated_master_count: typing.Union[int, float] = None,
  dedicated_master_enabled: bool | IResolvable = None,
  dedicated_master_type: str = None,
  instance_count: typing.Union[int, float] = None,
  instance_type: str = None,
  multi_az_with_standby_enabled: bool | IResolvable = None,
  node_options: IResolvable | typing.List[OpensearchserviceDomainClusterConfigNodeOptions] = None,
  warm_count: typing.Union[int, float] = None,
  warm_enabled: bool | IResolvable = None,
  warm_type: str = None,
  zone_awareness_config: OpensearchserviceDomainClusterConfigZoneAwarenessConfig = None,
  zone_awareness_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.coldStorageOptions">cold_storage_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions">OpensearchserviceDomainClusterConfigColdStorageOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#cold_storage_options OpensearchserviceDomain#cold_storage_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.dedicatedMasterCount">dedicated_master_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#dedicated_master_count OpensearchserviceDomain#dedicated_master_count}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.dedicatedMasterEnabled">dedicated_master_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#dedicated_master_enabled OpensearchserviceDomain#dedicated_master_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.dedicatedMasterType">dedicated_master_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#dedicated_master_type OpensearchserviceDomain#dedicated_master_type}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#instance_count OpensearchserviceDomain#instance_count}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#instance_type OpensearchserviceDomain#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.multiAzWithStandbyEnabled">multi_az_with_standby_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#multi_az_with_standby_enabled OpensearchserviceDomain#multi_az_with_standby_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.nodeOptions">node_options</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#node_options OpensearchserviceDomain#node_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.warmCount">warm_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#warm_count OpensearchserviceDomain#warm_count}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.warmEnabled">warm_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#warm_enabled OpensearchserviceDomain#warm_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.warmType">warm_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#warm_type OpensearchserviceDomain#warm_type}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.zoneAwarenessConfig">zone_awareness_config</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig">OpensearchserviceDomainClusterConfigZoneAwarenessConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#zone_awareness_config OpensearchserviceDomain#zone_awareness_config}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.zoneAwarenessEnabled">zone_awareness_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#zone_awareness_enabled OpensearchserviceDomain#zone_awareness_enabled}. |

---

##### `cold_storage_options`<sup>Optional</sup> <a name="cold_storage_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.coldStorageOptions"></a>

```python
cold_storage_options: OpensearchserviceDomainClusterConfigColdStorageOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions">OpensearchserviceDomainClusterConfigColdStorageOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#cold_storage_options OpensearchserviceDomain#cold_storage_options}.

---

##### `dedicated_master_count`<sup>Optional</sup> <a name="dedicated_master_count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.dedicatedMasterCount"></a>

```python
dedicated_master_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#dedicated_master_count OpensearchserviceDomain#dedicated_master_count}.

---

##### `dedicated_master_enabled`<sup>Optional</sup> <a name="dedicated_master_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.dedicatedMasterEnabled"></a>

```python
dedicated_master_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#dedicated_master_enabled OpensearchserviceDomain#dedicated_master_enabled}.

---

##### `dedicated_master_type`<sup>Optional</sup> <a name="dedicated_master_type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.dedicatedMasterType"></a>

```python
dedicated_master_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#dedicated_master_type OpensearchserviceDomain#dedicated_master_type}.

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#instance_count OpensearchserviceDomain#instance_count}.

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#instance_type OpensearchserviceDomain#instance_type}.

---

##### `multi_az_with_standby_enabled`<sup>Optional</sup> <a name="multi_az_with_standby_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.multiAzWithStandbyEnabled"></a>

```python
multi_az_with_standby_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#multi_az_with_standby_enabled OpensearchserviceDomain#multi_az_with_standby_enabled}.

---

##### `node_options`<sup>Optional</sup> <a name="node_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.nodeOptions"></a>

```python
node_options: IResolvable | typing.List[OpensearchserviceDomainClusterConfigNodeOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#node_options OpensearchserviceDomain#node_options}.

---

##### `warm_count`<sup>Optional</sup> <a name="warm_count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.warmCount"></a>

```python
warm_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#warm_count OpensearchserviceDomain#warm_count}.

---

##### `warm_enabled`<sup>Optional</sup> <a name="warm_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.warmEnabled"></a>

```python
warm_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#warm_enabled OpensearchserviceDomain#warm_enabled}.

---

##### `warm_type`<sup>Optional</sup> <a name="warm_type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.warmType"></a>

```python
warm_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#warm_type OpensearchserviceDomain#warm_type}.

---

##### `zone_awareness_config`<sup>Optional</sup> <a name="zone_awareness_config" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.zoneAwarenessConfig"></a>

```python
zone_awareness_config: OpensearchserviceDomainClusterConfigZoneAwarenessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig">OpensearchserviceDomainClusterConfigZoneAwarenessConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#zone_awareness_config OpensearchserviceDomain#zone_awareness_config}.

---

##### `zone_awareness_enabled`<sup>Optional</sup> <a name="zone_awareness_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.zoneAwarenessEnabled"></a>

```python
zone_awareness_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#zone_awareness_enabled OpensearchserviceDomain#zone_awareness_enabled}.

---

### OpensearchserviceDomainClusterConfigColdStorageOptions <a name="OpensearchserviceDomainClusterConfigColdStorageOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

### OpensearchserviceDomainClusterConfigNodeOptions <a name="OpensearchserviceDomainClusterConfigNodeOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions(
  node_config: OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig = None,
  node_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions.property.nodeConfig">node_config</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#node_config OpensearchserviceDomain#node_config}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions.property.nodeType">node_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#node_type OpensearchserviceDomain#node_type}. |

---

##### `node_config`<sup>Optional</sup> <a name="node_config" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions.property.nodeConfig"></a>

```python
node_config: OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#node_config OpensearchserviceDomain#node_config}.

---

##### `node_type`<sup>Optional</sup> <a name="node_type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#node_type OpensearchserviceDomain#node_type}.

---

### OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig <a name="OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig(
  count: typing.Union[int, float] = None,
  enabled: bool | IResolvable = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#count OpensearchserviceDomain#count}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#type OpensearchserviceDomain#type}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#count OpensearchserviceDomain#count}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#type OpensearchserviceDomain#type}.

---

### OpensearchserviceDomainClusterConfigZoneAwarenessConfig <a name="OpensearchserviceDomainClusterConfigZoneAwarenessConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig(
  availability_zone_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig.property.availabilityZoneCount">availability_zone_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#availability_zone_count OpensearchserviceDomain#availability_zone_count}. |

---

##### `availability_zone_count`<sup>Optional</sup> <a name="availability_zone_count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig.property.availabilityZoneCount"></a>

```python
availability_zone_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#availability_zone_count OpensearchserviceDomain#availability_zone_count}.

---

### OpensearchserviceDomainCognitoOptions <a name="OpensearchserviceDomainCognitoOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainCognitoOptions(
  enabled: bool | IResolvable = None,
  identity_pool_id: str = None,
  role_arn: str = None,
  user_pool_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.identityPoolId">identity_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#identity_pool_id OpensearchserviceDomain#identity_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#role_arn OpensearchserviceDomain#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.userPoolId">user_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#user_pool_id OpensearchserviceDomain#user_pool_id}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `identity_pool_id`<sup>Optional</sup> <a name="identity_pool_id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.identityPoolId"></a>

```python
identity_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#identity_pool_id OpensearchserviceDomain#identity_pool_id}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#role_arn OpensearchserviceDomain#role_arn}.

---

##### `user_pool_id`<sup>Optional</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#user_pool_id OpensearchserviceDomain#user_pool_id}.

---

### OpensearchserviceDomainConfig <a name="OpensearchserviceDomainConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_policies: str = None,
  advanced_options: typing.Mapping[str] = None,
  advanced_security_options: OpensearchserviceDomainAdvancedSecurityOptions = None,
  aiml_options: OpensearchserviceDomainAimlOptions = None,
  automated_snapshot_pause_options: OpensearchserviceDomainAutomatedSnapshotPauseOptions = None,
  cluster_config: OpensearchserviceDomainClusterConfig = None,
  cognito_options: OpensearchserviceDomainCognitoOptions = None,
  deployment_strategy_options: OpensearchserviceDomainDeploymentStrategyOptions = None,
  domain_endpoint_options: OpensearchserviceDomainDomainEndpointOptions = None,
  domain_name: str = None,
  ebs_options: OpensearchserviceDomainEbsOptions = None,
  encryption_at_rest_options: OpensearchserviceDomainEncryptionAtRestOptions = None,
  engine_mode: str = None,
  engine_version: str = None,
  identity_center_options: OpensearchserviceDomainIdentityCenterOptions = None,
  ip_address_type: str = None,
  log_publishing_options: IResolvable | typing.Mapping[OpensearchserviceDomainLogPublishingOptions] = None,
  node_to_node_encryption_options: OpensearchserviceDomainNodeToNodeEncryptionOptions = None,
  off_peak_window_options: OpensearchserviceDomainOffPeakWindowOptions = None,
  skip_shard_migration_wait: bool | IResolvable = None,
  snapshot_options: OpensearchserviceDomainSnapshotOptions = None,
  software_update_options: OpensearchserviceDomainSoftwareUpdateOptions = None,
  tags: IResolvable | typing.List[OpensearchserviceDomainTags] = None,
  use_case: str = None,
  vpc_options: OpensearchserviceDomainVpcOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.accessPolicies">access_policies</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#access_policies OpensearchserviceDomain#access_policies}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.advancedOptions">advanced_options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#advanced_options OpensearchserviceDomain#advanced_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.advancedSecurityOptions">advanced_security_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions">OpensearchserviceDomainAdvancedSecurityOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#advanced_security_options OpensearchserviceDomain#advanced_security_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.aimlOptions">aiml_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions">OpensearchserviceDomainAimlOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#aiml_options OpensearchserviceDomain#aiml_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.automatedSnapshotPauseOptions">automated_snapshot_pause_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions">OpensearchserviceDomainAutomatedSnapshotPauseOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#automated_snapshot_pause_options OpensearchserviceDomain#automated_snapshot_pause_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.clusterConfig">cluster_config</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig">OpensearchserviceDomainClusterConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#cluster_config OpensearchserviceDomain#cluster_config}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.cognitoOptions">cognito_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions">OpensearchserviceDomainCognitoOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#cognito_options OpensearchserviceDomain#cognito_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.deploymentStrategyOptions">deployment_strategy_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions">OpensearchserviceDomainDeploymentStrategyOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#deployment_strategy_options OpensearchserviceDomain#deployment_strategy_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.domainEndpointOptions">domain_endpoint_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions">OpensearchserviceDomainDomainEndpointOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#domain_endpoint_options OpensearchserviceDomain#domain_endpoint_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#domain_name OpensearchserviceDomain#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.ebsOptions">ebs_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions">OpensearchserviceDomainEbsOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#ebs_options OpensearchserviceDomain#ebs_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.encryptionAtRestOptions">encryption_at_rest_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions">OpensearchserviceDomainEncryptionAtRestOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#encryption_at_rest_options OpensearchserviceDomain#encryption_at_rest_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.engineMode">engine_mode</a></code> | <code>str</code> | The engine mode of the domain. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#engine_version OpensearchserviceDomain#engine_version}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.identityCenterOptions">identity_center_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions">OpensearchserviceDomainIdentityCenterOptions</a></code> | Options for configuring Identity Center. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#ip_address_type OpensearchserviceDomain#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.logPublishingOptions">log_publishing_options</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#log_publishing_options OpensearchserviceDomain#log_publishing_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.nodeToNodeEncryptionOptions">node_to_node_encryption_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions">OpensearchserviceDomainNodeToNodeEncryptionOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#node_to_node_encryption_options OpensearchserviceDomain#node_to_node_encryption_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.offPeakWindowOptions">off_peak_window_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions">OpensearchserviceDomainOffPeakWindowOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#off_peak_window_options OpensearchserviceDomain#off_peak_window_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.skipShardMigrationWait">skip_shard_migration_wait</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#skip_shard_migration_wait OpensearchserviceDomain#skip_shard_migration_wait}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.snapshotOptions">snapshot_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions">OpensearchserviceDomainSnapshotOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#snapshot_options OpensearchserviceDomain#snapshot_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.softwareUpdateOptions">software_update_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions">OpensearchserviceDomainSoftwareUpdateOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#software_update_options OpensearchserviceDomain#software_update_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this Domain. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.useCase">use_case</a></code> | <code>str</code> | The primary use case of the domain. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.vpcOptions">vpc_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions">OpensearchserviceDomainVpcOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#vpc_options OpensearchserviceDomain#vpc_options}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_policies`<sup>Optional</sup> <a name="access_policies" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.accessPolicies"></a>

```python
access_policies: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#access_policies OpensearchserviceDomain#access_policies}.

---

##### `advanced_options`<sup>Optional</sup> <a name="advanced_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.advancedOptions"></a>

```python
advanced_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#advanced_options OpensearchserviceDomain#advanced_options}.

---

##### `advanced_security_options`<sup>Optional</sup> <a name="advanced_security_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.advancedSecurityOptions"></a>

```python
advanced_security_options: OpensearchserviceDomainAdvancedSecurityOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions">OpensearchserviceDomainAdvancedSecurityOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#advanced_security_options OpensearchserviceDomain#advanced_security_options}.

---

##### `aiml_options`<sup>Optional</sup> <a name="aiml_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.aimlOptions"></a>

```python
aiml_options: OpensearchserviceDomainAimlOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions">OpensearchserviceDomainAimlOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#aiml_options OpensearchserviceDomain#aiml_options}.

---

##### `automated_snapshot_pause_options`<sup>Optional</sup> <a name="automated_snapshot_pause_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.automatedSnapshotPauseOptions"></a>

```python
automated_snapshot_pause_options: OpensearchserviceDomainAutomatedSnapshotPauseOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions">OpensearchserviceDomainAutomatedSnapshotPauseOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#automated_snapshot_pause_options OpensearchserviceDomain#automated_snapshot_pause_options}.

---

##### `cluster_config`<sup>Optional</sup> <a name="cluster_config" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.clusterConfig"></a>

```python
cluster_config: OpensearchserviceDomainClusterConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig">OpensearchserviceDomainClusterConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#cluster_config OpensearchserviceDomain#cluster_config}.

---

##### `cognito_options`<sup>Optional</sup> <a name="cognito_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.cognitoOptions"></a>

```python
cognito_options: OpensearchserviceDomainCognitoOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions">OpensearchserviceDomainCognitoOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#cognito_options OpensearchserviceDomain#cognito_options}.

---

##### `deployment_strategy_options`<sup>Optional</sup> <a name="deployment_strategy_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.deploymentStrategyOptions"></a>

```python
deployment_strategy_options: OpensearchserviceDomainDeploymentStrategyOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions">OpensearchserviceDomainDeploymentStrategyOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#deployment_strategy_options OpensearchserviceDomain#deployment_strategy_options}.

---

##### `domain_endpoint_options`<sup>Optional</sup> <a name="domain_endpoint_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.domainEndpointOptions"></a>

```python
domain_endpoint_options: OpensearchserviceDomainDomainEndpointOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions">OpensearchserviceDomainDomainEndpointOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#domain_endpoint_options OpensearchserviceDomain#domain_endpoint_options}.

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#domain_name OpensearchserviceDomain#domain_name}.

---

##### `ebs_options`<sup>Optional</sup> <a name="ebs_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.ebsOptions"></a>

```python
ebs_options: OpensearchserviceDomainEbsOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions">OpensearchserviceDomainEbsOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#ebs_options OpensearchserviceDomain#ebs_options}.

---

##### `encryption_at_rest_options`<sup>Optional</sup> <a name="encryption_at_rest_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.encryptionAtRestOptions"></a>

```python
encryption_at_rest_options: OpensearchserviceDomainEncryptionAtRestOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions">OpensearchserviceDomainEncryptionAtRestOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#encryption_at_rest_options OpensearchserviceDomain#encryption_at_rest_options}.

---

##### `engine_mode`<sup>Optional</sup> <a name="engine_mode" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.engineMode"></a>

```python
engine_mode: str
```

- *Type:* str

The engine mode of the domain.

Determines whether the domain runs the standard (GENERAL) engine or the optimized multi-engine (OPTIMIZED) engine. This value cannot be changed after the domain is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#engine_mode OpensearchserviceDomain#engine_mode}

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#engine_version OpensearchserviceDomain#engine_version}.

---

##### `identity_center_options`<sup>Optional</sup> <a name="identity_center_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.identityCenterOptions"></a>

```python
identity_center_options: OpensearchserviceDomainIdentityCenterOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions">OpensearchserviceDomainIdentityCenterOptions</a>

Options for configuring Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#identity_center_options OpensearchserviceDomain#identity_center_options}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#ip_address_type OpensearchserviceDomain#ip_address_type}.

---

##### `log_publishing_options`<sup>Optional</sup> <a name="log_publishing_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.logPublishingOptions"></a>

```python
log_publishing_options: IResolvable | typing.Mapping[OpensearchserviceDomainLogPublishingOptions]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#log_publishing_options OpensearchserviceDomain#log_publishing_options}.

---

##### `node_to_node_encryption_options`<sup>Optional</sup> <a name="node_to_node_encryption_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.nodeToNodeEncryptionOptions"></a>

```python
node_to_node_encryption_options: OpensearchserviceDomainNodeToNodeEncryptionOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions">OpensearchserviceDomainNodeToNodeEncryptionOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#node_to_node_encryption_options OpensearchserviceDomain#node_to_node_encryption_options}.

---

##### `off_peak_window_options`<sup>Optional</sup> <a name="off_peak_window_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.offPeakWindowOptions"></a>

```python
off_peak_window_options: OpensearchserviceDomainOffPeakWindowOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions">OpensearchserviceDomainOffPeakWindowOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#off_peak_window_options OpensearchserviceDomain#off_peak_window_options}.

---

##### `skip_shard_migration_wait`<sup>Optional</sup> <a name="skip_shard_migration_wait" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.skipShardMigrationWait"></a>

```python
skip_shard_migration_wait: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#skip_shard_migration_wait OpensearchserviceDomain#skip_shard_migration_wait}.

---

##### `snapshot_options`<sup>Optional</sup> <a name="snapshot_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.snapshotOptions"></a>

```python
snapshot_options: OpensearchserviceDomainSnapshotOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions">OpensearchserviceDomainSnapshotOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#snapshot_options OpensearchserviceDomain#snapshot_options}.

---

##### `software_update_options`<sup>Optional</sup> <a name="software_update_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.softwareUpdateOptions"></a>

```python
software_update_options: OpensearchserviceDomainSoftwareUpdateOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions">OpensearchserviceDomainSoftwareUpdateOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#software_update_options OpensearchserviceDomain#software_update_options}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[OpensearchserviceDomainTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>]

An arbitrary set of tags (key-value pairs) for this Domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#tags OpensearchserviceDomain#tags}

---

##### `use_case`<sup>Optional</sup> <a name="use_case" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.useCase"></a>

```python
use_case: str
```

- *Type:* str

The primary use case of the domain.

Determines the default configuration tuned for the workload. For GENERAL engine-mode domains, this value can be changed after creation. For OPTIMIZED engine-mode domains, this value cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#use_case OpensearchserviceDomain#use_case}

---

##### `vpc_options`<sup>Optional</sup> <a name="vpc_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.vpcOptions"></a>

```python
vpc_options: OpensearchserviceDomainVpcOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions">OpensearchserviceDomainVpcOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#vpc_options OpensearchserviceDomain#vpc_options}.

---

### OpensearchserviceDomainDeploymentStrategyOptions <a name="OpensearchserviceDomainDeploymentStrategyOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions(
  deployment_strategy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions.property.deploymentStrategy">deployment_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#deployment_strategy OpensearchserviceDomain#deployment_strategy}. |

---

##### `deployment_strategy`<sup>Optional</sup> <a name="deployment_strategy" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions.property.deploymentStrategy"></a>

```python
deployment_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#deployment_strategy OpensearchserviceDomain#deployment_strategy}.

---

### OpensearchserviceDomainDomainEndpointOptions <a name="OpensearchserviceDomainDomainEndpointOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions(
  custom_endpoint: str = None,
  custom_endpoint_certificate_arn: str = None,
  custom_endpoint_enabled: bool | IResolvable = None,
  enforce_https: bool | IResolvable = None,
  tls_security_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.customEndpoint">custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#custom_endpoint OpensearchserviceDomain#custom_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.customEndpointCertificateArn">custom_endpoint_certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#custom_endpoint_certificate_arn OpensearchserviceDomain#custom_endpoint_certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.customEndpointEnabled">custom_endpoint_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#custom_endpoint_enabled OpensearchserviceDomain#custom_endpoint_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.enforceHttps">enforce_https</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enforce_https OpensearchserviceDomain#enforce_https}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.tlsSecurityPolicy">tls_security_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#tls_security_policy OpensearchserviceDomain#tls_security_policy}. |

---

##### `custom_endpoint`<sup>Optional</sup> <a name="custom_endpoint" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.customEndpoint"></a>

```python
custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#custom_endpoint OpensearchserviceDomain#custom_endpoint}.

---

##### `custom_endpoint_certificate_arn`<sup>Optional</sup> <a name="custom_endpoint_certificate_arn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.customEndpointCertificateArn"></a>

```python
custom_endpoint_certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#custom_endpoint_certificate_arn OpensearchserviceDomain#custom_endpoint_certificate_arn}.

---

##### `custom_endpoint_enabled`<sup>Optional</sup> <a name="custom_endpoint_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.customEndpointEnabled"></a>

```python
custom_endpoint_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#custom_endpoint_enabled OpensearchserviceDomain#custom_endpoint_enabled}.

---

##### `enforce_https`<sup>Optional</sup> <a name="enforce_https" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.enforceHttps"></a>

```python
enforce_https: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enforce_https OpensearchserviceDomain#enforce_https}.

---

##### `tls_security_policy`<sup>Optional</sup> <a name="tls_security_policy" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.tlsSecurityPolicy"></a>

```python
tls_security_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#tls_security_policy OpensearchserviceDomain#tls_security_policy}.

---

### OpensearchserviceDomainEbsOptions <a name="OpensearchserviceDomainEbsOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainEbsOptions(
  ebs_enabled: bool | IResolvable = None,
  iops: typing.Union[int, float] = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.ebsEnabled">ebs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#ebs_enabled OpensearchserviceDomain#ebs_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#iops OpensearchserviceDomain#iops}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#throughput OpensearchserviceDomain#throughput}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#volume_size OpensearchserviceDomain#volume_size}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#volume_type OpensearchserviceDomain#volume_type}. |

---

##### `ebs_enabled`<sup>Optional</sup> <a name="ebs_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.ebsEnabled"></a>

```python
ebs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#ebs_enabled OpensearchserviceDomain#ebs_enabled}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#iops OpensearchserviceDomain#iops}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#throughput OpensearchserviceDomain#throughput}.

---

##### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#volume_size OpensearchserviceDomain#volume_size}.

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#volume_type OpensearchserviceDomain#volume_type}.

---

### OpensearchserviceDomainEncryptionAtRestOptions <a name="OpensearchserviceDomainEncryptionAtRestOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions(
  enabled: bool | IResolvable = None,
  kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#kms_key_id OpensearchserviceDomain#kms_key_id}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#kms_key_id OpensearchserviceDomain#kms_key_id}.

---

### OpensearchserviceDomainIdentityCenterOptions <a name="OpensearchserviceDomainIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions(
  enabled_api_access: bool | IResolvable = None,
  identity_center_instance_arn: str = None,
  roles_key: str = None,
  subject_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.enabledApiAccess">enabled_api_access</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Identity Center is enabled. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.identityCenterInstanceArn">identity_center_instance_arn</a></code> | <code>str</code> | The ARN of the Identity Center instance. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.rolesKey">roles_key</a></code> | <code>str</code> | The roles key for Identity Center options. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.subjectKey">subject_key</a></code> | <code>str</code> | The subject key for Identity Center options. |

---

##### `enabled_api_access`<sup>Optional</sup> <a name="enabled_api_access" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.enabledApiAccess"></a>

```python
enabled_api_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Identity Center is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled_api_access OpensearchserviceDomain#enabled_api_access}

---

##### `identity_center_instance_arn`<sup>Optional</sup> <a name="identity_center_instance_arn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.identityCenterInstanceArn"></a>

```python
identity_center_instance_arn: str
```

- *Type:* str

The ARN of the Identity Center instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#identity_center_instance_arn OpensearchserviceDomain#identity_center_instance_arn}

---

##### `roles_key`<sup>Optional</sup> <a name="roles_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.rolesKey"></a>

```python
roles_key: str
```

- *Type:* str

The roles key for Identity Center options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}

---

##### `subject_key`<sup>Optional</sup> <a name="subject_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.subjectKey"></a>

```python
subject_key: str
```

- *Type:* str

The subject key for Identity Center options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}

---

### OpensearchserviceDomainLogPublishingOptions <a name="OpensearchserviceDomainLogPublishingOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions(
  cloudwatch_logs_log_group_arn: str = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions.property.cloudwatchLogsLogGroupArn">cloudwatch_logs_log_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#cloudwatch_logs_log_group_arn OpensearchserviceDomain#cloudwatch_logs_log_group_arn}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |

---

##### `cloudwatch_logs_log_group_arn`<sup>Optional</sup> <a name="cloudwatch_logs_log_group_arn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions.property.cloudwatchLogsLogGroupArn"></a>

```python
cloudwatch_logs_log_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#cloudwatch_logs_log_group_arn OpensearchserviceDomain#cloudwatch_logs_log_group_arn}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

### OpensearchserviceDomainNodeToNodeEncryptionOptions <a name="OpensearchserviceDomainNodeToNodeEncryptionOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

### OpensearchserviceDomainOffPeakWindowOptions <a name="OpensearchserviceDomainOffPeakWindowOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions(
  enabled: bool | IResolvable = None,
  off_peak_window: OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions.property.offPeakWindow">off_peak_window</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#off_peak_window OpensearchserviceDomain#off_peak_window}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `off_peak_window`<sup>Optional</sup> <a name="off_peak_window" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions.property.offPeakWindow"></a>

```python
off_peak_window: OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#off_peak_window OpensearchserviceDomain#off_peak_window}.

---

### OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow <a name="OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow(
  window_start_time: OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow.property.windowStartTime">window_start_time</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#window_start_time OpensearchserviceDomain#window_start_time}. |

---

##### `window_start_time`<sup>Optional</sup> <a name="window_start_time" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow.property.windowStartTime"></a>

```python
window_start_time: OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#window_start_time OpensearchserviceDomain#window_start_time}.

---

### OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime <a name="OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#hours OpensearchserviceDomain#hours}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#minutes OpensearchserviceDomain#minutes}. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#hours OpensearchserviceDomain#hours}.

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#minutes OpensearchserviceDomain#minutes}.

---

### OpensearchserviceDomainServiceSoftwareOptions <a name="OpensearchserviceDomainServiceSoftwareOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptions.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptions()
```


### OpensearchserviceDomainSnapshotOptions <a name="OpensearchserviceDomainSnapshotOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions(
  automated_snapshot_start_hour: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions.property.automatedSnapshotStartHour">automated_snapshot_start_hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#automated_snapshot_start_hour OpensearchserviceDomain#automated_snapshot_start_hour}. |

---

##### `automated_snapshot_start_hour`<sup>Optional</sup> <a name="automated_snapshot_start_hour" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions.property.automatedSnapshotStartHour"></a>

```python
automated_snapshot_start_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#automated_snapshot_start_hour OpensearchserviceDomain#automated_snapshot_start_hour}.

---

### OpensearchserviceDomainSoftwareUpdateOptions <a name="OpensearchserviceDomainSoftwareUpdateOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions(
  auto_software_update_enabled: bool | IResolvable = None,
  use_latest_service_software_for_blue_green: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions.property.autoSoftwareUpdateEnabled">auto_software_update_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#auto_software_update_enabled OpensearchserviceDomain#auto_software_update_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions.property.useLatestServiceSoftwareForBlueGreen">use_latest_service_software_for_blue_green</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#use_latest_service_software_for_blue_green OpensearchserviceDomain#use_latest_service_software_for_blue_green}. |

---

##### `auto_software_update_enabled`<sup>Optional</sup> <a name="auto_software_update_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions.property.autoSoftwareUpdateEnabled"></a>

```python
auto_software_update_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#auto_software_update_enabled OpensearchserviceDomain#auto_software_update_enabled}.

---

##### `use_latest_service_software_for_blue_green`<sup>Optional</sup> <a name="use_latest_service_software_for_blue_green" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions.property.useLatestServiceSoftwareForBlueGreen"></a>

```python
use_latest_service_software_for_blue_green: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#use_latest_service_software_for_blue_green OpensearchserviceDomain#use_latest_service_software_for_blue_green}.

---

### OpensearchserviceDomainTags <a name="OpensearchserviceDomainTags" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags.property.key">key</a></code> | <code>str</code> | The value of the tag. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags.property.value">value</a></code> | <code>str</code> | The key of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags.property.key"></a>

```python
key: str
```

- *Type:* str

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#key OpensearchserviceDomain#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags.property.value"></a>

```python
value: str
```

- *Type:* str

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#value OpensearchserviceDomain#value}

---

### OpensearchserviceDomainVpcOptions <a name="OpensearchserviceDomainVpcOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainVpcOptions(
  egress_enabled: bool | IResolvable = None,
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.property.egressEnabled">egress_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Controls whether egress traffic from the domain is routed through the customer VPC. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#security_group_ids OpensearchserviceDomain#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#subnet_ids OpensearchserviceDomain#subnet_ids}. |

---

##### `egress_enabled`<sup>Optional</sup> <a name="egress_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.property.egressEnabled"></a>

```python
egress_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Controls whether egress traffic from the domain is routed through the customer VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#egress_enabled OpensearchserviceDomain#egress_enabled}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#security_group_ids OpensearchserviceDomain#security_group_ids}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#subnet_ids OpensearchserviceDomain#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference <a name="OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resetRolesKey">reset_roles_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resetSubjectKey">reset_subject_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_roles_key` <a name="reset_roles_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resetRolesKey"></a>

```python
def reset_roles_key() -> None
```

##### `reset_subject_key` <a name="reset_subject_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resetSubjectKey"></a>

```python
def reset_subject_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.rolesKeyInput">roles_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.subjectKeyInput">subject_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.rolesKey">roles_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.subjectKey">subject_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `roles_key_input`<sup>Optional</sup> <a name="roles_key_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.rolesKeyInput"></a>

```python
roles_key_input: str
```

- *Type:* str

---

##### `subject_key_input`<sup>Optional</sup> <a name="subject_key_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.subjectKeyInput"></a>

```python
subject_key_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `roles_key`<sup>Required</sup> <a name="roles_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.rolesKey"></a>

```python
roles_key: str
```

- *Type:* str

---

##### `subject_key`<sup>Required</sup> <a name="subject_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.subjectKey"></a>

```python
subject_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a>

---


### OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference <a name="OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetPublicKey">reset_public_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetRolesKey">reset_roles_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetSubjectKey">reset_subject_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_public_key` <a name="reset_public_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetPublicKey"></a>

```python
def reset_public_key() -> None
```

##### `reset_roles_key` <a name="reset_roles_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetRolesKey"></a>

```python
def reset_roles_key() -> None
```

##### `reset_subject_key` <a name="reset_subject_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetSubjectKey"></a>

```python
def reset_subject_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.publicKeyInput">public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.rolesKeyInput">roles_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.subjectKeyInput">subject_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.rolesKey">roles_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.subjectKey">subject_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `public_key_input`<sup>Optional</sup> <a name="public_key_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.publicKeyInput"></a>

```python
public_key_input: str
```

- *Type:* str

---

##### `roles_key_input`<sup>Optional</sup> <a name="roles_key_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.rolesKeyInput"></a>

```python
roles_key_input: str
```

- *Type:* str

---

##### `subject_key_input`<sup>Optional</sup> <a name="subject_key_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.subjectKeyInput"></a>

```python
subject_key_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `roles_key`<sup>Required</sup> <a name="roles_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.rolesKey"></a>

```python
roles_key: str
```

- *Type:* str

---

##### `subject_key`<sup>Required</sup> <a name="subject_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.subjectKey"></a>

```python
subject_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a>

---


### OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference <a name="OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserArn">reset_master_user_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserName">reset_master_user_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserPassword">reset_master_user_password</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_master_user_arn` <a name="reset_master_user_arn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserArn"></a>

```python
def reset_master_user_arn() -> None
```

##### `reset_master_user_name` <a name="reset_master_user_name" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserName"></a>

```python
def reset_master_user_name() -> None
```

##### `reset_master_user_password` <a name="reset_master_user_password" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserPassword"></a>

```python
def reset_master_user_password() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArnInput">master_user_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserNameInput">master_user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPasswordInput">master_user_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArn">master_user_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserName">master_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPassword">master_user_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `master_user_arn_input`<sup>Optional</sup> <a name="master_user_arn_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArnInput"></a>

```python
master_user_arn_input: str
```

- *Type:* str

---

##### `master_user_name_input`<sup>Optional</sup> <a name="master_user_name_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserNameInput"></a>

```python
master_user_name_input: str
```

- *Type:* str

---

##### `master_user_password_input`<sup>Optional</sup> <a name="master_user_password_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPasswordInput"></a>

```python
master_user_password_input: str
```

- *Type:* str

---

##### `master_user_arn`<sup>Required</sup> <a name="master_user_arn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArn"></a>

```python
master_user_arn: str
```

- *Type:* str

---

##### `master_user_name`<sup>Required</sup> <a name="master_user_name" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserName"></a>

```python
master_user_name: str
```

- *Type:* str

---

##### `master_user_password`<sup>Required</sup> <a name="master_user_password" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPassword"></a>

```python
master_user_password: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a>

---


### OpensearchserviceDomainAdvancedSecurityOptionsOutputReference <a name="OpensearchserviceDomainAdvancedSecurityOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putIamFederationOptions">put_iam_federation_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putJwtOptions">put_jwt_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions">put_master_user_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putSamlOptions">put_saml_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetAnonymousAuthEnabled">reset_anonymous_auth_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetIamFederationOptions">reset_iam_federation_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetInternalUserDatabaseEnabled">reset_internal_user_database_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetJwtOptions">reset_jwt_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetMasterUserOptions">reset_master_user_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetSamlOptions">reset_saml_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_iam_federation_options` <a name="put_iam_federation_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putIamFederationOptions"></a>

```python
def put_iam_federation_options(
  enabled: bool | IResolvable = None,
  roles_key: str = None,
  subject_key: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putIamFederationOptions.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

###### `roles_key`<sup>Optional</sup> <a name="roles_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putIamFederationOptions.parameter.rolesKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}.

---

###### `subject_key`<sup>Optional</sup> <a name="subject_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putIamFederationOptions.parameter.subjectKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}.

---

##### `put_jwt_options` <a name="put_jwt_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putJwtOptions"></a>

```python
def put_jwt_options(
  enabled: bool | IResolvable = None,
  public_key: str = None,
  roles_key: str = None,
  subject_key: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putJwtOptions.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

###### `public_key`<sup>Optional</sup> <a name="public_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putJwtOptions.parameter.publicKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#public_key OpensearchserviceDomain#public_key}.

---

###### `roles_key`<sup>Optional</sup> <a name="roles_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putJwtOptions.parameter.rolesKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}.

---

###### `subject_key`<sup>Optional</sup> <a name="subject_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putJwtOptions.parameter.subjectKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}.

---

##### `put_master_user_options` <a name="put_master_user_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions"></a>

```python
def put_master_user_options(
  master_user_arn: str = None,
  master_user_name: str = None,
  master_user_password: str = None
) -> None
```

###### `master_user_arn`<sup>Optional</sup> <a name="master_user_arn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions.parameter.masterUserArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_user_arn OpensearchserviceDomain#master_user_arn}.

---

###### `master_user_name`<sup>Optional</sup> <a name="master_user_name" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions.parameter.masterUserName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_user_name OpensearchserviceDomain#master_user_name}.

---

###### `master_user_password`<sup>Optional</sup> <a name="master_user_password" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions.parameter.masterUserPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_user_password OpensearchserviceDomain#master_user_password}.

---

##### `put_saml_options` <a name="put_saml_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putSamlOptions"></a>

```python
def put_saml_options(
  enabled: bool | IResolvable = None,
  idp: OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp = None,
  master_backend_role: str = None,
  master_user_name: str = None,
  roles_key: str = None,
  session_timeout_minutes: typing.Union[int, float] = None,
  subject_key: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putSamlOptions.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

###### `idp`<sup>Optional</sup> <a name="idp" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putSamlOptions.parameter.idp"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#idp OpensearchserviceDomain#idp}.

---

###### `master_backend_role`<sup>Optional</sup> <a name="master_backend_role" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putSamlOptions.parameter.masterBackendRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_backend_role OpensearchserviceDomain#master_backend_role}.

---

###### `master_user_name`<sup>Optional</sup> <a name="master_user_name" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putSamlOptions.parameter.masterUserName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_user_name OpensearchserviceDomain#master_user_name}.

---

###### `roles_key`<sup>Optional</sup> <a name="roles_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putSamlOptions.parameter.rolesKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}.

---

###### `session_timeout_minutes`<sup>Optional</sup> <a name="session_timeout_minutes" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putSamlOptions.parameter.sessionTimeoutMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#session_timeout_minutes OpensearchserviceDomain#session_timeout_minutes}.

---

###### `subject_key`<sup>Optional</sup> <a name="subject_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putSamlOptions.parameter.subjectKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}.

---

##### `reset_anonymous_auth_enabled` <a name="reset_anonymous_auth_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetAnonymousAuthEnabled"></a>

```python
def reset_anonymous_auth_enabled() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_iam_federation_options` <a name="reset_iam_federation_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetIamFederationOptions"></a>

```python
def reset_iam_federation_options() -> None
```

##### `reset_internal_user_database_enabled` <a name="reset_internal_user_database_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetInternalUserDatabaseEnabled"></a>

```python
def reset_internal_user_database_enabled() -> None
```

##### `reset_jwt_options` <a name="reset_jwt_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetJwtOptions"></a>

```python
def reset_jwt_options() -> None
```

##### `reset_master_user_options` <a name="reset_master_user_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetMasterUserOptions"></a>

```python
def reset_master_user_options() -> None
```

##### `reset_saml_options` <a name="reset_saml_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetSamlOptions"></a>

```python
def reset_saml_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthDisableDate">anonymous_auth_disable_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.iamFederationOptions">iam_federation_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.jwtOptions">jwt_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptions">master_user_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.samlOptions">saml_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabledInput">anonymous_auth_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.iamFederationOptionsInput">iam_federation_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabledInput">internal_user_database_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.jwtOptionsInput">jwt_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptionsInput">master_user_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.samlOptionsInput">saml_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabled">anonymous_auth_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled">internal_user_database_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions">OpensearchserviceDomainAdvancedSecurityOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `anonymous_auth_disable_date`<sup>Required</sup> <a name="anonymous_auth_disable_date" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthDisableDate"></a>

```python
anonymous_auth_disable_date: str
```

- *Type:* str

---

##### `iam_federation_options`<sup>Required</sup> <a name="iam_federation_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.iamFederationOptions"></a>

```python
iam_federation_options: OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference</a>

---

##### `jwt_options`<sup>Required</sup> <a name="jwt_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.jwtOptions"></a>

```python
jwt_options: OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference</a>

---

##### `master_user_options`<sup>Required</sup> <a name="master_user_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptions"></a>

```python
master_user_options: OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference</a>

---

##### `saml_options`<sup>Required</sup> <a name="saml_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.samlOptions"></a>

```python
saml_options: OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference</a>

---

##### `anonymous_auth_enabled_input`<sup>Optional</sup> <a name="anonymous_auth_enabled_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabledInput"></a>

```python
anonymous_auth_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `iam_federation_options_input`<sup>Optional</sup> <a name="iam_federation_options_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.iamFederationOptionsInput"></a>

```python
iam_federation_options_input: IResolvable | OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a>

---

##### `internal_user_database_enabled_input`<sup>Optional</sup> <a name="internal_user_database_enabled_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabledInput"></a>

```python
internal_user_database_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `jwt_options_input`<sup>Optional</sup> <a name="jwt_options_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.jwtOptionsInput"></a>

```python
jwt_options_input: IResolvable | OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a>

---

##### `master_user_options_input`<sup>Optional</sup> <a name="master_user_options_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptionsInput"></a>

```python
master_user_options_input: IResolvable | OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a>

---

##### `saml_options_input`<sup>Optional</sup> <a name="saml_options_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.samlOptionsInput"></a>

```python
saml_options_input: IResolvable | OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a>

---

##### `anonymous_auth_enabled`<sup>Required</sup> <a name="anonymous_auth_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabled"></a>

```python
anonymous_auth_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_user_database_enabled`<sup>Required</sup> <a name="internal_user_database_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled"></a>

```python
internal_user_database_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainAdvancedSecurityOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions">OpensearchserviceDomainAdvancedSecurityOptions</a>

---


### OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference <a name="OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resetEntityId">reset_entity_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resetMetadataContent">reset_metadata_content</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_entity_id` <a name="reset_entity_id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resetEntityId"></a>

```python
def reset_entity_id() -> None
```

##### `reset_metadata_content` <a name="reset_metadata_content" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resetMetadataContent"></a>

```python
def reset_metadata_content() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.entityIdInput">entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.metadataContentInput">metadata_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.metadataContent">metadata_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_id_input`<sup>Optional</sup> <a name="entity_id_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.entityIdInput"></a>

```python
entity_id_input: str
```

- *Type:* str

---

##### `metadata_content_input`<sup>Optional</sup> <a name="metadata_content_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.metadataContentInput"></a>

```python
metadata_content_input: str
```

- *Type:* str

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `metadata_content`<sup>Required</sup> <a name="metadata_content" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.metadataContent"></a>

```python
metadata_content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a>

---


### OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference <a name="OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.putIdp">put_idp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetIdp">reset_idp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetMasterBackendRole">reset_master_backend_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetMasterUserName">reset_master_user_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetRolesKey">reset_roles_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetSessionTimeoutMinutes">reset_session_timeout_minutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetSubjectKey">reset_subject_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_idp` <a name="put_idp" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.putIdp"></a>

```python
def put_idp(
  entity_id: str = None,
  metadata_content: str = None
) -> None
```

###### `entity_id`<sup>Optional</sup> <a name="entity_id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.putIdp.parameter.entityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#entity_id OpensearchserviceDomain#entity_id}.

---

###### `metadata_content`<sup>Optional</sup> <a name="metadata_content" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.putIdp.parameter.metadataContent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#metadata_content OpensearchserviceDomain#metadata_content}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_idp` <a name="reset_idp" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetIdp"></a>

```python
def reset_idp() -> None
```

##### `reset_master_backend_role` <a name="reset_master_backend_role" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetMasterBackendRole"></a>

```python
def reset_master_backend_role() -> None
```

##### `reset_master_user_name` <a name="reset_master_user_name" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetMasterUserName"></a>

```python
def reset_master_user_name() -> None
```

##### `reset_roles_key` <a name="reset_roles_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetRolesKey"></a>

```python
def reset_roles_key() -> None
```

##### `reset_session_timeout_minutes` <a name="reset_session_timeout_minutes" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetSessionTimeoutMinutes"></a>

```python
def reset_session_timeout_minutes() -> None
```

##### `reset_subject_key` <a name="reset_subject_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetSubjectKey"></a>

```python
def reset_subject_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.idp">idp</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.idpInput">idp_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterBackendRoleInput">master_backend_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterUserNameInput">master_user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.rolesKeyInput">roles_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutesInput">session_timeout_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.subjectKeyInput">subject_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterBackendRole">master_backend_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterUserName">master_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.rolesKey">roles_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutes">session_timeout_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.subjectKey">subject_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idp`<sup>Required</sup> <a name="idp" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.idp"></a>

```python
idp: OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `idp_input`<sup>Optional</sup> <a name="idp_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.idpInput"></a>

```python
idp_input: IResolvable | OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a>

---

##### `master_backend_role_input`<sup>Optional</sup> <a name="master_backend_role_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterBackendRoleInput"></a>

```python
master_backend_role_input: str
```

- *Type:* str

---

##### `master_user_name_input`<sup>Optional</sup> <a name="master_user_name_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterUserNameInput"></a>

```python
master_user_name_input: str
```

- *Type:* str

---

##### `roles_key_input`<sup>Optional</sup> <a name="roles_key_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.rolesKeyInput"></a>

```python
roles_key_input: str
```

- *Type:* str

---

##### `session_timeout_minutes_input`<sup>Optional</sup> <a name="session_timeout_minutes_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutesInput"></a>

```python
session_timeout_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subject_key_input`<sup>Optional</sup> <a name="subject_key_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.subjectKeyInput"></a>

```python
subject_key_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `master_backend_role`<sup>Required</sup> <a name="master_backend_role" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterBackendRole"></a>

```python
master_backend_role: str
```

- *Type:* str

---

##### `master_user_name`<sup>Required</sup> <a name="master_user_name" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterUserName"></a>

```python
master_user_name: str
```

- *Type:* str

---

##### `roles_key`<sup>Required</sup> <a name="roles_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.rolesKey"></a>

```python
roles_key: str
```

- *Type:* str

---

##### `session_timeout_minutes`<sup>Required</sup> <a name="session_timeout_minutes" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutes"></a>

```python
session_timeout_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subject_key`<sup>Required</sup> <a name="subject_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.subjectKey"></a>

```python
subject_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a>

---


### OpensearchserviceDomainAimlOptionsOutputReference <a name="OpensearchserviceDomainAimlOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.putS3VectorsEngine">put_s3_vectors_engine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.putServerlessVectorAcceleration">put_serverless_vector_acceleration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resetS3VectorsEngine">reset_s3_vectors_engine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resetServerlessVectorAcceleration">reset_serverless_vector_acceleration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_vectors_engine` <a name="put_s3_vectors_engine" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.putS3VectorsEngine"></a>

```python
def put_s3_vectors_engine(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.putS3VectorsEngine.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable S3 vectors engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}

---

##### `put_serverless_vector_acceleration` <a name="put_serverless_vector_acceleration" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.putServerlessVectorAcceleration"></a>

```python
def put_serverless_vector_acceleration(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.putServerlessVectorAcceleration.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable serverless vector acceleration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}

---

##### `reset_s3_vectors_engine` <a name="reset_s3_vectors_engine" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resetS3VectorsEngine"></a>

```python
def reset_s3_vectors_engine() -> None
```

##### `reset_serverless_vector_acceleration` <a name="reset_serverless_vector_acceleration" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resetServerlessVectorAcceleration"></a>

```python
def reset_serverless_vector_acceleration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.s3VectorsEngine">s3_vectors_engine</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference">OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.serverlessVectorAcceleration">serverless_vector_acceleration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference">OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.s3VectorsEngineInput">s3_vectors_engine_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine">OpensearchserviceDomainAimlOptionsS3VectorsEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.serverlessVectorAccelerationInput">serverless_vector_acceleration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions">OpensearchserviceDomainAimlOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_vectors_engine`<sup>Required</sup> <a name="s3_vectors_engine" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.s3VectorsEngine"></a>

```python
s3_vectors_engine: OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference">OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference</a>

---

##### `serverless_vector_acceleration`<sup>Required</sup> <a name="serverless_vector_acceleration" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.serverlessVectorAcceleration"></a>

```python
serverless_vector_acceleration: OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference">OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference</a>

---

##### `s3_vectors_engine_input`<sup>Optional</sup> <a name="s3_vectors_engine_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.s3VectorsEngineInput"></a>

```python
s3_vectors_engine_input: IResolvable | OpensearchserviceDomainAimlOptionsS3VectorsEngine
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine">OpensearchserviceDomainAimlOptionsS3VectorsEngine</a>

---

##### `serverless_vector_acceleration_input`<sup>Optional</sup> <a name="serverless_vector_acceleration_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.serverlessVectorAccelerationInput"></a>

```python
serverless_vector_acceleration_input: IResolvable | OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainAimlOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions">OpensearchserviceDomainAimlOptions</a>

---


### OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference <a name="OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine">OpensearchserviceDomainAimlOptionsS3VectorsEngine</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainAimlOptionsS3VectorsEngine
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine">OpensearchserviceDomainAimlOptionsS3VectorsEngine</a>

---


### OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference <a name="OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a>

---


### OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference <a name="OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_end_time` <a name="reset_end_time" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions">OpensearchserviceDomainAutomatedSnapshotPauseOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainAutomatedSnapshotPauseOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions">OpensearchserviceDomainAutomatedSnapshotPauseOptions</a>

---


### OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference <a name="OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions">OpensearchserviceDomainClusterConfigColdStorageOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainClusterConfigColdStorageOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions">OpensearchserviceDomainClusterConfigColdStorageOptions</a>

---


### OpensearchserviceDomainClusterConfigNodeOptionsList <a name="OpensearchserviceDomainClusterConfigNodeOptionsList" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpensearchserviceDomainClusterConfigNodeOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OpensearchserviceDomainClusterConfigNodeOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a>]

---


### OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference <a name="OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetCount">reset_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_count` <a name="reset_count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetCount"></a>

```python
def reset_count() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig</a>

---


### OpensearchserviceDomainClusterConfigNodeOptionsOutputReference <a name="OpensearchserviceDomainClusterConfigNodeOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.putNodeConfig">put_node_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resetNodeConfig">reset_node_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resetNodeType">reset_node_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_node_config` <a name="put_node_config" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.putNodeConfig"></a>

```python
def put_node_config(
  count: typing.Union[int, float] = None,
  enabled: bool | IResolvable = None,
  type: str = None
) -> None
```

###### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.putNodeConfig.parameter.count"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#count OpensearchserviceDomain#count}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.putNodeConfig.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.putNodeConfig.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#type OpensearchserviceDomain#type}.

---

##### `reset_node_config` <a name="reset_node_config" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resetNodeConfig"></a>

```python
def reset_node_config() -> None
```

##### `reset_node_type` <a name="reset_node_type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resetNodeType"></a>

```python
def reset_node_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeConfig">node_config</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeConfigInput">node_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeTypeInput">node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_config`<sup>Required</sup> <a name="node_config" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeConfig"></a>

```python
node_config: OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference</a>

---

##### `node_config_input`<sup>Optional</sup> <a name="node_config_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeConfigInput"></a>

```python
node_config_input: IResolvable | OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig</a>

---

##### `node_type_input`<sup>Optional</sup> <a name="node_type_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeTypeInput"></a>

```python
node_type_input: str
```

- *Type:* str

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainClusterConfigNodeOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a>

---


### OpensearchserviceDomainClusterConfigOutputReference <a name="OpensearchserviceDomainClusterConfigOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putColdStorageOptions">put_cold_storage_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putNodeOptions">put_node_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putZoneAwarenessConfig">put_zone_awareness_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetColdStorageOptions">reset_cold_storage_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetDedicatedMasterCount">reset_dedicated_master_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetDedicatedMasterEnabled">reset_dedicated_master_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetDedicatedMasterType">reset_dedicated_master_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetInstanceCount">reset_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetMultiAzWithStandbyEnabled">reset_multi_az_with_standby_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetNodeOptions">reset_node_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetWarmCount">reset_warm_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetWarmEnabled">reset_warm_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetWarmType">reset_warm_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetZoneAwarenessConfig">reset_zone_awareness_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetZoneAwarenessEnabled">reset_zone_awareness_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cold_storage_options` <a name="put_cold_storage_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putColdStorageOptions"></a>

```python
def put_cold_storage_options(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putColdStorageOptions.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `put_node_options` <a name="put_node_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putNodeOptions"></a>

```python
def put_node_options(
  value: IResolvable | typing.List[OpensearchserviceDomainClusterConfigNodeOptions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putNodeOptions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a>]

---

##### `put_zone_awareness_config` <a name="put_zone_awareness_config" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putZoneAwarenessConfig"></a>

```python
def put_zone_awareness_config(
  availability_zone_count: typing.Union[int, float] = None
) -> None
```

###### `availability_zone_count`<sup>Optional</sup> <a name="availability_zone_count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putZoneAwarenessConfig.parameter.availabilityZoneCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#availability_zone_count OpensearchserviceDomain#availability_zone_count}.

---

##### `reset_cold_storage_options` <a name="reset_cold_storage_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetColdStorageOptions"></a>

```python
def reset_cold_storage_options() -> None
```

##### `reset_dedicated_master_count` <a name="reset_dedicated_master_count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetDedicatedMasterCount"></a>

```python
def reset_dedicated_master_count() -> None
```

##### `reset_dedicated_master_enabled` <a name="reset_dedicated_master_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetDedicatedMasterEnabled"></a>

```python
def reset_dedicated_master_enabled() -> None
```

##### `reset_dedicated_master_type` <a name="reset_dedicated_master_type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetDedicatedMasterType"></a>

```python
def reset_dedicated_master_type() -> None
```

##### `reset_instance_count` <a name="reset_instance_count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetInstanceCount"></a>

```python
def reset_instance_count() -> None
```

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_multi_az_with_standby_enabled` <a name="reset_multi_az_with_standby_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetMultiAzWithStandbyEnabled"></a>

```python
def reset_multi_az_with_standby_enabled() -> None
```

##### `reset_node_options` <a name="reset_node_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetNodeOptions"></a>

```python
def reset_node_options() -> None
```

##### `reset_warm_count` <a name="reset_warm_count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetWarmCount"></a>

```python
def reset_warm_count() -> None
```

##### `reset_warm_enabled` <a name="reset_warm_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetWarmEnabled"></a>

```python
def reset_warm_enabled() -> None
```

##### `reset_warm_type` <a name="reset_warm_type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetWarmType"></a>

```python
def reset_warm_type() -> None
```

##### `reset_zone_awareness_config` <a name="reset_zone_awareness_config" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetZoneAwarenessConfig"></a>

```python
def reset_zone_awareness_config() -> None
```

##### `reset_zone_awareness_enabled` <a name="reset_zone_awareness_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetZoneAwarenessEnabled"></a>

```python
def reset_zone_awareness_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.coldStorageOptions">cold_storage_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference">OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.nodeOptions">node_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList">OpensearchserviceDomainClusterConfigNodeOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessConfig">zone_awareness_config</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference">OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.coldStorageOptionsInput">cold_storage_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions">OpensearchserviceDomainClusterConfigColdStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterCountInput">dedicated_master_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterEnabledInput">dedicated_master_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterTypeInput">dedicated_master_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.multiAzWithStandbyEnabledInput">multi_az_with_standby_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.nodeOptionsInput">node_options_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmCountInput">warm_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmEnabledInput">warm_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmTypeInput">warm_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessConfigInput">zone_awareness_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig">OpensearchserviceDomainClusterConfigZoneAwarenessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessEnabledInput">zone_awareness_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterCount">dedicated_master_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterEnabled">dedicated_master_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterType">dedicated_master_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.multiAzWithStandbyEnabled">multi_az_with_standby_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmCount">warm_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmEnabled">warm_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmType">warm_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessEnabled">zone_awareness_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig">OpensearchserviceDomainClusterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cold_storage_options`<sup>Required</sup> <a name="cold_storage_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.coldStorageOptions"></a>

```python
cold_storage_options: OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference">OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference</a>

---

##### `node_options`<sup>Required</sup> <a name="node_options" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.nodeOptions"></a>

```python
node_options: OpensearchserviceDomainClusterConfigNodeOptionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList">OpensearchserviceDomainClusterConfigNodeOptionsList</a>

---

##### `zone_awareness_config`<sup>Required</sup> <a name="zone_awareness_config" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessConfig"></a>

```python
zone_awareness_config: OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference">OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference</a>

---

##### `cold_storage_options_input`<sup>Optional</sup> <a name="cold_storage_options_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.coldStorageOptionsInput"></a>

```python
cold_storage_options_input: IResolvable | OpensearchserviceDomainClusterConfigColdStorageOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions">OpensearchserviceDomainClusterConfigColdStorageOptions</a>

---

##### `dedicated_master_count_input`<sup>Optional</sup> <a name="dedicated_master_count_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterCountInput"></a>

```python
dedicated_master_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dedicated_master_enabled_input`<sup>Optional</sup> <a name="dedicated_master_enabled_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterEnabledInput"></a>

```python
dedicated_master_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `dedicated_master_type_input`<sup>Optional</sup> <a name="dedicated_master_type_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterTypeInput"></a>

```python
dedicated_master_type_input: str
```

- *Type:* str

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `multi_az_with_standby_enabled_input`<sup>Optional</sup> <a name="multi_az_with_standby_enabled_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.multiAzWithStandbyEnabledInput"></a>

```python
multi_az_with_standby_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `node_options_input`<sup>Optional</sup> <a name="node_options_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.nodeOptionsInput"></a>

```python
node_options_input: IResolvable | typing.List[OpensearchserviceDomainClusterConfigNodeOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a>]

---

##### `warm_count_input`<sup>Optional</sup> <a name="warm_count_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmCountInput"></a>

```python
warm_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `warm_enabled_input`<sup>Optional</sup> <a name="warm_enabled_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmEnabledInput"></a>

```python
warm_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `warm_type_input`<sup>Optional</sup> <a name="warm_type_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmTypeInput"></a>

```python
warm_type_input: str
```

- *Type:* str

---

##### `zone_awareness_config_input`<sup>Optional</sup> <a name="zone_awareness_config_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessConfigInput"></a>

```python
zone_awareness_config_input: IResolvable | OpensearchserviceDomainClusterConfigZoneAwarenessConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig">OpensearchserviceDomainClusterConfigZoneAwarenessConfig</a>

---

##### `zone_awareness_enabled_input`<sup>Optional</sup> <a name="zone_awareness_enabled_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessEnabledInput"></a>

```python
zone_awareness_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `dedicated_master_count`<sup>Required</sup> <a name="dedicated_master_count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterCount"></a>

```python
dedicated_master_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dedicated_master_enabled`<sup>Required</sup> <a name="dedicated_master_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterEnabled"></a>

```python
dedicated_master_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `dedicated_master_type`<sup>Required</sup> <a name="dedicated_master_type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterType"></a>

```python
dedicated_master_type: str
```

- *Type:* str

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `multi_az_with_standby_enabled`<sup>Required</sup> <a name="multi_az_with_standby_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.multiAzWithStandbyEnabled"></a>

```python
multi_az_with_standby_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `warm_count`<sup>Required</sup> <a name="warm_count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmCount"></a>

```python
warm_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `warm_enabled`<sup>Required</sup> <a name="warm_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmEnabled"></a>

```python
warm_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `warm_type`<sup>Required</sup> <a name="warm_type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmType"></a>

```python
warm_type: str
```

- *Type:* str

---

##### `zone_awareness_enabled`<sup>Required</sup> <a name="zone_awareness_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessEnabled"></a>

```python
zone_awareness_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainClusterConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig">OpensearchserviceDomainClusterConfig</a>

---


### OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference <a name="OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.resetAvailabilityZoneCount">reset_availability_zone_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_zone_count` <a name="reset_availability_zone_count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.resetAvailabilityZoneCount"></a>

```python
def reset_availability_zone_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCountInput">availability_zone_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount">availability_zone_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig">OpensearchserviceDomainClusterConfigZoneAwarenessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_count_input`<sup>Optional</sup> <a name="availability_zone_count_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCountInput"></a>

```python
availability_zone_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_zone_count`<sup>Required</sup> <a name="availability_zone_count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount"></a>

```python
availability_zone_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainClusterConfigZoneAwarenessConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig">OpensearchserviceDomainClusterConfigZoneAwarenessConfig</a>

---


### OpensearchserviceDomainCognitoOptionsOutputReference <a name="OpensearchserviceDomainCognitoOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetIdentityPoolId">reset_identity_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetUserPoolId">reset_user_pool_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_identity_pool_id` <a name="reset_identity_pool_id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetIdentityPoolId"></a>

```python
def reset_identity_pool_id() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_user_pool_id` <a name="reset_user_pool_id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetUserPoolId"></a>

```python
def reset_user_pool_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.identityPoolIdInput">identity_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.userPoolIdInput">user_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.identityPoolId">identity_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.userPoolId">user_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions">OpensearchserviceDomainCognitoOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `identity_pool_id_input`<sup>Optional</sup> <a name="identity_pool_id_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.identityPoolIdInput"></a>

```python
identity_pool_id_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `user_pool_id_input`<sup>Optional</sup> <a name="user_pool_id_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.userPoolIdInput"></a>

```python
user_pool_id_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `identity_pool_id`<sup>Required</sup> <a name="identity_pool_id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.identityPoolId"></a>

```python
identity_pool_id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainCognitoOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions">OpensearchserviceDomainCognitoOptions</a>

---


### OpensearchserviceDomainDeploymentStrategyOptionsOutputReference <a name="OpensearchserviceDomainDeploymentStrategyOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.resetDeploymentStrategy">reset_deployment_strategy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_deployment_strategy` <a name="reset_deployment_strategy" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.resetDeploymentStrategy"></a>

```python
def reset_deployment_strategy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.deploymentStrategyInput">deployment_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.deploymentStrategy">deployment_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions">OpensearchserviceDomainDeploymentStrategyOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deployment_strategy_input`<sup>Optional</sup> <a name="deployment_strategy_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.deploymentStrategyInput"></a>

```python
deployment_strategy_input: str
```

- *Type:* str

---

##### `deployment_strategy`<sup>Required</sup> <a name="deployment_strategy" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.deploymentStrategy"></a>

```python
deployment_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainDeploymentStrategyOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions">OpensearchserviceDomainDeploymentStrategyOptions</a>

---


### OpensearchserviceDomainDomainEndpointOptionsOutputReference <a name="OpensearchserviceDomainDomainEndpointOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetCustomEndpoint">reset_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetCustomEndpointCertificateArn">reset_custom_endpoint_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetCustomEndpointEnabled">reset_custom_endpoint_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetEnforceHttps">reset_enforce_https</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy">reset_tls_security_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_endpoint` <a name="reset_custom_endpoint" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetCustomEndpoint"></a>

```python
def reset_custom_endpoint() -> None
```

##### `reset_custom_endpoint_certificate_arn` <a name="reset_custom_endpoint_certificate_arn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetCustomEndpointCertificateArn"></a>

```python
def reset_custom_endpoint_certificate_arn() -> None
```

##### `reset_custom_endpoint_enabled` <a name="reset_custom_endpoint_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetCustomEndpointEnabled"></a>

```python
def reset_custom_endpoint_enabled() -> None
```

##### `reset_enforce_https` <a name="reset_enforce_https" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetEnforceHttps"></a>

```python
def reset_enforce_https() -> None
```

##### `reset_tls_security_policy` <a name="reset_tls_security_policy" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy"></a>

```python
def reset_tls_security_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArnInput">custom_endpoint_certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabledInput">custom_endpoint_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointInput">custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.enforceHttpsInput">enforce_https_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput">tls_security_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpoint">custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArn">custom_endpoint_certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabled">custom_endpoint_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.enforceHttps">enforce_https</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy">tls_security_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions">OpensearchserviceDomainDomainEndpointOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_endpoint_certificate_arn_input`<sup>Optional</sup> <a name="custom_endpoint_certificate_arn_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArnInput"></a>

```python
custom_endpoint_certificate_arn_input: str
```

- *Type:* str

---

##### `custom_endpoint_enabled_input`<sup>Optional</sup> <a name="custom_endpoint_enabled_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabledInput"></a>

```python
custom_endpoint_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `custom_endpoint_input`<sup>Optional</sup> <a name="custom_endpoint_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointInput"></a>

```python
custom_endpoint_input: str
```

- *Type:* str

---

##### `enforce_https_input`<sup>Optional</sup> <a name="enforce_https_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.enforceHttpsInput"></a>

```python
enforce_https_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tls_security_policy_input`<sup>Optional</sup> <a name="tls_security_policy_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput"></a>

```python
tls_security_policy_input: str
```

- *Type:* str

---

##### `custom_endpoint`<sup>Required</sup> <a name="custom_endpoint" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpoint"></a>

```python
custom_endpoint: str
```

- *Type:* str

---

##### `custom_endpoint_certificate_arn`<sup>Required</sup> <a name="custom_endpoint_certificate_arn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArn"></a>

```python
custom_endpoint_certificate_arn: str
```

- *Type:* str

---

##### `custom_endpoint_enabled`<sup>Required</sup> <a name="custom_endpoint_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabled"></a>

```python
custom_endpoint_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enforce_https`<sup>Required</sup> <a name="enforce_https" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.enforceHttps"></a>

```python
enforce_https: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tls_security_policy`<sup>Required</sup> <a name="tls_security_policy" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy"></a>

```python
tls_security_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainDomainEndpointOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions">OpensearchserviceDomainDomainEndpointOptions</a>

---


### OpensearchserviceDomainEbsOptionsOutputReference <a name="OpensearchserviceDomainEbsOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetEbsEnabled">reset_ebs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetVolumeSize">reset_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ebs_enabled` <a name="reset_ebs_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetEbsEnabled"></a>

```python
def reset_ebs_enabled() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volume_size` <a name="reset_volume_size" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetVolumeSize"></a>

```python
def reset_volume_size() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.ebsEnabledInput">ebs_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeSizeInput">volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.ebsEnabled">ebs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions">OpensearchserviceDomainEbsOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ebs_enabled_input`<sup>Optional</sup> <a name="ebs_enabled_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.ebsEnabledInput"></a>

```python
ebs_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size_input`<sup>Optional</sup> <a name="volume_size_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeSizeInput"></a>

```python
volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `ebs_enabled`<sup>Required</sup> <a name="ebs_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.ebsEnabled"></a>

```python
ebs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainEbsOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions">OpensearchserviceDomainEbsOptions</a>

---


### OpensearchserviceDomainEncryptionAtRestOptionsOutputReference <a name="OpensearchserviceDomainEncryptionAtRestOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions">OpensearchserviceDomainEncryptionAtRestOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainEncryptionAtRestOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions">OpensearchserviceDomainEncryptionAtRestOptions</a>

---


### OpensearchserviceDomainIdentityCenterOptionsOutputReference <a name="OpensearchserviceDomainIdentityCenterOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetEnabledApiAccess">reset_enabled_api_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetIdentityCenterInstanceArn">reset_identity_center_instance_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetRolesKey">reset_roles_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetSubjectKey">reset_subject_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled_api_access` <a name="reset_enabled_api_access" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetEnabledApiAccess"></a>

```python
def reset_enabled_api_access() -> None
```

##### `reset_identity_center_instance_arn` <a name="reset_identity_center_instance_arn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetIdentityCenterInstanceArn"></a>

```python
def reset_identity_center_instance_arn() -> None
```

##### `reset_roles_key` <a name="reset_roles_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetRolesKey"></a>

```python
def reset_roles_key() -> None
```

##### `reset_subject_key` <a name="reset_subject_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetSubjectKey"></a>

```python
def reset_subject_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterApplicationArn">identity_center_application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityStoreId">identity_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.enabledApiAccessInput">enabled_api_access_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterInstanceArnInput">identity_center_instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.rolesKeyInput">roles_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.subjectKeyInput">subject_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.enabledApiAccess">enabled_api_access</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterInstanceArn">identity_center_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.rolesKey">roles_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.subjectKey">subject_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions">OpensearchserviceDomainIdentityCenterOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_center_application_arn`<sup>Required</sup> <a name="identity_center_application_arn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterApplicationArn"></a>

```python
identity_center_application_arn: str
```

- *Type:* str

---

##### `identity_store_id`<sup>Required</sup> <a name="identity_store_id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityStoreId"></a>

```python
identity_store_id: str
```

- *Type:* str

---

##### `enabled_api_access_input`<sup>Optional</sup> <a name="enabled_api_access_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.enabledApiAccessInput"></a>

```python
enabled_api_access_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `identity_center_instance_arn_input`<sup>Optional</sup> <a name="identity_center_instance_arn_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterInstanceArnInput"></a>

```python
identity_center_instance_arn_input: str
```

- *Type:* str

---

##### `roles_key_input`<sup>Optional</sup> <a name="roles_key_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.rolesKeyInput"></a>

```python
roles_key_input: str
```

- *Type:* str

---

##### `subject_key_input`<sup>Optional</sup> <a name="subject_key_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.subjectKeyInput"></a>

```python
subject_key_input: str
```

- *Type:* str

---

##### `enabled_api_access`<sup>Required</sup> <a name="enabled_api_access" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.enabledApiAccess"></a>

```python
enabled_api_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `identity_center_instance_arn`<sup>Required</sup> <a name="identity_center_instance_arn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterInstanceArn"></a>

```python
identity_center_instance_arn: str
```

- *Type:* str

---

##### `roles_key`<sup>Required</sup> <a name="roles_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.rolesKey"></a>

```python
roles_key: str
```

- *Type:* str

---

##### `subject_key`<sup>Required</sup> <a name="subject_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.subjectKey"></a>

```python
subject_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainIdentityCenterOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions">OpensearchserviceDomainIdentityCenterOptions</a>

---


### OpensearchserviceDomainLogPublishingOptionsMap <a name="OpensearchserviceDomainLogPublishingOptionsMap" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.get"></a>

```python
def get(
  key: str
) -> OpensearchserviceDomainLogPublishingOptionsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[OpensearchserviceDomainLogPublishingOptions]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>]

---


### OpensearchserviceDomainLogPublishingOptionsOutputReference <a name="OpensearchserviceDomainLogPublishingOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resetCloudwatchLogsLogGroupArn">reset_cloudwatch_logs_log_group_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cloudwatch_logs_log_group_arn` <a name="reset_cloudwatch_logs_log_group_arn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resetCloudwatchLogsLogGroupArn"></a>

```python
def reset_cloudwatch_logs_log_group_arn() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.cloudwatchLogsLogGroupArnInput">cloudwatch_logs_log_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.cloudwatchLogsLogGroupArn">cloudwatch_logs_log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs_log_group_arn_input`<sup>Optional</sup> <a name="cloudwatch_logs_log_group_arn_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.cloudwatchLogsLogGroupArnInput"></a>

```python
cloudwatch_logs_log_group_arn_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cloudwatch_logs_log_group_arn`<sup>Required</sup> <a name="cloudwatch_logs_log_group_arn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.cloudwatchLogsLogGroupArn"></a>

```python
cloudwatch_logs_log_group_arn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainLogPublishingOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>

---


### OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference <a name="OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions">OpensearchserviceDomainNodeToNodeEncryptionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainNodeToNodeEncryptionOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions">OpensearchserviceDomainNodeToNodeEncryptionOptions</a>

---


### OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference <a name="OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.putWindowStartTime">put_window_start_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resetWindowStartTime">reset_window_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_window_start_time` <a name="put_window_start_time" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.putWindowStartTime"></a>

```python
def put_window_start_time(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None
) -> None
```

###### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.putWindowStartTime.parameter.hours"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#hours OpensearchserviceDomain#hours}.

---

###### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.putWindowStartTime.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#minutes OpensearchserviceDomain#minutes}.

---

##### `reset_window_start_time` <a name="reset_window_start_time" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resetWindowStartTime"></a>

```python
def reset_window_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.windowStartTime">window_start_time</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.windowStartTimeInput">window_start_time_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `window_start_time`<sup>Required</sup> <a name="window_start_time" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.windowStartTime"></a>

```python
window_start_time: OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference</a>

---

##### `window_start_time_input`<sup>Optional</sup> <a name="window_start_time_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.windowStartTimeInput"></a>

```python
window_start_time_input: IResolvable | OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a>

---


### OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference <a name="OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resetHours">reset_hours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resetMinutes">reset_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hours` <a name="reset_hours" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resetHours"></a>

```python
def reset_hours() -> None
```

##### `reset_minutes` <a name="reset_minutes" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resetMinutes"></a>

```python
def reset_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.hoursInput"></a>

```python
hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a>

---


### OpensearchserviceDomainOffPeakWindowOptionsOutputReference <a name="OpensearchserviceDomainOffPeakWindowOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.putOffPeakWindow">put_off_peak_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resetOffPeakWindow">reset_off_peak_window</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_off_peak_window` <a name="put_off_peak_window" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.putOffPeakWindow"></a>

```python
def put_off_peak_window(
  window_start_time: OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime = None
) -> None
```

###### `window_start_time`<sup>Optional</sup> <a name="window_start_time" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.putOffPeakWindow.parameter.windowStartTime"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#window_start_time OpensearchserviceDomain#window_start_time}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_off_peak_window` <a name="reset_off_peak_window" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resetOffPeakWindow"></a>

```python
def reset_off_peak_window() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.offPeakWindow">off_peak_window</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.offPeakWindowInput">off_peak_window_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions">OpensearchserviceDomainOffPeakWindowOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `off_peak_window`<sup>Required</sup> <a name="off_peak_window" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.offPeakWindow"></a>

```python
off_peak_window: OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `off_peak_window_input`<sup>Optional</sup> <a name="off_peak_window_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.offPeakWindowInput"></a>

```python
off_peak_window_input: IResolvable | OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainOffPeakWindowOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions">OpensearchserviceDomainOffPeakWindowOptions</a>

---


### OpensearchserviceDomainServiceSoftwareOptionsOutputReference <a name="OpensearchserviceDomainServiceSoftwareOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.automatedUpdateDate">automated_update_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.cancellable">cancellable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.currentVersion">current_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.newVersion">new_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.optionalDeployment">optional_deployment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.updateAvailable">update_available</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.updateStatus">update_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptions">OpensearchserviceDomainServiceSoftwareOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `automated_update_date`<sup>Required</sup> <a name="automated_update_date" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.automatedUpdateDate"></a>

```python
automated_update_date: str
```

- *Type:* str

---

##### `cancellable`<sup>Required</sup> <a name="cancellable" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.cancellable"></a>

```python
cancellable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `current_version`<sup>Required</sup> <a name="current_version" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.currentVersion"></a>

```python
current_version: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `new_version`<sup>Required</sup> <a name="new_version" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.newVersion"></a>

```python
new_version: str
```

- *Type:* str

---

##### `optional_deployment`<sup>Required</sup> <a name="optional_deployment" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.optionalDeployment"></a>

```python
optional_deployment: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `update_available`<sup>Required</sup> <a name="update_available" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.updateAvailable"></a>

```python
update_available: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `update_status`<sup>Required</sup> <a name="update_status" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.updateStatus"></a>

```python
update_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.internalValue"></a>

```python
internal_value: OpensearchserviceDomainServiceSoftwareOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptions">OpensearchserviceDomainServiceSoftwareOptions</a>

---


### OpensearchserviceDomainSnapshotOptionsOutputReference <a name="OpensearchserviceDomainSnapshotOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.resetAutomatedSnapshotStartHour">reset_automated_snapshot_start_hour</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_automated_snapshot_start_hour` <a name="reset_automated_snapshot_start_hour" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.resetAutomatedSnapshotStartHour"></a>

```python
def reset_automated_snapshot_start_hour() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHourInput">automated_snapshot_start_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour">automated_snapshot_start_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions">OpensearchserviceDomainSnapshotOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `automated_snapshot_start_hour_input`<sup>Optional</sup> <a name="automated_snapshot_start_hour_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHourInput"></a>

```python
automated_snapshot_start_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `automated_snapshot_start_hour`<sup>Required</sup> <a name="automated_snapshot_start_hour" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour"></a>

```python
automated_snapshot_start_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainSnapshotOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions">OpensearchserviceDomainSnapshotOptions</a>

---


### OpensearchserviceDomainSoftwareUpdateOptionsOutputReference <a name="OpensearchserviceDomainSoftwareUpdateOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resetAutoSoftwareUpdateEnabled">reset_auto_software_update_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resetUseLatestServiceSoftwareForBlueGreen">reset_use_latest_service_software_for_blue_green</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_software_update_enabled` <a name="reset_auto_software_update_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resetAutoSoftwareUpdateEnabled"></a>

```python
def reset_auto_software_update_enabled() -> None
```

##### `reset_use_latest_service_software_for_blue_green` <a name="reset_use_latest_service_software_for_blue_green" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resetUseLatestServiceSoftwareForBlueGreen"></a>

```python
def reset_use_latest_service_software_for_blue_green() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.autoSoftwareUpdateEnabledInput">auto_software_update_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.useLatestServiceSoftwareForBlueGreenInput">use_latest_service_software_for_blue_green_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.autoSoftwareUpdateEnabled">auto_software_update_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.useLatestServiceSoftwareForBlueGreen">use_latest_service_software_for_blue_green</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions">OpensearchserviceDomainSoftwareUpdateOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_software_update_enabled_input`<sup>Optional</sup> <a name="auto_software_update_enabled_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.autoSoftwareUpdateEnabledInput"></a>

```python
auto_software_update_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `use_latest_service_software_for_blue_green_input`<sup>Optional</sup> <a name="use_latest_service_software_for_blue_green_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.useLatestServiceSoftwareForBlueGreenInput"></a>

```python
use_latest_service_software_for_blue_green_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `auto_software_update_enabled`<sup>Required</sup> <a name="auto_software_update_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.autoSoftwareUpdateEnabled"></a>

```python
auto_software_update_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `use_latest_service_software_for_blue_green`<sup>Required</sup> <a name="use_latest_service_software_for_blue_green" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.useLatestServiceSoftwareForBlueGreen"></a>

```python
use_latest_service_software_for_blue_green: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainSoftwareUpdateOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions">OpensearchserviceDomainSoftwareUpdateOptions</a>

---


### OpensearchserviceDomainTagsList <a name="OpensearchserviceDomainTagsList" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpensearchserviceDomainTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OpensearchserviceDomainTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>]

---


### OpensearchserviceDomainTagsOutputReference <a name="OpensearchserviceDomainTagsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>

---


### OpensearchserviceDomainVpcOptionsOutputReference <a name="OpensearchserviceDomainVpcOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchservice_domain

opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resetEgressEnabled">reset_egress_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_egress_enabled` <a name="reset_egress_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resetEgressEnabled"></a>

```python
def reset_egress_enabled() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.egressEnabledInput">egress_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.egressEnabled">egress_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions">OpensearchserviceDomainVpcOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `egress_enabled_input`<sup>Optional</sup> <a name="egress_enabled_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.egressEnabledInput"></a>

```python
egress_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `egress_enabled`<sup>Required</sup> <a name="egress_enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.egressEnabled"></a>

```python
egress_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserviceDomainVpcOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions">OpensearchserviceDomainVpcOptions</a>

---



