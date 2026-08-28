# `opensearchserviceDomain` Submodule <a name="`opensearchserviceDomain` Submodule" id="@cdktn/provider-awscc.opensearchserviceDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserviceDomain <a name="OpensearchserviceDomain" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain awscc_opensearchservice_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomain;

OpensearchserviceDomain.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accessPolicies(java.lang.String)
//  .advancedOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .advancedSecurityOptions(OpensearchserviceDomainAdvancedSecurityOptions)
//  .aimlOptions(OpensearchserviceDomainAimlOptions)
//  .automatedSnapshotPauseOptions(OpensearchserviceDomainAutomatedSnapshotPauseOptions)
//  .clusterConfig(OpensearchserviceDomainClusterConfig)
//  .cognitoOptions(OpensearchserviceDomainCognitoOptions)
//  .deploymentStrategyOptions(OpensearchserviceDomainDeploymentStrategyOptions)
//  .domainEndpointOptions(OpensearchserviceDomainDomainEndpointOptions)
//  .domainName(java.lang.String)
//  .ebsOptions(OpensearchserviceDomainEbsOptions)
//  .encryptionAtRestOptions(OpensearchserviceDomainEncryptionAtRestOptions)
//  .engineMode(java.lang.String)
//  .engineVersion(java.lang.String)
//  .identityCenterOptions(OpensearchserviceDomainIdentityCenterOptions)
//  .ipAddressType(java.lang.String)
//  .logPublishingOptions(IResolvable|java.util.Map<java.lang.String, OpensearchserviceDomainLogPublishingOptions>)
//  .nodeToNodeEncryptionOptions(OpensearchserviceDomainNodeToNodeEncryptionOptions)
//  .offPeakWindowOptions(OpensearchserviceDomainOffPeakWindowOptions)
//  .skipShardMigrationWait(java.lang.Boolean|IResolvable)
//  .snapshotOptions(OpensearchserviceDomainSnapshotOptions)
//  .softwareUpdateOptions(OpensearchserviceDomainSoftwareUpdateOptions)
//  .tags(IResolvable|java.util.List<OpensearchserviceDomainTags>)
//  .useCase(java.lang.String)
//  .vpcOptions(OpensearchserviceDomainVpcOptions)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.accessPolicies">accessPolicies</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#access_policies OpensearchserviceDomain#access_policies}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.advancedOptions">advancedOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#advanced_options OpensearchserviceDomain#advanced_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.advancedSecurityOptions">advancedSecurityOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions">OpensearchserviceDomainAdvancedSecurityOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#advanced_security_options OpensearchserviceDomain#advanced_security_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.aimlOptions">aimlOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions">OpensearchserviceDomainAimlOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#aiml_options OpensearchserviceDomain#aiml_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.automatedSnapshotPauseOptions">automatedSnapshotPauseOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions">OpensearchserviceDomainAutomatedSnapshotPauseOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#automated_snapshot_pause_options OpensearchserviceDomain#automated_snapshot_pause_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.clusterConfig">clusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig">OpensearchserviceDomainClusterConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#cluster_config OpensearchserviceDomain#cluster_config}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.cognitoOptions">cognitoOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions">OpensearchserviceDomainCognitoOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#cognito_options OpensearchserviceDomain#cognito_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.deploymentStrategyOptions">deploymentStrategyOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions">OpensearchserviceDomainDeploymentStrategyOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#deployment_strategy_options OpensearchserviceDomain#deployment_strategy_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.domainEndpointOptions">domainEndpointOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions">OpensearchserviceDomainDomainEndpointOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#domain_endpoint_options OpensearchserviceDomain#domain_endpoint_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#domain_name OpensearchserviceDomain#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.ebsOptions">ebsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions">OpensearchserviceDomainEbsOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#ebs_options OpensearchserviceDomain#ebs_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.encryptionAtRestOptions">encryptionAtRestOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions">OpensearchserviceDomainEncryptionAtRestOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#encryption_at_rest_options OpensearchserviceDomain#encryption_at_rest_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.engineMode">engineMode</a></code> | <code>java.lang.String</code> | The engine mode of the domain. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#engine_version OpensearchserviceDomain#engine_version}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.identityCenterOptions">identityCenterOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions">OpensearchserviceDomainIdentityCenterOptions</a></code> | Options for configuring Identity Center. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#ip_address_type OpensearchserviceDomain#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.logPublishingOptions">logPublishingOptions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#log_publishing_options OpensearchserviceDomain#log_publishing_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.nodeToNodeEncryptionOptions">nodeToNodeEncryptionOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions">OpensearchserviceDomainNodeToNodeEncryptionOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#node_to_node_encryption_options OpensearchserviceDomain#node_to_node_encryption_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.offPeakWindowOptions">offPeakWindowOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions">OpensearchserviceDomainOffPeakWindowOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#off_peak_window_options OpensearchserviceDomain#off_peak_window_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.skipShardMigrationWait">skipShardMigrationWait</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#skip_shard_migration_wait OpensearchserviceDomain#skip_shard_migration_wait}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.snapshotOptions">snapshotOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions">OpensearchserviceDomainSnapshotOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#snapshot_options OpensearchserviceDomain#snapshot_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.softwareUpdateOptions">softwareUpdateOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions">OpensearchserviceDomainSoftwareUpdateOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#software_update_options OpensearchserviceDomain#software_update_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>></code> | An arbitrary set of tags (key-value pairs) for this Domain. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.useCase">useCase</a></code> | <code>java.lang.String</code> | The primary use case of the domain. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.vpcOptions">vpcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions">OpensearchserviceDomainVpcOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#vpc_options OpensearchserviceDomain#vpc_options}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessPolicies`<sup>Optional</sup> <a name="accessPolicies" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.accessPolicies"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#access_policies OpensearchserviceDomain#access_policies}.

---

##### `advancedOptions`<sup>Optional</sup> <a name="advancedOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.advancedOptions"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#advanced_options OpensearchserviceDomain#advanced_options}.

---

##### `advancedSecurityOptions`<sup>Optional</sup> <a name="advancedSecurityOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.advancedSecurityOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions">OpensearchserviceDomainAdvancedSecurityOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#advanced_security_options OpensearchserviceDomain#advanced_security_options}.

---

##### `aimlOptions`<sup>Optional</sup> <a name="aimlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.aimlOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions">OpensearchserviceDomainAimlOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#aiml_options OpensearchserviceDomain#aiml_options}.

---

##### `automatedSnapshotPauseOptions`<sup>Optional</sup> <a name="automatedSnapshotPauseOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.automatedSnapshotPauseOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions">OpensearchserviceDomainAutomatedSnapshotPauseOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#automated_snapshot_pause_options OpensearchserviceDomain#automated_snapshot_pause_options}.

---

##### `clusterConfig`<sup>Optional</sup> <a name="clusterConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.clusterConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig">OpensearchserviceDomainClusterConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#cluster_config OpensearchserviceDomain#cluster_config}.

---

##### `cognitoOptions`<sup>Optional</sup> <a name="cognitoOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.cognitoOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions">OpensearchserviceDomainCognitoOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#cognito_options OpensearchserviceDomain#cognito_options}.

---

##### `deploymentStrategyOptions`<sup>Optional</sup> <a name="deploymentStrategyOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.deploymentStrategyOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions">OpensearchserviceDomainDeploymentStrategyOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#deployment_strategy_options OpensearchserviceDomain#deployment_strategy_options}.

---

##### `domainEndpointOptions`<sup>Optional</sup> <a name="domainEndpointOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.domainEndpointOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions">OpensearchserviceDomainDomainEndpointOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#domain_endpoint_options OpensearchserviceDomain#domain_endpoint_options}.

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#domain_name OpensearchserviceDomain#domain_name}.

---

##### `ebsOptions`<sup>Optional</sup> <a name="ebsOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.ebsOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions">OpensearchserviceDomainEbsOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#ebs_options OpensearchserviceDomain#ebs_options}.

---

##### `encryptionAtRestOptions`<sup>Optional</sup> <a name="encryptionAtRestOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.encryptionAtRestOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions">OpensearchserviceDomainEncryptionAtRestOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#encryption_at_rest_options OpensearchserviceDomain#encryption_at_rest_options}.

---

##### `engineMode`<sup>Optional</sup> <a name="engineMode" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.engineMode"></a>

- *Type:* java.lang.String

The engine mode of the domain.

Determines whether the domain runs the standard (GENERAL) engine or the optimized multi-engine (OPTIMIZED) engine. This value cannot be changed after the domain is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#engine_mode OpensearchserviceDomain#engine_mode}

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.engineVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#engine_version OpensearchserviceDomain#engine_version}.

---

##### `identityCenterOptions`<sup>Optional</sup> <a name="identityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.identityCenterOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions">OpensearchserviceDomainIdentityCenterOptions</a>

Options for configuring Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#identity_center_options OpensearchserviceDomain#identity_center_options}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.ipAddressType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#ip_address_type OpensearchserviceDomain#ip_address_type}.

---

##### `logPublishingOptions`<sup>Optional</sup> <a name="logPublishingOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.logPublishingOptions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#log_publishing_options OpensearchserviceDomain#log_publishing_options}.

---

##### `nodeToNodeEncryptionOptions`<sup>Optional</sup> <a name="nodeToNodeEncryptionOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.nodeToNodeEncryptionOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions">OpensearchserviceDomainNodeToNodeEncryptionOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#node_to_node_encryption_options OpensearchserviceDomain#node_to_node_encryption_options}.

---

##### `offPeakWindowOptions`<sup>Optional</sup> <a name="offPeakWindowOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.offPeakWindowOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions">OpensearchserviceDomainOffPeakWindowOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#off_peak_window_options OpensearchserviceDomain#off_peak_window_options}.

---

##### `skipShardMigrationWait`<sup>Optional</sup> <a name="skipShardMigrationWait" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.skipShardMigrationWait"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#skip_shard_migration_wait OpensearchserviceDomain#skip_shard_migration_wait}.

---

##### `snapshotOptions`<sup>Optional</sup> <a name="snapshotOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.snapshotOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions">OpensearchserviceDomainSnapshotOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#snapshot_options OpensearchserviceDomain#snapshot_options}.

---

##### `softwareUpdateOptions`<sup>Optional</sup> <a name="softwareUpdateOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.softwareUpdateOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions">OpensearchserviceDomainSoftwareUpdateOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#software_update_options OpensearchserviceDomain#software_update_options}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>>

An arbitrary set of tags (key-value pairs) for this Domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#tags OpensearchserviceDomain#tags}

---

##### `useCase`<sup>Optional</sup> <a name="useCase" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.useCase"></a>

- *Type:* java.lang.String

The primary use case of the domain.

Determines the default configuration tuned for the workload. For GENERAL engine-mode domains, this value can be changed after creation. For OPTIMIZED engine-mode domains, this value cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#use_case OpensearchserviceDomain#use_case}

---

##### `vpcOptions`<sup>Optional</sup> <a name="vpcOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.vpcOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions">OpensearchserviceDomainVpcOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#vpc_options OpensearchserviceDomain#vpc_options}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAdvancedSecurityOptions">putAdvancedSecurityOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAimlOptions">putAimlOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAutomatedSnapshotPauseOptions">putAutomatedSnapshotPauseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putClusterConfig">putClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putCognitoOptions">putCognitoOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDeploymentStrategyOptions">putDeploymentStrategyOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDomainEndpointOptions">putDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEbsOptions">putEbsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEncryptionAtRestOptions">putEncryptionAtRestOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putIdentityCenterOptions">putIdentityCenterOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putLogPublishingOptions">putLogPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putNodeToNodeEncryptionOptions">putNodeToNodeEncryptionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putOffPeakWindowOptions">putOffPeakWindowOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putSnapshotOptions">putSnapshotOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putSoftwareUpdateOptions">putSoftwareUpdateOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putVpcOptions">putVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAccessPolicies">resetAccessPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAdvancedOptions">resetAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAdvancedSecurityOptions">resetAdvancedSecurityOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAimlOptions">resetAimlOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAutomatedSnapshotPauseOptions">resetAutomatedSnapshotPauseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetClusterConfig">resetClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetCognitoOptions">resetCognitoOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetDeploymentStrategyOptions">resetDeploymentStrategyOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetDomainEndpointOptions">resetDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetDomainName">resetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEbsOptions">resetEbsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEncryptionAtRestOptions">resetEncryptionAtRestOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEngineMode">resetEngineMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetIdentityCenterOptions">resetIdentityCenterOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetLogPublishingOptions">resetLogPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetNodeToNodeEncryptionOptions">resetNodeToNodeEncryptionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetOffPeakWindowOptions">resetOffPeakWindowOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetSkipShardMigrationWait">resetSkipShardMigrationWait</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetSnapshotOptions">resetSnapshotOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetSoftwareUpdateOptions">resetSoftwareUpdateOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetUseCase">resetUseCase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetVpcOptions">resetVpcOptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdvancedSecurityOptions` <a name="putAdvancedSecurityOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAdvancedSecurityOptions"></a>

```java
public void putAdvancedSecurityOptions(OpensearchserviceDomainAdvancedSecurityOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAdvancedSecurityOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions">OpensearchserviceDomainAdvancedSecurityOptions</a>

---

##### `putAimlOptions` <a name="putAimlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAimlOptions"></a>

```java
public void putAimlOptions(OpensearchserviceDomainAimlOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAimlOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions">OpensearchserviceDomainAimlOptions</a>

---

##### `putAutomatedSnapshotPauseOptions` <a name="putAutomatedSnapshotPauseOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAutomatedSnapshotPauseOptions"></a>

```java
public void putAutomatedSnapshotPauseOptions(OpensearchserviceDomainAutomatedSnapshotPauseOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAutomatedSnapshotPauseOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions">OpensearchserviceDomainAutomatedSnapshotPauseOptions</a>

---

##### `putClusterConfig` <a name="putClusterConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putClusterConfig"></a>

```java
public void putClusterConfig(OpensearchserviceDomainClusterConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig">OpensearchserviceDomainClusterConfig</a>

---

##### `putCognitoOptions` <a name="putCognitoOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putCognitoOptions"></a>

```java
public void putCognitoOptions(OpensearchserviceDomainCognitoOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putCognitoOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions">OpensearchserviceDomainCognitoOptions</a>

---

##### `putDeploymentStrategyOptions` <a name="putDeploymentStrategyOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDeploymentStrategyOptions"></a>

```java
public void putDeploymentStrategyOptions(OpensearchserviceDomainDeploymentStrategyOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDeploymentStrategyOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions">OpensearchserviceDomainDeploymentStrategyOptions</a>

---

##### `putDomainEndpointOptions` <a name="putDomainEndpointOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDomainEndpointOptions"></a>

```java
public void putDomainEndpointOptions(OpensearchserviceDomainDomainEndpointOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDomainEndpointOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions">OpensearchserviceDomainDomainEndpointOptions</a>

---

##### `putEbsOptions` <a name="putEbsOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEbsOptions"></a>

```java
public void putEbsOptions(OpensearchserviceDomainEbsOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEbsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions">OpensearchserviceDomainEbsOptions</a>

---

##### `putEncryptionAtRestOptions` <a name="putEncryptionAtRestOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEncryptionAtRestOptions"></a>

```java
public void putEncryptionAtRestOptions(OpensearchserviceDomainEncryptionAtRestOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEncryptionAtRestOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions">OpensearchserviceDomainEncryptionAtRestOptions</a>

---

##### `putIdentityCenterOptions` <a name="putIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putIdentityCenterOptions"></a>

```java
public void putIdentityCenterOptions(OpensearchserviceDomainIdentityCenterOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putIdentityCenterOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions">OpensearchserviceDomainIdentityCenterOptions</a>

---

##### `putLogPublishingOptions` <a name="putLogPublishingOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putLogPublishingOptions"></a>

```java
public void putLogPublishingOptions(IResolvable|java.util.Map<java.lang.String, OpensearchserviceDomainLogPublishingOptions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putLogPublishingOptions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>>

---

##### `putNodeToNodeEncryptionOptions` <a name="putNodeToNodeEncryptionOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putNodeToNodeEncryptionOptions"></a>

```java
public void putNodeToNodeEncryptionOptions(OpensearchserviceDomainNodeToNodeEncryptionOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putNodeToNodeEncryptionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions">OpensearchserviceDomainNodeToNodeEncryptionOptions</a>

---

##### `putOffPeakWindowOptions` <a name="putOffPeakWindowOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putOffPeakWindowOptions"></a>

```java
public void putOffPeakWindowOptions(OpensearchserviceDomainOffPeakWindowOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putOffPeakWindowOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions">OpensearchserviceDomainOffPeakWindowOptions</a>

---

##### `putSnapshotOptions` <a name="putSnapshotOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putSnapshotOptions"></a>

```java
public void putSnapshotOptions(OpensearchserviceDomainSnapshotOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putSnapshotOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions">OpensearchserviceDomainSnapshotOptions</a>

---

##### `putSoftwareUpdateOptions` <a name="putSoftwareUpdateOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putSoftwareUpdateOptions"></a>

```java
public void putSoftwareUpdateOptions(OpensearchserviceDomainSoftwareUpdateOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putSoftwareUpdateOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions">OpensearchserviceDomainSoftwareUpdateOptions</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<OpensearchserviceDomainTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>>

---

##### `putVpcOptions` <a name="putVpcOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putVpcOptions"></a>

```java
public void putVpcOptions(OpensearchserviceDomainVpcOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putVpcOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions">OpensearchserviceDomainVpcOptions</a>

---

##### `resetAccessPolicies` <a name="resetAccessPolicies" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAccessPolicies"></a>

```java
public void resetAccessPolicies()
```

##### `resetAdvancedOptions` <a name="resetAdvancedOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAdvancedOptions"></a>

```java
public void resetAdvancedOptions()
```

##### `resetAdvancedSecurityOptions` <a name="resetAdvancedSecurityOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAdvancedSecurityOptions"></a>

```java
public void resetAdvancedSecurityOptions()
```

##### `resetAimlOptions` <a name="resetAimlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAimlOptions"></a>

```java
public void resetAimlOptions()
```

##### `resetAutomatedSnapshotPauseOptions` <a name="resetAutomatedSnapshotPauseOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAutomatedSnapshotPauseOptions"></a>

```java
public void resetAutomatedSnapshotPauseOptions()
```

##### `resetClusterConfig` <a name="resetClusterConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetClusterConfig"></a>

```java
public void resetClusterConfig()
```

##### `resetCognitoOptions` <a name="resetCognitoOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetCognitoOptions"></a>

```java
public void resetCognitoOptions()
```

##### `resetDeploymentStrategyOptions` <a name="resetDeploymentStrategyOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetDeploymentStrategyOptions"></a>

```java
public void resetDeploymentStrategyOptions()
```

##### `resetDomainEndpointOptions` <a name="resetDomainEndpointOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetDomainEndpointOptions"></a>

```java
public void resetDomainEndpointOptions()
```

##### `resetDomainName` <a name="resetDomainName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetDomainName"></a>

```java
public void resetDomainName()
```

##### `resetEbsOptions` <a name="resetEbsOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEbsOptions"></a>

```java
public void resetEbsOptions()
```

##### `resetEncryptionAtRestOptions` <a name="resetEncryptionAtRestOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEncryptionAtRestOptions"></a>

```java
public void resetEncryptionAtRestOptions()
```

##### `resetEngineMode` <a name="resetEngineMode" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEngineMode"></a>

```java
public void resetEngineMode()
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEngineVersion"></a>

```java
public void resetEngineVersion()
```

##### `resetIdentityCenterOptions` <a name="resetIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetIdentityCenterOptions"></a>

```java
public void resetIdentityCenterOptions()
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetIpAddressType"></a>

```java
public void resetIpAddressType()
```

##### `resetLogPublishingOptions` <a name="resetLogPublishingOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetLogPublishingOptions"></a>

```java
public void resetLogPublishingOptions()
```

##### `resetNodeToNodeEncryptionOptions` <a name="resetNodeToNodeEncryptionOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetNodeToNodeEncryptionOptions"></a>

```java
public void resetNodeToNodeEncryptionOptions()
```

##### `resetOffPeakWindowOptions` <a name="resetOffPeakWindowOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetOffPeakWindowOptions"></a>

```java
public void resetOffPeakWindowOptions()
```

##### `resetSkipShardMigrationWait` <a name="resetSkipShardMigrationWait" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetSkipShardMigrationWait"></a>

```java
public void resetSkipShardMigrationWait()
```

##### `resetSnapshotOptions` <a name="resetSnapshotOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetSnapshotOptions"></a>

```java
public void resetSnapshotOptions()
```

##### `resetSoftwareUpdateOptions` <a name="resetSoftwareUpdateOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetSoftwareUpdateOptions"></a>

```java
public void resetSoftwareUpdateOptions()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetTags"></a>

```java
public void resetTags()
```

##### `resetUseCase` <a name="resetUseCase" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetUseCase"></a>

```java
public void resetUseCase()
```

##### `resetVpcOptions` <a name="resetVpcOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetVpcOptions"></a>

```java
public void resetVpcOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OpensearchserviceDomain resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isConstruct"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomain;

OpensearchserviceDomain.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomain;

OpensearchserviceDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomain;

OpensearchserviceDomain.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomain;

OpensearchserviceDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OpensearchserviceDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OpensearchserviceDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OpensearchserviceDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OpensearchserviceDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchserviceDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedSecurityOptions">advancedSecurityOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.aimlOptions">aimlOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference">OpensearchserviceDomainAimlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.automatedSnapshotPauseOptions">automatedSnapshotPauseOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference">OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.clusterConfig">clusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference">OpensearchserviceDomainClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.cognitoOptions">cognitoOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference">OpensearchserviceDomainCognitoOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.deploymentStrategyOptions">deploymentStrategyOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference">OpensearchserviceDomainDeploymentStrategyOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainArn">domainArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpoint">domainEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpointOptions">domainEndpointOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference">OpensearchserviceDomainDomainEndpointOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpoints">domainEndpoints</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpointV2">domainEndpointV2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ebsOptions">ebsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference">OpensearchserviceDomainEbsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.encryptionAtRestOptions">encryptionAtRestOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference">OpensearchserviceDomainEncryptionAtRestOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.identityCenterOptions">identityCenterOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference">OpensearchserviceDomainIdentityCenterOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.logPublishingOptions">logPublishingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap">OpensearchserviceDomainLogPublishingOptionsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.nodeToNodeEncryptionOptions">nodeToNodeEncryptionOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference">OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.offPeakWindowOptions">offPeakWindowOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference">OpensearchserviceDomainOffPeakWindowOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.serviceSoftwareOptions">serviceSoftwareOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference">OpensearchserviceDomainServiceSoftwareOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.snapshotOptions">snapshotOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference">OpensearchserviceDomainSnapshotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.softwareUpdateOptions">softwareUpdateOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference">OpensearchserviceDomainSoftwareUpdateOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList">OpensearchserviceDomainTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.vpcOptions">vpcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference">OpensearchserviceDomainVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.accessPoliciesInput">accessPoliciesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedOptionsInput">advancedOptionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedSecurityOptionsInput">advancedSecurityOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions">OpensearchserviceDomainAdvancedSecurityOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.aimlOptionsInput">aimlOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions">OpensearchserviceDomainAimlOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.automatedSnapshotPauseOptionsInput">automatedSnapshotPauseOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions">OpensearchserviceDomainAutomatedSnapshotPauseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.clusterConfigInput">clusterConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig">OpensearchserviceDomainClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.cognitoOptionsInput">cognitoOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions">OpensearchserviceDomainCognitoOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.deploymentStrategyOptionsInput">deploymentStrategyOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions">OpensearchserviceDomainDeploymentStrategyOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpointOptionsInput">domainEndpointOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions">OpensearchserviceDomainDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ebsOptionsInput">ebsOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions">OpensearchserviceDomainEbsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.encryptionAtRestOptionsInput">encryptionAtRestOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions">OpensearchserviceDomainEncryptionAtRestOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineModeInput">engineModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineVersionInput">engineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.identityCenterOptionsInput">identityCenterOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions">OpensearchserviceDomainIdentityCenterOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.logPublishingOptionsInput">logPublishingOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.nodeToNodeEncryptionOptionsInput">nodeToNodeEncryptionOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions">OpensearchserviceDomainNodeToNodeEncryptionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.offPeakWindowOptionsInput">offPeakWindowOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions">OpensearchserviceDomainOffPeakWindowOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.skipShardMigrationWaitInput">skipShardMigrationWaitInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.snapshotOptionsInput">snapshotOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions">OpensearchserviceDomainSnapshotOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.softwareUpdateOptionsInput">softwareUpdateOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions">OpensearchserviceDomainSoftwareUpdateOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.useCaseInput">useCaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.vpcOptionsInput">vpcOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions">OpensearchserviceDomainVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.accessPolicies">accessPolicies</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedOptions">advancedOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineMode">engineMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.skipShardMigrationWait">skipShardMigrationWait</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.useCase">useCase</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `advancedSecurityOptions`<sup>Required</sup> <a name="advancedSecurityOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedSecurityOptions"></a>

```java
public OpensearchserviceDomainAdvancedSecurityOptionsOutputReference getAdvancedSecurityOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsOutputReference</a>

---

##### `aimlOptions`<sup>Required</sup> <a name="aimlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.aimlOptions"></a>

```java
public OpensearchserviceDomainAimlOptionsOutputReference getAimlOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference">OpensearchserviceDomainAimlOptionsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `automatedSnapshotPauseOptions`<sup>Required</sup> <a name="automatedSnapshotPauseOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.automatedSnapshotPauseOptions"></a>

```java
public OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference getAutomatedSnapshotPauseOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference">OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference</a>

---

##### `clusterConfig`<sup>Required</sup> <a name="clusterConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.clusterConfig"></a>

```java
public OpensearchserviceDomainClusterConfigOutputReference getClusterConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference">OpensearchserviceDomainClusterConfigOutputReference</a>

---

##### `cognitoOptions`<sup>Required</sup> <a name="cognitoOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.cognitoOptions"></a>

```java
public OpensearchserviceDomainCognitoOptionsOutputReference getCognitoOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference">OpensearchserviceDomainCognitoOptionsOutputReference</a>

---

##### `deploymentStrategyOptions`<sup>Required</sup> <a name="deploymentStrategyOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.deploymentStrategyOptions"></a>

```java
public OpensearchserviceDomainDeploymentStrategyOptionsOutputReference getDeploymentStrategyOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference">OpensearchserviceDomainDeploymentStrategyOptionsOutputReference</a>

---

##### `domainArn`<sup>Required</sup> <a name="domainArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainArn"></a>

```java
public java.lang.String getDomainArn();
```

- *Type:* java.lang.String

---

##### `domainEndpoint`<sup>Required</sup> <a name="domainEndpoint" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpoint"></a>

```java
public java.lang.String getDomainEndpoint();
```

- *Type:* java.lang.String

---

##### `domainEndpointOptions`<sup>Required</sup> <a name="domainEndpointOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpointOptions"></a>

```java
public OpensearchserviceDomainDomainEndpointOptionsOutputReference getDomainEndpointOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference">OpensearchserviceDomainDomainEndpointOptionsOutputReference</a>

---

##### `domainEndpoints`<sup>Required</sup> <a name="domainEndpoints" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpoints"></a>

```java
public StringMap getDomainEndpoints();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `domainEndpointV2`<sup>Required</sup> <a name="domainEndpointV2" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpointV2"></a>

```java
public java.lang.String getDomainEndpointV2();
```

- *Type:* java.lang.String

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `ebsOptions`<sup>Required</sup> <a name="ebsOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ebsOptions"></a>

```java
public OpensearchserviceDomainEbsOptionsOutputReference getEbsOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference">OpensearchserviceDomainEbsOptionsOutputReference</a>

---

##### `encryptionAtRestOptions`<sup>Required</sup> <a name="encryptionAtRestOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.encryptionAtRestOptions"></a>

```java
public OpensearchserviceDomainEncryptionAtRestOptionsOutputReference getEncryptionAtRestOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference">OpensearchserviceDomainEncryptionAtRestOptionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityCenterOptions`<sup>Required</sup> <a name="identityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.identityCenterOptions"></a>

```java
public OpensearchserviceDomainIdentityCenterOptionsOutputReference getIdentityCenterOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference">OpensearchserviceDomainIdentityCenterOptionsOutputReference</a>

---

##### `logPublishingOptions`<sup>Required</sup> <a name="logPublishingOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.logPublishingOptions"></a>

```java
public OpensearchserviceDomainLogPublishingOptionsMap getLogPublishingOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap">OpensearchserviceDomainLogPublishingOptionsMap</a>

---

##### `nodeToNodeEncryptionOptions`<sup>Required</sup> <a name="nodeToNodeEncryptionOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.nodeToNodeEncryptionOptions"></a>

```java
public OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference getNodeToNodeEncryptionOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference">OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference</a>

---

##### `offPeakWindowOptions`<sup>Required</sup> <a name="offPeakWindowOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.offPeakWindowOptions"></a>

```java
public OpensearchserviceDomainOffPeakWindowOptionsOutputReference getOffPeakWindowOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference">OpensearchserviceDomainOffPeakWindowOptionsOutputReference</a>

---

##### `serviceSoftwareOptions`<sup>Required</sup> <a name="serviceSoftwareOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.serviceSoftwareOptions"></a>

```java
public OpensearchserviceDomainServiceSoftwareOptionsOutputReference getServiceSoftwareOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference">OpensearchserviceDomainServiceSoftwareOptionsOutputReference</a>

---

##### `snapshotOptions`<sup>Required</sup> <a name="snapshotOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.snapshotOptions"></a>

```java
public OpensearchserviceDomainSnapshotOptionsOutputReference getSnapshotOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference">OpensearchserviceDomainSnapshotOptionsOutputReference</a>

---

##### `softwareUpdateOptions`<sup>Required</sup> <a name="softwareUpdateOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.softwareUpdateOptions"></a>

```java
public OpensearchserviceDomainSoftwareUpdateOptionsOutputReference getSoftwareUpdateOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference">OpensearchserviceDomainSoftwareUpdateOptionsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.tags"></a>

```java
public OpensearchserviceDomainTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList">OpensearchserviceDomainTagsList</a>

---

##### `vpcOptions`<sup>Required</sup> <a name="vpcOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.vpcOptions"></a>

```java
public OpensearchserviceDomainVpcOptionsOutputReference getVpcOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference">OpensearchserviceDomainVpcOptionsOutputReference</a>

---

##### `accessPoliciesInput`<sup>Optional</sup> <a name="accessPoliciesInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.accessPoliciesInput"></a>

```java
public java.lang.String getAccessPoliciesInput();
```

- *Type:* java.lang.String

---

##### `advancedOptionsInput`<sup>Optional</sup> <a name="advancedOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedOptionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdvancedOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `advancedSecurityOptionsInput`<sup>Optional</sup> <a name="advancedSecurityOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedSecurityOptionsInput"></a>

```java
public IResolvable|OpensearchserviceDomainAdvancedSecurityOptions getAdvancedSecurityOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions">OpensearchserviceDomainAdvancedSecurityOptions</a>

---

##### `aimlOptionsInput`<sup>Optional</sup> <a name="aimlOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.aimlOptionsInput"></a>

```java
public IResolvable|OpensearchserviceDomainAimlOptions getAimlOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions">OpensearchserviceDomainAimlOptions</a>

---

##### `automatedSnapshotPauseOptionsInput`<sup>Optional</sup> <a name="automatedSnapshotPauseOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.automatedSnapshotPauseOptionsInput"></a>

```java
public IResolvable|OpensearchserviceDomainAutomatedSnapshotPauseOptions getAutomatedSnapshotPauseOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions">OpensearchserviceDomainAutomatedSnapshotPauseOptions</a>

---

##### `clusterConfigInput`<sup>Optional</sup> <a name="clusterConfigInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.clusterConfigInput"></a>

```java
public IResolvable|OpensearchserviceDomainClusterConfig getClusterConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig">OpensearchserviceDomainClusterConfig</a>

---

##### `cognitoOptionsInput`<sup>Optional</sup> <a name="cognitoOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.cognitoOptionsInput"></a>

```java
public IResolvable|OpensearchserviceDomainCognitoOptions getCognitoOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions">OpensearchserviceDomainCognitoOptions</a>

---

##### `deploymentStrategyOptionsInput`<sup>Optional</sup> <a name="deploymentStrategyOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.deploymentStrategyOptionsInput"></a>

```java
public IResolvable|OpensearchserviceDomainDeploymentStrategyOptions getDeploymentStrategyOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions">OpensearchserviceDomainDeploymentStrategyOptions</a>

---

##### `domainEndpointOptionsInput`<sup>Optional</sup> <a name="domainEndpointOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpointOptionsInput"></a>

```java
public IResolvable|OpensearchserviceDomainDomainEndpointOptions getDomainEndpointOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions">OpensearchserviceDomainDomainEndpointOptions</a>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `ebsOptionsInput`<sup>Optional</sup> <a name="ebsOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ebsOptionsInput"></a>

```java
public IResolvable|OpensearchserviceDomainEbsOptions getEbsOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions">OpensearchserviceDomainEbsOptions</a>

---

##### `encryptionAtRestOptionsInput`<sup>Optional</sup> <a name="encryptionAtRestOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.encryptionAtRestOptionsInput"></a>

```java
public IResolvable|OpensearchserviceDomainEncryptionAtRestOptions getEncryptionAtRestOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions">OpensearchserviceDomainEncryptionAtRestOptions</a>

---

##### `engineModeInput`<sup>Optional</sup> <a name="engineModeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineModeInput"></a>

```java
public java.lang.String getEngineModeInput();
```

- *Type:* java.lang.String

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineVersionInput"></a>

```java
public java.lang.String getEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `identityCenterOptionsInput`<sup>Optional</sup> <a name="identityCenterOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.identityCenterOptionsInput"></a>

```java
public IResolvable|OpensearchserviceDomainIdentityCenterOptions getIdentityCenterOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions">OpensearchserviceDomainIdentityCenterOptions</a>

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ipAddressTypeInput"></a>

```java
public java.lang.String getIpAddressTypeInput();
```

- *Type:* java.lang.String

---

##### `logPublishingOptionsInput`<sup>Optional</sup> <a name="logPublishingOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.logPublishingOptionsInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, OpensearchserviceDomainLogPublishingOptions> getLogPublishingOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>>

---

##### `nodeToNodeEncryptionOptionsInput`<sup>Optional</sup> <a name="nodeToNodeEncryptionOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.nodeToNodeEncryptionOptionsInput"></a>

```java
public IResolvable|OpensearchserviceDomainNodeToNodeEncryptionOptions getNodeToNodeEncryptionOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions">OpensearchserviceDomainNodeToNodeEncryptionOptions</a>

---

##### `offPeakWindowOptionsInput`<sup>Optional</sup> <a name="offPeakWindowOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.offPeakWindowOptionsInput"></a>

```java
public IResolvable|OpensearchserviceDomainOffPeakWindowOptions getOffPeakWindowOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions">OpensearchserviceDomainOffPeakWindowOptions</a>

---

##### `skipShardMigrationWaitInput`<sup>Optional</sup> <a name="skipShardMigrationWaitInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.skipShardMigrationWaitInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipShardMigrationWaitInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `snapshotOptionsInput`<sup>Optional</sup> <a name="snapshotOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.snapshotOptionsInput"></a>

```java
public IResolvable|OpensearchserviceDomainSnapshotOptions getSnapshotOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions">OpensearchserviceDomainSnapshotOptions</a>

---

##### `softwareUpdateOptionsInput`<sup>Optional</sup> <a name="softwareUpdateOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.softwareUpdateOptionsInput"></a>

```java
public IResolvable|OpensearchserviceDomainSoftwareUpdateOptions getSoftwareUpdateOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions">OpensearchserviceDomainSoftwareUpdateOptions</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.tagsInput"></a>

```java
public IResolvable|java.util.List<OpensearchserviceDomainTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>>

---

##### `useCaseInput`<sup>Optional</sup> <a name="useCaseInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.useCaseInput"></a>

```java
public java.lang.String getUseCaseInput();
```

- *Type:* java.lang.String

---

##### `vpcOptionsInput`<sup>Optional</sup> <a name="vpcOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.vpcOptionsInput"></a>

```java
public IResolvable|OpensearchserviceDomainVpcOptions getVpcOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions">OpensearchserviceDomainVpcOptions</a>

---

##### `accessPolicies`<sup>Required</sup> <a name="accessPolicies" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.accessPolicies"></a>

```java
public java.lang.String getAccessPolicies();
```

- *Type:* java.lang.String

---

##### `advancedOptions`<sup>Required</sup> <a name="advancedOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdvancedOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `engineMode`<sup>Required</sup> <a name="engineMode" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineMode"></a>

```java
public java.lang.String getEngineMode();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

---

##### `skipShardMigrationWait`<sup>Required</sup> <a name="skipShardMigrationWait" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.skipShardMigrationWait"></a>

```java
public java.lang.Boolean|IResolvable getSkipShardMigrationWait();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useCase`<sup>Required</sup> <a name="useCase" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.useCase"></a>

```java
public java.lang.String getUseCase();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserviceDomainAdvancedSecurityOptions <a name="OpensearchserviceDomainAdvancedSecurityOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainAdvancedSecurityOptions;

OpensearchserviceDomainAdvancedSecurityOptions.builder()
//  .anonymousAuthEnabled(java.lang.Boolean|IResolvable)
//  .enabled(java.lang.Boolean|IResolvable)
//  .iamFederationOptions(OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions)
//  .internalUserDatabaseEnabled(java.lang.Boolean|IResolvable)
//  .jwtOptions(OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions)
//  .masterUserOptions(OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions)
//  .samlOptions(OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.anonymousAuthEnabled">anonymousAuthEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#anonymous_auth_enabled OpensearchserviceDomain#anonymous_auth_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.iamFederationOptions">iamFederationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#iam_federation_options OpensearchserviceDomain#iam_federation_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.internalUserDatabaseEnabled">internalUserDatabaseEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#internal_user_database_enabled OpensearchserviceDomain#internal_user_database_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.jwtOptions">jwtOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#jwt_options OpensearchserviceDomain#jwt_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.masterUserOptions">masterUserOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#master_user_options OpensearchserviceDomain#master_user_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.samlOptions">samlOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#saml_options OpensearchserviceDomain#saml_options}. |

---

##### `anonymousAuthEnabled`<sup>Optional</sup> <a name="anonymousAuthEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.anonymousAuthEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAnonymousAuthEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#anonymous_auth_enabled OpensearchserviceDomain#anonymous_auth_enabled}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `iamFederationOptions`<sup>Optional</sup> <a name="iamFederationOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.iamFederationOptions"></a>

```java
public OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions getIamFederationOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#iam_federation_options OpensearchserviceDomain#iam_federation_options}.

---

##### `internalUserDatabaseEnabled`<sup>Optional</sup> <a name="internalUserDatabaseEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.internalUserDatabaseEnabled"></a>

```java
public java.lang.Boolean|IResolvable getInternalUserDatabaseEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#internal_user_database_enabled OpensearchserviceDomain#internal_user_database_enabled}.

---

##### `jwtOptions`<sup>Optional</sup> <a name="jwtOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.jwtOptions"></a>

```java
public OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions getJwtOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#jwt_options OpensearchserviceDomain#jwt_options}.

---

##### `masterUserOptions`<sup>Optional</sup> <a name="masterUserOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.masterUserOptions"></a>

```java
public OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions getMasterUserOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#master_user_options OpensearchserviceDomain#master_user_options}.

---

##### `samlOptions`<sup>Optional</sup> <a name="samlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.samlOptions"></a>

```java
public OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions getSamlOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#saml_options OpensearchserviceDomain#saml_options}.

---

### OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions <a name="OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions;

OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .rolesKey(java.lang.String)
//  .subjectKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.property.rolesKey">rolesKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.property.subjectKey">subjectKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `rolesKey`<sup>Optional</sup> <a name="rolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.property.rolesKey"></a>

```java
public java.lang.String getRolesKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}.

---

##### `subjectKey`<sup>Optional</sup> <a name="subjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.property.subjectKey"></a>

```java
public java.lang.String getSubjectKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}.

---

### OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions <a name="OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions;

OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .publicKey(java.lang.String)
//  .rolesKey(java.lang.String)
//  .subjectKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#public_key OpensearchserviceDomain#public_key}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.rolesKey">rolesKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.subjectKey">subjectKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `publicKey`<sup>Optional</sup> <a name="publicKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#public_key OpensearchserviceDomain#public_key}.

---

##### `rolesKey`<sup>Optional</sup> <a name="rolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.rolesKey"></a>

```java
public java.lang.String getRolesKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}.

---

##### `subjectKey`<sup>Optional</sup> <a name="subjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.subjectKey"></a>

```java
public java.lang.String getSubjectKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}.

---

### OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions <a name="OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions;

OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.builder()
//  .masterUserArn(java.lang.String)
//  .masterUserName(java.lang.String)
//  .masterUserPassword(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserArn">masterUserArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#master_user_arn OpensearchserviceDomain#master_user_arn}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserName">masterUserName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#master_user_name OpensearchserviceDomain#master_user_name}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserPassword">masterUserPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#master_user_password OpensearchserviceDomain#master_user_password}. |

---

##### `masterUserArn`<sup>Optional</sup> <a name="masterUserArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserArn"></a>

```java
public java.lang.String getMasterUserArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#master_user_arn OpensearchserviceDomain#master_user_arn}.

---

##### `masterUserName`<sup>Optional</sup> <a name="masterUserName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserName"></a>

```java
public java.lang.String getMasterUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#master_user_name OpensearchserviceDomain#master_user_name}.

---

##### `masterUserPassword`<sup>Optional</sup> <a name="masterUserPassword" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserPassword"></a>

```java
public java.lang.String getMasterUserPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#master_user_password OpensearchserviceDomain#master_user_password}.

---

### OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions <a name="OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions;

OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .idp(OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp)
//  .masterBackendRole(java.lang.String)
//  .masterUserName(java.lang.String)
//  .rolesKey(java.lang.String)
//  .sessionTimeoutMinutes(java.lang.Number)
//  .subjectKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.idp">idp</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#idp OpensearchserviceDomain#idp}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.masterBackendRole">masterBackendRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#master_backend_role OpensearchserviceDomain#master_backend_role}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.masterUserName">masterUserName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#master_user_name OpensearchserviceDomain#master_user_name}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.rolesKey">rolesKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.sessionTimeoutMinutes">sessionTimeoutMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#session_timeout_minutes OpensearchserviceDomain#session_timeout_minutes}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.subjectKey">subjectKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `idp`<sup>Optional</sup> <a name="idp" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.idp"></a>

```java
public OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp getIdp();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#idp OpensearchserviceDomain#idp}.

---

##### `masterBackendRole`<sup>Optional</sup> <a name="masterBackendRole" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.masterBackendRole"></a>

```java
public java.lang.String getMasterBackendRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#master_backend_role OpensearchserviceDomain#master_backend_role}.

---

##### `masterUserName`<sup>Optional</sup> <a name="masterUserName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.masterUserName"></a>

```java
public java.lang.String getMasterUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#master_user_name OpensearchserviceDomain#master_user_name}.

---

##### `rolesKey`<sup>Optional</sup> <a name="rolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.rolesKey"></a>

```java
public java.lang.String getRolesKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}.

---

##### `sessionTimeoutMinutes`<sup>Optional</sup> <a name="sessionTimeoutMinutes" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.sessionTimeoutMinutes"></a>

```java
public java.lang.Number getSessionTimeoutMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#session_timeout_minutes OpensearchserviceDomain#session_timeout_minutes}.

---

##### `subjectKey`<sup>Optional</sup> <a name="subjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.subjectKey"></a>

```java
public java.lang.String getSubjectKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}.

---

### OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp <a name="OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp;

OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp.builder()
//  .entityId(java.lang.String)
//  .metadataContent(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp.property.entityId">entityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#entity_id OpensearchserviceDomain#entity_id}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp.property.metadataContent">metadataContent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#metadata_content OpensearchserviceDomain#metadata_content}. |

---

##### `entityId`<sup>Optional</sup> <a name="entityId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#entity_id OpensearchserviceDomain#entity_id}.

---

##### `metadataContent`<sup>Optional</sup> <a name="metadataContent" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp.property.metadataContent"></a>

```java
public java.lang.String getMetadataContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#metadata_content OpensearchserviceDomain#metadata_content}.

---

### OpensearchserviceDomainAimlOptions <a name="OpensearchserviceDomainAimlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainAimlOptions;

OpensearchserviceDomainAimlOptions.builder()
//  .s3VectorsEngine(OpensearchserviceDomainAimlOptionsS3VectorsEngine)
//  .serverlessVectorAcceleration(OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions.property.s3VectorsEngine">s3VectorsEngine</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine">OpensearchserviceDomainAimlOptionsS3VectorsEngine</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#s3_vectors_engine OpensearchserviceDomain#s3_vectors_engine}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions.property.serverlessVectorAcceleration">serverlessVectorAcceleration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#serverless_vector_acceleration OpensearchserviceDomain#serverless_vector_acceleration}. |

---

##### `s3VectorsEngine`<sup>Optional</sup> <a name="s3VectorsEngine" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions.property.s3VectorsEngine"></a>

```java
public OpensearchserviceDomainAimlOptionsS3VectorsEngine getS3VectorsEngine();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine">OpensearchserviceDomainAimlOptionsS3VectorsEngine</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#s3_vectors_engine OpensearchserviceDomain#s3_vectors_engine}.

---

##### `serverlessVectorAcceleration`<sup>Optional</sup> <a name="serverlessVectorAcceleration" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions.property.serverlessVectorAcceleration"></a>

```java
public OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration getServerlessVectorAcceleration();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#serverless_vector_acceleration OpensearchserviceDomain#serverless_vector_acceleration}.

---

### OpensearchserviceDomainAimlOptionsS3VectorsEngine <a name="OpensearchserviceDomainAimlOptionsS3VectorsEngine" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainAimlOptionsS3VectorsEngine;

OpensearchserviceDomainAimlOptionsS3VectorsEngine.builder()
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable S3 vectors engine. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable S3 vectors engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}

---

### OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration <a name="OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration;

OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration.builder()
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable serverless vector acceleration. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable serverless vector acceleration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}

---

### OpensearchserviceDomainAutomatedSnapshotPauseOptions <a name="OpensearchserviceDomainAutomatedSnapshotPauseOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainAutomatedSnapshotPauseOptions;

OpensearchserviceDomainAutomatedSnapshotPauseOptions.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .endTime(java.lang.String)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.property.endTime">endTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#end_time OpensearchserviceDomain#end_time}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#start_time OpensearchserviceDomain#start_time}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#end_time OpensearchserviceDomain#end_time}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#start_time OpensearchserviceDomain#start_time}.

---

### OpensearchserviceDomainClusterConfig <a name="OpensearchserviceDomainClusterConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainClusterConfig;

OpensearchserviceDomainClusterConfig.builder()
//  .coldStorageOptions(OpensearchserviceDomainClusterConfigColdStorageOptions)
//  .dedicatedMasterCount(java.lang.Number)
//  .dedicatedMasterEnabled(java.lang.Boolean|IResolvable)
//  .dedicatedMasterType(java.lang.String)
//  .instanceCount(java.lang.Number)
//  .instanceType(java.lang.String)
//  .multiAzWithStandbyEnabled(java.lang.Boolean|IResolvable)
//  .nodeOptions(IResolvable|java.util.List<OpensearchserviceDomainClusterConfigNodeOptions>)
//  .warmCount(java.lang.Number)
//  .warmEnabled(java.lang.Boolean|IResolvable)
//  .warmType(java.lang.String)
//  .zoneAwarenessConfig(OpensearchserviceDomainClusterConfigZoneAwarenessConfig)
//  .zoneAwarenessEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.coldStorageOptions">coldStorageOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions">OpensearchserviceDomainClusterConfigColdStorageOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#cold_storage_options OpensearchserviceDomain#cold_storage_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.dedicatedMasterCount">dedicatedMasterCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#dedicated_master_count OpensearchserviceDomain#dedicated_master_count}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.dedicatedMasterEnabled">dedicatedMasterEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#dedicated_master_enabled OpensearchserviceDomain#dedicated_master_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.dedicatedMasterType">dedicatedMasterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#dedicated_master_type OpensearchserviceDomain#dedicated_master_type}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#instance_count OpensearchserviceDomain#instance_count}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#instance_type OpensearchserviceDomain#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.multiAzWithStandbyEnabled">multiAzWithStandbyEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#multi_az_with_standby_enabled OpensearchserviceDomain#multi_az_with_standby_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.nodeOptions">nodeOptions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#node_options OpensearchserviceDomain#node_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.warmCount">warmCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#warm_count OpensearchserviceDomain#warm_count}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.warmEnabled">warmEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#warm_enabled OpensearchserviceDomain#warm_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.warmType">warmType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#warm_type OpensearchserviceDomain#warm_type}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.zoneAwarenessConfig">zoneAwarenessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig">OpensearchserviceDomainClusterConfigZoneAwarenessConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#zone_awareness_config OpensearchserviceDomain#zone_awareness_config}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.zoneAwarenessEnabled">zoneAwarenessEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#zone_awareness_enabled OpensearchserviceDomain#zone_awareness_enabled}. |

---

##### `coldStorageOptions`<sup>Optional</sup> <a name="coldStorageOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.coldStorageOptions"></a>

```java
public OpensearchserviceDomainClusterConfigColdStorageOptions getColdStorageOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions">OpensearchserviceDomainClusterConfigColdStorageOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#cold_storage_options OpensearchserviceDomain#cold_storage_options}.

---

##### `dedicatedMasterCount`<sup>Optional</sup> <a name="dedicatedMasterCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.dedicatedMasterCount"></a>

```java
public java.lang.Number getDedicatedMasterCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#dedicated_master_count OpensearchserviceDomain#dedicated_master_count}.

---

##### `dedicatedMasterEnabled`<sup>Optional</sup> <a name="dedicatedMasterEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.dedicatedMasterEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDedicatedMasterEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#dedicated_master_enabled OpensearchserviceDomain#dedicated_master_enabled}.

---

##### `dedicatedMasterType`<sup>Optional</sup> <a name="dedicatedMasterType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.dedicatedMasterType"></a>

```java
public java.lang.String getDedicatedMasterType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#dedicated_master_type OpensearchserviceDomain#dedicated_master_type}.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#instance_count OpensearchserviceDomain#instance_count}.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#instance_type OpensearchserviceDomain#instance_type}.

---

##### `multiAzWithStandbyEnabled`<sup>Optional</sup> <a name="multiAzWithStandbyEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.multiAzWithStandbyEnabled"></a>

```java
public java.lang.Boolean|IResolvable getMultiAzWithStandbyEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#multi_az_with_standby_enabled OpensearchserviceDomain#multi_az_with_standby_enabled}.

---

##### `nodeOptions`<sup>Optional</sup> <a name="nodeOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.nodeOptions"></a>

```java
public IResolvable|java.util.List<OpensearchserviceDomainClusterConfigNodeOptions> getNodeOptions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#node_options OpensearchserviceDomain#node_options}.

---

##### `warmCount`<sup>Optional</sup> <a name="warmCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.warmCount"></a>

```java
public java.lang.Number getWarmCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#warm_count OpensearchserviceDomain#warm_count}.

---

##### `warmEnabled`<sup>Optional</sup> <a name="warmEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.warmEnabled"></a>

```java
public java.lang.Boolean|IResolvable getWarmEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#warm_enabled OpensearchserviceDomain#warm_enabled}.

---

##### `warmType`<sup>Optional</sup> <a name="warmType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.warmType"></a>

```java
public java.lang.String getWarmType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#warm_type OpensearchserviceDomain#warm_type}.

---

##### `zoneAwarenessConfig`<sup>Optional</sup> <a name="zoneAwarenessConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.zoneAwarenessConfig"></a>

```java
public OpensearchserviceDomainClusterConfigZoneAwarenessConfig getZoneAwarenessConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig">OpensearchserviceDomainClusterConfigZoneAwarenessConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#zone_awareness_config OpensearchserviceDomain#zone_awareness_config}.

---

##### `zoneAwarenessEnabled`<sup>Optional</sup> <a name="zoneAwarenessEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.zoneAwarenessEnabled"></a>

```java
public java.lang.Boolean|IResolvable getZoneAwarenessEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#zone_awareness_enabled OpensearchserviceDomain#zone_awareness_enabled}.

---

### OpensearchserviceDomainClusterConfigColdStorageOptions <a name="OpensearchserviceDomainClusterConfigColdStorageOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainClusterConfigColdStorageOptions;

OpensearchserviceDomainClusterConfigColdStorageOptions.builder()
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

### OpensearchserviceDomainClusterConfigNodeOptions <a name="OpensearchserviceDomainClusterConfigNodeOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainClusterConfigNodeOptions;

OpensearchserviceDomainClusterConfigNodeOptions.builder()
//  .nodeConfig(OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig)
//  .nodeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#node_config OpensearchserviceDomain#node_config}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#node_type OpensearchserviceDomain#node_type}. |

---

##### `nodeConfig`<sup>Optional</sup> <a name="nodeConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions.property.nodeConfig"></a>

```java
public OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig getNodeConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#node_config OpensearchserviceDomain#node_config}.

---

##### `nodeType`<sup>Optional</sup> <a name="nodeType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#node_type OpensearchserviceDomain#node_type}.

---

### OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig <a name="OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig;

OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.builder()
//  .count(java.lang.Number)
//  .enabled(java.lang.Boolean|IResolvable)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.property.count">count</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#count OpensearchserviceDomain#count}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#type OpensearchserviceDomain#type}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#count OpensearchserviceDomain#count}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#type OpensearchserviceDomain#type}.

---

### OpensearchserviceDomainClusterConfigZoneAwarenessConfig <a name="OpensearchserviceDomainClusterConfigZoneAwarenessConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig;

OpensearchserviceDomainClusterConfigZoneAwarenessConfig.builder()
//  .availabilityZoneCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig.property.availabilityZoneCount">availabilityZoneCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#availability_zone_count OpensearchserviceDomain#availability_zone_count}. |

---

##### `availabilityZoneCount`<sup>Optional</sup> <a name="availabilityZoneCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig.property.availabilityZoneCount"></a>

```java
public java.lang.Number getAvailabilityZoneCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#availability_zone_count OpensearchserviceDomain#availability_zone_count}.

---

### OpensearchserviceDomainCognitoOptions <a name="OpensearchserviceDomainCognitoOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainCognitoOptions;

OpensearchserviceDomainCognitoOptions.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .identityPoolId(java.lang.String)
//  .roleArn(java.lang.String)
//  .userPoolId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.identityPoolId">identityPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#identity_pool_id OpensearchserviceDomain#identity_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#role_arn OpensearchserviceDomain#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#user_pool_id OpensearchserviceDomain#user_pool_id}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `identityPoolId`<sup>Optional</sup> <a name="identityPoolId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.identityPoolId"></a>

```java
public java.lang.String getIdentityPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#identity_pool_id OpensearchserviceDomain#identity_pool_id}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#role_arn OpensearchserviceDomain#role_arn}.

---

##### `userPoolId`<sup>Optional</sup> <a name="userPoolId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#user_pool_id OpensearchserviceDomain#user_pool_id}.

---

### OpensearchserviceDomainConfig <a name="OpensearchserviceDomainConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainConfig;

OpensearchserviceDomainConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accessPolicies(java.lang.String)
//  .advancedOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .advancedSecurityOptions(OpensearchserviceDomainAdvancedSecurityOptions)
//  .aimlOptions(OpensearchserviceDomainAimlOptions)
//  .automatedSnapshotPauseOptions(OpensearchserviceDomainAutomatedSnapshotPauseOptions)
//  .clusterConfig(OpensearchserviceDomainClusterConfig)
//  .cognitoOptions(OpensearchserviceDomainCognitoOptions)
//  .deploymentStrategyOptions(OpensearchserviceDomainDeploymentStrategyOptions)
//  .domainEndpointOptions(OpensearchserviceDomainDomainEndpointOptions)
//  .domainName(java.lang.String)
//  .ebsOptions(OpensearchserviceDomainEbsOptions)
//  .encryptionAtRestOptions(OpensearchserviceDomainEncryptionAtRestOptions)
//  .engineMode(java.lang.String)
//  .engineVersion(java.lang.String)
//  .identityCenterOptions(OpensearchserviceDomainIdentityCenterOptions)
//  .ipAddressType(java.lang.String)
//  .logPublishingOptions(IResolvable|java.util.Map<java.lang.String, OpensearchserviceDomainLogPublishingOptions>)
//  .nodeToNodeEncryptionOptions(OpensearchserviceDomainNodeToNodeEncryptionOptions)
//  .offPeakWindowOptions(OpensearchserviceDomainOffPeakWindowOptions)
//  .skipShardMigrationWait(java.lang.Boolean|IResolvable)
//  .snapshotOptions(OpensearchserviceDomainSnapshotOptions)
//  .softwareUpdateOptions(OpensearchserviceDomainSoftwareUpdateOptions)
//  .tags(IResolvable|java.util.List<OpensearchserviceDomainTags>)
//  .useCase(java.lang.String)
//  .vpcOptions(OpensearchserviceDomainVpcOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.accessPolicies">accessPolicies</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#access_policies OpensearchserviceDomain#access_policies}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.advancedOptions">advancedOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#advanced_options OpensearchserviceDomain#advanced_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.advancedSecurityOptions">advancedSecurityOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions">OpensearchserviceDomainAdvancedSecurityOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#advanced_security_options OpensearchserviceDomain#advanced_security_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.aimlOptions">aimlOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions">OpensearchserviceDomainAimlOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#aiml_options OpensearchserviceDomain#aiml_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.automatedSnapshotPauseOptions">automatedSnapshotPauseOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions">OpensearchserviceDomainAutomatedSnapshotPauseOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#automated_snapshot_pause_options OpensearchserviceDomain#automated_snapshot_pause_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.clusterConfig">clusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig">OpensearchserviceDomainClusterConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#cluster_config OpensearchserviceDomain#cluster_config}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.cognitoOptions">cognitoOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions">OpensearchserviceDomainCognitoOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#cognito_options OpensearchserviceDomain#cognito_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.deploymentStrategyOptions">deploymentStrategyOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions">OpensearchserviceDomainDeploymentStrategyOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#deployment_strategy_options OpensearchserviceDomain#deployment_strategy_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.domainEndpointOptions">domainEndpointOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions">OpensearchserviceDomainDomainEndpointOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#domain_endpoint_options OpensearchserviceDomain#domain_endpoint_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#domain_name OpensearchserviceDomain#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.ebsOptions">ebsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions">OpensearchserviceDomainEbsOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#ebs_options OpensearchserviceDomain#ebs_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.encryptionAtRestOptions">encryptionAtRestOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions">OpensearchserviceDomainEncryptionAtRestOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#encryption_at_rest_options OpensearchserviceDomain#encryption_at_rest_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.engineMode">engineMode</a></code> | <code>java.lang.String</code> | The engine mode of the domain. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#engine_version OpensearchserviceDomain#engine_version}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.identityCenterOptions">identityCenterOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions">OpensearchserviceDomainIdentityCenterOptions</a></code> | Options for configuring Identity Center. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#ip_address_type OpensearchserviceDomain#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.logPublishingOptions">logPublishingOptions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#log_publishing_options OpensearchserviceDomain#log_publishing_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.nodeToNodeEncryptionOptions">nodeToNodeEncryptionOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions">OpensearchserviceDomainNodeToNodeEncryptionOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#node_to_node_encryption_options OpensearchserviceDomain#node_to_node_encryption_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.offPeakWindowOptions">offPeakWindowOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions">OpensearchserviceDomainOffPeakWindowOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#off_peak_window_options OpensearchserviceDomain#off_peak_window_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.skipShardMigrationWait">skipShardMigrationWait</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#skip_shard_migration_wait OpensearchserviceDomain#skip_shard_migration_wait}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.snapshotOptions">snapshotOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions">OpensearchserviceDomainSnapshotOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#snapshot_options OpensearchserviceDomain#snapshot_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.softwareUpdateOptions">softwareUpdateOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions">OpensearchserviceDomainSoftwareUpdateOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#software_update_options OpensearchserviceDomain#software_update_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>></code> | An arbitrary set of tags (key-value pairs) for this Domain. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.useCase">useCase</a></code> | <code>java.lang.String</code> | The primary use case of the domain. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.vpcOptions">vpcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions">OpensearchserviceDomainVpcOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#vpc_options OpensearchserviceDomain#vpc_options}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessPolicies`<sup>Optional</sup> <a name="accessPolicies" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.accessPolicies"></a>

```java
public java.lang.String getAccessPolicies();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#access_policies OpensearchserviceDomain#access_policies}.

---

##### `advancedOptions`<sup>Optional</sup> <a name="advancedOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.advancedOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdvancedOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#advanced_options OpensearchserviceDomain#advanced_options}.

---

##### `advancedSecurityOptions`<sup>Optional</sup> <a name="advancedSecurityOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.advancedSecurityOptions"></a>

```java
public OpensearchserviceDomainAdvancedSecurityOptions getAdvancedSecurityOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions">OpensearchserviceDomainAdvancedSecurityOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#advanced_security_options OpensearchserviceDomain#advanced_security_options}.

---

##### `aimlOptions`<sup>Optional</sup> <a name="aimlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.aimlOptions"></a>

```java
public OpensearchserviceDomainAimlOptions getAimlOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions">OpensearchserviceDomainAimlOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#aiml_options OpensearchserviceDomain#aiml_options}.

---

##### `automatedSnapshotPauseOptions`<sup>Optional</sup> <a name="automatedSnapshotPauseOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.automatedSnapshotPauseOptions"></a>

```java
public OpensearchserviceDomainAutomatedSnapshotPauseOptions getAutomatedSnapshotPauseOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions">OpensearchserviceDomainAutomatedSnapshotPauseOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#automated_snapshot_pause_options OpensearchserviceDomain#automated_snapshot_pause_options}.

---

##### `clusterConfig`<sup>Optional</sup> <a name="clusterConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.clusterConfig"></a>

```java
public OpensearchserviceDomainClusterConfig getClusterConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig">OpensearchserviceDomainClusterConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#cluster_config OpensearchserviceDomain#cluster_config}.

---

##### `cognitoOptions`<sup>Optional</sup> <a name="cognitoOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.cognitoOptions"></a>

```java
public OpensearchserviceDomainCognitoOptions getCognitoOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions">OpensearchserviceDomainCognitoOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#cognito_options OpensearchserviceDomain#cognito_options}.

---

##### `deploymentStrategyOptions`<sup>Optional</sup> <a name="deploymentStrategyOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.deploymentStrategyOptions"></a>

```java
public OpensearchserviceDomainDeploymentStrategyOptions getDeploymentStrategyOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions">OpensearchserviceDomainDeploymentStrategyOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#deployment_strategy_options OpensearchserviceDomain#deployment_strategy_options}.

---

##### `domainEndpointOptions`<sup>Optional</sup> <a name="domainEndpointOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.domainEndpointOptions"></a>

```java
public OpensearchserviceDomainDomainEndpointOptions getDomainEndpointOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions">OpensearchserviceDomainDomainEndpointOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#domain_endpoint_options OpensearchserviceDomain#domain_endpoint_options}.

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#domain_name OpensearchserviceDomain#domain_name}.

---

##### `ebsOptions`<sup>Optional</sup> <a name="ebsOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.ebsOptions"></a>

```java
public OpensearchserviceDomainEbsOptions getEbsOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions">OpensearchserviceDomainEbsOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#ebs_options OpensearchserviceDomain#ebs_options}.

---

##### `encryptionAtRestOptions`<sup>Optional</sup> <a name="encryptionAtRestOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.encryptionAtRestOptions"></a>

```java
public OpensearchserviceDomainEncryptionAtRestOptions getEncryptionAtRestOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions">OpensearchserviceDomainEncryptionAtRestOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#encryption_at_rest_options OpensearchserviceDomain#encryption_at_rest_options}.

---

##### `engineMode`<sup>Optional</sup> <a name="engineMode" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.engineMode"></a>

```java
public java.lang.String getEngineMode();
```

- *Type:* java.lang.String

The engine mode of the domain.

Determines whether the domain runs the standard (GENERAL) engine or the optimized multi-engine (OPTIMIZED) engine. This value cannot be changed after the domain is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#engine_mode OpensearchserviceDomain#engine_mode}

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#engine_version OpensearchserviceDomain#engine_version}.

---

##### `identityCenterOptions`<sup>Optional</sup> <a name="identityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.identityCenterOptions"></a>

```java
public OpensearchserviceDomainIdentityCenterOptions getIdentityCenterOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions">OpensearchserviceDomainIdentityCenterOptions</a>

Options for configuring Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#identity_center_options OpensearchserviceDomain#identity_center_options}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#ip_address_type OpensearchserviceDomain#ip_address_type}.

---

##### `logPublishingOptions`<sup>Optional</sup> <a name="logPublishingOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.logPublishingOptions"></a>

```java
public IResolvable|java.util.Map<java.lang.String, OpensearchserviceDomainLogPublishingOptions> getLogPublishingOptions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#log_publishing_options OpensearchserviceDomain#log_publishing_options}.

---

##### `nodeToNodeEncryptionOptions`<sup>Optional</sup> <a name="nodeToNodeEncryptionOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.nodeToNodeEncryptionOptions"></a>

```java
public OpensearchserviceDomainNodeToNodeEncryptionOptions getNodeToNodeEncryptionOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions">OpensearchserviceDomainNodeToNodeEncryptionOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#node_to_node_encryption_options OpensearchserviceDomain#node_to_node_encryption_options}.

---

##### `offPeakWindowOptions`<sup>Optional</sup> <a name="offPeakWindowOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.offPeakWindowOptions"></a>

```java
public OpensearchserviceDomainOffPeakWindowOptions getOffPeakWindowOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions">OpensearchserviceDomainOffPeakWindowOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#off_peak_window_options OpensearchserviceDomain#off_peak_window_options}.

---

##### `skipShardMigrationWait`<sup>Optional</sup> <a name="skipShardMigrationWait" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.skipShardMigrationWait"></a>

```java
public java.lang.Boolean|IResolvable getSkipShardMigrationWait();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#skip_shard_migration_wait OpensearchserviceDomain#skip_shard_migration_wait}.

---

##### `snapshotOptions`<sup>Optional</sup> <a name="snapshotOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.snapshotOptions"></a>

```java
public OpensearchserviceDomainSnapshotOptions getSnapshotOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions">OpensearchserviceDomainSnapshotOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#snapshot_options OpensearchserviceDomain#snapshot_options}.

---

##### `softwareUpdateOptions`<sup>Optional</sup> <a name="softwareUpdateOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.softwareUpdateOptions"></a>

```java
public OpensearchserviceDomainSoftwareUpdateOptions getSoftwareUpdateOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions">OpensearchserviceDomainSoftwareUpdateOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#software_update_options OpensearchserviceDomain#software_update_options}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.tags"></a>

```java
public IResolvable|java.util.List<OpensearchserviceDomainTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>>

An arbitrary set of tags (key-value pairs) for this Domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#tags OpensearchserviceDomain#tags}

---

##### `useCase`<sup>Optional</sup> <a name="useCase" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.useCase"></a>

```java
public java.lang.String getUseCase();
```

- *Type:* java.lang.String

The primary use case of the domain.

Determines the default configuration tuned for the workload. For GENERAL engine-mode domains, this value can be changed after creation. For OPTIMIZED engine-mode domains, this value cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#use_case OpensearchserviceDomain#use_case}

---

##### `vpcOptions`<sup>Optional</sup> <a name="vpcOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.vpcOptions"></a>

```java
public OpensearchserviceDomainVpcOptions getVpcOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions">OpensearchserviceDomainVpcOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#vpc_options OpensearchserviceDomain#vpc_options}.

---

### OpensearchserviceDomainDeploymentStrategyOptions <a name="OpensearchserviceDomainDeploymentStrategyOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainDeploymentStrategyOptions;

OpensearchserviceDomainDeploymentStrategyOptions.builder()
//  .deploymentStrategy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions.property.deploymentStrategy">deploymentStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#deployment_strategy OpensearchserviceDomain#deployment_strategy}. |

---

##### `deploymentStrategy`<sup>Optional</sup> <a name="deploymentStrategy" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions.property.deploymentStrategy"></a>

```java
public java.lang.String getDeploymentStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#deployment_strategy OpensearchserviceDomain#deployment_strategy}.

---

### OpensearchserviceDomainDomainEndpointOptions <a name="OpensearchserviceDomainDomainEndpointOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainDomainEndpointOptions;

OpensearchserviceDomainDomainEndpointOptions.builder()
//  .customEndpoint(java.lang.String)
//  .customEndpointCertificateArn(java.lang.String)
//  .customEndpointEnabled(java.lang.Boolean|IResolvable)
//  .enforceHttps(java.lang.Boolean|IResolvable)
//  .tlsSecurityPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.customEndpoint">customEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#custom_endpoint OpensearchserviceDomain#custom_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.customEndpointCertificateArn">customEndpointCertificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#custom_endpoint_certificate_arn OpensearchserviceDomain#custom_endpoint_certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.customEndpointEnabled">customEndpointEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#custom_endpoint_enabled OpensearchserviceDomain#custom_endpoint_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.enforceHttps">enforceHttps</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enforce_https OpensearchserviceDomain#enforce_https}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.tlsSecurityPolicy">tlsSecurityPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#tls_security_policy OpensearchserviceDomain#tls_security_policy}. |

---

##### `customEndpoint`<sup>Optional</sup> <a name="customEndpoint" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.customEndpoint"></a>

```java
public java.lang.String getCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#custom_endpoint OpensearchserviceDomain#custom_endpoint}.

---

##### `customEndpointCertificateArn`<sup>Optional</sup> <a name="customEndpointCertificateArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.customEndpointCertificateArn"></a>

```java
public java.lang.String getCustomEndpointCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#custom_endpoint_certificate_arn OpensearchserviceDomain#custom_endpoint_certificate_arn}.

---

##### `customEndpointEnabled`<sup>Optional</sup> <a name="customEndpointEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.customEndpointEnabled"></a>

```java
public java.lang.Boolean|IResolvable getCustomEndpointEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#custom_endpoint_enabled OpensearchserviceDomain#custom_endpoint_enabled}.

---

##### `enforceHttps`<sup>Optional</sup> <a name="enforceHttps" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.enforceHttps"></a>

```java
public java.lang.Boolean|IResolvable getEnforceHttps();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enforce_https OpensearchserviceDomain#enforce_https}.

---

##### `tlsSecurityPolicy`<sup>Optional</sup> <a name="tlsSecurityPolicy" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.tlsSecurityPolicy"></a>

```java
public java.lang.String getTlsSecurityPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#tls_security_policy OpensearchserviceDomain#tls_security_policy}.

---

### OpensearchserviceDomainEbsOptions <a name="OpensearchserviceDomainEbsOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainEbsOptions;

OpensearchserviceDomainEbsOptions.builder()
//  .ebsEnabled(java.lang.Boolean|IResolvable)
//  .iops(java.lang.Number)
//  .throughput(java.lang.Number)
//  .volumeSize(java.lang.Number)
//  .volumeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.ebsEnabled">ebsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#ebs_enabled OpensearchserviceDomain#ebs_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#iops OpensearchserviceDomain#iops}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#throughput OpensearchserviceDomain#throughput}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#volume_size OpensearchserviceDomain#volume_size}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#volume_type OpensearchserviceDomain#volume_type}. |

---

##### `ebsEnabled`<sup>Optional</sup> <a name="ebsEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.ebsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEbsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#ebs_enabled OpensearchserviceDomain#ebs_enabled}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#iops OpensearchserviceDomain#iops}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#throughput OpensearchserviceDomain#throughput}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#volume_size OpensearchserviceDomain#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#volume_type OpensearchserviceDomain#volume_type}.

---

### OpensearchserviceDomainEncryptionAtRestOptions <a name="OpensearchserviceDomainEncryptionAtRestOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainEncryptionAtRestOptions;

OpensearchserviceDomainEncryptionAtRestOptions.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .kmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#kms_key_id OpensearchserviceDomain#kms_key_id}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#kms_key_id OpensearchserviceDomain#kms_key_id}.

---

### OpensearchserviceDomainIdentityCenterOptions <a name="OpensearchserviceDomainIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainIdentityCenterOptions;

OpensearchserviceDomainIdentityCenterOptions.builder()
//  .enabledApiAccess(java.lang.Boolean|IResolvable)
//  .identityCenterInstanceArn(java.lang.String)
//  .rolesKey(java.lang.String)
//  .subjectKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.enabledApiAccess">enabledApiAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether Identity Center is enabled. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.identityCenterInstanceArn">identityCenterInstanceArn</a></code> | <code>java.lang.String</code> | The ARN of the Identity Center instance. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.rolesKey">rolesKey</a></code> | <code>java.lang.String</code> | The roles key for Identity Center options. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.subjectKey">subjectKey</a></code> | <code>java.lang.String</code> | The subject key for Identity Center options. |

---

##### `enabledApiAccess`<sup>Optional</sup> <a name="enabledApiAccess" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.enabledApiAccess"></a>

```java
public java.lang.Boolean|IResolvable getEnabledApiAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether Identity Center is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enabled_api_access OpensearchserviceDomain#enabled_api_access}

---

##### `identityCenterInstanceArn`<sup>Optional</sup> <a name="identityCenterInstanceArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.identityCenterInstanceArn"></a>

```java
public java.lang.String getIdentityCenterInstanceArn();
```

- *Type:* java.lang.String

The ARN of the Identity Center instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#identity_center_instance_arn OpensearchserviceDomain#identity_center_instance_arn}

---

##### `rolesKey`<sup>Optional</sup> <a name="rolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.rolesKey"></a>

```java
public java.lang.String getRolesKey();
```

- *Type:* java.lang.String

The roles key for Identity Center options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}

---

##### `subjectKey`<sup>Optional</sup> <a name="subjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.subjectKey"></a>

```java
public java.lang.String getSubjectKey();
```

- *Type:* java.lang.String

The subject key for Identity Center options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}

---

### OpensearchserviceDomainLogPublishingOptions <a name="OpensearchserviceDomainLogPublishingOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainLogPublishingOptions;

OpensearchserviceDomainLogPublishingOptions.builder()
//  .cloudwatchLogsLogGroupArn(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions.property.cloudwatchLogsLogGroupArn">cloudwatchLogsLogGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#cloudwatch_logs_log_group_arn OpensearchserviceDomain#cloudwatch_logs_log_group_arn}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |

---

##### `cloudwatchLogsLogGroupArn`<sup>Optional</sup> <a name="cloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions.property.cloudwatchLogsLogGroupArn"></a>

```java
public java.lang.String getCloudwatchLogsLogGroupArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#cloudwatch_logs_log_group_arn OpensearchserviceDomain#cloudwatch_logs_log_group_arn}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

### OpensearchserviceDomainNodeToNodeEncryptionOptions <a name="OpensearchserviceDomainNodeToNodeEncryptionOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainNodeToNodeEncryptionOptions;

OpensearchserviceDomainNodeToNodeEncryptionOptions.builder()
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

### OpensearchserviceDomainOffPeakWindowOptions <a name="OpensearchserviceDomainOffPeakWindowOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainOffPeakWindowOptions;

OpensearchserviceDomainOffPeakWindowOptions.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .offPeakWindow(OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions.property.offPeakWindow">offPeakWindow</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#off_peak_window OpensearchserviceDomain#off_peak_window}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `offPeakWindow`<sup>Optional</sup> <a name="offPeakWindow" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions.property.offPeakWindow"></a>

```java
public OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow getOffPeakWindow();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#off_peak_window OpensearchserviceDomain#off_peak_window}.

---

### OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow <a name="OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow;

OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow.builder()
//  .windowStartTime(OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow.property.windowStartTime">windowStartTime</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#window_start_time OpensearchserviceDomain#window_start_time}. |

---

##### `windowStartTime`<sup>Optional</sup> <a name="windowStartTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow.property.windowStartTime"></a>

```java
public OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime getWindowStartTime();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#window_start_time OpensearchserviceDomain#window_start_time}.

---

### OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime <a name="OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime;

OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.builder()
//  .hours(java.lang.Number)
//  .minutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#hours OpensearchserviceDomain#hours}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#minutes OpensearchserviceDomain#minutes}. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#hours OpensearchserviceDomain#hours}.

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#minutes OpensearchserviceDomain#minutes}.

---

### OpensearchserviceDomainServiceSoftwareOptions <a name="OpensearchserviceDomainServiceSoftwareOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainServiceSoftwareOptions;

OpensearchserviceDomainServiceSoftwareOptions.builder()
    .build();
```


### OpensearchserviceDomainSnapshotOptions <a name="OpensearchserviceDomainSnapshotOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainSnapshotOptions;

OpensearchserviceDomainSnapshotOptions.builder()
//  .automatedSnapshotStartHour(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions.property.automatedSnapshotStartHour">automatedSnapshotStartHour</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#automated_snapshot_start_hour OpensearchserviceDomain#automated_snapshot_start_hour}. |

---

##### `automatedSnapshotStartHour`<sup>Optional</sup> <a name="automatedSnapshotStartHour" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions.property.automatedSnapshotStartHour"></a>

```java
public java.lang.Number getAutomatedSnapshotStartHour();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#automated_snapshot_start_hour OpensearchserviceDomain#automated_snapshot_start_hour}.

---

### OpensearchserviceDomainSoftwareUpdateOptions <a name="OpensearchserviceDomainSoftwareUpdateOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainSoftwareUpdateOptions;

OpensearchserviceDomainSoftwareUpdateOptions.builder()
//  .autoSoftwareUpdateEnabled(java.lang.Boolean|IResolvable)
//  .useLatestServiceSoftwareForBlueGreen(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions.property.autoSoftwareUpdateEnabled">autoSoftwareUpdateEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#auto_software_update_enabled OpensearchserviceDomain#auto_software_update_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions.property.useLatestServiceSoftwareForBlueGreen">useLatestServiceSoftwareForBlueGreen</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#use_latest_service_software_for_blue_green OpensearchserviceDomain#use_latest_service_software_for_blue_green}. |

---

##### `autoSoftwareUpdateEnabled`<sup>Optional</sup> <a name="autoSoftwareUpdateEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions.property.autoSoftwareUpdateEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoSoftwareUpdateEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#auto_software_update_enabled OpensearchserviceDomain#auto_software_update_enabled}.

---

##### `useLatestServiceSoftwareForBlueGreen`<sup>Optional</sup> <a name="useLatestServiceSoftwareForBlueGreen" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions.property.useLatestServiceSoftwareForBlueGreen"></a>

```java
public java.lang.Boolean|IResolvable getUseLatestServiceSoftwareForBlueGreen();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#use_latest_service_software_for_blue_green OpensearchserviceDomain#use_latest_service_software_for_blue_green}.

---

### OpensearchserviceDomainTags <a name="OpensearchserviceDomainTags" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainTags;

OpensearchserviceDomainTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags.property.key">key</a></code> | <code>java.lang.String</code> | The value of the tag. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags.property.value">value</a></code> | <code>java.lang.String</code> | The key of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#key OpensearchserviceDomain#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#value OpensearchserviceDomain#value}

---

### OpensearchserviceDomainVpcOptions <a name="OpensearchserviceDomainVpcOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainVpcOptions;

OpensearchserviceDomainVpcOptions.builder()
//  .egressEnabled(java.lang.Boolean|IResolvable)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnetIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.property.egressEnabled">egressEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Controls whether egress traffic from the domain is routed through the customer VPC. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#security_group_ids OpensearchserviceDomain#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#subnet_ids OpensearchserviceDomain#subnet_ids}. |

---

##### `egressEnabled`<sup>Optional</sup> <a name="egressEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.property.egressEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEgressEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Controls whether egress traffic from the domain is routed through the customer VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#egress_enabled OpensearchserviceDomain#egress_enabled}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#security_group_ids OpensearchserviceDomain#security_group_ids}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_domain#subnet_ids OpensearchserviceDomain#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference <a name="OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference;

new OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resetRolesKey">resetRolesKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resetSubjectKey">resetSubjectKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetRolesKey` <a name="resetRolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resetRolesKey"></a>

```java
public void resetRolesKey()
```

##### `resetSubjectKey` <a name="resetSubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resetSubjectKey"></a>

```java
public void resetSubjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.rolesKeyInput">rolesKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.subjectKeyInput">subjectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.rolesKey">rolesKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.subjectKey">subjectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `rolesKeyInput`<sup>Optional</sup> <a name="rolesKeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.rolesKeyInput"></a>

```java
public java.lang.String getRolesKeyInput();
```

- *Type:* java.lang.String

---

##### `subjectKeyInput`<sup>Optional</sup> <a name="subjectKeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.subjectKeyInput"></a>

```java
public java.lang.String getSubjectKeyInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `rolesKey`<sup>Required</sup> <a name="rolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.rolesKey"></a>

```java
public java.lang.String getRolesKey();
```

- *Type:* java.lang.String

---

##### `subjectKey`<sup>Required</sup> <a name="subjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.subjectKey"></a>

```java
public java.lang.String getSubjectKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a>

---


### OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference <a name="OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference;

new OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetPublicKey">resetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetRolesKey">resetRolesKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetSubjectKey">resetSubjectKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetPublicKey` <a name="resetPublicKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetPublicKey"></a>

```java
public void resetPublicKey()
```

##### `resetRolesKey` <a name="resetRolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetRolesKey"></a>

```java
public void resetRolesKey()
```

##### `resetSubjectKey` <a name="resetSubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetSubjectKey"></a>

```java
public void resetSubjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.publicKeyInput">publicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.rolesKeyInput">rolesKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.subjectKeyInput">subjectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.rolesKey">rolesKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.subjectKey">subjectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.publicKeyInput"></a>

```java
public java.lang.String getPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `rolesKeyInput`<sup>Optional</sup> <a name="rolesKeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.rolesKeyInput"></a>

```java
public java.lang.String getRolesKeyInput();
```

- *Type:* java.lang.String

---

##### `subjectKeyInput`<sup>Optional</sup> <a name="subjectKeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.subjectKeyInput"></a>

```java
public java.lang.String getSubjectKeyInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

---

##### `rolesKey`<sup>Required</sup> <a name="rolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.rolesKey"></a>

```java
public java.lang.String getRolesKey();
```

- *Type:* java.lang.String

---

##### `subjectKey`<sup>Required</sup> <a name="subjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.subjectKey"></a>

```java
public java.lang.String getSubjectKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a>

---


### OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference <a name="OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference;

new OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserArn">resetMasterUserArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserName">resetMasterUserName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserPassword">resetMasterUserPassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMasterUserArn` <a name="resetMasterUserArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserArn"></a>

```java
public void resetMasterUserArn()
```

##### `resetMasterUserName` <a name="resetMasterUserName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserName"></a>

```java
public void resetMasterUserName()
```

##### `resetMasterUserPassword` <a name="resetMasterUserPassword" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserPassword"></a>

```java
public void resetMasterUserPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArnInput">masterUserArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserNameInput">masterUserNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPasswordInput">masterUserPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArn">masterUserArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserName">masterUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPassword">masterUserPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `masterUserArnInput`<sup>Optional</sup> <a name="masterUserArnInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArnInput"></a>

```java
public java.lang.String getMasterUserArnInput();
```

- *Type:* java.lang.String

---

##### `masterUserNameInput`<sup>Optional</sup> <a name="masterUserNameInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserNameInput"></a>

```java
public java.lang.String getMasterUserNameInput();
```

- *Type:* java.lang.String

---

##### `masterUserPasswordInput`<sup>Optional</sup> <a name="masterUserPasswordInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPasswordInput"></a>

```java
public java.lang.String getMasterUserPasswordInput();
```

- *Type:* java.lang.String

---

##### `masterUserArn`<sup>Required</sup> <a name="masterUserArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArn"></a>

```java
public java.lang.String getMasterUserArn();
```

- *Type:* java.lang.String

---

##### `masterUserName`<sup>Required</sup> <a name="masterUserName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserName"></a>

```java
public java.lang.String getMasterUserName();
```

- *Type:* java.lang.String

---

##### `masterUserPassword`<sup>Required</sup> <a name="masterUserPassword" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPassword"></a>

```java
public java.lang.String getMasterUserPassword();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a>

---


### OpensearchserviceDomainAdvancedSecurityOptionsOutputReference <a name="OpensearchserviceDomainAdvancedSecurityOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference;

new OpensearchserviceDomainAdvancedSecurityOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putIamFederationOptions">putIamFederationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putJwtOptions">putJwtOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions">putMasterUserOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putSamlOptions">putSamlOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetAnonymousAuthEnabled">resetAnonymousAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetIamFederationOptions">resetIamFederationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetInternalUserDatabaseEnabled">resetInternalUserDatabaseEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetJwtOptions">resetJwtOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetMasterUserOptions">resetMasterUserOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetSamlOptions">resetSamlOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIamFederationOptions` <a name="putIamFederationOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putIamFederationOptions"></a>

```java
public void putIamFederationOptions(OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putIamFederationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a>

---

##### `putJwtOptions` <a name="putJwtOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putJwtOptions"></a>

```java
public void putJwtOptions(OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putJwtOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a>

---

##### `putMasterUserOptions` <a name="putMasterUserOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions"></a>

```java
public void putMasterUserOptions(OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a>

---

##### `putSamlOptions` <a name="putSamlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putSamlOptions"></a>

```java
public void putSamlOptions(OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putSamlOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a>

---

##### `resetAnonymousAuthEnabled` <a name="resetAnonymousAuthEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetAnonymousAuthEnabled"></a>

```java
public void resetAnonymousAuthEnabled()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetIamFederationOptions` <a name="resetIamFederationOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetIamFederationOptions"></a>

```java
public void resetIamFederationOptions()
```

##### `resetInternalUserDatabaseEnabled` <a name="resetInternalUserDatabaseEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetInternalUserDatabaseEnabled"></a>

```java
public void resetInternalUserDatabaseEnabled()
```

##### `resetJwtOptions` <a name="resetJwtOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetJwtOptions"></a>

```java
public void resetJwtOptions()
```

##### `resetMasterUserOptions` <a name="resetMasterUserOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetMasterUserOptions"></a>

```java
public void resetMasterUserOptions()
```

##### `resetSamlOptions` <a name="resetSamlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetSamlOptions"></a>

```java
public void resetSamlOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthDisableDate">anonymousAuthDisableDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.iamFederationOptions">iamFederationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.jwtOptions">jwtOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptions">masterUserOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.samlOptions">samlOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabledInput">anonymousAuthEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.iamFederationOptionsInput">iamFederationOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabledInput">internalUserDatabaseEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.jwtOptionsInput">jwtOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptionsInput">masterUserOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.samlOptionsInput">samlOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabled">anonymousAuthEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled">internalUserDatabaseEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions">OpensearchserviceDomainAdvancedSecurityOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `anonymousAuthDisableDate`<sup>Required</sup> <a name="anonymousAuthDisableDate" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthDisableDate"></a>

```java
public java.lang.String getAnonymousAuthDisableDate();
```

- *Type:* java.lang.String

---

##### `iamFederationOptions`<sup>Required</sup> <a name="iamFederationOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.iamFederationOptions"></a>

```java
public OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference getIamFederationOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference</a>

---

##### `jwtOptions`<sup>Required</sup> <a name="jwtOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.jwtOptions"></a>

```java
public OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference getJwtOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference</a>

---

##### `masterUserOptions`<sup>Required</sup> <a name="masterUserOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptions"></a>

```java
public OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference getMasterUserOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference</a>

---

##### `samlOptions`<sup>Required</sup> <a name="samlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.samlOptions"></a>

```java
public OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference getSamlOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference</a>

---

##### `anonymousAuthEnabledInput`<sup>Optional</sup> <a name="anonymousAuthEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAnonymousAuthEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `iamFederationOptionsInput`<sup>Optional</sup> <a name="iamFederationOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.iamFederationOptionsInput"></a>

```java
public IResolvable|OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions getIamFederationOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a>

---

##### `internalUserDatabaseEnabledInput`<sup>Optional</sup> <a name="internalUserDatabaseEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getInternalUserDatabaseEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `jwtOptionsInput`<sup>Optional</sup> <a name="jwtOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.jwtOptionsInput"></a>

```java
public IResolvable|OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions getJwtOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a>

---

##### `masterUserOptionsInput`<sup>Optional</sup> <a name="masterUserOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptionsInput"></a>

```java
public IResolvable|OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions getMasterUserOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a>

---

##### `samlOptionsInput`<sup>Optional</sup> <a name="samlOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.samlOptionsInput"></a>

```java
public IResolvable|OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions getSamlOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a>

---

##### `anonymousAuthEnabled`<sup>Required</sup> <a name="anonymousAuthEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAnonymousAuthEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalUserDatabaseEnabled`<sup>Required</sup> <a name="internalUserDatabaseEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled"></a>

```java
public java.lang.Boolean|IResolvable getInternalUserDatabaseEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainAdvancedSecurityOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions">OpensearchserviceDomainAdvancedSecurityOptions</a>

---


### OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference <a name="OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference;

new OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resetEntityId">resetEntityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resetMetadataContent">resetMetadataContent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEntityId` <a name="resetEntityId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resetEntityId"></a>

```java
public void resetEntityId()
```

##### `resetMetadataContent` <a name="resetMetadataContent" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resetMetadataContent"></a>

```java
public void resetMetadataContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.entityIdInput">entityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.metadataContentInput">metadataContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.entityId">entityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.metadataContent">metadataContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.entityIdInput"></a>

```java
public java.lang.String getEntityIdInput();
```

- *Type:* java.lang.String

---

##### `metadataContentInput`<sup>Optional</sup> <a name="metadataContentInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.metadataContentInput"></a>

```java
public java.lang.String getMetadataContentInput();
```

- *Type:* java.lang.String

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

---

##### `metadataContent`<sup>Required</sup> <a name="metadataContent" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.metadataContent"></a>

```java
public java.lang.String getMetadataContent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a>

---


### OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference <a name="OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference;

new OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.putIdp">putIdp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetIdp">resetIdp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetMasterBackendRole">resetMasterBackendRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetMasterUserName">resetMasterUserName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetRolesKey">resetRolesKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetSessionTimeoutMinutes">resetSessionTimeoutMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetSubjectKey">resetSubjectKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdp` <a name="putIdp" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.putIdp"></a>

```java
public void putIdp(OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.putIdp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetIdp` <a name="resetIdp" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetIdp"></a>

```java
public void resetIdp()
```

##### `resetMasterBackendRole` <a name="resetMasterBackendRole" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetMasterBackendRole"></a>

```java
public void resetMasterBackendRole()
```

##### `resetMasterUserName` <a name="resetMasterUserName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetMasterUserName"></a>

```java
public void resetMasterUserName()
```

##### `resetRolesKey` <a name="resetRolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetRolesKey"></a>

```java
public void resetRolesKey()
```

##### `resetSessionTimeoutMinutes` <a name="resetSessionTimeoutMinutes" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetSessionTimeoutMinutes"></a>

```java
public void resetSessionTimeoutMinutes()
```

##### `resetSubjectKey` <a name="resetSubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetSubjectKey"></a>

```java
public void resetSubjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.idp">idp</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.idpInput">idpInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterBackendRoleInput">masterBackendRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterUserNameInput">masterUserNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.rolesKeyInput">rolesKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutesInput">sessionTimeoutMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.subjectKeyInput">subjectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterBackendRole">masterBackendRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterUserName">masterUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.rolesKey">rolesKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutes">sessionTimeoutMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.subjectKey">subjectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idp`<sup>Required</sup> <a name="idp" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.idp"></a>

```java
public OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference getIdp();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idpInput`<sup>Optional</sup> <a name="idpInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.idpInput"></a>

```java
public IResolvable|OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp getIdpInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a>

---

##### `masterBackendRoleInput`<sup>Optional</sup> <a name="masterBackendRoleInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterBackendRoleInput"></a>

```java
public java.lang.String getMasterBackendRoleInput();
```

- *Type:* java.lang.String

---

##### `masterUserNameInput`<sup>Optional</sup> <a name="masterUserNameInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterUserNameInput"></a>

```java
public java.lang.String getMasterUserNameInput();
```

- *Type:* java.lang.String

---

##### `rolesKeyInput`<sup>Optional</sup> <a name="rolesKeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.rolesKeyInput"></a>

```java
public java.lang.String getRolesKeyInput();
```

- *Type:* java.lang.String

---

##### `sessionTimeoutMinutesInput`<sup>Optional</sup> <a name="sessionTimeoutMinutesInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutesInput"></a>

```java
public java.lang.Number getSessionTimeoutMinutesInput();
```

- *Type:* java.lang.Number

---

##### `subjectKeyInput`<sup>Optional</sup> <a name="subjectKeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.subjectKeyInput"></a>

```java
public java.lang.String getSubjectKeyInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `masterBackendRole`<sup>Required</sup> <a name="masterBackendRole" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterBackendRole"></a>

```java
public java.lang.String getMasterBackendRole();
```

- *Type:* java.lang.String

---

##### `masterUserName`<sup>Required</sup> <a name="masterUserName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterUserName"></a>

```java
public java.lang.String getMasterUserName();
```

- *Type:* java.lang.String

---

##### `rolesKey`<sup>Required</sup> <a name="rolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.rolesKey"></a>

```java
public java.lang.String getRolesKey();
```

- *Type:* java.lang.String

---

##### `sessionTimeoutMinutes`<sup>Required</sup> <a name="sessionTimeoutMinutes" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutes"></a>

```java
public java.lang.Number getSessionTimeoutMinutes();
```

- *Type:* java.lang.Number

---

##### `subjectKey`<sup>Required</sup> <a name="subjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.subjectKey"></a>

```java
public java.lang.String getSubjectKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a>

---


### OpensearchserviceDomainAimlOptionsOutputReference <a name="OpensearchserviceDomainAimlOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainAimlOptionsOutputReference;

new OpensearchserviceDomainAimlOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.putS3VectorsEngine">putS3VectorsEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.putServerlessVectorAcceleration">putServerlessVectorAcceleration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resetS3VectorsEngine">resetS3VectorsEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resetServerlessVectorAcceleration">resetServerlessVectorAcceleration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3VectorsEngine` <a name="putS3VectorsEngine" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.putS3VectorsEngine"></a>

```java
public void putS3VectorsEngine(OpensearchserviceDomainAimlOptionsS3VectorsEngine value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.putS3VectorsEngine.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine">OpensearchserviceDomainAimlOptionsS3VectorsEngine</a>

---

##### `putServerlessVectorAcceleration` <a name="putServerlessVectorAcceleration" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.putServerlessVectorAcceleration"></a>

```java
public void putServerlessVectorAcceleration(OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.putServerlessVectorAcceleration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a>

---

##### `resetS3VectorsEngine` <a name="resetS3VectorsEngine" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resetS3VectorsEngine"></a>

```java
public void resetS3VectorsEngine()
```

##### `resetServerlessVectorAcceleration` <a name="resetServerlessVectorAcceleration" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resetServerlessVectorAcceleration"></a>

```java
public void resetServerlessVectorAcceleration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.s3VectorsEngine">s3VectorsEngine</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference">OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.serverlessVectorAcceleration">serverlessVectorAcceleration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference">OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.s3VectorsEngineInput">s3VectorsEngineInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine">OpensearchserviceDomainAimlOptionsS3VectorsEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.serverlessVectorAccelerationInput">serverlessVectorAccelerationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions">OpensearchserviceDomainAimlOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3VectorsEngine`<sup>Required</sup> <a name="s3VectorsEngine" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.s3VectorsEngine"></a>

```java
public OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference getS3VectorsEngine();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference">OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference</a>

---

##### `serverlessVectorAcceleration`<sup>Required</sup> <a name="serverlessVectorAcceleration" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.serverlessVectorAcceleration"></a>

```java
public OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference getServerlessVectorAcceleration();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference">OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference</a>

---

##### `s3VectorsEngineInput`<sup>Optional</sup> <a name="s3VectorsEngineInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.s3VectorsEngineInput"></a>

```java
public IResolvable|OpensearchserviceDomainAimlOptionsS3VectorsEngine getS3VectorsEngineInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine">OpensearchserviceDomainAimlOptionsS3VectorsEngine</a>

---

##### `serverlessVectorAccelerationInput`<sup>Optional</sup> <a name="serverlessVectorAccelerationInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.serverlessVectorAccelerationInput"></a>

```java
public IResolvable|OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration getServerlessVectorAccelerationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainAimlOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions">OpensearchserviceDomainAimlOptions</a>

---


### OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference <a name="OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference;

new OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine">OpensearchserviceDomainAimlOptionsS3VectorsEngine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainAimlOptionsS3VectorsEngine getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine">OpensearchserviceDomainAimlOptionsS3VectorsEngine</a>

---


### OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference <a name="OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference;

new OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a>

---


### OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference <a name="OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference;

new OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions">OpensearchserviceDomainAutomatedSnapshotPauseOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainAutomatedSnapshotPauseOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions">OpensearchserviceDomainAutomatedSnapshotPauseOptions</a>

---


### OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference <a name="OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference;

new OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions">OpensearchserviceDomainClusterConfigColdStorageOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainClusterConfigColdStorageOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions">OpensearchserviceDomainClusterConfigColdStorageOptions</a>

---


### OpensearchserviceDomainClusterConfigNodeOptionsList <a name="OpensearchserviceDomainClusterConfigNodeOptionsList" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainClusterConfigNodeOptionsList;

new OpensearchserviceDomainClusterConfigNodeOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.get"></a>

```java
public OpensearchserviceDomainClusterConfigNodeOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OpensearchserviceDomainClusterConfigNodeOptions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a>>

---


### OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference <a name="OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference;

new OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetCount"></a>

```java
public void resetCount()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig</a>

---


### OpensearchserviceDomainClusterConfigNodeOptionsOutputReference <a name="OpensearchserviceDomainClusterConfigNodeOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference;

new OpensearchserviceDomainClusterConfigNodeOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.putNodeConfig">putNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resetNodeConfig">resetNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resetNodeType">resetNodeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodeConfig` <a name="putNodeConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.putNodeConfig"></a>

```java
public void putNodeConfig(OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig</a>

---

##### `resetNodeConfig` <a name="resetNodeConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resetNodeConfig"></a>

```java
public void resetNodeConfig()
```

##### `resetNodeType` <a name="resetNodeType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resetNodeType"></a>

```java
public void resetNodeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeConfigInput">nodeConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeTypeInput">nodeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeConfig"></a>

```java
public OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference getNodeConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference</a>

---

##### `nodeConfigInput`<sup>Optional</sup> <a name="nodeConfigInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeConfigInput"></a>

```java
public IResolvable|OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig getNodeConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig</a>

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeTypeInput"></a>

```java
public java.lang.String getNodeTypeInput();
```

- *Type:* java.lang.String

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainClusterConfigNodeOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a>

---


### OpensearchserviceDomainClusterConfigOutputReference <a name="OpensearchserviceDomainClusterConfigOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainClusterConfigOutputReference;

new OpensearchserviceDomainClusterConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putColdStorageOptions">putColdStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putNodeOptions">putNodeOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putZoneAwarenessConfig">putZoneAwarenessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetColdStorageOptions">resetColdStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetDedicatedMasterCount">resetDedicatedMasterCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetDedicatedMasterEnabled">resetDedicatedMasterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetDedicatedMasterType">resetDedicatedMasterType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetMultiAzWithStandbyEnabled">resetMultiAzWithStandbyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetNodeOptions">resetNodeOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetWarmCount">resetWarmCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetWarmEnabled">resetWarmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetWarmType">resetWarmType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetZoneAwarenessConfig">resetZoneAwarenessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetZoneAwarenessEnabled">resetZoneAwarenessEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColdStorageOptions` <a name="putColdStorageOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putColdStorageOptions"></a>

```java
public void putColdStorageOptions(OpensearchserviceDomainClusterConfigColdStorageOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putColdStorageOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions">OpensearchserviceDomainClusterConfigColdStorageOptions</a>

---

##### `putNodeOptions` <a name="putNodeOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putNodeOptions"></a>

```java
public void putNodeOptions(IResolvable|java.util.List<OpensearchserviceDomainClusterConfigNodeOptions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putNodeOptions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a>>

---

##### `putZoneAwarenessConfig` <a name="putZoneAwarenessConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putZoneAwarenessConfig"></a>

```java
public void putZoneAwarenessConfig(OpensearchserviceDomainClusterConfigZoneAwarenessConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putZoneAwarenessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig">OpensearchserviceDomainClusterConfigZoneAwarenessConfig</a>

---

##### `resetColdStorageOptions` <a name="resetColdStorageOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetColdStorageOptions"></a>

```java
public void resetColdStorageOptions()
```

##### `resetDedicatedMasterCount` <a name="resetDedicatedMasterCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetDedicatedMasterCount"></a>

```java
public void resetDedicatedMasterCount()
```

##### `resetDedicatedMasterEnabled` <a name="resetDedicatedMasterEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetDedicatedMasterEnabled"></a>

```java
public void resetDedicatedMasterEnabled()
```

##### `resetDedicatedMasterType` <a name="resetDedicatedMasterType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetDedicatedMasterType"></a>

```java
public void resetDedicatedMasterType()
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetInstanceCount"></a>

```java
public void resetInstanceCount()
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetMultiAzWithStandbyEnabled` <a name="resetMultiAzWithStandbyEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetMultiAzWithStandbyEnabled"></a>

```java
public void resetMultiAzWithStandbyEnabled()
```

##### `resetNodeOptions` <a name="resetNodeOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetNodeOptions"></a>

```java
public void resetNodeOptions()
```

##### `resetWarmCount` <a name="resetWarmCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetWarmCount"></a>

```java
public void resetWarmCount()
```

##### `resetWarmEnabled` <a name="resetWarmEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetWarmEnabled"></a>

```java
public void resetWarmEnabled()
```

##### `resetWarmType` <a name="resetWarmType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetWarmType"></a>

```java
public void resetWarmType()
```

##### `resetZoneAwarenessConfig` <a name="resetZoneAwarenessConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetZoneAwarenessConfig"></a>

```java
public void resetZoneAwarenessConfig()
```

##### `resetZoneAwarenessEnabled` <a name="resetZoneAwarenessEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetZoneAwarenessEnabled"></a>

```java
public void resetZoneAwarenessEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.coldStorageOptions">coldStorageOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference">OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.nodeOptions">nodeOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList">OpensearchserviceDomainClusterConfigNodeOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessConfig">zoneAwarenessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference">OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.coldStorageOptionsInput">coldStorageOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions">OpensearchserviceDomainClusterConfigColdStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterCountInput">dedicatedMasterCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterEnabledInput">dedicatedMasterEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterTypeInput">dedicatedMasterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.multiAzWithStandbyEnabledInput">multiAzWithStandbyEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.nodeOptionsInput">nodeOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmCountInput">warmCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmEnabledInput">warmEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmTypeInput">warmTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessConfigInput">zoneAwarenessConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig">OpensearchserviceDomainClusterConfigZoneAwarenessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessEnabledInput">zoneAwarenessEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterCount">dedicatedMasterCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterEnabled">dedicatedMasterEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterType">dedicatedMasterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.multiAzWithStandbyEnabled">multiAzWithStandbyEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmCount">warmCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmEnabled">warmEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmType">warmType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessEnabled">zoneAwarenessEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig">OpensearchserviceDomainClusterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coldStorageOptions`<sup>Required</sup> <a name="coldStorageOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.coldStorageOptions"></a>

```java
public OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference getColdStorageOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference">OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference</a>

---

##### `nodeOptions`<sup>Required</sup> <a name="nodeOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.nodeOptions"></a>

```java
public OpensearchserviceDomainClusterConfigNodeOptionsList getNodeOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList">OpensearchserviceDomainClusterConfigNodeOptionsList</a>

---

##### `zoneAwarenessConfig`<sup>Required</sup> <a name="zoneAwarenessConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessConfig"></a>

```java
public OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference getZoneAwarenessConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference">OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference</a>

---

##### `coldStorageOptionsInput`<sup>Optional</sup> <a name="coldStorageOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.coldStorageOptionsInput"></a>

```java
public IResolvable|OpensearchserviceDomainClusterConfigColdStorageOptions getColdStorageOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions">OpensearchserviceDomainClusterConfigColdStorageOptions</a>

---

##### `dedicatedMasterCountInput`<sup>Optional</sup> <a name="dedicatedMasterCountInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterCountInput"></a>

```java
public java.lang.Number getDedicatedMasterCountInput();
```

- *Type:* java.lang.Number

---

##### `dedicatedMasterEnabledInput`<sup>Optional</sup> <a name="dedicatedMasterEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDedicatedMasterEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dedicatedMasterTypeInput`<sup>Optional</sup> <a name="dedicatedMasterTypeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterTypeInput"></a>

```java
public java.lang.String getDedicatedMasterTypeInput();
```

- *Type:* java.lang.String

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceCountInput"></a>

```java
public java.lang.Number getInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `multiAzWithStandbyEnabledInput`<sup>Optional</sup> <a name="multiAzWithStandbyEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.multiAzWithStandbyEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getMultiAzWithStandbyEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nodeOptionsInput`<sup>Optional</sup> <a name="nodeOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.nodeOptionsInput"></a>

```java
public IResolvable|java.util.List<OpensearchserviceDomainClusterConfigNodeOptions> getNodeOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a>>

---

##### `warmCountInput`<sup>Optional</sup> <a name="warmCountInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmCountInput"></a>

```java
public java.lang.Number getWarmCountInput();
```

- *Type:* java.lang.Number

---

##### `warmEnabledInput`<sup>Optional</sup> <a name="warmEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getWarmEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `warmTypeInput`<sup>Optional</sup> <a name="warmTypeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmTypeInput"></a>

```java
public java.lang.String getWarmTypeInput();
```

- *Type:* java.lang.String

---

##### `zoneAwarenessConfigInput`<sup>Optional</sup> <a name="zoneAwarenessConfigInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessConfigInput"></a>

```java
public IResolvable|OpensearchserviceDomainClusterConfigZoneAwarenessConfig getZoneAwarenessConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig">OpensearchserviceDomainClusterConfigZoneAwarenessConfig</a>

---

##### `zoneAwarenessEnabledInput`<sup>Optional</sup> <a name="zoneAwarenessEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getZoneAwarenessEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dedicatedMasterCount`<sup>Required</sup> <a name="dedicatedMasterCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterCount"></a>

```java
public java.lang.Number getDedicatedMasterCount();
```

- *Type:* java.lang.Number

---

##### `dedicatedMasterEnabled`<sup>Required</sup> <a name="dedicatedMasterEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDedicatedMasterEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dedicatedMasterType`<sup>Required</sup> <a name="dedicatedMasterType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterType"></a>

```java
public java.lang.String getDedicatedMasterType();
```

- *Type:* java.lang.String

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `multiAzWithStandbyEnabled`<sup>Required</sup> <a name="multiAzWithStandbyEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.multiAzWithStandbyEnabled"></a>

```java
public java.lang.Boolean|IResolvable getMultiAzWithStandbyEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `warmCount`<sup>Required</sup> <a name="warmCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmCount"></a>

```java
public java.lang.Number getWarmCount();
```

- *Type:* java.lang.Number

---

##### `warmEnabled`<sup>Required</sup> <a name="warmEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmEnabled"></a>

```java
public java.lang.Boolean|IResolvable getWarmEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `warmType`<sup>Required</sup> <a name="warmType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmType"></a>

```java
public java.lang.String getWarmType();
```

- *Type:* java.lang.String

---

##### `zoneAwarenessEnabled`<sup>Required</sup> <a name="zoneAwarenessEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessEnabled"></a>

```java
public java.lang.Boolean|IResolvable getZoneAwarenessEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainClusterConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig">OpensearchserviceDomainClusterConfig</a>

---


### OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference <a name="OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference;

new OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.resetAvailabilityZoneCount">resetAvailabilityZoneCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityZoneCount` <a name="resetAvailabilityZoneCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.resetAvailabilityZoneCount"></a>

```java
public void resetAvailabilityZoneCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCountInput">availabilityZoneCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount">availabilityZoneCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig">OpensearchserviceDomainClusterConfigZoneAwarenessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZoneCountInput`<sup>Optional</sup> <a name="availabilityZoneCountInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCountInput"></a>

```java
public java.lang.Number getAvailabilityZoneCountInput();
```

- *Type:* java.lang.Number

---

##### `availabilityZoneCount`<sup>Required</sup> <a name="availabilityZoneCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount"></a>

```java
public java.lang.Number getAvailabilityZoneCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainClusterConfigZoneAwarenessConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig">OpensearchserviceDomainClusterConfigZoneAwarenessConfig</a>

---


### OpensearchserviceDomainCognitoOptionsOutputReference <a name="OpensearchserviceDomainCognitoOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainCognitoOptionsOutputReference;

new OpensearchserviceDomainCognitoOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetIdentityPoolId">resetIdentityPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetUserPoolId">resetUserPoolId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetIdentityPoolId` <a name="resetIdentityPoolId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetIdentityPoolId"></a>

```java
public void resetIdentityPoolId()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetUserPoolId` <a name="resetUserPoolId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetUserPoolId"></a>

```java
public void resetUserPoolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.identityPoolIdInput">identityPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.userPoolIdInput">userPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.identityPoolId">identityPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions">OpensearchserviceDomainCognitoOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `identityPoolIdInput`<sup>Optional</sup> <a name="identityPoolIdInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.identityPoolIdInput"></a>

```java
public java.lang.String getIdentityPoolIdInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.userPoolIdInput"></a>

```java
public java.lang.String getUserPoolIdInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.identityPoolId"></a>

```java
public java.lang.String getIdentityPoolId();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainCognitoOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions">OpensearchserviceDomainCognitoOptions</a>

---


### OpensearchserviceDomainDeploymentStrategyOptionsOutputReference <a name="OpensearchserviceDomainDeploymentStrategyOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference;

new OpensearchserviceDomainDeploymentStrategyOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.resetDeploymentStrategy">resetDeploymentStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeploymentStrategy` <a name="resetDeploymentStrategy" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.resetDeploymentStrategy"></a>

```java
public void resetDeploymentStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.deploymentStrategyInput">deploymentStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.deploymentStrategy">deploymentStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions">OpensearchserviceDomainDeploymentStrategyOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deploymentStrategyInput`<sup>Optional</sup> <a name="deploymentStrategyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.deploymentStrategyInput"></a>

```java
public java.lang.String getDeploymentStrategyInput();
```

- *Type:* java.lang.String

---

##### `deploymentStrategy`<sup>Required</sup> <a name="deploymentStrategy" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.deploymentStrategy"></a>

```java
public java.lang.String getDeploymentStrategy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainDeploymentStrategyOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions">OpensearchserviceDomainDeploymentStrategyOptions</a>

---


### OpensearchserviceDomainDomainEndpointOptionsOutputReference <a name="OpensearchserviceDomainDomainEndpointOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainDomainEndpointOptionsOutputReference;

new OpensearchserviceDomainDomainEndpointOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetCustomEndpoint">resetCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetCustomEndpointCertificateArn">resetCustomEndpointCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetCustomEndpointEnabled">resetCustomEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetEnforceHttps">resetEnforceHttps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy">resetTlsSecurityPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomEndpoint` <a name="resetCustomEndpoint" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetCustomEndpoint"></a>

```java
public void resetCustomEndpoint()
```

##### `resetCustomEndpointCertificateArn` <a name="resetCustomEndpointCertificateArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetCustomEndpointCertificateArn"></a>

```java
public void resetCustomEndpointCertificateArn()
```

##### `resetCustomEndpointEnabled` <a name="resetCustomEndpointEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetCustomEndpointEnabled"></a>

```java
public void resetCustomEndpointEnabled()
```

##### `resetEnforceHttps` <a name="resetEnforceHttps" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetEnforceHttps"></a>

```java
public void resetEnforceHttps()
```

##### `resetTlsSecurityPolicy` <a name="resetTlsSecurityPolicy" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy"></a>

```java
public void resetTlsSecurityPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArnInput">customEndpointCertificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabledInput">customEndpointEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointInput">customEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.enforceHttpsInput">enforceHttpsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput">tlsSecurityPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpoint">customEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArn">customEndpointCertificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabled">customEndpointEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.enforceHttps">enforceHttps</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy">tlsSecurityPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions">OpensearchserviceDomainDomainEndpointOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customEndpointCertificateArnInput`<sup>Optional</sup> <a name="customEndpointCertificateArnInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArnInput"></a>

```java
public java.lang.String getCustomEndpointCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `customEndpointEnabledInput`<sup>Optional</sup> <a name="customEndpointEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getCustomEndpointEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `customEndpointInput`<sup>Optional</sup> <a name="customEndpointInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointInput"></a>

```java
public java.lang.String getCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `enforceHttpsInput`<sup>Optional</sup> <a name="enforceHttpsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.enforceHttpsInput"></a>

```java
public java.lang.Boolean|IResolvable getEnforceHttpsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tlsSecurityPolicyInput`<sup>Optional</sup> <a name="tlsSecurityPolicyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput"></a>

```java
public java.lang.String getTlsSecurityPolicyInput();
```

- *Type:* java.lang.String

---

##### `customEndpoint`<sup>Required</sup> <a name="customEndpoint" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpoint"></a>

```java
public java.lang.String getCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `customEndpointCertificateArn`<sup>Required</sup> <a name="customEndpointCertificateArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArn"></a>

```java
public java.lang.String getCustomEndpointCertificateArn();
```

- *Type:* java.lang.String

---

##### `customEndpointEnabled`<sup>Required</sup> <a name="customEndpointEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabled"></a>

```java
public java.lang.Boolean|IResolvable getCustomEndpointEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enforceHttps`<sup>Required</sup> <a name="enforceHttps" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.enforceHttps"></a>

```java
public java.lang.Boolean|IResolvable getEnforceHttps();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tlsSecurityPolicy`<sup>Required</sup> <a name="tlsSecurityPolicy" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy"></a>

```java
public java.lang.String getTlsSecurityPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainDomainEndpointOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions">OpensearchserviceDomainDomainEndpointOptions</a>

---


### OpensearchserviceDomainEbsOptionsOutputReference <a name="OpensearchserviceDomainEbsOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainEbsOptionsOutputReference;

new OpensearchserviceDomainEbsOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetEbsEnabled">resetEbsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEbsEnabled` <a name="resetEbsEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetEbsEnabled"></a>

```java
public void resetEbsEnabled()
```

##### `resetIops` <a name="resetIops" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetThroughput"></a>

```java
public void resetThroughput()
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetVolumeSize"></a>

```java
public void resetVolumeSize()
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetVolumeType"></a>

```java
public void resetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.ebsEnabledInput">ebsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.throughputInput">throughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.ebsEnabled">ebsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions">OpensearchserviceDomainEbsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ebsEnabledInput`<sup>Optional</sup> <a name="ebsEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.ebsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEbsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.throughputInput"></a>

```java
public java.lang.Number getThroughputInput();
```

- *Type:* java.lang.Number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeSizeInput"></a>

```java
public java.lang.Number getVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeTypeInput"></a>

```java
public java.lang.String getVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `ebsEnabled`<sup>Required</sup> <a name="ebsEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.ebsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEbsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainEbsOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions">OpensearchserviceDomainEbsOptions</a>

---


### OpensearchserviceDomainEncryptionAtRestOptionsOutputReference <a name="OpensearchserviceDomainEncryptionAtRestOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference;

new OpensearchserviceDomainEncryptionAtRestOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions">OpensearchserviceDomainEncryptionAtRestOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainEncryptionAtRestOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions">OpensearchserviceDomainEncryptionAtRestOptions</a>

---


### OpensearchserviceDomainIdentityCenterOptionsOutputReference <a name="OpensearchserviceDomainIdentityCenterOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainIdentityCenterOptionsOutputReference;

new OpensearchserviceDomainIdentityCenterOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetEnabledApiAccess">resetEnabledApiAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetIdentityCenterInstanceArn">resetIdentityCenterInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetRolesKey">resetRolesKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetSubjectKey">resetSubjectKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabledApiAccess` <a name="resetEnabledApiAccess" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetEnabledApiAccess"></a>

```java
public void resetEnabledApiAccess()
```

##### `resetIdentityCenterInstanceArn` <a name="resetIdentityCenterInstanceArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetIdentityCenterInstanceArn"></a>

```java
public void resetIdentityCenterInstanceArn()
```

##### `resetRolesKey` <a name="resetRolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetRolesKey"></a>

```java
public void resetRolesKey()
```

##### `resetSubjectKey` <a name="resetSubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetSubjectKey"></a>

```java
public void resetSubjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterApplicationArn">identityCenterApplicationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityStoreId">identityStoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.enabledApiAccessInput">enabledApiAccessInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterInstanceArnInput">identityCenterInstanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.rolesKeyInput">rolesKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.subjectKeyInput">subjectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.enabledApiAccess">enabledApiAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterInstanceArn">identityCenterInstanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.rolesKey">rolesKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.subjectKey">subjectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions">OpensearchserviceDomainIdentityCenterOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityCenterApplicationArn`<sup>Required</sup> <a name="identityCenterApplicationArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterApplicationArn"></a>

```java
public java.lang.String getIdentityCenterApplicationArn();
```

- *Type:* java.lang.String

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityStoreId"></a>

```java
public java.lang.String getIdentityStoreId();
```

- *Type:* java.lang.String

---

##### `enabledApiAccessInput`<sup>Optional</sup> <a name="enabledApiAccessInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.enabledApiAccessInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledApiAccessInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `identityCenterInstanceArnInput`<sup>Optional</sup> <a name="identityCenterInstanceArnInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterInstanceArnInput"></a>

```java
public java.lang.String getIdentityCenterInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `rolesKeyInput`<sup>Optional</sup> <a name="rolesKeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.rolesKeyInput"></a>

```java
public java.lang.String getRolesKeyInput();
```

- *Type:* java.lang.String

---

##### `subjectKeyInput`<sup>Optional</sup> <a name="subjectKeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.subjectKeyInput"></a>

```java
public java.lang.String getSubjectKeyInput();
```

- *Type:* java.lang.String

---

##### `enabledApiAccess`<sup>Required</sup> <a name="enabledApiAccess" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.enabledApiAccess"></a>

```java
public java.lang.Boolean|IResolvable getEnabledApiAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `identityCenterInstanceArn`<sup>Required</sup> <a name="identityCenterInstanceArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterInstanceArn"></a>

```java
public java.lang.String getIdentityCenterInstanceArn();
```

- *Type:* java.lang.String

---

##### `rolesKey`<sup>Required</sup> <a name="rolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.rolesKey"></a>

```java
public java.lang.String getRolesKey();
```

- *Type:* java.lang.String

---

##### `subjectKey`<sup>Required</sup> <a name="subjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.subjectKey"></a>

```java
public java.lang.String getSubjectKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainIdentityCenterOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions">OpensearchserviceDomainIdentityCenterOptions</a>

---


### OpensearchserviceDomainLogPublishingOptionsMap <a name="OpensearchserviceDomainLogPublishingOptionsMap" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainLogPublishingOptionsMap;

new OpensearchserviceDomainLogPublishingOptionsMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.get"></a>

```java
public OpensearchserviceDomainLogPublishingOptionsOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.property.internalValue"></a>

```java
public IResolvable|java.util.Map<java.lang.String, OpensearchserviceDomainLogPublishingOptions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>>

---


### OpensearchserviceDomainLogPublishingOptionsOutputReference <a name="OpensearchserviceDomainLogPublishingOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainLogPublishingOptionsOutputReference;

new OpensearchserviceDomainLogPublishingOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resetCloudwatchLogsLogGroupArn">resetCloudwatchLogsLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudwatchLogsLogGroupArn` <a name="resetCloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resetCloudwatchLogsLogGroupArn"></a>

```java
public void resetCloudwatchLogsLogGroupArn()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.cloudwatchLogsLogGroupArnInput">cloudwatchLogsLogGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.cloudwatchLogsLogGroupArn">cloudwatchLogsLogGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogsLogGroupArnInput`<sup>Optional</sup> <a name="cloudwatchLogsLogGroupArnInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.cloudwatchLogsLogGroupArnInput"></a>

```java
public java.lang.String getCloudwatchLogsLogGroupArnInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cloudwatchLogsLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.cloudwatchLogsLogGroupArn"></a>

```java
public java.lang.String getCloudwatchLogsLogGroupArn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainLogPublishingOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>

---


### OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference <a name="OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference;

new OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions">OpensearchserviceDomainNodeToNodeEncryptionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainNodeToNodeEncryptionOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions">OpensearchserviceDomainNodeToNodeEncryptionOptions</a>

---


### OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference <a name="OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference;

new OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.putWindowStartTime">putWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resetWindowStartTime">resetWindowStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWindowStartTime` <a name="putWindowStartTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.putWindowStartTime"></a>

```java
public void putWindowStartTime(OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.putWindowStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a>

---

##### `resetWindowStartTime` <a name="resetWindowStartTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resetWindowStartTime"></a>

```java
public void resetWindowStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.windowStartTime">windowStartTime</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.windowStartTimeInput">windowStartTimeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `windowStartTime`<sup>Required</sup> <a name="windowStartTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.windowStartTime"></a>

```java
public OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference getWindowStartTime();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference</a>

---

##### `windowStartTimeInput`<sup>Optional</sup> <a name="windowStartTimeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.windowStartTimeInput"></a>

```java
public IResolvable|OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime getWindowStartTimeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a>

---


### OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference <a name="OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference;

new OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resetHours"></a>

```java
public void resetHours()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a>

---


### OpensearchserviceDomainOffPeakWindowOptionsOutputReference <a name="OpensearchserviceDomainOffPeakWindowOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference;

new OpensearchserviceDomainOffPeakWindowOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.putOffPeakWindow">putOffPeakWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resetOffPeakWindow">resetOffPeakWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOffPeakWindow` <a name="putOffPeakWindow" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.putOffPeakWindow"></a>

```java
public void putOffPeakWindow(OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.putOffPeakWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetOffPeakWindow` <a name="resetOffPeakWindow" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resetOffPeakWindow"></a>

```java
public void resetOffPeakWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.offPeakWindow">offPeakWindow</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.offPeakWindowInput">offPeakWindowInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions">OpensearchserviceDomainOffPeakWindowOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `offPeakWindow`<sup>Required</sup> <a name="offPeakWindow" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.offPeakWindow"></a>

```java
public OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference getOffPeakWindow();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `offPeakWindowInput`<sup>Optional</sup> <a name="offPeakWindowInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.offPeakWindowInput"></a>

```java
public IResolvable|OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow getOffPeakWindowInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainOffPeakWindowOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions">OpensearchserviceDomainOffPeakWindowOptions</a>

---


### OpensearchserviceDomainServiceSoftwareOptionsOutputReference <a name="OpensearchserviceDomainServiceSoftwareOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference;

new OpensearchserviceDomainServiceSoftwareOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.automatedUpdateDate">automatedUpdateDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.cancellable">cancellable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.currentVersion">currentVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.newVersion">newVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.optionalDeployment">optionalDeployment</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.updateAvailable">updateAvailable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.updateStatus">updateStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptions">OpensearchserviceDomainServiceSoftwareOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `automatedUpdateDate`<sup>Required</sup> <a name="automatedUpdateDate" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.automatedUpdateDate"></a>

```java
public java.lang.String getAutomatedUpdateDate();
```

- *Type:* java.lang.String

---

##### `cancellable`<sup>Required</sup> <a name="cancellable" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.cancellable"></a>

```java
public IResolvable getCancellable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.currentVersion"></a>

```java
public java.lang.String getCurrentVersion();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `newVersion`<sup>Required</sup> <a name="newVersion" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.newVersion"></a>

```java
public java.lang.String getNewVersion();
```

- *Type:* java.lang.String

---

##### `optionalDeployment`<sup>Required</sup> <a name="optionalDeployment" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.optionalDeployment"></a>

```java
public IResolvable getOptionalDeployment();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `updateAvailable`<sup>Required</sup> <a name="updateAvailable" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.updateAvailable"></a>

```java
public IResolvable getUpdateAvailable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `updateStatus`<sup>Required</sup> <a name="updateStatus" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.updateStatus"></a>

```java
public java.lang.String getUpdateStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.internalValue"></a>

```java
public OpensearchserviceDomainServiceSoftwareOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptions">OpensearchserviceDomainServiceSoftwareOptions</a>

---


### OpensearchserviceDomainSnapshotOptionsOutputReference <a name="OpensearchserviceDomainSnapshotOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainSnapshotOptionsOutputReference;

new OpensearchserviceDomainSnapshotOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.resetAutomatedSnapshotStartHour">resetAutomatedSnapshotStartHour</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutomatedSnapshotStartHour` <a name="resetAutomatedSnapshotStartHour" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.resetAutomatedSnapshotStartHour"></a>

```java
public void resetAutomatedSnapshotStartHour()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHourInput">automatedSnapshotStartHourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour">automatedSnapshotStartHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions">OpensearchserviceDomainSnapshotOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `automatedSnapshotStartHourInput`<sup>Optional</sup> <a name="automatedSnapshotStartHourInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHourInput"></a>

```java
public java.lang.Number getAutomatedSnapshotStartHourInput();
```

- *Type:* java.lang.Number

---

##### `automatedSnapshotStartHour`<sup>Required</sup> <a name="automatedSnapshotStartHour" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour"></a>

```java
public java.lang.Number getAutomatedSnapshotStartHour();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainSnapshotOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions">OpensearchserviceDomainSnapshotOptions</a>

---


### OpensearchserviceDomainSoftwareUpdateOptionsOutputReference <a name="OpensearchserviceDomainSoftwareUpdateOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference;

new OpensearchserviceDomainSoftwareUpdateOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resetAutoSoftwareUpdateEnabled">resetAutoSoftwareUpdateEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resetUseLatestServiceSoftwareForBlueGreen">resetUseLatestServiceSoftwareForBlueGreen</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoSoftwareUpdateEnabled` <a name="resetAutoSoftwareUpdateEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resetAutoSoftwareUpdateEnabled"></a>

```java
public void resetAutoSoftwareUpdateEnabled()
```

##### `resetUseLatestServiceSoftwareForBlueGreen` <a name="resetUseLatestServiceSoftwareForBlueGreen" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resetUseLatestServiceSoftwareForBlueGreen"></a>

```java
public void resetUseLatestServiceSoftwareForBlueGreen()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.autoSoftwareUpdateEnabledInput">autoSoftwareUpdateEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.useLatestServiceSoftwareForBlueGreenInput">useLatestServiceSoftwareForBlueGreenInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.autoSoftwareUpdateEnabled">autoSoftwareUpdateEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.useLatestServiceSoftwareForBlueGreen">useLatestServiceSoftwareForBlueGreen</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions">OpensearchserviceDomainSoftwareUpdateOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoSoftwareUpdateEnabledInput`<sup>Optional</sup> <a name="autoSoftwareUpdateEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.autoSoftwareUpdateEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoSoftwareUpdateEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useLatestServiceSoftwareForBlueGreenInput`<sup>Optional</sup> <a name="useLatestServiceSoftwareForBlueGreenInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.useLatestServiceSoftwareForBlueGreenInput"></a>

```java
public java.lang.Boolean|IResolvable getUseLatestServiceSoftwareForBlueGreenInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoSoftwareUpdateEnabled`<sup>Required</sup> <a name="autoSoftwareUpdateEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.autoSoftwareUpdateEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoSoftwareUpdateEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useLatestServiceSoftwareForBlueGreen`<sup>Required</sup> <a name="useLatestServiceSoftwareForBlueGreen" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.useLatestServiceSoftwareForBlueGreen"></a>

```java
public java.lang.Boolean|IResolvable getUseLatestServiceSoftwareForBlueGreen();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainSoftwareUpdateOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions">OpensearchserviceDomainSoftwareUpdateOptions</a>

---


### OpensearchserviceDomainTagsList <a name="OpensearchserviceDomainTagsList" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainTagsList;

new OpensearchserviceDomainTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.get"></a>

```java
public OpensearchserviceDomainTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OpensearchserviceDomainTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>>

---


### OpensearchserviceDomainTagsOutputReference <a name="OpensearchserviceDomainTagsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainTagsOutputReference;

new OpensearchserviceDomainTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>

---


### OpensearchserviceDomainVpcOptionsOutputReference <a name="OpensearchserviceDomainVpcOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_domain.OpensearchserviceDomainVpcOptionsOutputReference;

new OpensearchserviceDomainVpcOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resetEgressEnabled">resetEgressEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEgressEnabled` <a name="resetEgressEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resetEgressEnabled"></a>

```java
public void resetEgressEnabled()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.egressEnabledInput">egressEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.egressEnabled">egressEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions">OpensearchserviceDomainVpcOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `egressEnabledInput`<sup>Optional</sup> <a name="egressEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.egressEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEgressEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `egressEnabled`<sup>Required</sup> <a name="egressEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.egressEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEgressEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceDomainVpcOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions">OpensearchserviceDomainVpcOptions</a>

---



